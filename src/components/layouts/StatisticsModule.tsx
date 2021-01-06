import React from 'react';
import cx from 'classnames';
import { Fact as IFact } from 'lib/cms/types';
import PortableText from 'components/PortableText';
import { LineIconWithButton } from 'components/icons';

type Props = {
  className?: string;
  facts: IFact[];
};

const StatisticsModule: React.FC<Props> = ({ facts, className }) => {
  return (
    <div
      className={cx(
        'StatisticsModule bg-color-mulberry color-chalk site-max-width site-padding-x mxauto px_75 md:px1_5 xl:px15 pt6 md:pt7_5',
        className
      )}
    >
      {facts.map((fact: IFact) => (
        <div
          key={fact.leftHeading || fact.rightHeading}
          className="StatisticsModule__fact col-12 md:col-8 pb6 md:pb15"
        >
          {Fact(fact)}
        </div>
      ))}
    </div>
  );
};

export default StatisticsModule;

const Fact = (fact: IFact) => {
  const hasFullWidthHeading = fact.leftHeading && !fact.rightHeading;

  return (
    <div className="StatisticsModule__fact-inner-container flex flex-col">
      <div className="flex flex-row pb1_25 md:pb2_25">
        {fact.leftHeading && (
          <span
            className={cx(
              'StatisticsModule__heading primary-xxl color-lilac vertical-align-middle left hyphens',
              {
                'col-12': hasFullWidthHeading,
                'col-4': !hasFullWidthHeading,
              }
            )}
          >
            {fact.leftHeading}
          </span>
        )}

        {fact.rightHeading && (
          <span className="StatisticsModule__heading primary-lg color-chalk vertical-align-middle col-8">
            {fact.rightHeading}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-end col-4">
          <div className="StatisticsModule__line-icon md:mr1_25"></div>
        </div>

        <div className="StatisticsModule__paragraph vertical-align-middle secondary-sm col-8 pb1_5 md:pb0">
          <PortableText blocks={fact.paragraphWithButton.paragraph} />
          {fact.paragraphWithButton.button && (
            <LineIconWithButton
              link={fact.paragraphWithButton.button.link}
              color="chalk"
              label={fact.paragraphWithButton.button.label}
            />
          )}
        </div>
      </div>
    </div>
  );
};
