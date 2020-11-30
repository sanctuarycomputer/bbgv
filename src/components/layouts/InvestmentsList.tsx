import React, { useState } from 'react';
import cx from 'classnames';
import withBreakpoints, {
  MediaQuery,
  InjectedProps as WithBreakpointsProps,
} from 'lib/withBreakpoints';
import { InvestmentsListItem } from 'lib/cms/types';
import { Button } from 'components/base';
import { LineIcon } from 'components/icons';
import PortableText from 'components/PortableText';

type PassedProps = {
  className?: string;
  heading: string;
  items: InvestmentsListItem[];
};

//TO-DO: remove state for button hover.

type Props = PassedProps & WithBreakpointsProps;
const InvestmentsList: React.FC<Props> = ({ heading, items, className, mediaQuery }) => {
  return (
    <div className={cx(`InvestmentsList col-12 flex flex-row flex-wrap`, className)}>
      <div className="InvestmentsList__heading uppercase color-charcoal primary-sm pb2_25 md:pb3_75">
        {/* {heading} */}
      </div>

      {items.map((item: InvestmentsListItem) => (
        <div key="" className="InvestmentsList__item col-12">
          {InvestmentListItem(item, mediaQuery)}
        </div>
      ))}
    </div>
  );
};

export default withBreakpoints<Props>(InvestmentsList);

const InvestmentListItem = (item: InvestmentsListItem, mediaQuery: MediaQuery) => {
  const [hoverButton, setHoverButton] = useState(false);
  const breakpointIsMdUp = mediaQuery.isMediumUp;

  return (
    <div className="InvestmentsList__item-inner-container col-12 flex flex-row py1_5">
      <div className="secondary-sm col-3 pr1 md:pr0">{item.company.name}</div>
      <div className="InvestmentsList__heading-container primary-md col-8">
        <span className="">
          <PortableText blocks={item.description.paragraph} />{' '}
        </span>

        {item.description.button?.link && (
          <span className="InvestmentsList__button">
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
