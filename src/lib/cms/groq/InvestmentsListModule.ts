import Company from './Company';

export default `{
  _type,
  heading,
  items[]{
    company->${Company},
    description
  },
}`;
