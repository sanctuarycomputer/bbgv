import React from 'react';
import { PortableTextColors } from '../../constants';

const COLOR_ICON_RADIUS = '12px';

export default {
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                description:
                  "Internal links within the BBG Ventures website, must be preceded with '/' (e.g. '/about'). External links must be preceded with 'https' or 'http' (e.g. 'https://www.website.com').",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
        ],
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          ...Object.entries(PortableTextColors).map(([color, hex]) => ({
            title: `Color – ${color}`,
            value: color,
            blockEditor: {
              icon: () => (
                <div
                  style={{
                    backgroundColor: hex,
                    borderRadius: '50%',
                    width: COLOR_ICON_RADIUS,
                    height: COLOR_ICON_RADIUS,
                  }}
                />
              ),
              render: (props) => <span style={{ color: hex }}>{props.children}</span>,
            },
          })),
        ],
      },
    },
  ],
};
