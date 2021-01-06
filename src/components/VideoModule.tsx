import React, { useState } from 'react';
import cx from 'classnames';
import Language from 'constants/Language';

import { Video, Img, Button } from 'components/base';
import { LineIcon } from 'components/icons';
import { VideoModule as IVideoModule } from 'lib/cms/types';

interface Props {
  contents: IVideoModule | null;
}

const VideoModule: React.FC<Props> = ({ contents }) => {
  const [showVideo, setShowVideo] = useState(false);

  if (!contents) {
    return null;
  }

  return (
    <div className="VideoModule flex flex-col">
      <div className="VideoModule__video-container relative">
        <div
          className={cx('VideoModule__cover-image transition absolute t0 b0 w100 h100', {
            'opacity-1': !showVideo,
            'opacity-0 events-none': showVideo,
          })}
        >
          <Img
            className="z-3 absolute t0 b0 w100 h100 radius-xs fit-cover"
            src={contents.coverImage.src}
            alt={contents.coverImage.alt || Language.t('Global.fallbackAltLabel')}
          />

          <Button
            onClick={() => setShowVideo(true)}
            className="VideoModule__button z-4 secondary-bold-sm text-decoration-none bg-color-transparent color-chalk absolute b0 r0 mb1_25 mr1_25 vertical-align-middle inline-flex items-center"
            ariaLabel={Language.t('Video.playButton.ariaLabel')}
          >
            <LineIcon className="VideoModule__button-line-icon mr_25" color="chalk" />
            {Language.t('Video.playButton.label')}
          </Button>

          <div className="absolute t0 b0 z-4 flex flex-col justify-between p1_25">
            <span className="color-chalk secondary-sm">{contents.jobTitle}</span>

            <div className="flex flex-col primary-sm uppercase">
              <span className="color-chalk">{contents.founders}</span>
              <span className="color-charcoal">{contents.companyName}</span>
            </div>
          </div>
        </div>

        <div
          className={cx('VideoModule__video-outer-container radius-xs overflow-hidden', {
            'events-none': !showVideo,
            'events-all': showVideo,
          })}
        >
          <Video vimeoId={contents.vimeoId} />
        </div>
      </div>

      {contents.caption && (
        <p className="col-10 md:col-7 secondary-xs color-black-lighter pt1_25 md:pt1_5">
          {contents.caption}
        </p>
      )}
    </div>
  );
};

export default VideoModule;
