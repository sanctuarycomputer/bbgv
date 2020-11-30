export default {
  title: 'Team Member',
  name: 'teamMember',
  type: 'document',
  fieldsets: [
    {
      name: 'socialMediaLinks',
      title: 'Social Media Links',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'imageField',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'First Name',
      name: 'firstName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Last Name',
      name: 'lastName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Job Title',
      name: 'jobTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'portableText',
      validation: (Rule) => Rule.required(),
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
          validation: (Rule) =>
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
          validation: (Rule) =>
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
          validation: (Rule) =>
            Rule.uri({
              allowRelative: true,
            }),
        },
      ],
      fieldset: 'socialMediaLinks',
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      teamMemberImage: 'image',
    },
    prepare(selection) {
      const { firstName, lastName, teamMemberImage } = selection;
      return {
        title: `${firstName || ''} ${lastName || ''}`,
        media: teamMemberImage,
      };
    },
  },
};
