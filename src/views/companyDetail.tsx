import React, { FC } from 'react';
import { CompanyDetailPage } from '../lib/cms/types';
import { Props as ContainerProps } from 'containers/companyDetail';

import { ContentPage as Meta } from 'components/Meta';
import CompanyDetailPageContent from 'components/layouts/CompanyDetailPageContent';
import FoundersGrid from 'components/layouts/FoundersGrid';
import PressList from 'components/layouts/PressList';

type Props = ContainerProps & {
  model: CompanyDetailPage;
};

const CompanyDetailView: FC<Props> = (props) => {
  const { model } = props;
  const { seo, content, founders, pressList } = model;

  return (
    <div className="CompanyDetailView generic-page-margin-top primary-xxl">
      <Meta seo={seo} />
      <article>
        <CompanyDetailPageContent content={content} />
      </article>
      <FoundersGrid className="border-top-lilac py3_75 lg:py5" founders={founders} />
      <div className="text-module-padding-x">
        <PressList
          variant={pressList.variant}
          className="col-12 md:col-10 mxauto pb3_75 lg:pb10"
          heading={pressList.heading}
          items={pressList.items}
        />
      </div>
    </div>
  );
};

export default CompanyDetailView;
