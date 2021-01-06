import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { setTheme } from 'state/actions/applicationActions';

// import Nav from 'components/Nav';
import Meta from 'components/Meta';

import { Theme } from 'types';
// import { PageNotFound as IPageNotFound } from 'sharedTypes';

// import Language from 'constants/Language';

interface DispatchProps {
  actions: {
    setTheme: (theme: Theme) => void;
  };
}

type Props = DispatchProps;

class PageNotFound extends Component<Props> {
  constructor(props: Props) {
    super(props);

    props.actions.setTheme('chalk');
  }

  render() {
    return (
      <>
        <Meta />
        <div>Page not found</div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  actions: bindActionCreators(
    {
      setTheme,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(PageNotFound);
