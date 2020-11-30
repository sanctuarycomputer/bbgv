import React, { useState } from 'react';
import cx from 'classnames';

import { InvestmentsListItem, Founder, Company } from 'lib/cms/types';
import generateFounderFullName from 'utils/generateFounderFullName';
import Language from 'constants/Language';

import { Img, Button } from 'components/base';
import { LineIcon } from 'components/icons';
import PortableText from 'components/PortableText';

type Props = {
  className?: string;
  heading: string;
  items: InvestmentsListItem[];
};

//TO-DO: remove state for button hover.

const InvestmentsList: React.FC<Props> = ({ heading, items, className }) => {
  return (
    <div className={cx(`InvestmentsList col-12 flex flex-row flex-wrap`, className)}>
      <div className="InvestmentsList__heading uppercase color-charcoal primary-sm pb_75 md:pb2_25">
        {heading}
      </div>

      {items.map((item: InvestmentsListItem) => (
        <div key="" className="InvestmentsList__item col-12">
          {InvestmentListItem(item)}
        </div>
      ))}
    </div>
  );
};

export default InvestmentsList;

const InvestmentListItem = (item: InvestmentsListItem) => {
  const [hoverButton, setHoverButton] = useState(false);

  return (
    <div className="InvestmentsList__item-inner-container col-12 flex flex-col md:flex-row py1_5">
      <div className="flex flex-row col-12 md:col-6">
        <div className="secondary-sm col-7 flex flex-col">
          <div className="InvestmentList__founders color-charcoal uppercase">
            {item.company.founders?.map((founder: Founder) => (
              <div>{generateFounderFullName(founder)} </div>
            ))}
          </div>
          <div className="primary-sm color-lilac uppercase">{item.company.name}</div>
          {item.company.tag && <div className="py1_25 md:pb0 md:pt1_5">{item.company.tag}</div>}
        </div>

        <div className="InvestmentsList__logo-container col-5 flex flex-col items-end md:items-start">
          <Img
            src={item.company.logo.src}
            alt={item.company.logo.alt || Language.t('Global.fallbackAltLabel')}
            className="InvestmentsList__logo w100 h100 fit-contain"
          />
        </div>
      </div>

      <div className="InvestmentsList__description-container color-charcoal primary-md col-12 md:col-6">
        <span className="InvestmentsList__description secondary-sm">
          <PortableText blocks={item.description.paragraph} />{' '}
        </span>

        {item.description.button?.link && (
          <span className="InvestmentsList__button secondary-sm">
            <Button
              wrap={true}
              className="inline-flex items-center text-decoration-none secondary-sm-bold vertical-align-middle color-charcoal"
              to={item.description.button.link}
              onMouseEnter={() => setHoverButton(true)}
              onMouseLeave={() => setHoverButton(false)}
              ariaLabel={item.description.button.label}
            >
              <LineIcon
                className={cx('InvestmentsList__button-line-icon mr_25', {
                  'InvestmentsList__button-line-icon--style-hover': hoverButton,
                })}
                color="charcoal"
              />
              {item.description.button.label}
              <span
                className={cx('InvestmentsList__button-placeholder-div opacity-1 events-none', {
                  'InvestmentsList__button-placeholder-div--style-full-width': !hoverButton,
                  'InvestmentsList__button-placeholder-div--style-no-width': hoverButton,
                })}
              ></span>
            </Button>
          </span>
        )}
      </div>
    </div>
  );
};
