import * as t from 'io-ts';

export type Image = t.TypeOf<typeof Image>;
export const Image = t.type({
  id: t.string,
  src: t.string,
  alt: t.string,
  caption: t.string,
});

export type ImageCaption = t.TypeOf<typeof ImageCaption>;
export const ImageCaption = t.intersection([
  t.type({
    id: t.string,
    type: t.string,
    src: t.string,
    alt: t.string,
  }),
  t.partial({
    caption: t.string,
  }),
]);

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

export type QuoteModule = t.TypeOf<typeof QuoteModule>;
export const QuoteModule = t.intersection([
  t.type({
    type: t.string,
    id: t.string,
    quote: t.array(Block),
  }),
  t.partial({
    source: t.string,
  }),
]);

export type VideoModule = t.TypeOf<typeof VideoModule>;
export const VideoModule = t.intersection([
  t.type({
    _type: t.string,
    vimeoId: t.string,
    coverImage: Image,
    founders: t.string,
    jobTitle: t.string,
    companyName: t.string,
  }),
  t.partial({
    caption: t.string,
  }),
]);

export type LineBreak = t.TypeOf<typeof LineBreak>;
export const LineBreak = t.type({
  type: t.string,
  id: t.string,
  variant: t.string,
});

export type TeamMember = t.TypeOf<typeof TeamMember>;
export const TeamMember = t.intersection([
  t.type({
    _type: t.string,
    firstName: t.string,
    lastName: t.string,
    jobTitle: t.string,
    image: Image,
  }),
  t.partial({
    bio: t.array(Block),
    twitter: t.string,
    instagram: t.string,
    linkedIn: t.string,
  }),
]);

export type Video = t.TypeOf<typeof Video>;
export const Video = t.intersection([
  t.type({
    _type: t.string,
    jobTitle: t.string,
    companyName: t.string,
    founders: t.string,
    vimeoId: t.string,
  }),
  t.partial({
    caption: t.string,
  }),
]);

export type CompanyDetailPageReference = t.TypeOf<typeof CompanyDetailPageReference>;
export const CompanyDetailPageReference = t.type({
  slug: t.string,
});

export type Founder = t.TypeOf<typeof Founder>;
export const Founder = t.intersection([
  t.type({
    _type: t.string,
    firstName: t.string,
    lastName: t.string,
    jobTitle: t.string,
    bio: t.array(Block),
    founderPortrait: Image,
    companyName: t.string,
    sector: t.string,
  }),
  t.partial({
    companyReference: t.intersection([
      t.type({
        _type: t.string,
        website: Button,
        logo: Image,
        fund: t.string,
        name: t.string,
        sector: t.string,
        slug: t.string,
      }),
      t.partial({
        description: t.array(Block),
        careers: Button,
        instagram: Button,
        linkedIn: Button,
        tag: t.string,
        companyDetailPageReference: CompanyDetailPageReference,
      }),
    ]),
    twitter: t.string,
    instagram: t.string,
    linkedIn: t.string,
  }),
]);

export type Company = t.TypeOf<typeof Company>;
export const Company = t.intersection([
  t.type({
    _type: t.string,
    website: Button,
    logo: Image,
    fund: t.string,
    name: t.string,
    sector: t.string,
    founders: t.array(Founder),
  }),
  t.partial({
    description: t.array(Block),
    careers: Button,
    instagram: Button,
    linkedIn: Button,
    tag: t.string,
    companyDetailPageReference: CompanyDetailPageReference,
  }),
]);

export type TeamMemberGrid = t.TypeOf<typeof TeamMemberGrid>;
export const TeamMemberGrid = t.intersection([
  t.type({
    teamMembers: t.array(TeamMember),
  }),
  t.partial({
    heading: t.string,
  }),
]);

