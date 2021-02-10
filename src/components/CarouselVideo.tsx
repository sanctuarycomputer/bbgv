import React, { useState } from 'react';
import cx from 'classnames';
import Language from 'constants/Language';

import { Video, Img, Button } from 'components/base';
import { LineIcon } from 'components/icons';
import { Image } from 'lib/cms/types';

interface Props {
  images: Image[];
  vimeoId: string;
}

//TO-DO: Fix video crop

const CarouselVideo: React.FC<Props> = ({ images, vimeoId }) => {
  const [showVideo, setShowVideo] = useState(false);

  if (!vimeoId) {
    return null;
  }

  return (
    <div className="CarouselVideo flex flex-col h100">
      <div className="CarouselVideo__video-container relative h100">
        <div
          className={cx('CarouselVideo__cover-image transition absolute t0 b0 w100 h100', {
            'opacity-1': !showVideo,
            'opacity-0 events-none': showVideo,
          })}
        >
          <div className="z-3 absolute t0 b0 w100 h100 radius-xs fit-cover">
            {images &&
              images.map((image: Image) => {
                return (
                  <Img
                    className="FeaturedFoundersCarousel__image col-4 radius-xs w100 h100 fit-cover"
                    src={image.src}
                    alt={image.alt || Language.t('Global.fallbackAltLabel')}
                  />
                );
              })}
          </div>

          <Button
            onClick={() => setShowVideo(true)}
            className="CarouselVideo__button z-4 secondary-bold-sm text-decoration-none bg-color-transparent color-chalk absolute b0 r0 mb1_25 mr1_25 vertical-align-middle inline-flex items-center"
            ariaLabel={Language.t('Video.playButton.ariaLabel')}
          >
            <LineIcon className="CarouselVideo__button-line-icon mr_25" color="chalk" />
            {Language.t('Video.playButton.label')}
          </Button>
        </div>

        <div
          className={cx('CarouselVideo__video-outer-container radius-xs overflow-hidden h100', {
            'events-none': !showVideo,
            'events-all': showVideo,
          })}
        >
          <Video vimeoId={vimeoId} />
        </div>
      </div>
    </div>
  );
};

export default CarouselVideo;
