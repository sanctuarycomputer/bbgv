import React from 'react';
import cx from 'classnames';
import { ImageCaption as IImageCaption } from 'lib/cms/types';
import { Img } from 'components/base';
import Language from 'constants/Language';

type Props = {
  className?: string;
  variant: 'full-width' | 'half-width';
  image: IImageCaption;
};

const ImageCaption: React.FC<Props> = ({ image, className, variant }) => {
  if (!image.src) {
    return null;
  }

  return (
    <div
      className={cx(`ImageCaption ImageCaption--style-${variant} flex flex-col`, className, {
        'py2_25 md:py3_75': variant === 'full-width',
        left: variant === 'half-width',
      })}
    >
      <div className={cx(`ImageCaption--style-${variant}__image`)}>
        <Img
          src={image.src}
          alt={image.alt || Language.t('Global.fallbackAltLabel')}
          className="radius-xs fit-cover w100 h100"
        />
      </div>

      {image.caption && (
        <span
          className={cx(
            `ImageCaption--style-${variant}__caption secondary-xs color-black-lighter`,
            {
              'pt_75 pb1_5 col-12': variant === 'half-width',
              'pt1_25 md:pt1_5 col-10 md:col-7': variant === 'full-width',
            }
          )}
        >
          {image.caption}
        </span>
      )}
    </div>
  );
};

export default ImageCaption;
