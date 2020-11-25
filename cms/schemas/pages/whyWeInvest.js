export default {
  title: 'Why We Invest Page',
  name: 'whyWeInvest',
  type: 'document',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'statisticsSection',
      title: 'Statistics',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'thesisSection',
      title: 'Thesis',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'investmentSection',
      title: 'Investment Guidelines',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'applySection',
      title: 'Apply',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: 'seoSettings',
      title: 'SEO Settings',
      type: 'seoSettings',
      fieldset: 'seo',
    },
    {
      title: 'Hero',
      name: 'hero',
      type: 'heroTextModule',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: 'Copy',
      name: 'thesis',
      type: 'textModuleWithParagraphs',
      fieldset: 'thesisSection',
    },
    {
      title: 'Intro Text',
      name: 'investmentHeading',
      type: 'textModuleWithParagraphs',
      fieldset: 'investmentSection',
    },
    {
      title: 'Additional Paragraphs',
      name: 'investmentParagraphs',
      description: 'Add optional paragraphs that will appear in two columns below the intro text.',
      type: 'array',
      of: [
        {
          type: 'paragraphWithHeading',
        },
      ],
      fieldset: 'investmentSection',
    },
    {
      title: 'Copy',
      name: 'apply',
      type: 'textModule',
      fieldset: 'applySection',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Why We Invest Page' };
    },
  },
};
