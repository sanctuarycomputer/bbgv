import React, { FC } from 'react';
import { HomePage } from '../lib/cms/types';
import { Props as ContainerProps } from 'containers/home';

import HomeHero from 'components/layouts/HomeHero';

type Props = ContainerProps & {
  model: HomePage;
};

const HomeView: FC<Props> = (props) => {
  const { model } = props;
  const { hero } = model;

  return (
    <div className="HomeView primary-xxl">
      <HomeHero headline={hero.headline} founders={hero.founders} />
    </div>
  );
};

export default HomeView;
