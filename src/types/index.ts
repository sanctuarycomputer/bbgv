import { Component } from 'react';
import { AnyAction } from 'state/actions';
import { ThunkAction } from 'types/redux-thunk';
import rootReducer from 'state/reducers';

export interface RouteObject {
  path: string;
  exact: boolean;
  component?: any;
  base?: string;
}

export type GlobalState = ReturnType<ReturnType<typeof rootReducer>>;

export type Action = AnyAction;

export enum Status {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}

export type Theme = 'default' | 'white';

export type ThunkResult<R> = ThunkAction<R, GlobalState, undefined, Action>;

export class View<Props extends ViewProps, State = {}> extends Component<Props, State> {}

export interface ViewProps {
  model: any;
}

declare module 'react-redux' {
  interface DefaultRootState extends GlobalState {}
}
