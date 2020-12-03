import memoize from 'lodash/memoize';

import get from 'lodash/get';

import { QuoteModule } from 'lib/cms/types';

export default memoize(
  (data: unknown): QuoteModule => {
    const id = get(data, '_key', '');

    return {
      id,
      type: get(data, '_type', 'quoteModule'),
      quote: get(data, 'quote', []),
      source: get(data, 'source', ''),
    };
  }
);
