import { Component } from 'react';

export interface RouteObject {
  path: string;
  exact: boolean;
  component?: any;
  base?: string;
}

export class View<Props extends ViewProps, State = {}> extends Component<Props, State> {}

export interface ViewProps {
  model: any;
}
