import React, { FC } from 'react';
import { HomePage } from '../lib/cms/types';
import { Props as ContainerProps } from 'containers/home';

import HomeHero from 'components/layouts/HomeHero';
import { ContentPage as Meta } from 'components/Meta';
import NewsletterModule from 'components/layouts/NewsletterModule';
import FeaturedFoundersCarousel from 'components/layouts/FeaturedFoundersCarousel';

import FoundersImpactSlideshow from 'components/layouts/FoundersImpactSlideshow';
import TextModule from 'components/layouts/TextModule';

type Props = ContainerProps & {
  model: HomePage;
};

const HomeView: FC<Props> = (props) => {
  const { model } = props;

  const {
    hero,
    seo,
    foundersImpactSlideshow,
    foundersImpactSectionHeading,
    featuredFoundersCarouselSectionHeading,
    featuredFoundersCarousel,
    whyWeInvest,
    contact,
    newsletter,
  } = model;

  return (
    <div className="HomeView page-style--margin-top">
      <Meta seo={seo} />
      <HomeHero headline={hero.headline} founders={hero.founders} />
      <TextModule
        className="text-module-padding-x py3_75 lg:py5"
        variant="default"
        heading={featuredFoundersCarouselSectionHeading.heading}
        subheading={featuredFoundersCarouselSectionHeading.subheading}
        briefParagraph={featuredFoundersCarouselSectionHeading.briefParagraph}
      />
      <FeaturedFoundersCarousel
        heading={featuredFoundersCarousel.heading}
        slides={featuredFoundersCarousel.slides}
      />
      <TextModule
        className="py3_75"
        variant="mulberry"
        heading={whyWeInvest.heading}
        subheading={whyWeInvest.subheading}
        briefParagraph={whyWeInvest.briefParagraph}
      />
      <TextModule
        className="py3_75 lg:py5"
        variant="default"
        heading={foundersImpactSectionHeading.heading}
        subheading={foundersImpactSectionHeading.subheading}
        briefParagraph={foundersImpactSectionHeading.briefParagraph}
      />
      <FoundersImpactSlideshow
        heading={foundersImpactSlideshow.heading}
        variant={foundersImpactSlideshow.variant}
        slides={foundersImpactSlideshow.slides}
      />
      <NewsletterModule
        bgColor={newsletter.bgColor}
        headline={newsletter.headline}
        title={newsletter.title}
      />
      <TextModule
        className="py3_75 lg:py5"
        variant="default"
        heading={contact.heading}
        subheading={contact.subheading}
        briefParagraph={contact.briefParagraph}
      />
    </div>
  );
};

export default HomeView;
