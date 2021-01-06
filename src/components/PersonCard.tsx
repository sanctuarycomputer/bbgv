import React from 'react';
import cx from 'classnames';
import { Image, Block } from 'lib/cms/types';
import Language from 'constants/Language';

import PortableText from 'components/PortableText';
import { Img, Button } from 'components/base';

type Props = {
  fullName: string;
  jobTitle: string;
  twitter?: string;
  instagram?: string;
  linkedIn?: string;
  bio?: Block[];
  image: Image;
};

const PersonCard: React.FC<Props> = ({
  fullName,
  jobTitle,
  twitter,
  instagram,
  linkedIn,
  image,
  bio,
}) => {
  return (
    <div className="PersonCard">
      <Img
        src={image.src}
        alt={image.alt || Language.t('Global.fallbackAltLabel')}
        className="inline PersonCard__image fit-cover radius-xs w100 h100 mr_75 mb1_25 md:mr1_25 md:mb1_5"
      />

      <span>
        <div className="uppercase primary-sm flex flex-col pb1_5 md:pb3_75">
          <p className="color-charcoal">{fullName}</p>
          <p className="color-lilac">{jobTitle}</p>
        </div>

        <div
          className={cx(
            'PersonCard__social-links flex flex-col secondary-bold-xs pb_75 md:pb1_25',
            {
              'lg:flex-row ': !!bio,
            }
          )}
        >
          {linkedIn && (
            <Button
              containerClassName="mr1_25"
              className="text-decoration-none bg-color-transparent color-charcoal hover-lighten-charcoal transition-shorter"
              ariaLabel={Language.t('Global.linkedInLink.ariaLabel', {
                person: fullName,
              })}
              to={linkedIn}
              label={Language.t('Global.linkedInLink.label')}
            />
          )}

          {twitter && (
            <Button
              containerClassName="mt_125 mr1_25"
              className="text-decoration-none bg-color-transparent color-charcoal hover-lighten-charcoal transition-shorter"
              ariaLabel={Language.t('Global.twitterLink.ariaLabel', {
                person: fullName,
              })}
              to={twitter}
              label={Language.t('Global.twitterLink.label')}
            />
          )}

          {instagram && (
            <Button
              containerClassName="mt_125 r1_25"
              className="text-decoration-none bg-color-transparent color-charcoal hover-lighten-charcoal transition-shorter"
              ariaLabel={Language.t('Global.instagramLink.ariaLabel', {
                person: fullName,
              })}
              to={instagram}
              label={Language.t('Global.instagramLink.label')}
            />
          )}
        </div>

        {bio && (
          <span className="secondary-sm">
            <PortableText blocks={bio} />
          </span>
        )}
      </span>
    </div>
  );
};

export default PersonCard;
