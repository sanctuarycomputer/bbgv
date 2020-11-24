import React, { useState } from 'react';
import cx from 'classnames';
import withBreakpoints, { InjectedProps as WithBreakpointsProps } from 'lib/withBreakpoints';
import { PressListItem } from 'lib/cms/types';
import { Button } from 'components/base';
import { LineIcon } from 'components/icons';

type PassedProps = {
  className?: string;
  items: PressListItem[];
};

//TO-DO: remove state for button hover.

type Props = PassedProps & WithBreakpointsProps;

const PressList: React.FC<Props> = ({ items, className, currentBreakpoint }) => {
  return (
    <div className={cx(`PressList ${className} col-12 flex flex-row flex-wrap secondary-sm`)}>
      {items.map((item: PressListItem) => (
        <div key={item.heading} className="PressList__item col-12">
          {PressItem(item, currentBreakpoint)}
        </div>
      ))}
    </div>
  );
};

export default withBreakpoints<Props>(PressList);

const PressItem = (item: PressListItem, currentBreakpoint: string) => {
  const [hoverButton, setHoverButton] = useState(false);
  const breakpointIsSmDown = ['EXTRA_SMALL', 'SMALL'].includes(currentBreakpoint);

  return (
    <div className="PressList__item-inner-container col-12 flex flex-row py1_5">
      <div className={cx(`PressList__source secondary-sm col-3 pr1 md:pr0`)}>{item.source}</div>
      <div className="PressList__heading-container primary-md col-8">
        <span className="mr1_5">{item.heading}</span>
        <span
          className={cx('PressList__button', {
            block: breakpointIsSmDown,
          })}
        >
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
