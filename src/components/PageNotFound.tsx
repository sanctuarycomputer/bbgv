import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import cx from 'classnames';

import { setTheme } from 'state/actions/applicationActions';

import Meta from 'components/Meta';
import TextModuleWithParagraphs from 'components/layouts/TextModuleWithParagraphs';

import { Theme } from 'types';

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
        <div className="bg-color-mulberry">
          <div className="TextModuleWithParagraphs--inner-container mxauto col-12 lg:col-8 xxl:col-7 px_75lg:px1_5 vh100 color-white flex flex-col justify-center">
            <span
              className={cx(
                `TextModuleWithParagraphs__subheading primary-sm pr3_75 vertical-align-middle inline`
              )}
            >
              Error 404
            </span>

            <span
              className={cx(
                `TextModuleWithParagraphs__heading TextModuleWithParagraphs--style-$__heading primary-xl vertical-align-middle`
              )}
            >
              We weren't able to find the page you were looking for.
            </span>
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
