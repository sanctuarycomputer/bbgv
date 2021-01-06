import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import LineIconWithButton from './icons/LineIconWithButton';

interface Props {
  content: React.ReactNode;
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
  dismissButtonClassName,
  dismissButtonLabel,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleCookieConsent = () => {
    const cookieName = 'consentedToCookiesAt';
    const match = document?.cookie.match(RegExp('(?:^|;\\s*)' + cookieName + '=([^;]*)'));

    //If the cookie has already been set, hide the cookie consent pop up.
    //If it hasn't been set, show the pop up.
    match && match[1] ? setIsVisible(false) : setIsVisible(true);
  };

  const setCookieAndDismissPopUp = () => {
    setCookie('consentedToCookiesAt', Date.now());
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
