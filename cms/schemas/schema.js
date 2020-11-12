// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

/** Global */
import GlobalSettings from './GlobalSettings';

/** Pages */
import HomePage from './pages/home';

/** Layouts */

/** References */

/* Fields */
import SeoSettings from './fields/seoSettings';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /** Global */
    GlobalSettings,

    /** Pages */
    HomePage,

    /** Layouts */

    /** References */

    /* Fields */
    SeoSettings,
  ]),
});
