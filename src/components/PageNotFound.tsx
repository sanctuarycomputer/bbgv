import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Language from 'constants/Language';

import { setTheme } from 'state/actions/applicationActions';

import Meta from 'components/Meta';
import LineIconWithButton from 'components/icons/LineIconWithButton';

import { Theme } from 'types';

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
        <div className="bg-color-mulberry site-padding-x">
          <div className="mxauto col-12 lg:col-8 xxl:col-7 px_75lg:px1_5 vh100 color-white flex flex-col justify-center">
            <div className="">
              <span className="primary-sm pr3_75 vertical-align-middle inline">
                {Language.t('PageNotFound.error404')}
              </span>

              <span className="primary-xl vertical-align-middle">
                {Language.t('PageNotFound.heading')}
              </span>

              <p className="secondary-sm color-white md:col-8 pt1_5 md:pt2_25">
                {Language.t('PageNotFound.description')}
              </p>

              <p className="secondary-sm color-white md:col-8 pt1_5 md:pt2_25">
                {Language.t('PageNotFound.solutions')}
                <LineIconWithButton
                  color="white"
                  link="/"
                  label={Language.t('PageNotFound.homePageButtonLabel')}
                />
              </p>
            </div>
          </div>
        </div>
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
