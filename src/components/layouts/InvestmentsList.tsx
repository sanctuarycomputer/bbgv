import React, { useState } from 'react';
import cx from 'classnames';
import withBreakpoints, {
  MediaQuery,
  InjectedProps as WithBreakpointsProps,
} from 'lib/withBreakpoints';
import { InvestmentsListItem, Founder, Company } from 'lib/cms/types';
import generateFounderFullName from 'utils/generateFounderFullName';

import { Img, Button } from 'components/base';
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
  console.log(heading);
  return (
    <div className={cx(`InvestmentsList col-12 flex flex-row flex-wrap`, className)}>
      <div className="InvestmentsList__heading uppercase color-charcoal primary-sm pb_75 md:pb2_25">
        {heading}
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
      <div className="secondary-sm col-3 pr1 md:pr0 flex flex-col">
        <div className="InvestmentList__founders uppercase">
          {item.company.founders?.map((founder: Founder) => (
            <div>{generateFounderFullName(founder)} </div>
          ))}
        </div>
        <div className="primary-sm color-lilac uppercase">{item.company.name}</div>
        {item.company.tag && <div className="md:pt1_5">{item.company.tag}</div>}
      </div>

      <div className="InvestmentsList__logo-container col-3">
        <Img src={item.company.logo} className="w100 h100" />
      </div>

      <div className="InvestmentsList__description primary-md col-6">
        <span className="secondary-sm">
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
