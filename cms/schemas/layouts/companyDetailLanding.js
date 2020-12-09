export default {
  title: 'Company Detail Landing',
  name: 'companyDetailLanding',
  type: 'object',
  fieldsets: [
    {
      name: 'copy',
      title: 'Copy',
    },
    {
      name: 'images',
      title: 'Images',
    },
  ],
  fields: [
    {
      title: 'Company',
      name: 'company',
      type: 'reference',
      to: [{ type: 'company' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'portableText',
      fieldset: 'copy',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'founderPortrait',
      title: 'Founder Portrait',
      description:
        'If a Product/Company image is not uploaded as well, the Founder Portrait image will span the full width of the right column.',
      type: 'imageField',
      fieldset: 'images',
    },
    {
      name: 'productImage',
      title: 'Product/Company Image',
      description:
        'If a Founder Portrait is not uploaded as well, the Product/Company image will span the full width of the right column.',
      type: 'imageField',
      fieldset: 'images',
    },
  ],
};
