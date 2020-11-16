export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fieldsets: [
    {
      name: 'footerMenu',
      title: 'Footer Menu',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: 'aboutLinks',
      title: 'About Us Links',
      description: 'This is the group of links under the "About Us" section in the Footer Menu.',
      type: 'array',
      of: [
        {
          type: 'buttonField',
        },
      ],
      fieldset: 'footerMenu',
    },
    {
      name: 'whyWeInvestLinks',
      title: 'Why We Invest Links',
      description:
        'This is the group of links under the "Why We Invest" section in the Footer Menu.',
      type: 'array',
      of: [
        {
          type: 'buttonField',
        },
      ],
      fieldset: 'footerMenu',
    },
    {
      name: 'resourcesLinks',
      title: 'Resources Links',
      description: 'This is the group of links under the "Resources" section in the Footer Menu.',
      type: 'array',
      of: [
        {
          type: 'buttonField',
        },
      ],
      fieldset: 'footerMenu',
    },
    {
      name: 'socialMediaLinks',
      title: 'Social Media Links',
      description: 'This is the group of links under the "Connect" section in the Footer Menu.',
      type: 'array',
      of: [
        {
          type: 'buttonField',
        },
      ],
      fieldset: 'footerMenu',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Global Settings' };
    },
  },
};
