import React, { PureComponent, createRef } from 'react';
import Slider from 'react-slick';
import { FeaturedFoundersCarouselSlide, Image } from 'lib/cms/types';
import Language from 'constants/Language';
import { RouteMap } from 'constants/RouteMap';

import { Img, Button } from 'components/base';
import generateFullName from 'utils/generateFullName';
import generateCompanyDetailUrl from 'utils/generateCompanyDetailUrl';
import PortableText from 'components/PortableText';
import { LineIconWithButton, RightArrow } from 'components/icons';
import CarouselVideo from 'components/CarouselVideo';

type Props = {
  heading: string;
  slides: FeaturedFoundersCarouselSlide[];
  speed?: number;
};

type State = {
  currentSlide: number;
  shouldCancelNextTimeout: boolean;
  shouldPauseVideo: boolean;
};

class FeaturedFoundersCarousel extends PureComponent<Props, State> {
  private sliderRef = createRef<Slider>();

  static defaultProps = {
    showPagination: true,
    speed: 1000,
  };

  state = {
    currentSlide: 0,
    shouldCancelNextTimeout: false,
    shouldPauseVideo: false,
  };

  next = () => {
    const { currentSlide } = this.state;
    const { slides } = this.props;
    const currentIndex = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;

    this.sliderRef.current?.slickNext();

    this.setState({
      currentSlide: currentIndex,
      shouldPauseVideo: true,
    });
  };

  renderSlide = (slide: FeaturedFoundersCarouselSlide) => {
    return (
      <div
        key={generateFullName(slide.founder)}
        className="FeaturedFoundersCarousel__slide__card relative flex flex-col"
      >
        <div className="col-12 h100 mxauto flex flex-row mb1_25 md:mb1_5">
          {slide.vimeoId ? (
            <div className="FeaturedFoundersCarousel__video-container col-12">
              <CarouselVideo
                currentSlide={this.state.currentSlide}
                shouldPauseVideo={this.state.shouldPauseVideo}
                vimeoId={slide.vimeoId}
                images={slide.images}
              />
            </div>
          ) : (
            slide.images &&
            slide.images.map((image: Image, index: number) => {
              return (
                <Img
                  key={`FeaturedFoundersCarousel-${image.src}-${index}}`}
                  className="FeaturedFoundersCarousel__image col-4 radius-xs w100 h100 fit-cover"
                  src={image.src}
                  alt={image.alt || Language.t('Global.fallbackAltLabel')}
                />
              );
            })
          )}
        </div>
        <div className="FeaturedFoundersCarousel__text-container flex flex-col lg:flex-row justify-between relative">
          <div className="absolute z-7 absolute t0 r0 lg:none">
            <Button
              ariaLabel={Language.t('Slideshow.viewNextFounder')}
              className="text-left bg-color-transparent text-decoration-none color-lilac-very-dark secondary-bold-xs"
              onClick={this.next}
            >
              <RightArrow color="chalk" variant="round-border" />
            </Button>
          </div>
          <div className="flex flex-col col-12  lg:col-4 pb1_25 lg:pb0">
            <p className="primary-md uppercase">{generateFullName(slide.founder)}</p>
            <p className="primary-md uppercase color-lilac-very-dark">
              {slide.founder.companyName}
            </p>
          </div>
          <div className="FeaturedFoundersCarousel__bio secondary-sm col-12 md:col-6">
            <PortableText blocks={slide.companyDescription} />
            <LineIconWithButton
              color="lilac-very-dark"
              link={
                slide.company?.companyDetailPageReference
                  ? generateCompanyDetailUrl(slide.company.companyDetailPageReference.slug)
                  : RouteMap.COMPANIES.path
              }
              label={Language.t('Slideshow.readMoreButtonAriaLabel', {
                founder: generateFullName(slide.founder),
              })}
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { slides, speed, heading } = this.props;

    return (
      <div className="FeaturedFoundersCarousel col-12 md:px_75 lg:px0">
        <div className="FeaturedFoundersCarousel__outer-container col-12 lg:col-8 xxl:col-7 mxauto relative">
          <div className="FeaturedFoundersCarousel__container site-inner-content-max-width mxauto">
            <div className="w100 h100 pb3_75 md:pb5">
              <div className="FeaturedFoundersCarousel__heading color-charcoal font-primary px_75 md:px0 pb1_25 text-inline-subheader">
                {heading}
              </div>
              <div className="FeaturedFoundersCarousel__pagination-container absolute z-7 none lg:block">
                <Button
                  ariaLabel={Language.t('Slideshow.viewNextFounder')}
                  className="text-left bg-color-transparent text-decoration-none color-lilac-very-dark secondary-bold-xs"
                  onClick={this.next}
                >
                  <RightArrow color="chalk" variant="round-border" />
                </Button>
              </div>

              <div className="FeaturedFoundersCarousel__slides-container flex flex-col mxauto">
                <Slider
                  ref={this.sliderRef}
                  className="FeaturedFoundersCarousel__slideshow"
                  arrows={false}
                  autoplay={false}
                  dots={false}
                  speed={speed}
                  fade={true}
                  centerMode={true}
                  centerPadding="0px"
                >
                  {slides.map((slide: FeaturedFoundersCarouselSlide, index: number) => {
                    return (
                      <div
                        className="FeaturedFoundersCarousel__slide w100 flex px_75 md:px0"
                        key={`FeaturedFoundersCarousel-${generateFullName(slide.founder)}`}
                      >
                        <div className="FeaturedFoundersCarousel__slide__card-container col-12">
                          {this.renderSlide(slide)}
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedFoundersCarousel;
