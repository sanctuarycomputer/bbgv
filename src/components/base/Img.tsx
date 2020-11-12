import React, { Component } from 'react';

import cx from 'classnames';
import getImageRatio from 'utils/getImageRatio';
import { ImageDimensions, ImageCrop } from 'lib/cms/types';

interface Props {
  alt: string;
  children: React.ReactNode;
  className: string;
  crop?: ImageCrop;
  dimensions?: ImageDimensions;
  isBg: boolean;
  onMount: () => any;
  onImgLoad: () => any;
  sizes?: string;
  src: string;
  srcSet?: string;
  style: React.CSSProperties;
  styleName: string;
}

interface State {
  loaded: boolean;
  classes: string;
  styles: string;
}

const defaultProps = {
  isBg: false,
  className: 'w100',
  children: null,
  styleName: '',
  style: {},
  onMount: () => {},
  onImgLoad: () => {},
};

class Img extends Component<Props, State> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);

    this.props.onMount();
    const { src } = this.props;
    const loader = new (window as any).Image();
    loader.src = '';
    loader.onload = () => this.didLoad();
    loader.onerror = () => console.error('Error loading ' + src);
    loader.src = src;

    this.state = {
      loaded: false,
      classes: cx('Img preload', props.className),
      styles: cx('Img', props.styleName),
    };
  }

  didLoad() {
    const classes = this.props.className;
    const loaded = true;
    this.props.onImgLoad();
    this.setState({ classes, loaded });
  }

  render() {
    const { src, alt, style, isBg, children, srcSet, sizes, crop, dimensions } = this.props;
    const { classes, loaded } = this.state;
    const bgStyle = {
      backgroundColor: 'white',
      backgroundImage: `url(${src})`,
      ...style,
    };

    const styleNames = cx('Img', {
      'opacity-0': !loaded,
    });

    if (isBg) {
      return (
        <div className={cx(styleNames, classes)} style={bgStyle}>
          {children}
        </div>
      );
    }

    if (!srcSet && !sizes) {
      return <img className={cx(styleNames, classes)} style={style} src={src} alt={alt} />;
    }

    return (
      <>
        {dimensions && <div style={{ paddingTop: `${getImageRatio(dimensions, crop)}%` }} />}
        <img
          className={cx(styleNames, {
            'absolute t0 r0 l0 w100': dimensions,
          })}
          style={style}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
        />
      </>
    );
  }
}

export default Img;
