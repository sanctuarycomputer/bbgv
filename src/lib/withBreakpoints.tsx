import React, { Component, ComponentType } from 'react';

import { Subtract } from 'utility-types';

export type CurrentBreakpoint = string | null;

export interface InjectedProps {
  currentBreakpoint: string;
}

export interface Breakpoint {
  label: string;
  lowerBound: number;
  upperBound: number;
}

export interface State {
  currentBreakpoint: CurrentBreakpoint;
}

export const Breakpoints: {
  [id: string]: Breakpoint;
} = {
  EXTRA_SMALL: {
    label: 'EXTRA_SMALL',
    lowerBound: 0,
    upperBound: 600,
  },
  SMALL: {
    label: 'SMALL',
    lowerBound: 600,
    upperBound: 768,
  },
  MEDIUM: {
    label: 'MEDIUM',
    lowerBound: 768,
    upperBound: 1024,
  },
  LARGE: {
    label: 'LARGE',
    lowerBound: 1024,
    upperBound: 1440,
  },
  EXTRA_LARGE: {
    label: 'EXTRA_LARGE',
    lowerBound: 1440,
    upperBound: 1900,
  },
  EXTRA_EXTRA_LARGE: {
    label: 'EXTRA_EXTRA_LARGE',
    lowerBound: 1900,
    upperBound: 1000000,
  },
};

const withBreakpoints = <WrappedComponentProps extends InjectedProps>(
  WrappedComponent: ComponentType<WrappedComponentProps>
) => {
  class WithBreakpoints extends Component<Subtract<WrappedComponentProps, InjectedProps>, State> {
    constructor(props: WrappedComponentProps) {
      super(props);

      this.state = {
        currentBreakpoint: this.getCurrentBreakpoint(),
      };
    }

    componentDidMount() {
      window.addEventListener('resize', this.checkBreakpoints);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.checkBreakpoints);
    }

    checkBreakpoints = () => {
      let currentBreakpoint: CurrentBreakpoint = this.getCurrentBreakpoint();

      if (currentBreakpoint !== this.state.currentBreakpoint) {
        this.setState({ currentBreakpoint });
      }
    };

    getCurrentBreakpoint = (): CurrentBreakpoint => {
      const currentViewportWidth: number = Math.round(window.innerWidth);

      return (
        Object.keys(Breakpoints).find(
          (key) =>
            Breakpoints[key].lowerBound <= currentViewportWidth &&
            Breakpoints[key].upperBound > currentViewportWidth
        ) || null
      );
    };

    render() {
      return (
        <WrappedComponent
          {...(this.props as WrappedComponentProps)}
          currentBreakpoint={this.state.currentBreakpoint}
        />
      );
    }
  }

  return WithBreakpoints;
};

export default withBreakpoints;
