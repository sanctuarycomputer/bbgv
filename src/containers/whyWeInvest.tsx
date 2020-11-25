import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { WhyWeInvestPage as IWhyWeInvestPage } from '../lib/cms/types';
import ContainerBase from 'lib/containerBase';

import * as Pages from 'state/actions/pagesActions';
import * as Application from 'state/actions/applicationActions';

export type Props = ReturnType<typeof mapDispatchToProps> & RouteComponentProps<{}>;

class WhyWeInvest extends ContainerBase<
  Props,
  IWhyWeInvestPage,
  typeof import('views/whyWeInvest').default
> {
  beforeModel = () => {
    this.props.actions.setTheme('chalk');

    return Promise.resolve();
  };

  model = this.props.actions.fetchWhyWeInvestPage;
  view = import('views/whyWeInvest');
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(
    {
      fetchWhyWeInvestPage: Pages.fetchWhyWeInvestPage,
      setTheme: Application.setTheme,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(WhyWeInvest);
