import FounderGroq from './Founder';
import ImageGroq from './Image';
import CompanyGroq from './Company';

export default `{
  _type,
  'slides': slides[]{
    'images': images[]${ImageGroq},
    'vimeoId': vimeoId,
    'founder': founder->${FounderGroq},
    'company': company->${CompanyGroq},
    companyDescription
  },
}`;
