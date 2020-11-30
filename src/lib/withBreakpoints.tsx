import React, { Component, ComponentType } from 'react';

import { Subtract } from 'utility-types';

export type CurrentBreakpoint = string | null;
export type MediaQuery = {
  isExtraSmallUp: boolean;
  isSmallUp: boolean;
  isMediumUp: boolean;
  isLargeUp: boolean;
  isExtraLargeUp: boolean;
};
export interface InjectedProps {
  currentBreakpoint: string;
  mediaQuery: MediaQuery;
}

export interface Breakpoint {
  label: string;
  lowerBound: number;
  upperBound: number;
}

export interface State {
  currentBreakpoint: CurrentBreakpoint;
  mediaQuery: MediaQuery;
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

      const currentBreakpoint = this.getCurrentBreakpoint();
      this.state = {
        currentBreakpoint,
        mediaQuery: this.getCurrentMediaQuery(currentBreakpoint),
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
        this.setState({
          currentBreakpoint,
          mediaQuery: this.getCurrentMediaQuery(currentBreakpoint),
        });
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

    getCurrentMediaQuery = (currentBreakpoint: CurrentBreakpoint) => {
      if (currentBreakpoint) {
        return {
          isExtraSmallUp: [
            Breakpoints.SMALL.label,
            Breakpoints.MEDIUM.label,
            Breakpoints.LARGE.label,
            Breakpoints.EXTRA_LARGE.label,
            Breakpoints.EXTRA_EXTRA_LARGE.label,
          ].includes(currentBreakpoint),
          isSmallUp: [
            Breakpoints.MEDIUM.label,
            Breakpoints.LARGE.label,
            Breakpoints.EXTRA_LARGE.label,
            Breakpoints.EXTRA_EXTRA_LARGE.label,
          ].includes(currentBreakpoint),
          isMediumUp: [
            Breakpoints.LARGE.label,
            Breakpoints.EXTRA_LARGE.label,
            Breakpoints.EXTRA_EXTRA_LARGE.label,
          ].includes(currentBreakpoint),
          isLargeUp: [Breakpoints.EXTRA_LARGE.label, Breakpoints.EXTRA_EXTRA_LARGE.label].includes(
            currentBreakpoint
          ),
          isExtraLargeUp: [Breakpoints.EXTRA_EXTRA_LARGE.label].includes(currentBreakpoint),
        };
      }

      return {
        isExtraSmallUp: false,
        isSmallUp: false,
        isMediumUp: false,
        isLargeUp: false,
        isExtraLargeUp: false,
      };
    };

    render() {
      return (
        <WrappedComponent
          {...(this.props as WrappedComponentProps)}
          currentBreakpoint={this.state.currentBreakpoint}
          mediaQuery={this.state.mediaQuery}
        />
      );
    }
  }

  return WithBreakpoints;
};

export default withBreakpoints;
