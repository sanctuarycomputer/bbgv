import React from 'react';
import Language from 'constants/Language';
import { Img } from 'components/base';
import { Founder, Image } from 'lib/cms/types';
// import sanityImgUtil from 'utils/sanityImgUtil';

type Props = {
  founder: Founder;
};

const PhotoCard: React.FC<Props> = ({ founder }) => {
  const { firstName, lastName, founderPortrait, company, sector } = founder;

  if (!founderPortrait) {
    return null;
  }

  return (
    <div className="PhotoCard radius-xs z-2 relative">
      <div className="PhotoCard__copy flex flex-col left absolute t0 r0 z-2">
        {sector && <span className="color-white secondary-xs">{sector}</span>}
        <div className="flex flex-col secondary-bold-xs uppercase absolute t0 l0">
          <span className="color-white">
            {firstName} {lastName}
          </span>
          <span className="color-lilac">{company}</span>
        </div>
      </div>
      <Img
        className="PhotoCard__img fit-cover w100 h100 absolute t0 r0 z-1"
        src={founderPortrait.src}
        alt={founderPortrait.alt || Language.t('Global.fallbackAltLabel')}
      ></Img>
    </div>
  );
};

export default PhotoCard;
