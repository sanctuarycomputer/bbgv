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
      title: 'Is Job Listing',
      name: 'isJobListing',
      type: 'boolean',
      description:
        'If this "team member" is a job listing, toggle this field. This will hide the placeholder image on mobile devices, and show the placeholder image on tablet and larger screens.',
    },
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
  initialValue: {
    isJobListing: false,
  },
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
