import React from 'react';
import { HashLink } from 'react-router-hash-link';

import getYear from 'date-fns/getYear';
import cx from 'classnames';
import Language from 'constants/Language';
import { MenuLink } from 'types';
import { GlobalSettings, Button as IButton } from 'lib/cms/types';
import { RouteMap } from 'constants/RouteMap';
import { AboutUsLinks, WhyWeInvestLinks } from 'constants/FooterMenuLinks';

import { Img, Button } from 'components/base';
import EmailSignup from 'components/EmailSignup';

type Props = {
  globalSettings: GlobalSettings;
};

const CURRENT_YEAR = getYear(new Date());

const Footer: React.FC<Props> = ({ globalSettings }) => {
  const { footerMenu, socialMediaLinks } = globalSettings;

  return (
    <div className="Footer site-max-width flex flex-col lg:flex-row">
      <Button
        containerClassName="lg:none bg-color-lilac-darker px_75 md:px1_5 pt1_5 pb4"
        className="items-center bg-color-transparent text-decoration-none"
        ariaLabel={Language.t('Global.navigateToHome')}
        to={RouteMap.HOME.path}
      >
        <div className="Footer__logo-container">
          <Img
            className="Footer__logo w100 h100"
            src="/assets/images/bbgv-full-logo.svg"
            alt={Language.t('Global.logoAltLabel')}
          />
        </div>
      </Button>

      <div className="Footer__section-one bg-color-lilac-darker lg:col-7 flex flex-col px_75 md:px1_5 pb2_25 lg:p3_75">
        <div className="Footer__section-one-inner-container flex flex-col relative h100">
          <div className="flex flex-col lg:flex-row col-12">
            <div className="col-12 lg:col-4 mb4 lg:mb0">
              <Button
                className="color-charcoal transition-shorter hover-lighten-charcoal secondary-bold-sm items-center bg-color-transparent text-decoration-none inline lg:mb3_75"
                ariaLabel={Language.t('Global.companiesButtonAriaLabel')}
                to={RouteMap.COMPANIES.path}
                label={Language.t('Global.companies')}
              />
            </div>

            <div className="col-12 lg:col-8 flex flex-row">
              <div className="col-6 flex flex-col">
                <Button
                  className="color-charcoal transition-shorter hover-lighten-charcoal secondary-bold-sm items-center bg-color-transparent text-decoration-none mb1_5 lg:mb3_75"
                  ariaLabel={Language.t('Global.aboutUsButtonAriaLabel')}
                  to={RouteMap.ABOUT.path}
                  label={Language.t('Global.aboutUs')}
                />
                <div className="Footer__sublinks flex flex-col">
                  {AboutUsLinks.map((link: MenuLink) => (
                    <HashLink
                      key={link.link}
                      className="color-charcoal transition-shorter hover-lighten-charcoal secondary-bold-sm items-center bg-color-transparent text-decoration-none"
                      smooth
                      to={link.link}
                    >
                      {link.label}
                    </HashLink>
                  ))}
                </div>
              </div>

              <div className="col-6 flex flex-col">
                <Button
                  className="color-charcoal transition-shorter hover-lighten-charcoal secondary-bold-sm items-center bg-color-transparent text-decoration-none mb1_5 lg:mb3_75"
                  ariaLabel={Language.t('Global.whyWeInvestButtonAriaLabel')}
                  to={RouteMap.WHY_WE_INVEST.path}
                  label={Language.t('Global.whyWeInvest')}
                />
                <div className="Footer__sublinks flex flex-col">
                  {WhyWeInvestLinks.map((link: MenuLink) => (
                    <HashLink
                      key={link.link}
                      className="color-charcoal transition-shorter hover-lighten-charcoal  secondary-bold-sm items-center bg-color-transparent text-decoration-none inline"
                      smooth
                      to={link.link}
                    >
                      {link.label}
                    </HashLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="Footer__newsletter col-12 absolute b0 secondary-bold-sm">
            <EmailSignup variant="footer" />
          </div>
        </div>
      </div>

      <div className="Footer__section-two bg-color-lilac-lighter lg:col-3 px_75 md:px1_5 py3 flex flex-row lg:flex-col relative">
        <div className="flex flex-col col-6 lg:col-12">
          <div className="color-charcoal secondary-bold-sm mb1_5 lg:mb3_75">
            {footerMenu.secondSectionHeading}
          </div>

          <div className="Footer__sublinks flex flex-col">
            {footerMenu.secondSectionLinks.map((link: IButton) => (
              <Button
                key={link.link}
                className="color-charcoal transition-shorter hover-lighten-charcoal secondary-bold-sm items-center bg-color-transparent text-decoration-none inline"
                ariaLabel={Language.t('Global.generalButtonAriaLabel', {
                  link: link.label,
                })}
                to={link.link}
                label={link.label}
              />
            ))}
          </div>

          {copyrightSection('none lg:flex lg:absolute flex flex-col secondary-xs color-charcoal')}
        </div>

        <div className="lg:none flex flex-col col-6">
          {socialMediaLinksSection(socialMediaLinks)}
        </div>
      </div>

      <div className="Footer__section-three bg-color-lilac-lightest lg:col-2 relative none lg:flex">
        <div className="flex flex-col px1_5 py3_75">
          {socialMediaLinksSection(socialMediaLinks)}
        </div>

        <div className="Footer__logo-section bg-color-chalk col-12 none lg:flex absolute b0 flex items-center px1_5 pt3_75 pb3">
          <Button
            className="items-center bg-color-transparent text-decoration-none"
            ariaLabel={Language.t('Global.navigateToHome')}
            to={RouteMap.HOME.path}
          >
            <div className="Footer__logo-container">
              <Img
                className="Footer__logo w100 h100"
                src="/assets/images/bbgv-full-logo.svg"
                alt={Language.t('Global.logoAltLabel')}
              />
            </div>
          </Button>
        </div>
      </div>

      {copyrightSection(
        'bg-color-chalk lg:none flex flex-col secondary-xxs color-charcoal py3 px_75 md:px1_5'
      )}
    </div>
  );
};

export default Footer;

const copyrightSection = (classes: string) => {
  return (
    <div className={cx('Footer__copyright', classes)}>
      <div>
        {Language.t('Global.copyrightLabel', {
          year: CURRENT_YEAR,
        })}
      </div>
      <div>{Language.t('Global.bbgv')}</div>
      <div>{Language.t('Global.allRightsReserved')}</div>
    </div>
  );
};

const socialMediaLinksSection = (links: IButton[]) => {
  return (
    <div className="Footer__social-media-links">
      <div className="color-charcoal secondary-bold-sm mb1_5 lg:mb3_75">
        {Language.t('Footer.connect')}
      </div>
      <div className="Footer__sublinks flex flex-col">
        {links.map((link: IButton) => (
          <Button
            key={link.link}
            className="color-charcoal transition-shorter hover-lighten-charcoal secondary-bold-sm items-center bg-color-transparent text-decoration-none inline"
            ariaLabel={Language.t('Global.generalButtonAriaLabel', {
              link: link.label,
            })}
            to={link.link}
            label={link.label}
          />
        ))}
      </div>
    </div>
  );
};
