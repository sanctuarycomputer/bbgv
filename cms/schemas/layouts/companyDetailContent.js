export default (options) => ({
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
      },
    },
    {
      title: 'Video',
      name: 'video',
      type: 'videoField',
    },
  ],
  ...options,
});
