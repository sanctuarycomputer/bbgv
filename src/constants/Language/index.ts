import Polyglot from 'node-polyglot';

import { EN_US } from 'constants/LocaleCodes';
import Locales from 'constants/Language/Locales';

// Translations default to english if no translation file is found.
const defaultLocale = EN_US;
const Language = new Polyglot(Locales[defaultLocale]);

/*
  Translations begin with english Locales
  and are extended/overwritten there after.
*/

Language.extend(Locales[defaultLocale]);

export default Language;
