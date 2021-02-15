import React, { Component } from 'react';
import Player from '@vimeo/player';
import cx from 'classnames';
import get from 'lodash/get';

interface Props {
  vimeoId: string;
  className?: string;
}

interface State {
  player: Player | null;
  error: boolean;
}

class Video extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      player: null,
      error: false,
    };
  }

  componentDidMount() {
    const vimeoId = get(this, 'props.vimeoId');
    if (vimeoId) {
      this.initializePlayer();
    } else {
      this.setState({ error: true });
    }
  }

  initializePlayer = () => {
    const vimeoId = get(this, 'props.vimeoId');

    const player = new Player(vimeoId, {
      id: vimeoId,
      controls: true,
      loop: false,
    });

    this.setState({ player });
  };

  render() {
    const { className, vimeoId } = this.props;
    const { error } = this.state;

    return (
      <div className={cx('Video bg-color-black h100', className)}>
        {!error && vimeoId && (
          <div className="Video__video-container relative flex items-center justify-center h100">
            <div className="flex col-12">
              <div className="Video__video-wrapper w100 h100 flex justify-center transition">
                <div id={vimeoId} className="w100 h100" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Video;
