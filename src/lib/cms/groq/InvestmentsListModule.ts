import Image from './Image';

export default `{
  _type,
  heading,
  items[]{
    companyLogo${Image},
    tag,
    description
  },
}`;
