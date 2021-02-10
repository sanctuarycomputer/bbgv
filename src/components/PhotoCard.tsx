import React from 'react';
import Language from 'constants/Language';
import { Img } from 'components/base';
import { Founder } from 'lib/cms/types';

type Props = {
  founder: Founder;
};

const PhotoCard: React.FC<Props> = ({ founder }) => {
  const { firstName, lastName, founderPortrait, companyName, sector } = founder;

  if (!founderPortrait) {
    return null;
  }

  return (
    <div className="PhotoCard relative">
      <div className="PhotoCard__details p_75 absolute z-2 t0 r0 w100 h100">
        {sector && <span className="absolute pt_75 z-2 t0 color-white secondary-xs">{sector}</span>}

        <div className="PhotoCard__founder-name absolute z-2">
          <div className="flex flex-col primary-sm uppercase t0 l0">
            <span className="color-white">
              {firstName} {lastName}
            </span>
            <span className="color-lilac-darkest">{companyName}</span>
          </div>
        </div>
      </div>

      <Img
        className="PhotoCard__img radius-xs w100 h100 absolute t0 r0 fit-cover"
        src={founderPortrait.src}
        alt={founderPortrait.alt || Language.t('Global.fallbackAltLabel')}
      ></Img>
    </div>
  );
};

export default PhotoCard;
