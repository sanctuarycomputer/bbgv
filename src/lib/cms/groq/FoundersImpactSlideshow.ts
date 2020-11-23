import CompanyGroq from './Company';

export default `{
  "_type": foundersImpactSlideshow._type,
  "variant": foundersImpactSlideshow.variant,
  "slides": foundersImpactSlideshow.slides[]{
    "leftHeadline": leftHeadline,
    "rightHeadline": rightHeadline,
    "company": company->${CompanyGroq}
  },
}`;
