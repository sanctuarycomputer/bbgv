import ImageGroq from './Image';

export default `{
  companyName,
  'companyReference': companyReference->{
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
    'companyDetailPageReference': companyDetailPageReference->{
      slug
    }
  },
  'founderPortrait': {
    'src': founderPortrait.asset->url,
    'caption': founderPortrait.caption,
    'alt': founderPortrait.alt
  },
  'linkedIn': linkedIn.link,
  'instagram': instagram.link,
  'twitter': twitter.link,
  sector,
  bio,
  jobTitle,
  firstName,
  lastName,
}`;
