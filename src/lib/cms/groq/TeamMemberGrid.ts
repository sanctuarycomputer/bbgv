import TeamMemberGroq from './TeamMember';

export default `{
  heading,
  "teamMembers": teamMembers[]->${TeamMemberGroq},
}`;
