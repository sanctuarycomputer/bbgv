import { Founder, TeamMember } from 'lib/cms/types';

export default (person: Founder | TeamMember): string => {
  return `${person.firstName} ${person.lastName}`;
};
