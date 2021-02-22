import CompanyGroq from './Company';

export default `{
  _type,
  heading,
  companies[]->${CompanyGroq},
}`;
