export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Global Settings' };
    },
  },
};
