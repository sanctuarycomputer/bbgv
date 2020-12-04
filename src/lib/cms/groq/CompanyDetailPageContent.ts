import ImageGroq from './Image';

export default (fieldName: string) => `
  ${fieldName}[] {
    "id": _key,
    _type,
    "src": asset->url,
    "alt": asset.alt,
    coverImage${ImageGroq},
    ...
  }
`;
