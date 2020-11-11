import React from 'react';
import { Founder } from 'lib/cms/types';

type Props = {
  founders: Founder[];
};

const HomeHero: React.FC<Props> = ({ founders }) => {
  return (
    <div className="HomeHero primary-xxl">
      <span className="color-mulberry">Propelling a new wave of</span>
      <span className="color-mulberry"> founders toward transformational change.</span>
      <span className="color-charcoal primary-sm">Our founders</span>
      <span className="color-charcoal primary-xxl">
        {founders && founders.map((founder: Founder) => <span>{founder.firstName}</span>)}
      </span>
    </div>
  );
};

export default HomeHero;
