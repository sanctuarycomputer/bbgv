import CompanyGroq from './Company';
import ImageGroq from './Image';

export default `{
  "_type": foundersImpactSlideshow._type,
  "variant": foundersImpactSlideshow.variant,
  "slides": foundersImpactSlideshow.slides[]{
    "leftHeadline": leftHeadline,
    "rightHeadline": rightHeadline,
    "leftSubheading": leftSubheading,
    "rightSubheading": rightSubheading,
    leftImage${ImageGroq},
    "company": company->${CompanyGroq}
  },
}`;
