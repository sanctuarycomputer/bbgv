import React from 'react';
import { Block } from 'lib/cms/types';
import EmailSignup from 'components/EmailSignup';
import PortableText from 'components/PortableText';

type Props = {
  bgColor: string;
  title: string;
  headline: Block[];
};

const NewsletterModule: React.FC<Props> = ({ bgColor, title, headline }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="NewsletterModule site-max-width mxauto color-chalk py6 md:py7_5"
    >
      <div className="NewsletterModule__container mxauto col-12 lg:col-8 xxl:col-7">
        <span className="NewsletterModule__title primary-sm pr3_75 vertical-align-middle">
          {title}
        </span>
        <span className="NewsletterModule__headline primary-xl vertical-align-middle">
          <PortableText blocks={headline} />
        </span>
        <div className="pt3_75 lg:pt6">
          <EmailSignup variant="module" />
        </div>
      </div>
    </div>
  );
};

export default NewsletterModule;
