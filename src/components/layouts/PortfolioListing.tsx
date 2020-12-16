import React from 'react';
import cx from 'classnames';
import { Sector, Company, Founder } from 'lib/cms/types';
import Language from 'constants/Language';

import generateFullName from 'utils/generateFullName';
import { Img, Button } from 'components/base';
import generateCompanyDetailUrl from 'utils/generateCompanyDetailUrl';

type Props = {
  className?: string;
  sectors: Sector[];
};

const PortfolioListing: React.FC<Props> = ({ sectors, className }) => {
  return (
    <div
      className={cx('PortfolioListing site-max-width site-padding-x md:pt3_75 mxauto', className)}
    >
      {sectors.map((sector: Sector) => (
        <div
          key={`PortfolioListing--${sector.name}`}
          className="PortfolioListing__sectors-container flex flex-row flex-wrap"
        >
          {sector.companies?.map((company: Company) => (
            <Button
              ariaLabel={Language.t('Global.generalButtonAriaLabel', {
                link: company.name,
              })}
              to={generateCompanyDetailUrl(company.name)}
              key={`PortfolioListing__company-container-${company.name}`}
              className="PortfolioListing__company-container  bg-color-transparent text-left flex flex-row flex-wrap transition"
            >
              <div className="PortfolioListing__card--style-header radius-xs flex flex-row py1_5 px_75 md:py0 md:px0 items-start justify-between md:flex-col">
                <div className="flex flex-col primary-sm">
                  <p className="color-nutella uppercase">{company.name}</p>
                  <p className="color-charcoal">{sector.name}</p>
                </div>
                {company.tag && (
                  <div className="self-start secondary-xs bg-color-lilac color-charcoal md:mt1_5 py_5 px1 flex flex-col items-center radius-xs">
                    {company.tag}
                  </div>
                )}
              </div>

              <div className="PortfolioListing__founders-container transition relative flex flex-row">
                {company.founders.map((founder: Founder) => FounderCard(founder))}
              </div>
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PortfolioListing;

const FounderCard = (founder: Founder) => {
  return (
    <div
      key={`PortfolioListing-FounderCard-${generateFullName(founder)}`}
      className="FounderCard relative"
    >
      <div className="z-3 absolute t0 r0 l0 w100 h100 flex flex-col items-start">
        <p className="absolute pb_75 pl_75 b0 l0 uppercase color-lilac primary-sm">
          {generateFullName(founder)}
        </p>
      </div>

      <Img
        className="PortfolioListing__founder-card-image fit-cover radius-xs w100 h100"
        alt={founder.founderPortrait.alt || Language.t('Global.fallbackAltLabel')}
        src={founder.founderPortrait.src}
      />
    </div>
  );
};
