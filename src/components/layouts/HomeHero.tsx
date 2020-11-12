import React from 'react';
import { Founder } from 'lib/cms/types';
import Language from 'constants/Language';
import generateFounderFullName from 'utils/generateFounderFullName';
import { Button, Img } from 'components/base';
import { RouteMap } from 'constants/RouteMap';

type Props = {
  founders: Founder[];
  firstLine: string;
  secondLine: string;
};

//TO-DO: add generate founder detail page url util

const HomeHero: React.FC<Props> = ({ founders, firstLine, secondLine }) => {
  return (
    <div className="HomeHero primary-xxl site-max-width site-padding-x mxauto">
      <span className="HomeHero__first-section">
        <span className="HomeHero__logo-container">
          <Button
            className="items-center bg-color-transparent text-decoration-none inline"
            ariaLabel=""
            to={RouteMap.HOME.path}
          >
            <Img
              className="HomeHero__logo pr1_5 md:pr2_25"
              src="/assets/images/bbgv-full-logo.svg"
              alt=""
            />
          </Button>
        </span>

        <span className="HomeHero__first-line color-mulberry">{firstLine}</span>
      </span>

      <span className="color-mulberry"> {secondLine}</span>
      <span className="color-charcoal primary-sm px2_25 md:px3_75">
        {Language.t('Home.hero.ourFounders')}
      </span>
      <span className="color-charcoal primary-xxl">
        {founders.map((founder: Founder, index: number) => (
          <Button
            key={founder.firstName}
            className="HomeHero__founder inline text-decoration-none hover-color-lilac transition"
            ariaLabel={Language.t('Founder.viewDetailPageButtonAriaLabel', {
              founderFullName: generateFounderFullName(founder),
            })}
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
        ariaLabel={Language.t('Home.hero.othersButtonAriaLabel')}
        to="/"
        label={Language.t('Home.hero.others')}
      />
      <span>.</span>
    </div>
  );
};

export default HomeHero;