export type FooterMenu = t.TypeOf<typeof FooterMenu>;
export const FooterMenu = t.type({
  secondSectionHeading: t.string,
  secondSectionLinks: t.array(Button),
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
export const ParagraphWithHeading = t.intersection([
  t.type({
    _type: t.string,
    paragraph: t.array(Block),
    heading: t.string,
  }),
  t.partial({
    button: Button,
  }),
]);

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

export type Fact = t.TypeOf<typeof Fact>;
export const Fact = t.intersection([
  t.type({
    _type: t.string,
    paragraphWithButton: ParagraphWithButton,
  }),
  t.partial({
    leftHeading: t.string,
    rightHeading: t.string,
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

export type InvestmentsListItem = t.TypeOf<typeof InvestmentsListItem>;
export const InvestmentsListItem = t.intersection([
  t.type({
    companyName: t.string,
    companyLogo: Image,
    founders: t.array(t.string),
    description: ParagraphWithButton,
  }),
  t.partial({
    companyTag: t.string,
  }),
]);

export type InvestmentsListModule = t.TypeOf<typeof InvestmentsListModule>;
export const InvestmentsListModule = t.type({
  _type: t.string,
  heading: t.string,
  items: t.array(InvestmentsListItem),
});

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

export type Sector = t.TypeOf<typeof Sector>;
export const Sector = t.intersection([
  t.type({
    name: t.string,
  }),
  t.partial({
    companies: t.array(Company),
  }),
]);

export type FeaturedFoundersCarouselSlide = t.TypeOf<typeof FeaturedFoundersCarouselSlide>;
export const FeaturedFoundersCarouselSlide = t.intersection([
  t.type({
    images: t.array(Image),
    founder: Founder,
    company: Company,
  }),
  t.partial({
    vimeoId: t.string,
  }),
]);

export type FeaturedFoundersCarousel = t.TypeOf<typeof FeaturedFoundersCarousel>;
export const FeaturedFoundersCarousel = t.type({
  _type: t.string,
  slides: t.array(FeaturedFoundersCarouselSlide),
});

export type PortfolioListingModule = t.TypeOf<typeof PortfolioListingModule>;
export const PortfolioListingModule = t.type({
  sectors: t.array(Sector),
});

export type NewsletterModule = t.TypeOf<typeof NewsletterModule>;
export const NewsletterModule = t.type({
  _type: t.string,
  headline: t.array(Block),
  title: t.string,
  bgColor: t.string,
});

export type Menu = t.TypeOf<typeof Menu>;
export const Menu = t.type({
  heading: t.array(Block),
  links: t.array(Button),
});

export type CompanyDetailLanding = t.TypeOf<typeof CompanyDetailLanding>;
export const CompanyDetailLanding = t.intersection([
  t.type({
    headline: t.array(Block),
    foundersText: t.string,
    company: Company,
  }),
  t.partial({
    founderPortrait: Image,
    productImage: Image,
  }),
]);

export type GlobalSettings = t.TypeOf<typeof GlobalSettings>;
export const GlobalSettings = t.type({
  socialMediaLinks: t.array(Button),
  footerMenu: FooterMenu,
  menu: Menu,
  cookieConsentText: t.string,
});

export type HomePage = t.TypeOf<typeof HomePage>;
export const HomePage = t.type({
  seo: SeoSettings,
  hero: HomeHero,
  foundersImpactSlideshow: FoundersImpactSlideshow,
  featuredFoundersCarouselSectionHeading: TextModule,
  featuredFoundersCarousel: FeaturedFoundersCarousel,
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
  teamMemberGrids: t.array(TeamMemberGrid),
  valuesSection: TextModuleWithParagraphs,
  pressHeading: TextModule,
  pressList: PressList,
  contact: TextModule,
});

export type WhyWeInvestPage = t.TypeOf<typeof WhyWeInvestPage>;
export const WhyWeInvestPage = t.type({
  seo: SeoSettings,
  hero: HeroTextModule,
  statistics: t.array(Fact),
  thesis: TextModuleWithParagraphs,
  investmentHeading: TextModuleWithParagraphs,
  investmentParagraphs: t.array(ParagraphWithHeading),
  apply: TextModule,
});

export type CompaniesPage = t.TypeOf<typeof CompaniesPage>;
export const CompaniesPage = t.type({
  seo: SeoSettings,
  hero: HeroTextModule,
  portfolioListing: PortfolioListingModule,
  investmentsList: InvestmentsListModule,
  contact: TextModule,
});

export type DefaultPageContent = t.TypeOf<typeof DefaultPageContent>;
export const DefaultPageContent = t.type({
  body: t.array(Block),
});

export type DefaultPage = t.TypeOf<typeof DefaultPage>;
export const DefaultPage = t.type({
  title: t.string,
  slug: t.string,
  content: DefaultPageContent,
  intro: TextModule,
  seo: SeoSettings,
});

export type CompanyDetailPageContent = t.TypeOf<typeof CompanyDetailPageContent>;
export const CompanyDetailPageContent = t.type({
  body: t.array(Block),
});

export type CompanyDetailPage = t.TypeOf<typeof CompanyDetailPage>;
export const CompanyDetailPage = t.type({
  title: t.string,
  slug: t.string,
  companyDetailLanding: CompanyDetailLanding,
  content: CompanyDetailPageContent,
  seo: SeoSettings,
  founders: t.array(Founder),
  pressList: PressList,
});
