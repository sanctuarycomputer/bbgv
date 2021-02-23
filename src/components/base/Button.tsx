import React, { Component, MouseEvent, RefObject } from 'react';
import { Link } from 'react-router-dom';

import cx from 'classnames';
import linkIsExternal from 'utils/linkIsExternal';

interface Props {
  className: string;
  containerClassName: string;
  style: React.CSSProperties;
  variant?: 'primary' | 'no-style';
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  ariaLabel: string;
  children?: React.ReactNode;
  to: string;
  isAnchor: boolean;
  openInCurrentTab: boolean;
  openInNewTab: boolean;
  onClick(e: MouseEvent<HTMLElement>): void;
  onMouseEnter(e: MouseEvent<HTMLElement>): void;
  onMouseLeave(e: MouseEvent<HTMLElement>): void;
  wrap: boolean;
  disabled: boolean;
  elemRef?: RefObject<HTMLAnchorElement | Link | HTMLButtonElement>;
}

const defaultProps = {
  className: '',
  containerClassName: '',
  style: {},
  to: '',
  isAnchor: false,
  openInCurrentTab: false,
  openInNewTab: false,
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  wrap: false,
  disabled: false,
};

class Button extends Component<Props> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      containerClassName,
      style,
      variant,
      type,
      label,
      ariaLabel,
      children,
      to,
      isAnchor,
      openInCurrentTab,
      openInNewTab,
      onClick,
      onMouseLeave,
      onMouseEnter,
      wrap,
      disabled,
      elemRef,
    } = this.props;

    const classes = cx(`Button pointer`, className, {
      [`Button--style-${variant}`]: !!variant,
      'Button--wrap': wrap,
    });

    const linkIsMailOrTel = to.includes('mailto:') || to.includes('tel:');

    const linkedComponent =
      linkIsMailOrTel || linkIsExternal(to) || openInNewTab || isAnchor ? (
        <a
          className={cx('Button text-decoration-none', containerClassName, {
            'events-none': disabled,
          })}
          target={openInCurrentTab || linkIsMailOrTel ? '_self' : '_blank'}
          href={to}
          rel="noopener"
          onClick={onClick}
          aria-label={ariaLabel}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={elemRef as RefObject<HTMLAnchorElement>}
        >
          <div className={classes}>
            {!!children && !label ? children : <span className="">{label}</span>}
          </div>
        </a>
      ) : (
        <Link
          className={cx('text-decoration-none', containerClassName, {
            'events-none': disabled,
          })}
          aria-label={ariaLabel}
          to={to}
          onClick={onClick}
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={elemRef as RefObject<HTMLAnchorElement>}
        >
          <div className={cx('Button', classes)}>
            {!!children && !label ? children : <span className="">{label}</span>}
          </div>
        </Link>
      );

    const button = !!to ? (
      linkedComponent
    ) : (
      <button
        aria-label={ariaLabel}
        type={type}
        onClick={onClick}
        className={cx('', classes, {
          'events-none': disabled,
        })}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
        ref={elemRef as RefObject<HTMLButtonElement>}
      >
        {!!children && !label ? children : label}
      </button>
    );

    return button;
  }
}

export default Button;
