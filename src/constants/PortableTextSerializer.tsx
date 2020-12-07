import React from 'react';
import get from 'lodash/get';

import sanitizeImageCaption from 'sanitizers/sanitizeImageCaption';
import sanitizeQuoteModule from 'sanitizers/sanitizeQuoteModule';
import sanitizeVideo from 'sanitizers/sanitizeVideo';
import sanitizeParagraphWithHeadingAndButton from 'sanitizers/sanitizeParagraphWithHeadingAndButton';

import VideoModule from 'components/VideoModule';
import ImageCaptionComponent from 'components/ImageCaption';
import LineBreakComponent from 'components/LineBreak';
import QuoteComponent from 'components/QuoteModule';
import ParagraphWithHeadingAndButtonComponent from 'components/ParagraphWithHeadingAndButton';

export const FullWidthImageCaption = (props: unknown) => {
  return (
    <ImageCaptionComponent variant="full-width" image={sanitizeImageCaption(get(props, 'node'))} />
  );
};

export const HalfWidthImageCaption = (props: unknown) => {
  return (
    <ImageCaptionComponent variant="half-width" image={sanitizeImageCaption(get(props, 'node'))} />
  );
};

export const QuoteModule = (props: unknown) => {
  return <QuoteComponent contents={sanitizeQuoteModule(get(props, 'node'))} />;
};

export const LineBreak = () => {
  return <LineBreakComponent />;
};

export const Video = (props: unknown) => {
  return <VideoModule contents={sanitizeVideo(get(props, 'node'))} />;
};

export const ParagraphWithHeadingAndButton = (props: unknown) => {
  return (
    <ParagraphWithHeadingAndButtonComponent
      contents={sanitizeParagraphWithHeadingAndButton(get(props, 'node'))}
    />
  );
};
