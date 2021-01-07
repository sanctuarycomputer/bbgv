import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import CookieConsentConstants from 'constants/CookieConsent';
import LineIconWithButton from './icons/LineIconWithButton';

const matchCookieConsent = document?.cookie.match(
  RegExp('(?:^|;\\s*)' + CookieConsentConstants.cookieConsentName + '=([^;]*)')
);

interface Props {
  content: string;
  containerClassName?: string;
  dismissButtonAriaLabel: string;
  dismissButtonClassName?: string;
  dismissButtonLabel: string;
}

const setCookie = (cookieKey: string, cookieValue: number) => {
  document.cookie = `${cookieKey}=${cookieValue}; path=/`;
};

const CookieConsent: React.FC<Props> = ({
  content,
  containerClassName,
  dismissButtonAriaLabel,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleCookieConsent = () => {
    //If the cookie has already been set, hide the cookie consent pop up.
    //If it hasn't been set, show the pop up.
    matchCookieConsent && matchCookieConsent[1] ? setIsVisible(false) : setIsVisible(true);
  };

  const setCookieAndDismissPopUp = () => {
    setCookie(CookieConsentConstants.cookieConsentName, Date.now());
    setIsVisible(false);
  };

  useEffect(() => {
    handleCookieConsent();
  }, []);

  return (
    <div
      className={cx('CookieConsent fixed z-nav transition secondary-xs', containerClassName, {
        'opacity-0 events-none': !isVisible,
        'opacity-1 events-all': isVisible,
      })}
    >
      {content}
      <LineIconWithButton
        variant="cookie-consent"
        onClick={setCookieAndDismissPopUp}
        color="charcoal"
        label={dismissButtonAriaLabel}
      />
    </div>
  );
};

export default CookieConsent;
