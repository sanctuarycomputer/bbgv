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
    speed: 5000,
  };

  state = {
    currentSlide: 0,
    shouldCancelNextTimeout: false,
  };

  componentDidMount() {
    this.interval = setInterval(this.attemptNextSlide, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  next = () => {
    const { slides } = this.props;
    const { currentSlide } = this.state;
    const index = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;

    this.goTo(index);
  };

  previous = () => {
    const { slides } = this.props;
    const { currentSlide } = this.state;
    const index = currentSlide <= 0 ? slides.length - 1 : currentSlide - 1;

    this.goTo(index);
  };

  goTo = (currentSlide: number, shouldCancelNextTimeout = false) => {
    if (this.state.currentSlide === currentSlide) return;

    return this.setState({ currentSlide, shouldCancelNextTimeout }, () => {
      this.sliderRef.current?.slickGoTo(currentSlide);
    });
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
            <p className="primary-md uppercase color-lilac">{slide.founder.company}</p>
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
              <div className="FeaturedFoundersCarousel__pagination__inner flex flex-row col-12">
                {slides.map((slide: FeaturedFoundersCarouselSlide, index) => {
                  return (
                    <Button
                      key={`FeaturedFoundersCarousel-${slide.founder.firstName}`}
                      ariaLabel={Language.t('Slideshow.paginationDot', {
                        slideNumber: index + 1,
                      })}
                      className={cx(
                        'FeaturedFoundersCarousel__pagination__dot radius-button-sm pointer',
                        {
                          'FeaturedFoundersCarousel__pagination__dot--active': index < currentSlide,
                          'FeaturedFoundersCarousel__pagination__dot--current':
                            index === currentSlide,
                        }
                      )}
                      onClick={() => this.goTo(index, true)}
                    >
                      <div
                        className="FeaturedFoundersCarousel__pagination__dot__progress"
                        style={{ animationDuration: `${speed}ms` }}
                      />
                    </Button>
                  );
                })}
              </div>
              <Button
                ariaLabel={Language.t('Slideshow.viewNext')}
                className="text-left bg-color-transparent text-decoration-none color-black-lighter secondary-bold-xs pt_75 z-3"
                onClick={this.next}
                label={Language.t('Slideshow.viewNext')}
              />
            </div>
          </div>

          <div className="FeaturedFoundersCarousel__slides-container flex flex-col mxauto col-12 md:col-10">
            <Slider
              ref={this.sliderRef}
              className="FeaturedFoundersCarousel__slideshow"
              adaptiveHeight={true}
              arrows={false}
              dots={false}
              centerMode={true}
              centerPadding="0px"
              speed={4000}
              infinite={true}
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
