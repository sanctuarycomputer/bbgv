import React, { useState } from 'react';
import cx from 'classnames';
import withBreakpoints, {
  MediaQuery,
  InjectedProps as WithBreakpointsProps,
} from 'lib/withBreakpoints';
import { PressListItem } from 'lib/cms/types';
import { Button } from 'components/base';
import { LineIconWithButton } from 'components/icons';

type PassedProps = {
  className?: string;
  variant: string;
  heading?: string;
  items: PressListItem[];
};

type Props = PassedProps & WithBreakpointsProps;
const PressList: React.FC<Props> = ({ heading, items, className, variant, mediaQuery }) => {
  return (
    <div
      className={cx(
        `PressList PressList--style-${variant} col-12 flex flex-row flex-wrap secondary-sm`,
        className
      )}
    >
      {heading && (
        <div className="PressList__heading color-charcoal primary-sm pb2_25 md:pb2_25">
          {heading}
        </div>
      )}
      {items.map((item: PressListItem) => (
        <div key={item.heading} className="PressList__item col-12">
          {PressItem(item, mediaQuery)}
        </div>
      ))}
    </div>
  );
};

export default withBreakpoints<Props>(PressList);

const PressItem = (item: PressListItem, mediaQuery: MediaQuery) => {
  const breakpointIsMdUp = mediaQuery.isMediumUp;

  return (
    <div className="PressList__item-inner-container col-12 flex flex-row py1_5">
      <div className="PressList__source secondary-sm col-3 pr1 md:pr0">{item.source}</div>
      <div className="PressList__heading-container primary-md col-8">
        <span className="mr1_5">{item.heading}</span>
        <span
          className={cx('PressList__button', {
            block: !breakpointIsMdUp,
          })}
        >
          <LineIconWithButton link={item.link.link} color="charcoal" label={item.link.label} />
        </span>
      </div>
    </div>
  );
};
