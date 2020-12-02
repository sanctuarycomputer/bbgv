import FounderGroq from './Founder';

export default `{
  'logo': {
    'src': logo.asset->url,
    'caption': logo.caption,
    'alt': logo.alt
  },
  description,
  name, 
  sector,
  tag,
  careers,
  instagram,
  linkedIn,
  website,
  'founders': founders[]->${FounderGroq}
}`;
