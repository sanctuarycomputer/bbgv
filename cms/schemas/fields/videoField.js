export default {
  title: 'Video',
  name: 'videoField',
  type: 'object',
  fields: [
    {
      title: 'Vimeo ID',
      name: 'vimeoId',
      description: 'Add the Vimeo Video ID here.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Video Cover Image',
      name: 'coverImage',
      description: 'This is a cover image that displays before the user plays a video.',
      type: 'imageField',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Founder or Founder(s) name(s)',
      name: 'founders',
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
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
  ],
};
