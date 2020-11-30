import React, { FC } from 'react';
import { CompaniesPage } from '../lib/cms/types';
import { Props as ContainerProps } from 'containers/companies';

import { ContentPage as Meta } from 'components/Meta';
import HeroTextModule from 'components/layouts/HeroTextModule';
import TextModule from 'components/layouts/TextModule';

type Props = ContainerProps & {
  model: CompaniesPage;
};

const CompaniesView: FC<Props> = (props) => {
  const { model } = props;
  const { hero, seo, contact } = model;

  return (
    <div className="CompaniesView primary-xxl">
      <Meta seo={seo} title={hero.title} />
      <HeroTextModule
        variant="lilac"
        title={hero.title}
        heading={hero.heading}
        introLine={hero.introLine}
        introByline={hero.introByline}
        briefParagraph={hero.briefParagraph}
      />
      <TextModule
        className="text-module-padding-x py3_75 lg:py10"
        variant="default"
        heading={contact.heading}
        subheading={contact.subheading}
        briefParagraph={contact.briefParagraph}
      />
    </div>
  );
};

export default CompaniesView;
