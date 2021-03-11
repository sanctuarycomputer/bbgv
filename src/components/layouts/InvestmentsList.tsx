import React, { useState, useEffect, useCallback } from 'react';
import cx from 'classnames';

import { InvestmentsListItem } from 'lib/cms/types';
import Language from 'constants/Language';

import { Img } from 'components/base';
import { LineIconWithButton } from 'components/icons';
import PortableText from 'components/PortableText';

type Props = {
  className?: string;
  heading: string;
  items: InvestmentsListItem[];
};

const investmentsListStartingAmountShown: number = 3;
const investmentsListMaximumAmountShown: number = 1000;

const InvestmentsList: React.FC<Props> = ({ heading, items, className }) => {
  const [listOfItems, setListOfItems] = useState(items);
  const [amountShown, setAmountShown] = useState(investmentsListStartingAmountShown);

  const didClickShowMore = () => {
    setAmountShown(investmentsListMaximumAmountShown);
  };

  useEffect(() => {
    setListOfItems(items);
    setAmountShown(investmentsListStartingAmountShown);
  }, [items]);

  const displayedItems = listOfItems.slice(0, amountShown);
  const hasMore = listOfItems.length > displayedItems.length;

  return (
    <div
      className={cx('InvestmentsList col-12 lg:col-10 mxauto flex flex-row flex-wrap', className)}
    >
      <div className="InvestmentsList__heading uppercase color-charcoal primary-sm pb_75 md:pb2_25">
        {heading}
      </div>
      <div className="InvestmentsList__items-container">
        {displayedItems.map((item: InvestmentsListItem, index: number) => (
          <div key={`InvestmentsList-${index}`} className="InvestmentsList__item col-12">
            {InvestmentListItem(item)}
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="InvestmentsList__pagination pt2 col-12">
          <LineIconWithButton
            onClick={didClickShowMore}
            color="lilac-very-dark"
            label={Language.t('Global.loadAll')}
          />
        </div>
      )}
    </div>
  );
};

export default InvestmentsList;

const InvestmentListItem = (item: InvestmentsListItem) => {
  return (
    <div className="InvestmentsList__item-inner-container col-12 flex flex-col md:flex-row py1_5">
      <div className="InvestmentsList__logo-container flex col-2 pb_75 md:pb0">
        <Img
          src={item.companyLogo.src}
          alt={item.companyLogo.alt || Language.t('Global.fallbackAltLabel')}
          className="InvestmentsList__logo w100 h100"
        />
      </div>
      <div className="InvestmentsList__description-container color-charcoal secondary-sm col-12 md:col-10">
        <span className="InvestmentsList__description secondary-sm">
          <PortableText blocks={item.description.paragraph} />
        </span>
        {item.description.button?.link && (
          <LineIconWithButton
            link={item.description.button?.link}
            color="lilac-very-dark"
            label={item.description.button?.label}
          />
        )}
      </div>
    </div>
  );
};
