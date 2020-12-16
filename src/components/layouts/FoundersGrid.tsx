import React from 'react';
import cx from 'classnames';
import { Founder } from 'lib/cms/types';

import PersonCard from 'components/PersonCard';
import generateFullName from 'utils/generateFullName';

type Props = {
  className?: string;
  founders: Founder[];
};

const FoundersGrid: React.FC<Props> = ({ founders, className }) => {
  return (
    <div className={cx('FoundersGrid col-12 lg:col-10 mxauto', className)}>
      <div className="FoundersGrid__grid-container">
        {founders.map((founder: Founder) => (
          <div key={founder.firstName} className="FoundersGrid__card-container">
            <PersonCard
              fullName={generateFullName(founder)}
              jobTitle={founder.jobTitle}
              image={founder.founderPortrait}
              bio={founder.bio}
              twitter={founder?.twitter}
              linkedIn={founder?.linkedIn}
              instagram={founder?.instagram}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundersGrid;
