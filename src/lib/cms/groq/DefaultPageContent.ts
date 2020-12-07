import ImageGroq from './Image';
import QuoteModuleGroq from './QuoteModule';

export default (fieldName: string) => `
  ${fieldName}[] {
    "id": _key,
    _type,
    "src": asset->url,
    "alt": asset.alt,
    paragraphWithHeadingAndButton,
    "fullWidthImageCaption": fullWidthImageCaption${ImageGroq},
    "halfWidthImageCaption": halfWidthImageCaption${ImageGroq},
    "quoteModule": quoteModule${QuoteModuleGroq},
    ...
  }
`;
