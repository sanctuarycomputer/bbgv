import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { HomePage } from '../lib/cms/types';
import ContainerBase from 'lib/containerBase';

import * as Pages from 'state/actions/pagesActions';

export type Props = ReturnType<typeof mapDispatchToProps> & RouteComponentProps<{}>;

class Home extends ContainerBase<Props, HomePage, typeof import('views/home').default> {
  model = this.props.actions.fetchHome;
  view = import('views/home');
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(
    {
      fetchHome: Pages.fetchHome,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Home);
