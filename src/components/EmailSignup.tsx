import React from 'react';
import cx from 'classnames';
import Language from 'constants/Language';
import validateEmail from 'utils/validateEmail';
import { useFormik, FormikValues } from 'formik';

import { Button, TextField } from 'components/base';

type Props = {
  variant: 'footer' | 'module';
};

const EmailSignup: React.FC<Props> = ({ variant }) => {
  const formik = useFormik({
    initialValues: {
      emailAddress: '',
    },
    validate: (values: FormikValues) => {
      const errors: { [key: string]: string } = {};

      if (!validateEmail(values.emailAddress)) {
        errors.emailAddress = Language.t('EmailSignup.errors.validEmailAddressRequired');
      }

      return errors;
    },
    onSubmit: (values: FormikValues) => {},
  });

  return (
    <div className="EmailSignup col-12 flex relative">
      <form
        noValidate
        action={process.env.REACT_APP_MAILCHIMP_SUBSCRIBE_URL}
        target="_blank"
        method="post"
        className="col-12"
      >
        <div
          className={cx(
            `EmailSignup--style-${variant}__inner-container flex flex-row justify-between pb_5`
          )}
        >
          <TextField
            variant={variant}
            onChange={(value) => formik.setFieldValue('emailAddress', value as string)}
            showLabel={false}
            type="email"
            className="col-10"
            name={Language.t('EmailSignup.name')}
            ariaLabel={Language.t('EmailSignup.input.placeholder')}
            placeholder={Language.t('EmailSignup.input.placeholder')}
          />
          <span className="flex justify-end col-2">
            <Button
              label={Language.t('EmailSignup.subscribeButton.label')}
              ariaLabel={Language.t('EmailSignup.subscribeButton.ariaLabel')}
              className={cx('bg-color-transparent transition-shorter secondary-bold-sm', {
                'color-charcoal hover-lighten-charcoal': variant === 'footer',
                'color-chalk': variant === 'module',
              })}
            />
          </span>
        </div>
        {formik.errors.emailAddress && (
          <div
            className={cx('EmailSignup__error secondary-xxs py_25 absolute', {
              'color-charcoal': variant === 'footer',
              'color-chalk': variant === 'module',
            })}
          >
            {formik.errors.emailAddress}
          </div>
        )}
      </form>
    </div>
  );
};

export default EmailSignup;
