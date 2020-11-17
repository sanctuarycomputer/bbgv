import React from 'react';
import cx from 'classnames';
import Language from 'constants/Language';
import validateEmail from 'utils/validateEmail';
import { useFormik, FormikValues } from 'formik';

import { Button, TextField } from 'components/base';

type Props = {
  variant: 'footer' | 'module';
};

//TO-DO: Update variant styling depending on 'footer' or 'module'

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
        <div className="EmailSignup__inner-container flex flex-row justify-between pb_5">
          <TextField
            variant="primary"
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
              className="bg-color-transparent color-charcoal transition-shorter hover-lighten-charcoal secondary-bold-sm"
            />
          </span>
        </div>
        {formik.errors.emailAddress && (
          <div className="EmailSignup__error secondary-xxs py_25 color-charcoal absolute">
            {formik.errors.emailAddress}
          </div>
        )}
      </form>
    </div>
  );
};

export default EmailSignup;
