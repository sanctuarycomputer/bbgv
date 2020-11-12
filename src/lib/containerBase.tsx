import React, { Component } from 'react';

import { RouteComponentProps } from 'react-router-dom';

interface State<Model> {
  view: React.ComponentType | null;
  model: Model | { error: Error | null } | null;
}

interface ContainerBase<Props extends RouteComponentProps, View, Model = {}> {
  // Can't seem to enforce a dynamic import type
  view: Promise<any>;
  model(): Promise<Model>;
  redirect?(): void;
  beforeModel?(): void;
  activate?(arg: Model | { error: Error | null }): void;
  afterModel?(arg: Model | { error: Error | null }): void;
}

abstract class ContainerBase<Props extends RouteComponentProps, View, Model = {}> extends Component<
  Props,
  State<Model>
> {
  state: State<Model> = {
    view: null,
    model: null,
  };

  reloadModel = () => {
    this.runHooks().then((model) => {
      if (this.activate) this.activate(model);
      this.setState({ model });
    });
  };

  runHooks = (): Promise<Model | { error: Error | null }> => {
    return new Promise(async (resolve) => {
      let model;
      try {
        if (this.beforeModel) await this.beforeModel();
        const modelHook = this.model || (() => Promise.resolve({} as Model));
        model = await modelHook();
        if (!model) model = { error: null };
      } catch (error) {
        model = { error };
      }
      if (this.afterModel) await this.afterModel(model);
      resolve(model);
    });
  };

  async componentDidMount() {
    if (this.redirect) this.redirect();
    const [{ default: View }, model] = await Promise.all([this.view, this.runHooks()]);

    if (this.activate) this.activate(model);
    this.setState({ view: View, model });
  }

  async componentDidUpdate(nextProps: Props) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      if (this.redirect) this.redirect();
      const [{ default: View }, model] = await Promise.all([this.view, this.runHooks()]);
      if (this.activate) this.activate(model);
      this.setState({ view: View, model });
    }
  }

  render() {
    const { view: View, model } = this.state;

    return View ? <View model={model} {...this.props} {...this.state} /> : null;
  }
}

export default ContainerBase;
