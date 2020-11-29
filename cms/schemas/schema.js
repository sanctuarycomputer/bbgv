// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

/** Global */
import GlobalSettings from './GlobalSettings';

/** Pages */
import HomePage from './pages/home';
import AboutUsPage from './pages/about';
import WhyWeInvestPage from './pages/whyWeInvest';
import CompanyDetailPage from './pages/companyDetail';

/** Layouts */
import HomeHeroModule from './layouts/homeHeroModule';
import NewsletterModule from './layouts/newsletterModule';
import FoundersImpactSlideshow from './layouts/foundersImpactSlideshow';
import HeroTextModule from './layouts/heroTextModule';
import TextModule from './layouts/textModule';
import TextModuleWithParagraphs from './layouts/textModuleWithParagraphs';
import CompanyDetailLanding from './layouts/companyDetailLanding';

/** References */
import Founder from './references/founder';
import Company from './references/company';

/* Fields */
import SeoSettings from './fields/seoSettings';
import ImageField from './fields/imageField';
import PortableText from './fields/portableText';
import ButtonField from './fields/buttonField';
import SlugField from './fields/slugField';
import ColorList from './fields/colorList';
import ParagraphWithButton from './fields/paragraphWithButton';
import ParagraphWithHeading from './fields/paragraphWithHeading';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /** Global */
    GlobalSettings,

    /** Pages */
    HomePage,
    AboutUsPage,
    WhyWeInvestPage,
    CompanyDetailPage,

    /** Layouts */
    HomeHeroModule,
    NewsletterModule,
    FoundersImpactSlideshow,
    HeroTextModule,
    TextModule,
    TextModuleWithParagraphs,
    CompanyDetailLanding,

    /** References */
    Founder,
    Company,

    /* Fields */
    SeoSettings,
    ImageField,
    PortableText,
    ButtonField,
    SlugField,
    ColorList,
    ParagraphWithButton,
    ParagraphWithHeading,
  ]),
});
