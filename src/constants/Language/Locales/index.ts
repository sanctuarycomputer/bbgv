import { EN_US } from 'constants/LocaleCodes';
// Translation JSON files
import en from 'constants/Language/Locales/en-US.json';

interface Locales {
  [id: string]: object;
}
// Available Locales map
const locales: Locales = {};
locales[EN_US] = en;

export default locales;
