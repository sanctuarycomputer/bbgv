import React from 'react';
import get from 'lodash/get';

import sanitizeFullWidthImageCaption from 'sanitizers/sanitizeFullWidthImageCaption';
import sanitizeQuoteModule from 'sanitizers/sanitizeQuoteModule';
import sanitizeVideo from 'sanitizers/sanitizeVideo';

import VideoModule from 'components/VideoModule';
import FullWidthImageCaptionComponent from 'components/FullWidthImageCaption';
import LineBreakComponent from 'components/LineBreak';
import QuoteComponent from 'components/QuoteModule';

export const FullWidthImageCaption = (props: unknown) => {
  return (
    <FullWidthImageCaptionComponent image={sanitizeFullWidthImageCaption(get(props, 'node'))} />
  );
};

export const QuoteModule = (props: unknown) => {
  return <QuoteComponent contents={sanitizeQuoteModule(get(props, 'node'))} />;
};

export const LineBreak = () => {
  return <LineBreakComponent />
};

export const Video = (props: unknown) => {
  return <VideoModule contents={sanitizeVideo(get(props, 'node'))} />;
};
