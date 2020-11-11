export default {
  title: 'SEO Settings',
  name: 'seoSettings',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      description:
        "Defaults to the Page's title. This is the title of the page in search engine results, the browser tab preview, and social share card previews.",
    },
    {
      name: 'description',
      title: 'SEO Description',
      type: 'string',
      description:
        'This is the description of the page shown below the title in search engine results, the browser tab preview, and social share card previews.',
    },
    {
      name: 'image',
      title: 'SEO Image',
      type: 'image',
      description: 'This is the image shown of the page shown on social share card previews.',
    },
  ],
};
