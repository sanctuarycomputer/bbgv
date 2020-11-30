import React, { FC } from 'react';
import { AboutPage } from '../lib/cms/types';
import { Props as ContainerProps } from 'containers/about';

import { ContentPage as Meta } from 'components/Meta';
import HeroTextModule from 'components/layouts/HeroTextModule';
import TextModule from 'components/layouts/TextModule';
import TextModuleWithParagraphs from 'components/layouts/TextModuleWithParagraphs';
import PressList from 'components/layouts/PressList';

type Props = ContainerProps & {
  model: AboutPage;
};

const AboutView: FC<Props> = (props) => {
  const { model } = props;
  const { hero, seo, teamHeading, pressHeading, pressList, valuesSection, contact } = model;

  return (
    <div className="AboutView primary-xxl">
      <Meta seo={seo} title={hero.title} />
      <HeroTextModule
        variant="nutella"
        title={hero.title}
        heading={hero.heading}
        introLine={hero.introLine}
        introByline={hero.introByline}
        briefParagraph={hero.briefParagraph}
      />
      <div id="#team">
        <TextModule
          className="text-module-padding-x py3_75 lg:py10"
          variant="default"
          heading={teamHeading.heading}
          subheading={teamHeading.subheading}
          briefParagraph={teamHeading.briefParagraph}
        />
      </div>
      <div id="#values" className="text-module-padding-x border-top-nutella border-bottom-nutella">
        <TextModuleWithParagraphs
          className="py3_75 lg:py10"
          variant={valuesSection.variant}
          heading={valuesSection.heading}
          subheading={valuesSection.subheading}
          text={valuesSection.text}
        />
      </div>
      <div id="#press" className="text-module-padding-x border-bottom-nutella">
        <TextModule
          className="py3_75 lg:py10"
          variant="default"
          heading={pressHeading.heading}
          subheading={pressHeading.subheading}
          briefParagraph={pressHeading.briefParagraph}
        />
        <PressList
          variant={pressList.variant}
          className="col-12 md:col-10 mxauto pb3_75 lg:pb10"
          heading={pressList.heading}
          items={pressList.items}
        />
      </div>
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

export default AboutView;
