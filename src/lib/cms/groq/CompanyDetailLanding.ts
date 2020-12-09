import ImageGroq from './Image';
import CompanyGroq from './Company';

export default `{
  headline,
  founderPortrait${ImageGroq},
  productImage${ImageGroq},
  company->${CompanyGroq},
}`;
