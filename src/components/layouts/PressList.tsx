import React, { useState } from 'react';
import cx from 'classnames';
import { PressListItem } from 'lib/cms/types';
import { Button } from 'components/base';
import { LineIcon } from 'components/icons';

type Props = {
  className?: string;
  items: PressListItem[];
};

const PressList: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={cx(`PressList ${className} flex flex-row flex-wrap secondary-sm`)}>
      {items.map((item: PressListItem) => (
        <div key={item.heading} className="PressList__item">
          {PressItem(item)}
        </div>
      ))}
    </div>
  );
};

export default PressList;

const PressItem = (item: PressListItem) => {
  const [hoverButton, setHoverButton] = useState(false);

  return (
    <div className="PressList__item-inner-container flex flex-row py1_5">
      <div className={cx(`PressList__source secondary-sm col-2 md:col-3`)}>{item.source}</div>
      <div className="PressList__heading-container primary-md col-8">
        <span className="mr1_5">{item.heading}</span>
        <span className="PressList__button">
          <Button
            wrap={true}
            className={cx(
              `inline-flex items-center text-decoration-none secondary-sm-bold vertical-align-middle color-charcoal`
            )}
            to={item.link.link}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
            ariaLabel={item.link.label}
          >
            <LineIcon
              className={cx('PressList__button-line-icon mr_25', {
                'PressList__button-line-icon--style-hover': hoverButton,
              })}
              color="charcoal"
            />
            {item.link.label}
            <span
              className={cx('PressList__button-placeholder-div opacity-1 events-none', {
                'PressList__button-placeholder-div--style-full-width': !hoverButton,
                'PressList__button-placeholder-div--style-no-width': hoverButton,
              })}
            ></span>
          </Button>
        </span>
      </div>
    </div>
  );
};
