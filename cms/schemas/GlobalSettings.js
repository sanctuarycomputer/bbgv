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
    {
      name: 'cookieConsent',
      title: 'Cookie Consent Pop Up',
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
      description: 'This is an optional heading, for example: "Resources".',
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
    {
      name: 'cookieConsentText',
      title: 'Cookie Consent Text',
      type: 'string',
      fieldset: 'cookieConsent',
      validation: (Rule) => Rule.required(),
      description: 'This is the text displayed on the cookie consent pop up.',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Global Settings' };
    },
  },
};
