import React, { PureComponent, createRef } from 'react';
import Slider from 'react-slick';
import cx from 'classnames';
import { Image, FoundersImpactSlide } from 'lib/cms/types';
import Language from 'constants/Language';
import { Button, Img } from 'components/base';

type Props = {
  slides: FoundersImpactSlide[];
  speed?: number;
  variant: string;
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
    speed: 10000,
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

  renderVariant = (slide: FoundersImpactSlide) => {
    switch (this.props.variant) {
      case 'founder':
        return (
          <div key={slide.company.name} className="SLIDE flex flex-row col-12">
            <div className="col-6 flex flex-col">
              <Button ariaLabel="" className="bg-color-transparent w100 text-left" wrap={true}>
                <div className="flex flex-col justify-between col-12 bg-color-nutella color-charcoal FoundersImpactSlideshow__left-tile">
                  <p className="primary-lg">{slide.leftHeadline}</p>
                  <p className="primary-xs">Link to sector</p>
                </div>
              </Button>
            </div>

            <div className="col-6 flex flex-col mt8">
              <Button ariaLabel="" className="bg-color-transparent w100 text-left" wrap={true}>
                <div className="flex flex-col col-12 justify-between bg-color-lilac-darker primary-lg color-charcoal FoundersImpactSlideshow__right-tile">
                  <p className="primary-xs">Link to sector</p>
                  <p className="primary-lg">
                    <span className="primary-xs vertical-align-middle uppercase pr3_75">
                      founder name
                    </span>
                    {slide.rightHeadline}
                  </p>
                </div>
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    const { slides, speed, variant } = this.props;
    const { currentSlide } = this.state;

    return (
      <div className="FoundersImpactSlideshow debug site-max-width site-padding-x mxauto">
        <div className="FoundersImpactSlideshow__pagination-container relative col-1 flex flex-col">
          <div className="FoundersImpactSlideshow__pagination relative col-12 flex flex-col">
            <div className="FoundersImpactSlideshow__pagination__inner flex flex-row col-12">
              {slides.map((slide, index) => {
                const uniqueKey = '';

                return (
                  <button
                    key={`FoundersImpactSlideshow-info-${uniqueKey}`}
                    aria-label={Language.t('FoundersImpactSlideshow.paginationDot', {
                      slideNumber: index + 1,
                    })}
                    className={cx(
                      'FoundersImpactSlideshow__pagination__dot radius-button-sm pointer overflow-hidden',
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
            <div className="color-lilac-darkest secondary-bold-xs pt1">View next</div>
          </div>
        </div>

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
            const uniqueKey = '';

            return (
              <div
                className="FoundersImpactSlideshow__slide w100 items-center flex-wrap"
                key={`FoundersImpactSlideshow-blob-${uniqueKey}`}
              >
                <div
                  className={cx('col-12 flex justify-center', {
                    'FoundersImpactSlideshow__slide__card-container': '',
                  })}
                >
                  {this.renderVariant(slide)}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default FoundersImpactSlideshow;
