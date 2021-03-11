import React, { useState } from 'react';
import cx from 'classnames';
import { TeamMember } from 'lib/cms/types';
import Language from 'constants/Language';
import { Img, Button } from 'components/base';
import { DownArrow } from 'components/icons';
import PortableText from 'components/PortableText';
import generateFullName from 'utils/generateFullName';

type Props = {
  className?: string;
  teamMembers: TeamMember[];
};

const TeamMembersTwoColLayout: React.FC<Props> = ({ teamMembers, className }) => {
  const [activeListItemIndex, setActiveListItemIndex] = useState(-1);

  const toggleListItem = (index: number) => {
    if (activeListItemIndex === index) {
      return setActiveListItemIndex(-1);
    }

    return setActiveListItemIndex(index);
  };

  return (
    <div
      className={cx(
        'TeamMembersTwoColLayout col-12 md:col-10 mxauto flex flex-row site-max-width',
        className
      )}
    >
      <div className="TeamMembersTwoColLayout__grid-container col-6 md:mr1_25 none md:block">
        {teamMembers.map((teamMember: TeamMember, index: number) => {
          const listItemIsActive = activeListItemIndex === index;

          return (
            <div
              key={`TeamMembersTwoColLayout__${teamMember.firstName}`}
              className={cx('TeamMembersTwoColLayout__image-container relative', {
                'TeamMembersTwoColLayout__image-container--active': listItemIsActive,
              })}
              onMouseEnter={() => toggleListItem(index)}
              onMouseLeave={() => toggleListItem(-1)}
            >
              <Img
                src={teamMember.image.src}
                alt={teamMember.image.alt || Language.t('Global.fallbackAltLabel')}
                className="fit-cover w100 h100 radius-xs"
              />
            </div>
          );
        })}
      </div>

      <div className="TeamMembersTwoColLayout__bios px_75 md:px0 col-12 md:col-6">
        {teamMembers.map((teamMember: TeamMember, index: number) => {
          const { bio, firstName, twitter, instagram, linkedIn, jobTitle } = teamMember;
          const listItemIsActive = activeListItemIndex === index;
          const isJobListing = teamMember.isJobListing;
          const fullName = generateFullName(teamMember);

          return (
            <div
              key={`TeamMembersTwoColLayout__${firstName}`}
              className="TeamMembersTwoColLayout__list-item-container md:pt1_5 md:pb2_5"
            >
              <Button
                className={cx('TeamMembersTwoColLayout__list-item-button w100', {
                  'TeamMembersTwoColLayout__list-item-button--active': listItemIsActive,
                })}
                onClick={() => toggleListItem(index)}
                ariaLabel={
                  listItemIsActive
                    ? Language.t('TeamMembersTwoColLayout.closeBioButton.ariaLabel', {
                        teamMember: fullName,
                      })
                    : Language.t('TeamMembersTwoColLayout.openBioButton.ariaLabel', {
                        teamMember: fullName,
                      })
                }
                wrap={true}
                variant="no-style"
              >
                <div className="TeamMembersTwoColLayout__person-details font-primary py1 md:py0 uppercase flex justify-between">
                  {!isJobListing && (
                    <Img
                      src={teamMember.image.src}
                      alt={teamMember.image.alt || Language.t('Global.fallbackAltLabel')}
                      className="TeamMembersTwoColLayout__image col-6 md:none w100 h100 fit-cover radius-xs"
                    />
                  )}
                  <div
                    className={cx('flex justify-between flex-row w100 text-left', {
                      'col-12': isJobListing,
                      'ml1 md:ml0 col-6 md:col-12': !isJobListing,
                    })}
                  >
                    <div className="flex flex-col pr1 md:pr0">
                      <p className="color-charcoal">{fullName}</p>
                      <p className="color-lilac-very-dark">{jobTitle}</p>
                    </div>

                    <DownArrow
                      className={cx('TeamMembersTwoColLayout__down-arrow md:none', {
                        'rotate-180': listItemIsActive,
                      })}
                      color="charcoal"
                    />
                  </div>
                  <DownArrow
                    className={cx('TeamMembersTwoColLayout__down-arrow none md:block', {
                      'rotate-180': listItemIsActive,
                    })}
                    color="charcoal"
                  />
                </div>
              </Button>
              <div
                className={cx(
                  'TeamMembersTwoColLayout__list-item-contents col-12 transition overflow-y-hidden',
                  {
                    'TeamMembersTwoColLayout__list-item-contents--active w100 md:pt1_5 pb1_875 md:pb0': listItemIsActive,
                  }
                )}
              >
                {bio && (
                  <span className="TeamMembersTwoColLayout__bio secondary-sm">
                    <PortableText blocks={bio} />
                  </span>
                )}

                {(linkedIn || twitter || instagram) && (
                  <div className="TeamMembersTwoColLayout__social-links flex flex-row secondary-bold-xs pt1_875">
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
                        containerClassName="mt_125 lg:mt0 mr1_25"
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
                        containerClassName="mt_125 lg:mt0 r1_25"
                        className="text-decoration-none bg-color-transparent color-charcoal hover-lighten-charcoal transition-shorter"
                        ariaLabel={Language.t('Global.instagramLink.ariaLabel', {
                          person: fullName,
                        })}
                        to={instagram}
                        label={Language.t('Global.instagramLink.label')}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMembersTwoColLayout;
