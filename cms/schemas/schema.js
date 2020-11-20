// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

/** Global */
import GlobalSettings from './GlobalSettings';

/** Pages */
import HomePage from './pages/home';

/** Layouts */
import HomeHeroModule from './layouts/homeHeroModule';
import NewsletterModule from './layouts/newsletterModule';
import FoundersImpactSlideshow from './layouts/foundersImpactSlideshow';

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

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /** Global */
    GlobalSettings,

    /** Pages */
    HomePage,

    /** Layouts */
    HomeHeroModule,
    NewsletterModule,
    FoundersImpactSlideshow,

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
  ]),
});
