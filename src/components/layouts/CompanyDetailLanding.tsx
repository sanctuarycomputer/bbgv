import React from 'react';
import cx from 'classnames';
import withBreakpoints, { InjectedProps as WithBreakpointsProps } from 'lib/withBreakpoints';
import { Block, Company, Image, Founder } from 'lib/cms/types';
import generateFullName from 'utils/generateFullName';
import Language from 'constants/Language';
import PortableText from 'components/PortableText';
import { LineIconWithButton } from 'components/icons';
import { Button, Img } from 'components/base';

type PassedProps = {
  className?: string;
  headline: Block[];
  founderPortrait?: Image;
  productImage?: Image;
  company: Company;
};

type Props = PassedProps & WithBreakpointsProps;

const CompanyDetailLanding: React.FC<Props> = ({
  headline,
  className,
  company,
  founderPortrait,
  productImage,
  mediaQuery,
}) => {
  const breakpointIsSmUp = mediaQuery.isSmallUp;
  const hasProductImage = !!productImage?.src;
  const hasFounderImage = !!founderPortrait?.src;

  return (
    <div className={cx('CompanyDetailLanding col-12 mb3_75 md:mb7_5 flex vh100', className)}>
      <div className="CompanyDetailLanding__inner-container col-12 flex flex-col md:flex-row vh100">
        <div
          className={cx(
            'CompanyDetailLanding__left-column bg-color-mulberry site-padding-x-left pr2 pb1_75 md:pb2_75 flex flex-col col-12 md:col-6 h100 justify-between',
            {
              'radius-xs': breakpointIsSmUp,
            }
          )}
        >
          <span>
            <span className="inline primary-sm color-lilac uppercase pr1_5 md:pr3_75">
              {company.founders?.map((founder: Founder, index: number) => (
                <span key={`CompanyDetailLanding-${founder.firstName}`}>
                  {index !== company.founders.length - 1 ? (
                    <span>
                      <span>{generateFullName(founder)}</span>
                      <span className="color-lilac">, </span>
                    </span>
                  ) : (
                    <span>
                      <span>{generateFullName(founder)} </span>
                    </span>
                  )}
                </span>
              ))}
            </span>
            <h1
              className={cx(
                'CompanyDetailLanding__heading primary-xxl vertical-align-middle color-chalk inline'
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

        <div className="CompanyDetailLanding__images-container h100 col-12 md:col-6 flex flex-col">
          <div className="CompanyDetailLanding__images flex h100 col-12">
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

          <div className="CompanyDetailLanding__links secondary-bold-sm color-charcoal flex flex-row md:col-8 pl_75 pt2_25 md:p3_75">
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
            </div>
            <div className="col-6 flex flex-col md:pl2">
              {company.instagram?.link && (
                <Button
                  className="text-decoration-none link--style-body-charcoal hover-lighten-charcoal color-charcoal pb_25"
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
