export default {
  title: 'Home Page',
  name: 'home',
  type: 'document',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'featuredFoundersCarouselSection',
      title: 'Featured Founders Carousel Section',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'foundersImpactSection',
      title: 'Founders Impact Section',
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
      type: 'homeHeroModule',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: 'Intro Text',
      name: 'featuredFoundersCarouselSectionHeading',
      type: 'textModule',
      fieldset: 'featuredFoundersCarouselSection',
    },
    {
      title: 'Carousel',
      name: 'featuredFoundersCarousel',
      type: 'featuredFoundersCarousel',
      fieldset: 'featuredFoundersCarouselSection',
    },
    {
      title: 'Why We Invest Section',
      name: 'whyWeInvest',
      type: 'textModule',
    },
    {
      title: 'Heading',
      name: 'foundersImpactSectionHeading',
      type: 'textModule',
      fieldset: 'foundersImpactSection',
    },
    {
      title: "Founder's Impact Slideshow",
      name: 'foundersImpactSlideshow',
      type: 'foundersImpactSlideshow',
      fieldset: 'foundersImpactSection',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: 'Contact Section',
      name: 'contact',
      type: 'textModule',
    },
    {
      title: 'Newsletter',
      name: 'newsletter',
      type: 'newsletterModule',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' };
    },
  },
};
