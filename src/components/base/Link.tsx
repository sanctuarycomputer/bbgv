import React, { PureComponent, MouseEvent, RefObject } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';

import cx from 'classnames';
import linkIsExternal from 'utils/linkIsExternal';

interface Props {
  className: string;
  style: React.CSSProperties;
  label?: string;
  ariaLabel: string;
  children?: React.ReactNode;
  to: string;
  onClick(e: MouseEvent<HTMLElement>): void;
  isAnchor: boolean;
  isNavLink: boolean;
  openInCurrentTab: boolean;
  openInNewTab: boolean;
  elemRef?: RefObject<HTMLAnchorElement | Link | HTMLButtonElement>;
}

const defaultProps = {
  className: '',
  style: {},
  to: '',
  onClick: () => {},
  isAnchor: false,
  isNavLink: false,
  openInCurrentTab: false,
  openInNewTab: false,
};

class Link extends PureComponent<Props> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      style,
      label,
      ariaLabel,
      children,
      to,
      onClick,
      isAnchor,
      isNavLink,
      openInCurrentTab,
      openInNewTab,
      elemRef,
    } = this.props;

    const classes = cx('Link pointer p0 text-decoration-none', className);

    const linkIsMailOrTel = to.includes('mailto:') || to.includes('tel:');

    const externalLink = (
      <a
        className={classes}
        target={openInCurrentTab || linkIsMailOrTel ? '_self' : '_blank'}
        href={to}
        rel="noopener"
        aria-label={ariaLabel}
        ref={elemRef as RefObject<HTMLAnchorElement>}
        onClick={onClick}
      >
        {!!children && !label ? (
          children
        ) : (
          <span className="flex justify-center items-center">{label}</span>
        )}
      </a>
    );

    const internalLink = isNavLink ? (
      <NavLink
        className={classes}
        aria-label={ariaLabel}
        to={to}
        style={style}
        ref={elemRef as RefObject<HTMLAnchorElement>}
        onClick={onClick}
      >
        {!!children && !label ? (
          children
        ) : (
          <span className="flex justify-center items-center">{label}</span>
        )}
      </NavLink>
    ) : (
      <RouterLink
        className={classes}
        aria-label={ariaLabel}
        to={to}
        style={style}
        ref={elemRef as RefObject<HTMLAnchorElement>}
        onClick={onClick}
      >
        {!!children && !label ? (
          children
        ) : (
          <span className="flex justify-center items-center">{label}</span>
        )}
      </RouterLink>
    );

    const link =
      linkIsMailOrTel || linkIsExternal(to) || openInNewTab || isAnchor
        ? externalLink
        : internalLink;

    return link;
  }
}

export default Link;
