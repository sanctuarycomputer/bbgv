import CompanyGroq from './Company';

export default `{
  "_type": foundersImpactSlideshow._type,
  "slides": foundersImpactSlideshow.slides[]{
    "leftHeadline": leftHeadline,
    "rightHeadline": rightHeadline,
    "company": company->${CompanyGroq}
  },
}`;
