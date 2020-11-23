import React, { FC } from 'react';
import { AboutPage } from '../lib/cms/types';
import { Props as ContainerProps } from 'containers/about';

import { ContentPage as Meta } from 'components/Meta';
import HeroTextModule from 'components/layouts/HeroTextModule';

type Props = ContainerProps & {
  model: AboutPage;
};

const AboutView: FC<Props> = (props) => {
  const { model } = props;
  const { hero, seo } = model;

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
    </div>
  );
};

export default AboutView;
