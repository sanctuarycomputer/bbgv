import React, { FC } from 'react';
import isEmpty from 'lodash/isEmpty';

import { CompanyDetailPage } from '../lib/cms/types';
import { Props as ContainerProps } from 'containers/companyDetail';

import { ContentPage as Meta } from 'components/Meta';
import CompanyDetailPageContent from 'components/layouts/CompanyDetailPageContent';
import FoundersGrid from 'components/layouts/FoundersGrid';
import PressList from 'components/layouts/PressList';
import CompanyDetailLanding from 'components/layouts/CompanyDetailLanding';
import PageNotFound from 'components/PageNotFound';

type Props = ContainerProps & {
  model: CompanyDetailPage;
};

const CompanyDetailView: FC<Props> = (props) => {
  const { model } = props;
  const { seo, content, founders, pressList, companyDetailLanding } = model;

  if (isEmpty(companyDetailLanding)) {
    return <PageNotFound />;
  }

  return (
    <div className="CompanyDetailView">
      <Meta seo={seo} />
      <CompanyDetailLanding
        company={companyDetailLanding.company}
        foundersText={companyDetailLanding.foundersText}
        headline={companyDetailLanding.headline}
        founderPortrait={companyDetailLanding.founderPortrait}
        productImage={companyDetailLanding.productImage}
      />
      <article>
        <CompanyDetailPageContent content={content} />
      </article>
      {!!founders.length && (
        <FoundersGrid className="border-top-lilac py3_75 lg:py5" founders={founders} />
      )}

      {'pressList' in model && (
        <div className="text-module-padding-x">
          <PressList
            variant={pressList.variant}
            className="col-12 md:col-10 mxauto pb3_75 lg:pb7_5"
            heading={pressList.heading}
            items={pressList.items}
          />
        </div>
      )}
    </div>
  );
};

export default CompanyDetailView;
