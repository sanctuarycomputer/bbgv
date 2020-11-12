import FounderGroq from './Founder';

export default `{
  'logo': {
    'src': logo.asset->url,
    'caption': logo.caption,
    'alt': logo.alt
  },
  'founders': founders[]->${FounderGroq},
  ...
}`;
