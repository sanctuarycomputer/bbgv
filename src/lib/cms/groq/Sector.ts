import Company from './Company';

export default `{
  _type,
  name,
  companies[]->${Company},
}`;
