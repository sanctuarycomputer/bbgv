import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import throttle from 'lodash/throttle';
import { Founder } from 'lib/cms/types';
import Language from 'constants/Language';
import generateFullName from 'utils/generateFullName';
import Classes from 'constants/Classes';
import withBreakpoints, { InjectedProps as WithBreakpointsProps } from 'lib/withBreakpoints';
import { Button } from 'components/base';
import { RouteMap } from 'constants/RouteMap';
import PhotoCard from 'components/PhotoCard';
import { BBGVLogo } from 'components/icons';
import hasPassedElement from 'utils/hasPassedElement';
import generateCompanyDetailUrl from 'utils/generateCompanyDetailUrl';

type PassedProps = {
  founders: Founder[];
  headline: string;
};

type Props = PassedProps & WithBreakpointsProps;

const HomeHero: React.FC<Props> = ({ mediaQuery, founders, headline }) => {
  const [activeFounderIndex, setActiveFounderIndex] = useState(-1);
  const [hideLogo, setHideLogo] = useState(false);
  const breakpointIsXsUp = mediaQuery.isExtraSmallUp;

  const handleScroll = () => {
    /* Determines if the current scroll position is before of after the logo in the Home Hero Module **/
    const logo = document.querySelector(`.${Classes.homeHeroLogo}`);

    if (logo) {
      if (!hasPassedElement(logo) && hideLogo) {
        setHideLogo(false);
      }

      if (hasPassedElement(logo) && !hideLogo) {
        setHideLogo(true);
      }
    }
  };

  const throttleHandleScroll = throttle(handleScroll, 150);

  useEffect(() => {
    window.addEventListener('scroll', throttleHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttleHandleScroll);
    };
  }, [throttleHandleScroll]);

  return (
    <div className="HomeHero primary-xxl site-inner-content-max-width site-padding-x mxauto pb2_25 md:pb0">
      <span
        className={cx('HomeHero__logo-container inline-flex vertical-align-middle', {
          'HomeHero__logo-container--style-is-active opacity-1 events-all': !hideLogo,
          'opacity-0 events-none': hideLogo,
        })}
      >
        <Button
          containerClassName="flex justify-center"
          className="bg-color-transparent text-decoration-none"
          ariaLabel={Language.t('Global.navigateToHome')}
          to={RouteMap.HOME.path}
        >
          <BBGVLogo className={cx(`${Classes.homeHeroLogo} mr1_5 md:mr2_25`)} color="charcoal" />
        </Button>
      </span>

      <span className="HomeHero__headline vertical-align-middle hyphens color-mulberry">
        {headline}
      </span>

      {!breakpointIsXsUp && (
        <div>
          <span className="color-charcoal primary-sm pr2_25 md:px3_75 vertical-align-middle inline">
            {Language.t('Home.hero.ourFounders')}
          </span>
          <span className="primary-xxl inline">
            {founders.map((founder: Founder, index: number) => (
              <span key={founder.firstName} className="color-charcoal HomeHero__founder inline">
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
              </span>
            ))}
          </span>
          <Button
            className="HomeHero__founder inline text-decoration-none hover-color-lilac-very-dark transition color-lilac-darkest"
            ariaLabel={Language.t('Home.hero.othersButtonAriaLabel')}
            to={RouteMap.COMPANIES.path}
            label={` & ${Language.t('Home.hero.others')}`}
          />
          <span>.</span>
        </div>
      )}

      {breakpointIsXsUp && (
        <span>
          <div className="color-charcoal primary-sm px2_25 md:px3_75 inline-block vertical-align-middle nowrap">
            {Language.t('Home.hero.ourFounders')}
          </div>
          <span className="HomeHero__founders-container color-charcoal primary-xxl inline">
            {founders.map((founder: Founder, index: number) => (
              <span key={founder.firstName} className="HomeHero__founder relative">
                <Button
                  wrap={true}
                  className="HomeHero__founder primary-xxl bg-color-transparent inline text-decoration-none hover-color-lilac-darkest color-charcoal transition"
                  to={
                    founder.companyReference?.companyDetailPageReference
                      ? generateCompanyDetailUrl(
                          founder.companyReference.companyDetailPageReference.slug
                        )
                      : RouteMap.COMPANIES.path
                  }
                  ariaLabel={Language.t('Founder.viewDetailPageButtonAriaLabel', {
                    founderFullName: generateFullName(founder),
                  })}
                  onMouseEnter={() => {
                    setActiveFounderIndex(index);
                  }}
                  onMouseLeave={() => {
                    setActiveFounderIndex(-1);
                  }}
                >
                  {index !== founders.length - 1 ? (
                    <span>
                      <span>{founder.firstName}</span>
                      <span className="color-charcoal mr_25 md:mr_5 lg:mr1">,</span>
                    </span>
                  ) : (
                    <span>
                      <span>{founder.firstName}</span>
                    </span>
                  )}
                </Button>
                <div
                  className={cx(
                    'HomeHero__photo-card absolute transition-shorter events-none opacity-0 z-overlay',
                    {
                      'PhotoCard--active opacity-1': index === activeFounderIndex,
                      'opacity-0 events-none': index !== activeFounderIndex,
                    }
                  )}
                >
                  <PhotoCard founder={founder} />
                </div>
              </span>
            ))}
          </span>
          <Button
            className="HomeHero__founder inline text-decoration-none hover-color-lilac-darkest color-charcoal transition"
            ariaLabel={Language.t('Home.hero.othersButtonAriaLabel')}
            to={RouteMap.COMPANIES.path}
            label={` & ${Language.t('Home.hero.others')}`}
            wrap={true}
          />
          <span>.</span>
        </span>
      )}
    </div>
  );
};

export default withBreakpoints<Props>(HomeHero);
