import React from 'react';
import { Founder } from 'lib/cms/types';
import Language from 'constants/Language';

import { Button } from 'components/base';

type Props = {
  founders: Founder[];
};

//TO-DO: add generate founder detail page url util

const HomeHero: React.FC<Props> = ({ founders }) => {
  return (
    <div className="HomeHero primary-xxl">
      <span className="color-mulberry">Propelling a new wave of</span>
      <span className="color-mulberry"> founders toward transformational change.</span>
      <span className="color-charcoal primary-sm pr2_25 md:pr3_75">
        {Language.t('home.hero.ourFounders')}
      </span>
      <span className="color-charcoal primary-xxl">
        {founders.map((founder: Founder, index: number) => (
          <Button
            key={founder.firstName}
            className="HomeHero__founder inline text-decoration-none hover-color-lilac transition"
            ariaLabel=""
            to="/"
          >
            {index !== founders.length - 1 ? (
              <span>
                <span>{founder.firstName}</span>
                <span className="color-charcoal">, </span>
              </span>
            ) : (
              <span>
                <span>{founder.firstName} </span>
              </span>
            )}
          </Button>
        ))}
      </span>
      <span>& </span>
      <Button
        className="HomeHero__founder inline text-decoration-none hover-color-lilac transition"
        ariaLabel=""
        to="/"
        label={Language.t('home.hero.others')}
      />
      <span>.</span>
    </div>
  );
};

export default HomeHero;
