import Image from './Image';

export default `{
  _type,
  heading,
  items[]{
    founders,
    companyName,
    companyLogo${Image},
    companyTag,
    description
  },
}`;
