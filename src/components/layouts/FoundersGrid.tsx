import React from 'react';
import cx from 'classnames';
import { Founder } from 'lib/cms/types';
import Language from 'constants/Language';

import PersonCard from 'components/PersonCard';
import generateFullName from 'utils/generateFullName';

type Props = {
  className?: string;
  founders: Founder[];
};

const FoundersGrid: React.FC<Props> = ({ founders, className }) => {
  const header = founders.length > 1 ? Language.t('Global.founders') : Language.t('Global.founder');

  return (
    <div className={cx('FoundersGrid text-module-container-padding-x', className)}>
      <div className="pb2_25 md:pb2_25 col-12 md:col-10 mxauto color-charcoal primary-sm">
        {header}
      </div>
      <div className="FoundersGrid__grid-container col-12 md:col-10 mxauto">
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
