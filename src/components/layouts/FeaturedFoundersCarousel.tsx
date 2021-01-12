import React, { PureComponent, createRef } from 'react';
import Slider from 'react-slick';
import cx from 'classnames';
import { FeaturedFoundersCarouselSlide, Image } from 'lib/cms/types';
import Language from 'constants/Language';
import { Img, Button } from 'components/base';
import generateFullName from 'utils/generateFullName';
import generateCompanyDetailUrl from 'utils/generateCompanyDetailUrl';
import PortableText from 'components/PortableText';
import { LineIconWithButton } from 'components/icons';

type Props = {
  slides: FeaturedFoundersCarouselSlide[];
  speed?: number;
};

type State = {
  currentSlide: number;
  shouldCancelNextTimeout: boolean;
};

class FeaturedFoundersCarousel extends PureComponent<Props, State> {
  private interval: number | undefined;
  private sliderRef = createRef<Slider>();

  static defaultProps = {
    showPagination: true,
    speed: 1000,
  };

  state = {
    currentSlide: 0,
    shouldCancelNextTimeout: false,
  };

  previous = () => {
    this.sliderRef.current?.slickPrev();
  };

  next = () => {
    this.sliderRef.current?.slickNext();
  };

  goTo = (slideIndex: number, shouldCancelNextTimeout = false) => {
    this.sliderRef.current?.slickGoTo(slideIndex);
    this.setState({ shouldCancelNextTimeout });
  };

  attemptNextSlide = () => {
    if (this.state.shouldCancelNextTimeout) {
      return this.setState({
        shouldCancelNextTimeout: false,
      });
    }

    this.next();
  };

  renderSlide = (slide: FeaturedFoundersCarouselSlide) => {
    return (
      <div
        key={generateFullName(slide.founder)}
        className="FeaturedFoundersCarousel__slide__card flex flex-col"
      >
        <div className="col-12 h100 mxauto flex flex-row pb1_25 md:pb1_5">
          {slide.images &&
            slide.images.map((image: Image) => {
              return (
                <Img
                  className="FeaturedFoundersCarousel__image col-4 radius-xs w100 h100 fit-cover"
                  src={image.src}
                  alt={image.alt || Language.t('Global.fallbackAltLabel')}
                />
              );
            })}
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col col-12  md:col-4 pb1_25 md:pb0">
            <p className="primary-md uppercase">{generateFullName(slide.founder)}</p>
            <p className="primary-md uppercase color-lilac-darkest">{slide.founder.company}</p>
          </div>
          <div className="FeaturedFoundersCarousel__bio secondary-sm col-9 md:col-6">
            <PortableText blocks={slide.founder.bio} />
            <LineIconWithButton
              color="charcoal"
              link={generateCompanyDetailUrl(slide.company.name)}
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
    const { slides, speed } = this.props;
    const { currentSlide } = this.state;

    return (
      <div className="FeaturedFoundersCarousel site-inner-content-max-width mxauto pb3 md:pb5">
        <div className="relative w100 h100 pb3 md:pb5">
          <div className="FeaturedFoundersCarousel__pagination-container absolute z-3 px_75 md:pr3_75">
            <div className="FeaturedFoundersCarousel__pagination relative col-12 flex flex-col">
              <div className="FeaturedFoundersCarousel__pagination__inner flex flex-row col-12 events-none">
                {slides.map((slide: FeaturedFoundersCarouselSlide, index) => {
                  return (
                    <div>
                      <Button
                        key={`FeaturedFoundersCarousel-${slide.founder.firstName}`}
                        ariaLabel={Language.t('Slideshow.paginationDot', {
                          slideNumber: index,
                        })}
                        className={cx(
                          'FeaturedFoundersCarousel__pagination__dot radius-button-sm pointer events-all transition',
                          {
                            'FeaturedFoundersCarousel__pagination__dot--active':
                              index < currentSlide,
                            'FeaturedFoundersCarousel__pagination__dot--current':
                              index === currentSlide,
                          }
                        )}
                        onClick={() => this.goTo(index, true)}
                      ></Button>
                    </div>
                  );
                })}
              </div>
              <Button
                ariaLabel={Language.t('Slideshow.viewNext')}
                className="text-left bg-color-transparent text-decoration-none color-lilac-very-dark secondary-bold-xs mt_75 z-3"
                onClick={this.previous}
                label={Language.t('Slideshow.viewNext')}
              />
            </div>
          </div>

          <div className="FeaturedFoundersCarousel__slides-container flex flex-col mxauto col-12 md:col-10">
            <Slider
              ref={this.sliderRef}
              className="FeaturedFoundersCarousel__slideshow"
              arrows={false}
              autoplay={false}
              dots={false}
              speed={speed}
              afterChange={(current) => this.setState({ currentSlide: current })}
            >
              {slides.map((slide: FeaturedFoundersCarouselSlide, index: number) => {
                return (
                  <div
                    className="FeaturedFoundersCarousel__slide w100 flex px_75 md:ml4 md:px4"
                    key={`FeaturedFoundersCarousel-${slide.founder.lastName}-${index}`}
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
    );
  }
}

export default FeaturedFoundersCarousel;
