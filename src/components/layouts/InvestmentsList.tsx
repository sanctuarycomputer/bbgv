import React from 'react';
import cx from 'classnames';

import { InvestmentsListItem, Founder } from 'lib/cms/types';
import generateFullName from 'utils/generateFullName';
import Language from 'constants/Language';

import { Img } from 'components/base';
import { LineIconWithButton } from 'components/icons';
import PortableText from 'components/PortableText';

type Props = {
  className?: string;
  heading: string;
  items: InvestmentsListItem[];
};

const InvestmentsList: React.FC<Props> = ({ heading, items, className }) => {
  return (
    <div className={cx('InvestmentsList col-12 flex flex-row flex-wrap', className)}>
      <div className="InvestmentsList__heading uppercase color-charcoal primary-sm pb_75 md:pb2_25">
        {heading}
      </div>
      {items.map((item: InvestmentsListItem) => (
        <div key={item.company.name} className="InvestmentsList__item col-12">
          {InvestmentListItem(item)}
        </div>
      ))}
    </div>
  );
};

export default InvestmentsList;

const InvestmentListItem = (item: InvestmentsListItem) => {
  return (
    <div className="InvestmentsList__item-inner-container col-12 flex flex-col md:flex-row py1_5">
      <div className="flex flex-row col-12 md:col-6">
        <div className="secondary-sm col-7 flex flex-col">
          <div className="InvestmentList__founders color-charcoal uppercase">
            {item.company.founders?.map((founder: Founder) => (
              <div>{generateFullName(founder)} </div>
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

      <div className="InvestmentsList__description-container color-charcoal secondary-sm col-12 md:col-6">
        <span className="InvestmentsList__description secondary-sm">
          <PortableText blocks={item.description.paragraph} />
        </span>

        {item.description.button?.link && (
          <LineIconWithButton
            link={item.description.button?.link}
            color="charcoal"
            label={item.description.button?.label}
          />
        )}
      </div>
    </div>
  );
};