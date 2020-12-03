import ImageGroq from './Image';
import QuoteModuleGroq from './QuoteModule';

export default (fieldName: string) => `
  ${fieldName}[] {
    "id": _key,
    _type,
    "src": asset->url,
    "alt": asset.alt,
    "fullWidthImageCaption": fullWidthImageCaption${ImageGroq},
    "quoteModule": quoteModule${QuoteModuleGroq},
    ...
  }
`;
