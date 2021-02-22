import React from 'react';
import cx from 'classnames';
import withBreakpoints, { InjectedProps as WithBreakpointsProps } from 'lib/withBreakpoints';
import { Company, Founder } from 'lib/cms/types';
import Language from 'constants/Language';
import { RouteMap } from 'constants/RouteMap';

import generateFullName from 'utils/generateFullName';
import { Img, Button } from 'components/base';
import { RightArrow } from 'components/icons';
import generateCompanyDetailUrl from 'utils/generateCompanyDetailUrl';

type PassedProps = {
  heading: string;
  companies: Company[];
};

type Props = PassedProps & WithBreakpointsProps;

const PortfolioListing: React.FC<Props> = ({ heading, companies, mediaQuery }) => {
  const breakpointIsSmUp = mediaQuery.isSmallUp;

  return (
    <div className="PortfolioListing site-max-width pt3_75 md:px_75 lg:px0 mxauto">
      <div className="color-charcoal px_75 md:px0 pb3 md:pb6 text-inline-subheader">{heading}</div>
      <div className="PortfolioListing__companies-container flex flex-row flex-wrap">
        {companies.map((company: Company) => (
          <Button
            ariaLabel={Language.t('Global.generalButtonAriaLabel', {
              link: company.name,
            })}
            to={
              company.companyDetailPageReference
                ? generateCompanyDetailUrl(company.companyDetailPageReference.slug)
                : RouteMap.COMPANIES.path
            }
            key={`PortfolioListing__company-container-${company.name}`}
            wrap={true}
            containerClassName={cx(
              'PortfolioListing__company-container flex flex-col md:mr1_25 mb2_25 md:mb3_75 relative',
              {
                w100: !breakpointIsSmUp && company.founders.length < 2,
              }
            )}
            className="bg-color-transparent text-left"
          >
            <p className="PortfolioListing__company-name color-charcoal uppercase text-inline-subheader pb1 px_75 md:px0">
              {company.name}
            </p>
            <div className="PortfolioListing__button-container bg-color-lilac color-charcoal secondary-bold-sm absolute b0 r0 opacity-0 events-none transition-shorter z-7 p_75 flex flex-row items-center w100 md:flex none">
              <span className="pr_25">{Language.t('Global.readMore')}</span>
              <RightArrow color="charcoal" variant="default" />
            </div>
            <div className="PortfolioListing__founders-container flex flex-row">
              {company.founders.map((founder: Founder, index: number) =>
                FounderCard(founder, index, company?.tag)
              )}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default withBreakpoints<Props>(PortfolioListing);

const FounderCard = (founder: Founder, index: number, tag: string | undefined) => {
  return (
    <div
      key={`PortfolioListing-FounderCard-${generateFullName(founder)}`}
      className="FounderCard relative overflow-hidden"
    >
      {tag && index === 0 && (
        <div className="FounderCard__tag flex flex-col items-center absolute l0 self-start secondary-xs bg-color-lilac color-charcoal py_5 px1 z-7">
          {tag}
        </div>
      )}

      <div className="FounderCard__text flex flex-col items-start z-3 absolute t0 r0 l0 w100 h100">
        <p className="absolute pb_75 pl_75 b0 l0 uppercase color-chalk primary-sm">
          {generateFullName(founder)}
        </p>
      </div>
      <div className="FounderCard__img-container radius-xs overflow-hidden relative">
        <Img
          className="FounderCard__img fit-cover radius-xs w100 h100"
          alt={founder.founderPortrait.alt || Language.t('Global.fallbackAltLabel')}
          src={founder.founderPortrait.src}
        />
      </div>
    </div>
  );
};
