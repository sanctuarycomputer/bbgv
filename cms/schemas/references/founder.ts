export default {
  title: 'Founder',
  name: 'founder',
  type: 'document',
  fieldsets: [
    {
      name: 'socialMediaLinks',
      title: 'Social Media Links',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'company',
      title: 'Company',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      title: 'Founder Portrait',
      name: 'founderPortrait',
      type: 'imageField',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'First Name',
      name: 'firstName',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Last Name',
      name: 'lastName',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'portableText',
    },
    {
      title: 'Job Title',
      name: 'jobTitle',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      fieldset: 'company',
      description:
        "This can be the status of a company. It will be displayed in the Current Portfolio listing, on the top left of a founder's portrait.",
    },
    {
      title: 'Brief Company Description',
      name: 'companyDescription',
      description:
        "This is a brief description that will show on the Companies page, when you hover over a Founder's portrait in the Current Portfolio listing.",
      type: 'portableText',
      fieldset: 'company',
    },
    {
      title: 'Sector',
      name: 'sector',
      type: 'string',
      fieldset: 'company',
    },
    {
      title: 'LinkedIn',
      name: 'linkedIn',
      type: 'object',
      fields: [
        {
          title: 'Link',
          name: 'link',
          type: 'url',
          validation: (Rule: any) =>
            Rule.uri({
              allowRelative: true,
            }),
        },
      ],
      fieldset: 'socialMediaLinks',
    },
    {
      title: 'Twitter',
      name: 'twitter',
      type: 'object',
      fields: [
        {
          title: 'Link',
          name: 'link',
          type: 'url',
          validation: (Rule: any) =>
            Rule.uri({
              allowRelative: true,
            }),
        },
      ],
      fieldset: 'socialMediaLinks',
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'object',
      fields: [
        {
          title: 'Link',
          name: 'link',
          type: 'url',
          validation: (Rule: any) =>
            Rule.uri({
              allowRelative: true,
            }),
        },
      ],
      fieldset: 'socialMediaLinks',
    },
    {
      title: 'Company Logo',
      name: 'companyLogo',
      type: 'imageField',
      fieldset: 'company',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
      fieldset: 'company',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      founderPortrait: 'founderPortrait',
    },
    prepare(selection) {
      const { firstName, lastName, founderPortrait } = selection;
      return {
        title: `${firstName || ''} ${lastName || ''}`,
        media: founderPortrait,
      };
    },
  },
};
