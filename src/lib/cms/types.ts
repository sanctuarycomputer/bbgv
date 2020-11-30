import * as t from 'io-ts';

export type Image = t.TypeOf<typeof Image>;
export const Image = t.type({
  id: t.string,
  src: t.string,
  alt: t.string,
  caption: t.string,
});

export type Button = t.TypeOf<typeof Button>;
export const Button = t.type({
  label: t.string,
  link: t.string,
});

export type Block = t.TypeOf<typeof Block>;
export const Block = t.type({
  _key: t.string,
  _type: t.string,
  markDefs: t.array(t.string),
  style: t.string,
  children: t.array(
    t.partial({ _key: t.string, _type: t.string, marks: t.array(t.string), text: t.string })
  ),
});

export type PortableTextLink = t.TypeOf<typeof PortableTextLink>;
export const PortableTextLink = t.type({
  _key: t.string,
  _type: t.string,
  mark: t.partial({
    _key: t.string,
    _type: t.string,
    href: t.string,
    blank: t.boolean,
  }),
  markKey: t.string,
  children: t.array(
    t.partial({ _key: t.string, _type: t.string, marks: t.array(t.string), text: t.string })
  ),
});

export type SeoSettings = t.TypeOf<typeof SeoSettings>;
export const SeoSettings = t.partial({
  title: t.string,
  description: t.string,
  image: Image,
});

export type Founder = t.TypeOf<typeof Founder>;
export const Founder = t.partial({
  _type: t.string,
  firstName: t.string,
  lastName: t.string,
  jobTitle: t.string,
  bio: t.array(Block),
  twitter: t.string,
  instagram: t.string,
  linkedIn: t.string,
  founderPortrait: Image,
  company: t.string,
  sector: t.string,
});

export type Company = t.TypeOf<typeof Company>;
export const Company = t.partial({
  _type: t.string,
  description: t.array(Block),
  website: Button,
  careersLink: Button,
  founders: t.array(Founder),
  tag: t.string,
  sector: t.string,
  logo: Image,
  name: t.string,
});

export type FooterMenu = t.TypeOf<typeof FooterMenu>;
export const FooterMenu = t.type({
  socialMediaLinks: t.array(Button),
  aboutLinks: t.array(Button),
  resourcesLinks: t.array(Button),
  whyWeInvestLinks: t.array(Button),
});

export type FoundersImpactSlide = t.TypeOf<typeof FoundersImpactSlide>;
export const FoundersImpactSlide = t.type({
  leftHeadline: t.array(Block),
  rightHeadline: t.array(Block),
  leftSubheading: t.string,
  rightSubheading: t.string,
  company: Company,
});

export type FoundersImpactSlideshowVariant = t.TypeOf<typeof FoundersImpactSlideshowVariant>;
export const FoundersImpactSlideshowVariant = t.string;

export type FoundersImpactSlideshow = t.TypeOf<typeof FoundersImpactSlideshow>;
export const FoundersImpactSlideshow = t.type({
  _type: t.string,
  slides: t.array(FoundersImpactSlide),
  variant: FoundersImpactSlideshowVariant,
});

export type HeroTextModule = t.TypeOf<typeof HeroTextModule>;
export const HeroTextModule = t.intersection([
  t.type({
    _type: t.string,
    title: t.string,
    heading: t.array(Block),
    introLine: t.string,
    introByline: t.array(Block),
  }),
  t.partial({
    briefParagraph: t.array(Block),
  }),
]);

export type ParagraphWithButton = t.TypeOf<typeof ParagraphWithButton>;
export const ParagraphWithButton = t.intersection([
  t.type({
    _type: t.string,
    paragraph: t.array(Block),
  }),
  t.partial({
    button: Button,
  }),
]);

export type ParagraphWithHeading = t.TypeOf<typeof ParagraphWithHeading>;
export const ParagraphWithHeading = t.type({
  _type: t.string,
  heading: t.string,
  paragraph: t.array(Block),
});

export type PressListItem = t.TypeOf<typeof PressListItem>;
export const PressListItem = t.type({
  source: t.string,
  heading: t.string,
  link: Button,
});

export type PressList = t.TypeOf<typeof PressList>;
export const PressList = t.intersection([
  t.type({
    _type: t.string,
    variant: t.string,
    items: t.array(PressListItem),
  }),
  t.partial({
    heading: t.string,
  }),
]);

export type TextModule = t.TypeOf<typeof TextModule>;
export const TextModule = t.intersection([
  t.type({
    _type: t.string,
    heading: t.array(Block),
  }),
  t.partial({
    subheading: t.string,
    briefParagraph: ParagraphWithButton,
  }),
]);

export type TextModuleWithParagraphs = t.TypeOf<typeof TextModuleWithParagraphs>;
export const TextModuleWithParagraphs = t.intersection([
  t.type({
    _type: t.string,
    variant: t.string,
    heading: t.array(Block),
  }),
  t.partial({
    subheading: t.string,
    text: t.array(Block),
  }),
]);

export type HomeHero = t.TypeOf<typeof HomeHero>;
export const HomeHero = t.type({
  _type: t.string,
  founders: t.array(Founder),
  headline: t.string,
});

export type ImageDimensions = t.TypeOf<typeof ImageDimensions>;
export const ImageDimensions = t.type({
  width: t.number,
  height: t.number,
});

export type ImageCrop = t.TypeOf<typeof ImageCrop>;
export const ImageCrop = t.type({
  bottom: t.union([t.number, t.undefined]),
  left: t.union([t.number, t.undefined]),
  top: t.union([t.number, t.undefined]),
  right: t.union([t.number, t.undefined]),
});

export type NewsletterModule = t.TypeOf<typeof NewsletterModule>;
export const NewsletterModule = t.type({
  _type: t.string,
  headline: t.array(Block),
  title: t.string,
  bgColor: t.string,
});

export type GlobalSettings = t.TypeOf<typeof GlobalSettings>;
export const GlobalSettings = t.type({
  footerMenu: FooterMenu,
});

export type HomePage = t.TypeOf<typeof HomePage>;
export const HomePage = t.type({
  seo: SeoSettings,
  hero: HomeHero,
  foundersImpactSlideshow: FoundersImpactSlideshow,
  featuredFoundersCarouselSectionHeading: TextModule,
  whyWeInvest: TextModule,
  foundersImpactSectionHeading: TextModule,
  contact: TextModule,
  newsletter: NewsletterModule,
});

export type AboutPage = t.TypeOf<typeof AboutPage>;
export const AboutPage = t.type({
  seo: SeoSettings,
  hero: HeroTextModule,
  teamHeading: TextModule,
  valuesSection: TextModuleWithParagraphs,
  pressHeading: TextModule,
  pressList: PressList,
  contact: TextModule,
});

export type WhyWeInvestPage = t.TypeOf<typeof WhyWeInvestPage>;
export const WhyWeInvestPage = t.type({
  seo: SeoSettings,
  hero: HeroTextModule,
  thesis: TextModuleWithParagraphs,
  investmentHeading: TextModuleWithParagraphs,
  investmentParagraphs: t.array(ParagraphWithHeading),
  apply: TextModule,
});
