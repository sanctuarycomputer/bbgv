import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Block, PortableTextLink } from 'lib/cms/types';
import { Link } from 'components/base';
import Language from 'constants/Language';
import { PortableTextColors } from 'constants/Colors';

type Props = {
  blocks: Block[];
};

const colorComponents = Object.entries(PortableTextColors).reduce(
  (colorComponents: { [key: string]: React.FC }, [color, hex]) => {
    colorComponents[color] = (props: any) => {
      return <span style={{ color: hex as string }}>{props.children}</span>;
    };
    return colorComponents;
  },
  {}
);

const serializers = {
  marks: {
    ...colorComponents,
    link: (link: PortableTextLink) => {
      const { mark, children } = link;

      return (
        <Link
          to={mark.href}
          openInNewTab={mark.blank}
          ariaLabel={Language.t('Global.portableTextLink.ariaLabel', {
            label: children,
          })}
        >
          {children}
        </Link>
      );
    },
  },
};

const PortableText: React.FC<Props> = ({ blocks }) => (
  <BlockContent blocks={blocks} serializers={serializers} />
);

export default PortableText;
