import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { DefaultPage as IDefaultPage } from '../lib/cms/types';
import ContainerBase from 'lib/containerBase';

import * as Pages from 'state/actions/pagesActions';
import * as Application from 'state/actions/applicationActions';

export type Props = ReturnType<typeof mapDispatchToProps> & RouteComponentProps<{ id: string }>;
class Default extends ContainerBase<Props, IDefaultPage, typeof import('views/default').default> {
  beforeModel = () => {
    this.props.actions.setTheme('default');

    return Promise.resolve();
  };
  model = () => this.props.actions.fetchDefaultPage(this.props.match.params.id);
  view = import('views/default');
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(
    {
      fetchDefaultPage: Pages.fetchDefaultPage,
      setTheme: Application.setTheme,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Default);
