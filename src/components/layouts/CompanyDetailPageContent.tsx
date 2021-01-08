import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { CompanyDetailPageContent as ICompanyDetailPageContent } from 'lib/cms/types';

import { Video, ParagraphWithHeadingAndButton } from 'constants/PortableTextSerializer';

interface Props {
  content: ICompanyDetailPageContent;
}

const CompanyDetailPageContent: React.FC<Props> = ({ content }) => {
  return (
    <BlockContent
      className="CompanyDetailPageContent__body mxauto pt4 md:pt0"
      blocks={content.body}
      serializers={{
        types: {
          video: Video,
          paragraphWithHeadingAndButton: ParagraphWithHeadingAndButton,
        },
      }}
    />
  );
};

export default CompanyDetailPageContent;
