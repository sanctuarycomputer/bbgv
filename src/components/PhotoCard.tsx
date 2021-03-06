import React from 'react';
import Language from 'constants/Language';
import { Img } from 'components/base';
import { Founder } from 'lib/cms/types';

type Props = {
  founder: Founder;
};

const PhotoCard: React.FC<Props> = ({ founder }) => {
  const { founderPortrait, companyName } = founder;

  if (!founderPortrait) {
    return null;
  }

  return (
    <div className="PhotoCard relative">
      <div className="PhotoCard__details p_75 absolute z-2 t0 r0 w100 h100">
        <div className="PhotoCard__company absolute z-2 color-lilac font-primary uppercase">
          {companyName}
        </div>
      </div>
      <div className="PhotoCard__img-container radius-xs relative overflow-hidden">
        <Img
          className="PhotoCard__img radius-xs w100 h100 fit-cover"
          src={founderPortrait.src}
          alt={founderPortrait.alt || Language.t('Global.fallbackAltLabel')}
        ></Img>
      </div>
    </div>
  );
};

export default PhotoCard;
