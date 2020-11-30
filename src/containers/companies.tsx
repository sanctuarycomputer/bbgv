import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { CompaniesPage as ICompaniesPage } from '../lib/cms/types';
import ContainerBase from 'lib/containerBase';

import * as Pages from 'state/actions/pagesActions';
import * as Application from 'state/actions/applicationActions';

export type Props = ReturnType<typeof mapDispatchToProps> & RouteComponentProps<{}>;

class Companies extends ContainerBase<
  Props,
  ICompaniesPage,
  typeof import('views/companies').default
> {
  beforeModel = () => {
    this.props.actions.setTheme('default');

    return Promise.resolve();
  };

  model = this.props.actions.fetchCompaniesPage;
  view = import('views/companies');
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(
    {
      fetchCompaniesPage: Pages.fetchCompaniesPage,
      setTheme: Application.setTheme,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Companies);
