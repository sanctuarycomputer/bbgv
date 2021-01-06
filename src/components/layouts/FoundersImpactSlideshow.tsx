import React, { PureComponent, createRef } from 'react';
import Slider from 'react-slick';
import cx from 'classnames';
import { FoundersImpactSlide, FoundersImpactSlideshowVariant, Founder } from 'lib/cms/types';
import Language from 'constants/Language';
import { Button } from 'components/base';
import generateFullName from 'utils/generateFullName';
import { RouteMap } from 'constants/RouteMap';

//TO-DO: Add generate company slug util and replace links. Left tile should link to companies page, right tile should link to company detail page.

type Props = {
  slides: FoundersImpactSlide[];
  speed?: number;
  variant: FoundersImpactSlideshowVariant;
};

type State = {
  currentSlide: number;
  shouldCancelNextTimeout: boolean;
};

class FoundersImpactSlideshow extends PureComponent<Props, State> {
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

  renderSlide = (variant: FoundersImpactSlideshowVariant, slide: FoundersImpactSlide) => {
    const foundersLength = slide.company.founders?.length;

    if (!foundersLength) {
      return null;
    }

    return (
      <div
        key={slide.company.name}
        className="FoundersImpactSlideshow__slide__card flex flex-col md:flex-row col-12"
      >
        <div className="col-12 md:col-6 flex flex-col pr3 md:pr0">
          <Button
            ariaLabel={Language.t('Global.companiesButtonAriaLabel')}
            to={RouteMap.COMPANIES.path}
            wrap={true}
            className={cx(
              'FoundersImpactSlideshow__left-tile radius-xs w100 text-left flex flex-col',
              {
                'bg-color-nutella': variant === 'nutella-lilac',
                'bg-color-mulberry': variant === 'mulberry-lilac',
              }
            )}
          >
            <div
              className={cx(
                'FoundersImpactSlideshow__left-tile-content flex flex-col col-12 p1_5 md:p3_75 justify-between',
                {
                  'color-charcoal': variant === 'nutella-lilac',
                  'color-chalk': variant === 'mulberry-lilac',
                }
              )}
            >
              <p className="primary-lg">{slide.leftHeadline}</p>
              <p className="secondary-sm">{slide.leftSubheading}</p>
            </div>
          </Button>
        </div>

        <div className="col-12 md:col-6 flex flex-col pl3 md:pl0 md:mt8">
          <Button
            ariaLabel={Language.t('Global.generalButtonAriaLabel', {
              link: 'TO-DO',
            })}
            to="/"
            className="FoundersImpactSlideshow__right-tile bg-color-lilac-darker w100 text-left radius-xs flex flex-col mb6 md:mb0"
            wrap={true}
          >
            <div className="FoundersImpactSlideshow__right-tile-content flex flex-col justify-between col-12 color-charcoal p1_5 md:p3_75">
              <p className="secondary-sm">{slide.rightSubheading}</p>
              <p className="primary-lg">
                <span className="primary-xs vertical-align-middle uppercase pr3_75">
                  {slide.company.founders?.map((founder: Founder, index: number) => (
                    <span key={`FoundersImpactSlideshow-${founder.firstName}`}>
                      {index !== foundersLength - 1 ? (
                        <span>
                          <span>{generateFullName(founder)}</span>
                          <span className="color-charcoal">, </span>
                        </span>
                      ) : (
                        <span>
                          <span>{generateFullName(founder)} </span>
                        </span>
                      )}
                    </span>
                  ))}
                </span>
                {slide.rightHeadline}
              </p>
            </div>
          </Button>
        </div>
      </div>
    );
  };

  render() {
    const { slides, speed } = this.props;
    const { currentSlide } = this.state;

    return (
      <div className="FoundersImpactSlideshow site-inner-content-max-width mxauto relative">
        <div className="FoundersImpactSlideshow__pagination-container absolute z-3 pr_75 md:pr3_75">
          <div className="FoundersImpactSlideshow__pagination relative col-12 flex flex-col">
            <div className="FoundersImpactSlideshow__pagination__inner flex flex-row col-12">
              {slides.map((slide: FoundersImpactSlide, index) => {
                return (
                  <button
                    key={`FoundersImpactSlideshow-${slide.leftHeadline}`}
                    aria-label={Language.t('Slideshow.paginationDot', {
                      slideNumber: index + 1,
                    })}
                    className={cx(
                      'FoundersImpactSlideshow__pagination__dot radius-button-sm pointer',
                      {
                        'FoundersImpactSlideshow__pagination__dot--active': index < currentSlide,
                        'FoundersImpactSlideshow__pagination__dot--current': index === currentSlide,
                      }
                    )}
                    onClick={() => this.goTo(index, true)}
                  >
                    <div
                      className="FoundersImpactSlideshow__pagination__dot__progress"
                      style={{ animationDuration: `${speed}ms` }}
                    />
                  </button>
                );
              })}
            </div>
            <Button
              ariaLabel={Language.t('Slideshow.viewNext')}
              className="text-left bg-color-transparent text-decoration-none color-lilac-darkest secondary-bold-xs pt1"
              onClick={() => this.next()}
            >
              {Language.t('Slideshow.viewNext')}
            </Button>
          </div>
        </div>

        <div className="FoundersImpactSlideshow__slides-container flex flex-col">
          <Slider
            ref={this.sliderRef}
            className="FoundersImpactSlideshow__slideshow col-12"
            fade={true}
            adaptiveHeight={true}
            arrows={false}
            dots={false}
            centerMode={true}
            centerPadding="0px"
            speed={1000}
          >
            {slides.map((slide: FoundersImpactSlide, index: number) => {
              return (
                <div
                  className="FoundersImpactSlideshow__slide w100 items-center flex-wrap"
                  key={`FoundersImpactSlideshow-${slide.rightHeadline}`}
                >
                  <div className="FoundersImpactSlideshow__slide__card-container col-12 flex justify-center">
                    {this.renderSlide(this.props.variant, slide)}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default FoundersImpactSlideshow;
