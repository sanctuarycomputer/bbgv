import React from 'react';
import cx from 'classnames';
import { TeamMember } from 'lib/cms/types';

import PersonCard from 'components/PersonCard';
import generateFullName from 'utils/generateFullName';

type Props = {
  className?: string;
  teamMembers: TeamMember[];
};

const TeamMembersGrid: React.FC<Props> = ({ teamMembers, className }) => {
  return (
    <div
      className={cx('TeamMembersGrid col-12 lg:col-10 mxauto site-content-max-width', className)}
    >
      <div className="TeamMembersGrid__grid-container">
        {teamMembers.map((teamMember: TeamMember) => (
          <div key={teamMember.firstName} className="TeamMembersGrid__card-container">
            <PersonCard
              fullName={generateFullName(teamMember)}
              jobTitle={teamMember.jobTitle}
              image={teamMember.image}
              bio={teamMember.bio}
              twitter={teamMember?.twitter}
              linkedIn={teamMember?.linkedIn}
              instagram={teamMember?.instagram}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersGrid;
