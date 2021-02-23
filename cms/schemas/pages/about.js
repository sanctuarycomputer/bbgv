export default {
  title: 'About Us Page',
  name: 'about',
  type: 'document',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'bbgvTeamSection',
      title: 'BBGV Team Section',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'optionalTeamSection',
      title: 'Optional Team Section',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'valuesSection',
      title: 'Values',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'pressSection',
      title: 'Press',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'contact',
      title: 'Contact',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: 'seoSettings',
      title: 'SEO Settings',
      type: 'seoSettings',
      fieldset: 'seo',
    },
    {
      title: 'Hero',
      name: 'hero',
      type: 'heroTextModule',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: 'Heading',
      name: 'teamHeading',
      type: 'textModule',
    },
    {
      title: 'BBGV Team',
      name: 'bbgvTeamMembers',
      type: 'array',
      description:
        'This module should be used for the BBGV Team. Add Team Members using the dropdown menu below.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
        },
      ],
      fieldset: 'bbgvTeamSection',
    },
    {
      title: 'Sections of Team Members',
      name: 'optionalTeamMembers',
      type: 'array',
      description:
        'This is an optional module can be used to add several groups of Team Members. Each section can have an optional heading, such as "Founders", or "Advisory Board".',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'teamMembers',
              title: 'Team Members',
              type: 'array',
              description:
                'Add Team Members in the dropdown menu below. You must first create a Team Member before you can add them to this module.',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'teamMember' }],
                },
              ],
            },
          ],
        },
      ],
      fieldset: 'optionalTeamSection',
    },
    {
      title: 'Copy',
      name: 'valuesSection',
      type: 'textModuleWithParagraphs',
      fieldset: 'valuesSection',
    },
    {
      title: 'Intro Text',
      name: 'pressHeading',
      type: 'textModule',
      fieldset: 'pressSection',
    },
    {
      title: 'Press List',
      name: 'pressList',
      type: 'pressListModule',
      fieldset: 'pressSection',
    },
    {
      title: 'Copy',
      name: 'contactSection',
      type: 'textModule',
      fieldset: 'contact',
    },
  ],
  preview: {
    prepare() {
      return { title: 'About Us Page' };
    },
  },
};
