import React, { FC } from 'react';
import Language from 'constants/Language';

import { Img } from 'components/base';

const Loader: FC<{}> = () => (
  <div className="Loader bg-color-chalk vw100 vh100 flex items-center justify-center">
    <Img
      className="Loader__svg"
      alt={Language.t('Global.loaderAltLabel')}
      src="assets/images/loader.svg"
    />
  </div>
);

export default Loader;
