import memoize from 'lodash/memoize';

import get from 'lodash/get';

import { ParagraphWithHeading } from 'lib/cms/types';

export default memoize(
  (data: unknown): ParagraphWithHeading => {
    return {
      _type: get(data, '_type', 'paragraphWithHeading'),
      paragraph: get(data, 'paragraph', []),
      heading: get(data, 'heading', ''),
      button: get(data, 'button', {}),
    };
  }
);
