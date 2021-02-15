import CompanyGroq from './Company';
import ImageGroq from './Image';

export default `{
  "_type": foundersImpactSlideshow._type,
  "variant": foundersImpactSlideshow.variant,
  "heading": foundersImpactSlideshow.heading,
  "slides": foundersImpactSlideshow.slides[]{
    "leftHeadline": leftHeadline,
    "rightHeadline": rightHeadline,
    "leftSubheading": leftSubheading,
    "rightSubheading": rightSubheading,
    leftImage${ImageGroq},
    "company": company->${CompanyGroq}
  },
}`;
