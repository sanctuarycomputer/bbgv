import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { DefaultPageContent as IDefaultPageContent } from 'lib/cms/types';

import {
  FullWidthImageCaption,
  HalfWidthImageCaption,
  LineBreak,
  QuoteModule,
  ParagraphWithHeadingAndButton,
} from 'constants/PortableTextSerializer';

interface Props {
  content: IDefaultPageContent;
}

const DefaultPageContent: React.FC<Props> = ({ content }) => {
  return (
    <BlockContent
      className="DefaultPageContent__body mxauto"
      blocks={content.body}
      serializers={{
        types: {
          fullWidthImageCaption: FullWidthImageCaption,
          halfWidthImageCaption: HalfWidthImageCaption,
          lineBreak: LineBreak,
          quoteModule: QuoteModule,
          paragraphWithHeadingAndButton: ParagraphWithHeadingAndButton,
        },
      }}
    />
  );
};

export default DefaultPageContent;
