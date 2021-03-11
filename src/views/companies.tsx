import React, { FC } from 'react';
import { CompaniesPage } from '../lib/cms/types';
import { Props as ContainerProps } from 'containers/companies';
import { CompaniesLinks } from 'constants/HomeHeroIntroLinks';

import { ContentPage as Meta } from 'components/Meta';
import HeroTextModule from 'components/layouts/HeroTextModule';
import TextModule from 'components/layouts/TextModule';
import InvestmentsList from 'components/layouts/InvestmentsList';
import PortfolioListing from 'components/layouts/PortfolioListing';

type Props = ContainerProps & {
  model: CompaniesPage;
};

const CompaniesView: FC<Props> = (props) => {
  const { model } = props;
  const { hero, seo, portfolioListing, investmentsList, contact } = model;

  return (
    <div className="CompaniesView">
      <Meta seo={seo} title={hero.title} />
      <HeroTextModule
        variant="lilac"
        title={hero.title}
        heading={hero.heading}
        introLine={hero.introLine}
        introBylineLinks={CompaniesLinks}
        briefParagraph={hero.briefParagraph}
      />
      <div id="current-investments">
        <PortfolioListing
          heading={portfolioListing.heading}
          companies={portfolioListing.companies}
        />
      </div>
      <div id="previous-funds" className="text-module-container-padding-x pt3_75 lg:pt7_5">
        <InvestmentsList heading={investmentsList.heading} items={investmentsList.items} />
      </div>
      <TextModule
        className="site-inner-content-max-width py3_75 lg:py7_5"
        variant="default"
        heading={contact.heading}
        subheading={contact.subheading}
        briefParagraph={contact.briefParagraph}
      />
    </div>
  );
};

export default CompaniesView;
