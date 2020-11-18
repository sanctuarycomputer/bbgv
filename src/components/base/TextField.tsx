import React, { Component, RefObject, KeyboardEvent } from 'react';

import cx from 'classnames';

interface Props {
  id?: string;
  name: string;
  label?: string;
  className: string;
  ariaLabel: string;
  onBlur: (e: string | number) => any;
  onFocus: (e: string | number) => any;
  onChange: (e: string | number) => any;
  onKeyDown: (e: KeyboardEvent) => any;
  pattern?: string;
  placeholder?: string;
  required: boolean;
  autoComplete?: boolean;
  maxLength?: number;
  type: 'email' | 'text' | 'tel' | 'number' | 'textarea';
  value?: string | number;
  min?: number;
  max?: number;
  showLabel: boolean;
  variant: 'footer' | 'module';
  showIcon: boolean;
  elemRef?: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  infoMessage?: string;
  showInfoMessage?: boolean;
}

const defaultProps = {
  className: '',
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  required: false,
  autoComplete: true,
  type: 'text',
  showLabel: false,
  showIcon: false,
};

class TextField extends Component<Props> {
  static defaultProps = defaultProps;

  render() {
    const {
      id,
      className,
      ariaLabel,
      label,
      name,
      onBlur,
      onFocus,
      onChange,
      onKeyDown,
      pattern,
      placeholder,
      type,
      required,
      autoComplete,
      value,
      maxLength,
      variant,
      min,
      max,
      showLabel,
      showIcon,
      elemRef,
    } = this.props;

    const classes = cx('TextField', className);

    const _id = id || name;

    return (
      <div
        className={cx(classes, 'relative', {
          [`TextField--style-${variant}`]: !!variant,
        })}
      >
        {label ? (
          <label
            htmlFor={_id}
            className={cx('transition z-1 none opacity-0', {
              'TextField__label--active': showLabel,
            })}
          >
            {label}
          </label>
        ) : null}
        {type === 'textarea' ? (
          <textarea
            aria-label={ariaLabel}
            id={_id}
            name={name}
            onBlur={(e) => onBlur(e.target.value)}
            onFocus={(e) => onFocus(e.target.value)}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => onKeyDown(e as KeyboardEvent)}
            placeholder={placeholder}
            required={required}
            value={value}
            ref={elemRef as RefObject<HTMLTextAreaElement>}
          />
        ) : (
          <div className="w100 z-1 relative flex justify-end items-center">
            <input
              aria-label={ariaLabel}
              id={_id}
              name={name}
              onBlur={(e) => onBlur(e.target.value)}
              onFocus={(e) => onFocus(e.target.value)}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={(e) => onKeyDown(e)}
              pattern={pattern}
              placeholder={placeholder}
              type={type}
              min={min}
              max={max}
              required={required}
              maxLength={maxLength}
              value={value}
              className={cx({
                mr2: showIcon,
              })}
              autoComplete={autoComplete ? 'on' : 'off'}
              ref={elemRef as RefObject<HTMLInputElement>}
            />
          </div>
        )}
      </div>
    );
  }
}

export default TextField;
