import React, { FC } from 'react';
import { WhyWeInvestPage } from '../lib/cms/types';
import { Props as ContainerProps } from 'containers/whyWeInvest';
import { WhyWeInvestLinks } from 'constants/HomeHeroIntroLinks';

import { ContentPage as Meta } from 'components/Meta';
import HeroTextModule from 'components/layouts/HeroTextModule';
import TextModule from 'components/layouts/TextModule';
import TextModuleWithParagraphs from 'components/layouts/TextModuleWithParagraphs';
import GridParagraphs from 'components/layouts/GridParagraphs';
import StatisticsModule from 'components/layouts/StatisticsModule';

type Props = ContainerProps & {
  model: WhyWeInvestPage;
};

const WhyWeInvestView: FC<Props> = (props) => {
  const { model } = props;
  const { hero, seo, thesis, investmentHeading, investmentParagraphs, apply, statistics } = model;

  return (
    <div className="ThesisView">
      <Meta seo={seo} title={hero.title} />
      <div className="WhyWeInvestHero">
        <HeroTextModule
          variant="mulberry"
          title={hero.title}
          heading={hero.heading}
          introLine={hero.introLine}
          introBylineLinks={WhyWeInvestLinks}
          briefParagraph={hero.briefParagraph}
        />
      </div>
      {!!statistics.length && (
        <div id="opportunity">
          <StatisticsModule facts={statistics} />
        </div>
      )}
      <div id="thesis">
        <TextModuleWithParagraphs
          className="text-module-container-padding-x py3_75 lg:py7_5"
          variant={thesis.variant}
          heading={thesis.heading}
          subheading={thesis.subheading}
          text={thesis.text}
        />
      </div>
      <div
        id="investment-guidelines"
        className="text-module-container-padding-x border-top-mulberry border-bottom-mulberry"
      >
        <TextModuleWithParagraphs
          className="pt3_75 lg:pt7_5"
          variant={investmentHeading.variant}
          heading={investmentHeading.heading}
          subheading={investmentHeading.subheading}
          text={investmentHeading.text}
        />
        <GridParagraphs className="pt4 pb3_75 lg:pb7_5" sections={investmentParagraphs} />
      </div>
      <div id="apply">
        <TextModule
          className="text-module-container-padding-x py3_75 lg:py7_5"
          variant="default-with-border"
          heading={apply.heading}
          subheading={apply.subheading}
          briefParagraph={apply.briefParagraph}
        />
      </div>
    </div>
  );
};

export default WhyWeInvestView;
