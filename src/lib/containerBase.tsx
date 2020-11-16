import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type State<Model, View> /* Loading State (optional) */ =
  | {
      model: null;
      view: null;
      error: null;
    }
  | /* Success State */ {
      model: Model;
      view: View;
      error: null;
    }
  | /* Error State */ {
      model: null;
      view: null;
      error: Error;
    };

export default interface ContainerBase<
  Props extends RouteComponentProps,
  Model,
  View extends React.ComponentType<{ model: Model } & Props>
> {
  view: Promise<{ default: View }>;
  errorView: React.ComponentType<{ error?: Error }>;
  loadingView?: React.ComponentType;
  model(): Promise<Model>;
  redirect?(): void;
  beforeModel?(): Promise<void>;
  activate?(arg: Model): void;
  afterModel?(arg: Model): Promise<any>;
}

export default abstract class ContainerBase<
  Props extends RouteComponentProps,
  Model,
  View extends React.ComponentType<{ model: Model } & Props>
> extends Component<Props, State<Model, View>> {
  state: State<Model, View> = {
    model: null,
    view: null,
    error: null,
  };

  reloadModel = async () => {
    try {
      const model = await this.runHooks();
      if (this.activate) this.activate(model);
      this.setState({ model, error: null });
    } catch (error) {
      this.setState({
        model: null,
        error: error || new Error('unknown'),
        view: null,
      });
    }
  };

  runHooks = async (): Promise<Model> => {
    if (this.beforeModel) await this.beforeModel();
    const model = await this.model();
    if (this.afterModel) await this.afterModel(model);
    return model;
  };

  async componentDidMount() {
    return this.onRouteChange();
  }

  async componentDidUpdate(nextProps: Props) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.onRouteChange();
    }
  }

  async onRouteChange() {
    if (this.redirect) this.redirect();
    try {
      const [view, model] = await Promise.all([this.view, this.runHooks()]);
      this.setState({
        model,
        view: view.default,
        error: null,
      });
    } catch (error) {
      this.setState({
        model: null,
        view: null,
        error: error || new Error('unknown'),
      });
    }
  }

  render() {
    const { model, error, view } = this.state;

    if (error) {
      return React.createElement(this.errorView, { error });
    }

    if (model && view) {
      return React.createElement(view, {
        model: model,
        ...this.props,
      });
    }

    if (this.loadingView) {
      return React.createElement(this.loadingView);
    }

    return null;
  }
}
