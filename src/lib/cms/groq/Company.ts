import FounderGroq from './Founder';
import ImageGroq from './Image';

export default `{
  'logo': logo${ImageGroq},
  description,
  name, 
  sector,
  fund,
  tag,
  careers,
  instagram,
  linkedIn,
  website,
  'founders': founders[]->${FounderGroq},
  'companyDetailPageReference': companyDetailPageReference->{
    slug
  },
}`;
