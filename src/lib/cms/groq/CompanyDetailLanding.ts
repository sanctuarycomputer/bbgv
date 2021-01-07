import ImageGroq from './Image';
import CompanyGroq from './Company';

export default `{
  headline,
  foundersText,
  founderPortrait${ImageGroq},
  productImage${ImageGroq},
  company->${CompanyGroq},
}`;
