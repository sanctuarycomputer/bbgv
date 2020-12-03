import React from 'react';
import cx from 'classnames';
import { FullWidthImageCaption as IFullWidthImageCaption } from 'lib/cms/types';
import { Img } from 'components/base';
import Language from 'constants/Language';

type Props = {
  className?: string;
  image: IFullWidthImageCaption;
};

const FullWidthImageCaption: React.FC<Props> = ({ image, className }) => {
  return (
    <div className={cx('FullWidthImageCaption flex flex-col py2_25 md:py3_75', className)}>
      <div className="FullWidthImageCaption__image">
        <Img
          src={image.src}
          alt={image.alt || Language.t('Global.fallbackAltLabel')}
          className="radius-xs fit-cover w100 h100"
        />
      </div>

      {image.caption && (
        <p className="FullWidthImageCaption__caption col-10 md:col-7 secondary-xs color-black-lighter pt1_25 md:pt1_5">
          {image.caption}
        </p>
      )}
    </div>
  );
};

export default FullWidthImageCaption;
