import { Founder } from 'lib/cms/types';

export default (founder: Founder): string => {
  return `${founder.firstName} ${founder.lastName}`;
};
