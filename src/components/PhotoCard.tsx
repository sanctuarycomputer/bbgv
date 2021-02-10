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
        <div className="PhotoCard__company absolute z-2 color-lilac font-primary uppercase">
          {company}
        </div>
      </div>
      <div className="PhotoCard__img-container relative">
        <Img
          className="PhotoCard__img radius-xs w100 h100 absolute t0 r0 fit-cover"
          src={founderPortrait.src}
          alt={founderPortrait.alt || Language.t('Global.fallbackAltLabel')}
        ></Img>
      </div>
    </div>
  );
};

export default PhotoCard;
