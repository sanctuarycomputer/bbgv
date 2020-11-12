import React from 'react';
import { HomePage } from '../lib/cms/types';
import { View } from 'types';

interface Props {
  model: HomePage | null;
}

class HomeView extends View<Props> {
  render() {
    const { model } = this.props;

    //TO-DO: Add Page Not Found
    if (!model) {
      return null;
    }

    return <div className="HomeView">Home</div>;
  }
}

export default HomeView;
