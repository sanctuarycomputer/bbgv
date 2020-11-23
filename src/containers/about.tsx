import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { AboutPage as IAboutPage } from '../lib/cms/types';
import ContainerBase from 'lib/containerBase';

import * as Pages from 'state/actions/pagesActions';
import * as Application from 'state/actions/applicationActions';

export type Props = ReturnType<typeof mapDispatchToProps> & RouteComponentProps<{}>;

class About extends ContainerBase<Props, IAboutPage, typeof import('views/about').default> {
  beforeModel = () => {
    this.props.actions.setTheme('default');

    return Promise.resolve();
  };

  model = this.props.actions.fetchAboutPage;
  view = import('views/about');
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(
    {
      fetchAboutPage: Pages.fetchAboutPage,
      setTheme: Application.setTheme,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(About);
