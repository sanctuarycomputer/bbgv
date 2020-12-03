import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { DefaultPageContent as IDefaultPageContent } from 'lib/cms/types';

import { FullWidthImageCaption, LineBreak, QuoteModule } from 'constants/PortableTextSerializer';

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
          lineBreak: LineBreak,
          quoteModule: QuoteModule,
        },
      }}
    />
  );
};

export default DefaultPageContent;
