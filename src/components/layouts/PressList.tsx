import React from 'react';
import cx from 'classnames';
import withBreakpoints, {
  MediaQuery,
  InjectedProps as WithBreakpointsProps,
} from 'lib/withBreakpoints';
import { PressListItem } from 'lib/cms/types';
import { Button } from 'components/base';
import { LineIcon } from 'components/icons';

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
        <div key={item.heading} className="PressList__item text-module-container-padding-x col-12">
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
        <span className="mr1_5 color-charcoal">{item.heading}</span>
        <span
          className={cx('PressList__button', {
            block: !breakpointIsMdUp,
          })}
        >
          {item.link.label && item.link.link && (
            <Button
              className="PressList__button inline secondary-bold-sm text-decoration-none bg-color-transparent color-lilac-very-dark vertical-align-middle inline-flex items-center"
              ariaLabel={item.link.label}
              to={item.link.link}
            >
              <LineIcon className="PressList__button-line-icon mr_25" color="lilac-very-dark" />
              {item.link.label}
            </Button>
          )}
        </span>
      </div>
    </div>
  );
};
