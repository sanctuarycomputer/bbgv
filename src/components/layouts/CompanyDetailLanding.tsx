import React from 'react';
import cx from 'classnames';
import withBreakpoints, { InjectedProps as WithBreakpointsProps } from 'lib/withBreakpoints';
import { Block, Company, Image } from 'lib/cms/types';
import Language from 'constants/Language';
import PortableText from 'components/PortableText';
import { LineIconWithButton } from 'components/icons';
import { Button, Img } from 'components/base';

type PassedProps = {
  className?: string;
  headline: Block[];
  foundersText: string;
  founderPortrait?: Image;
  productImage?: Image;
  company: Company;
};

type Props = PassedProps & WithBreakpointsProps;

const CompanyDetailLanding: React.FC<Props> = ({
  headline,
  className,
  company,
  foundersText,
  founderPortrait,
  productImage,
  mediaQuery,
}) => {
  const breakpointIsSmUp = mediaQuery.isSmallUp;
  const hasProductImage = !!productImage?.src;
  const hasFounderImage = !!founderPortrait?.src;

  return (
    <div className={cx('CompanyDetailLanding col-12 mb3_75 md:mb7_5 flex h100', className)}>
      <div className="CompanyDetailLanding__inner-container col-12 flex flex-col md:flex-row h100">
        <div
          className={cx(
            'CompanyDetailLanding__left-column bg-color-mulberry site-padding-x-left pr2 pb1_75 md:pb2_75 flex flex-col col-12 md:col-6 justify-between',
            {
              'radius-xs': breakpointIsSmUp,
            }
          )}
        >
          <span className="pb7_5 md:pb0">
            <span className="inline primary-sm color-lilac uppercase pr1_5 md:pr3_75">
              {foundersText}
            </span>
            <h1
              className={cx(
                'CompanyDetailLanding__heading vertical-align-middle color-chalk inline hyphens font-primary'
              )}
            >
              <PortableText blocks={headline} />
            </h1>
          </span>

          <div className="flex flex-col secondary-bold-sm color-chalk">
            <LineIconWithButton
              color="chalk"
              link={company.website.link}
              label={company.website.label}
            />
            <p className="pt_75">{company.fund}</p>
          </div>
        </div>

        <div className="CompanyDetailLanding__images-container h100 col-12 md:col-6 flex flex-col relative md:pb2_75">
          <div className="CompanyDetailLanding__images flex h100 col-12 pb2_25 md:pb0">
            {founderPortrait?.src && (
              <Img
                className={cx('fit-cover', {
                  'col-6 md:col-8': hasProductImage,
                  'col-12': !hasProductImage,
                  'radius-xs': breakpointIsSmUp,
                })}
                src={founderPortrait.src}
                alt={founderPortrait.alt || Language.t('Global.fallbackAltLabel')}
              />
            )}

            {productImage?.src && (
              <Img
                className={cx('fit-cover', {
                  'CompanyDetailLanding__product-image col-6 md:col-4': hasFounderImage,
                  'col-12': !hasFounderImage,
                  'radius-xs': breakpointIsSmUp,
                })}
                src={productImage.src}
                alt={productImage.alt || Language.t('Global.fallbackAltLabel')}
              />
            )}
          </div>

          <div className="CompanyDetailLanding__links absolute secondary-bold-sm color-charcoal flex flex-row col-12 md:col-8 pl_75 md:pl3_75 md:pb2_75">
            <div className="col-6">
              {company.careers?.link && (
                <Button
                  wrap={true}
                  openInNewTab={true}
                  className="text-decoration-none link--style-body-charcoal hover-lighten-charcoal color-charcoal"
                  to={company.careers.link}
                  label={company.careers.label}
                  ariaLabel={company.careers.label}
                />
              )}
              {company.careers?.link && <div className=""></div>}
            </div>
            <div className="col-6 flex flex-col md:pl2">
              {company.instagram?.link && (
                <Button
                  className="text-decoration-none link--style-body-charcoal hover-lighten-charcoal color-charcoal pb_25 md:pb_75"
                  to={company.instagram.link}
                  label={company.instagram.label}
                  ariaLabel={company.instagram.label}
                />
              )}
              {company.linkedIn?.link && (
                <Button
                  className="text-decoration-none link--style-body-charcoal hover-lighten-charcoal color-charcoal"
                  to={company.linkedIn.link}
                  label={company.linkedIn.label}
                  ariaLabel={company.linkedIn.label}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withBreakpoints<Props>(CompanyDetailLanding);
