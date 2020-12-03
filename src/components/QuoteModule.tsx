import React from 'react';
import cx from 'classnames';
import { QuoteModule as IQuoteModule } from 'lib/cms/types';
import PortableText from 'components/PortableText';
import LineIcon from 'components/icons/LineIcon';

type Props = {
  className?: string;
  contents: IQuoteModule;
};

const QuoteModule: React.FC<Props> = ({ className, contents }) => {
  return (
    <div className={cx('QuoteModule col-12 my5 md:py5 bg-color-mulberry', className)}>
      <div className="QuoteModule__inner-container col-12 md:col-6 mxauto">
        <span className="QuoteModule__quote color-chalk">
          <PortableText blocks={contents.quote} />
        </span>
        {contents.source && (
          <span className="primary-md flex items-center color-lilac">
            <LineIcon className="QuoteModule__line-icon mr1_5" color="lilac" />
            <span className="primary-md">{contents.source}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default QuoteModule;
