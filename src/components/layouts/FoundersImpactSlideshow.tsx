import React, { PureComponent, createRef } from 'react';
import Slider from 'react-slick';
import cx from 'classnames';
import { FoundersImpactSlide, FoundersImpactSlideshowVariant, Founder } from 'lib/cms/types';
import Language from 'constants/Language';
import { RouteMap } from 'constants/RouteMap';
import { RightArrow } from 'components/icons';
import { Button } from 'components/base';
import generateCompanyDetailUrl from 'utils/generateCompanyDetailUrl';

type Props = {
  heading: string;
  slides: FoundersImpactSlide[];
  speed?: number;
  variant: FoundersImpactSlideshowVariant;
};

type State = {
  currentSlide: number;
  shouldCancelNextTimeout: boolean;
};

class FoundersImpactSlideshow extends PureComponent<Props, State> {
  private sliderRef = createRef<Slider>();

  static defaultProps = {
    showPagination: true,
    speed: 500,
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

  renderSlide = (variant: FoundersImpactSlideshowVariant, slide: FoundersImpactSlide) => {
    const foundersLength = slide.company.founders?.length;

    if (!foundersLength) {
      return null;
    }

    return (
      <div
        key={`FoundersImpactSlideshow-slide-${slide.company.name}`}
        className="FoundersImpactSlideshow__slide__card flex flex-col md:flex-row col-12"
      >
        <div className="col-12 md:col-6 flex flex-col pr3 md:pr0">
          <Button
            ariaLabel={Language.t('Global.companiesButtonAriaLabel')}
            to={
              slide.company.companyDetailPageReference
                ? generateCompanyDetailUrl(slide.company.companyDetailPageReference.slug)
                : RouteMap.COMPANIES.path
            }
            wrap={true}
            className={cx(
              'FoundersImpactSlideshow__left-tile radius-xs h100 w100 text-left flex flex-col',
              {
                'bg-color-nutella': variant === 'nutella-lilac',
                'bg-color-mulberry': variant === 'mulberry-lilac',
              }
            )}
          >
            <div
              className={cx(
                'FoundersImpactSlideshow__left-tile-content flex flex-col col-12 p1_5 md:p3_75',
                {
                  'color-charcoal': variant === 'nutella-lilac',
                  'color-chalk': variant === 'mulberry-lilac',
                }
              )}
            >
              <p className="secondary-sm md:pb1_75">{slide.leftSubheading}</p>
              <p className="primary-lg">{slide.leftHeadline}</p>
              {slide.leftImage && (
                <div className="FoundersImpactSlideshow__img-container mt2_5">
                  <img
                    className="w100 h100 fit-cover radius-xs"
                    src={slide.leftImage.src}
                    alt={slide.leftImage.alt || Language.t('Global.fallbackAltLabel')}
                  />
                </div>
              )}
            </div>
          </Button>
        </div>

        <div className="col-12 md:col-6 flex flex-col pl3 md:pl0 md:mt10">
          <Button
            ariaLabel={Language.t('Slideshow.readMoreAboutCompanyButtonAriaLabel', {
              company: slide.company.name,
            })}
            to={
              slide.company.companyDetailPageReference
                ? generateCompanyDetailUrl(slide.company.companyDetailPageReference.slug)
                : RouteMap.COMPANIES.path
            }
            className="FoundersImpactSlideshow__right-tile bg-color-lilac-darker h100 w100 text-left radius-xs flex flex-col"
            wrap={true}
          >
            <div className="FoundersImpactSlideshow__right-tile-content flex flex-col justify-between col-12 color-charcoal p1_5 md:p3_75">
              <div className="FoundersImpactSlideshow__logo-container">
                <img
                  className="fit-contain"
                  src={slide.company.logo.src}
                  alt={slide.company.logo.alt || Language.t('Global.fallbackAltLabel')}
                />
              </div>
              <p className="primary-lg">{slide.rightHeadline}</p>
            </div>
          </Button>
        </div>
      </div>
    );
  };

  render() {
    const { slides, speed } = this.props;

    return (
      <div className="FoundersImpactSlideshow relative site-inner-content-max-width mxauto pb5">
        <div className="FoundersImpactSlideshow__pagination-container--style-mobile absolute z-7 absolute pr_75 md:none">
          <Button
            ariaLabel={Language.t('Slideshow.viewNextFounder')}
            className="text-left bg-color-transparent text-decoration-none color-lilac-very-dark secondary-bold-xs"
            onClick={this.next}
          >
            <RightArrow color="chalk" variant="round-border" />
          </Button>
        </div>

        <div className="FoundersImpactSlideshow__slides-container flex flex-col mxauto col-12 px_75 md:px0 md:col-10 relative">
          <div className="FoundersImpactSlideshow__pagination-container absolute z-7 none md:block">
            <Button
              ariaLabel={Language.t('Slideshow.viewNextFounder')}
              className="text-left bg-color-transparent text-decoration-none color-lilac-very-dark secondary-bold-xs"
              onClick={this.next}
            >
              <RightArrow color="chalk" variant="round-border" />
            </Button>
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
            speed={speed}
          >
            {slides.map((slide: FoundersImpactSlide) => {
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
