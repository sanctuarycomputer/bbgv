import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { CompanyDetailPage as ICompanyDetailPage } from '../lib/cms/types';
import ContainerBase from 'lib/containerBase';

import * as Pages from 'state/actions/pagesActions';
import * as Application from 'state/actions/applicationActions';

export type Props = ReturnType<typeof mapDispatchToProps> & RouteComponentProps<{ id: string }>;

class CompanyDetail extends ContainerBase<
  Props,
  ICompanyDetailPage,
  typeof import('views/companyDetail').default
> {
  beforeModel = () => {
    this.props.actions.setTheme('default');

    return Promise.resolve();
  };
  model = () => this.props.actions.fetchCompanyDetailPage(this.props.match.params.id);
  view = import('views/companyDetail');
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(
    {
      fetchCompanyDetailPage: Pages.fetchCompanyDetailPage,
      setTheme: Application.setTheme,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(CompanyDetail);
