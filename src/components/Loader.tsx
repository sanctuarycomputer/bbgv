import React, { FC } from 'react';
import Language from 'constants/Language';

import { Img } from 'components/base';

const Loader: FC<{}> = () => (
  <div className="Loader bg-color-chalk vw100 vh100 flex items-center justify-center">
    <div className="Loader__bar" />
  </div>
);

export default Loader;
