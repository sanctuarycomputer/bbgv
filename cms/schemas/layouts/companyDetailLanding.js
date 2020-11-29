export default {
  title: 'Company Detail Landing',
  name: 'companyDetailLanding',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'This appears next to the founder name.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'founderPortrait',
      title: 'Founder Portrait',
      type: 'imageField',
    },
    {
      name: 'companyImage',
      title: 'Product or Company Image',
      type: 'imageField',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'company' }],
      validation: (Rule) => Rule.required(),
      description: 'Connect this slide to a company.',
    },
  ],
};
