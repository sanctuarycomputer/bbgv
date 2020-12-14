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
import CompaniesPage from './pages/companies';
import DefaultPage from './pages/default';
import CompanyDetailPage from './pages/companyDetail';

/** Layouts */
import HomeHeroModule from './layouts/homeHeroModule';
import NewsletterModule from './layouts/newsletterModule';
import FoundersImpactSlideshow from './layouts/foundersImpactSlideshow';
import HeroTextModule from './layouts/heroTextModule';
import TextModule from './layouts/textModule';
import TextModuleWithParagraphs from './layouts/textModuleWithParagraphs';
import PressListModule from './layouts/pressListModule';
import StatisticsModule from './layouts/statisticsModule';
import InvestmentsList from './layouts/investmentsList';
import CompanyDetailLanding from './layouts/companyDetailLanding';
import FeaturedFoundersCarousel from './layouts/featuredFoundersCarousel';

/** References */
import Founder from './references/founder';
import Company from './references/company';
import TeamMember from './references/teamMember';

/* Fields */
import SeoSettings from './fields/seoSettings';
import ImageField from './fields/imageField';
import PortableText from './fields/portableText';
import ButtonField from './fields/buttonField';
import SlugField from './fields/slugField';
import ColorList from './fields/colorList';
import ParagraphWithButton from './fields/paragraphWithButton';
import ParagraphWithHeading from './fields/paragraphWithHeading';
import VideoField from './fields/videoField';
import Link from './fields/link';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /** Global */
    GlobalSettings,

    /** Pages */
    HomePage,
    AboutUsPage,
    WhyWeInvestPage,
    CompaniesPage,
    DefaultPage,
    CompanyDetailPage,

    /** Layouts */
    HomeHeroModule,
    NewsletterModule,
    FoundersImpactSlideshow,
    HeroTextModule,
    TextModule,
    TextModuleWithParagraphs,
    PressListModule,
    StatisticsModule,
    InvestmentsList,
    CompanyDetailLanding,
    FeaturedFoundersCarousel,

    /** References */
    Founder,
    Company,
    TeamMember,

    /* Fields */
    SeoSettings,
    ImageField,
    PortableText,
    ButtonField,
    SlugField,
    ColorList,
    ParagraphWithButton,
    ParagraphWithHeading,
    VideoField,
    Link,
  ]),
});
