export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fieldsets: [
    {
      name: 'footerMenuLinks',
      title: 'Custom Footer Menu Links',
      description:
        'This is the second section of links, in the column where the BBG Ventures Copyright information is located. Add a heading for the links, such as "Resources", and then any other links you would like to add below the heading.',
    },
    {
      name: 'menu',
      title: 'Menu',
    },
  ],
  fields: [
    {
      name: 'menuHeading',
      title: 'Heading',
      type: 'portableText',
      fieldset: 'menu',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'menuOverlayLinks',
      title: 'Custom Menu Overlay Links',
      description: 'This is the second section of links in the Menu Overlay.',
      type: 'array',
      of: [
        {
          type: 'buttonField',
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'socialMediaLinks',
      title: 'Social Media Links',
      description:
        'Add all the social media platforms you would like to link to in the Footer and the Menu.',
      type: 'array',
      of: [
        {
          type: 'buttonField',
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: 'Heading',
      name: 'customFooterMenuHeading',
      fieldset: 'footerMenuLinks',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Links',
      name: 'customFooterMenuLinks',
      fieldset: 'footerMenuLinks',
      type: 'array',
      of: [
        {
          type: 'buttonField',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Global Settings' };
    },
  },
};
