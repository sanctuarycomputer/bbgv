import { RouteComponentProps } from 'react-router-dom';
import { HomePage } from '../lib/cms/types';

import ContainerBase from 'lib/containerBase';
import ApiClient from 'lib/cms/ApiClient';

interface StateProps {
  model: HomePage | null;
}

type Props = RouteComponentProps & StateProps;

class Home extends ContainerBase<Props, typeof HomePage> {
  model = (): any => {
    return ApiClient.fetchHome();
  };

  view = import('views/home');
}

export default Home;
