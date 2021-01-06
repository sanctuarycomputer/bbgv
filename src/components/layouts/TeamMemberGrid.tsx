import React from 'react';
import cx from 'classnames';
import { TeamMember, TeamMemberGrid as ITeamMemberGrid } from 'lib/cms/types';

import PersonCard from 'components/PersonCard';
import generateFullName from 'utils/generateFullName';

type Props = {
  className?: string;
  teamMemberGrids: ITeamMemberGrid[];
};

const TeamMemberGrid: React.FC<Props> = ({ teamMemberGrids, className }) => {
  return (
    <div className={cx('TeamMemberGrid col-12 lg:col-10 mxauto', className)}>
      {teamMemberGrids.map((teamMemberGrid: ITeamMemberGrid, index: number) => (
        <div
          key={`TeamMemberGrid--${teamMemberGrid.heading || index}`}
          className="TeamMemberGrid__container col-12"
        >
          {teamMemberGrid.heading && (
            <div className="TeamMemberGrid__heading pb2_25 md:pb2_25 color-charcoal primary-sm">
              {teamMemberGrid.heading}
            </div>
          )}

          <div className="TeamMemberGrid__grid-container pb2_25 md:pb6">
            {teamMemberGrid.teamMembers.map((teamMember: TeamMember) => (
              <div
                key={`TeamMemberGrid__${teamMember.firstName}`}
                className="TeamMemberGrid__card-container"
              >
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
      ))}
    </div>
  );
};

export default TeamMemberGrid;
