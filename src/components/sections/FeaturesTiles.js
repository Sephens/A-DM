import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import sample from '../../assets/images/bin3.jpg'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Build up the whole picture',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header bin-divs">
                  <div className="features-tiles-item-image mb-16">
                    <Image className='bin-img'
                      src={require('./../../assets/images/bin1.jpg')}
                      alt="Features tile icon 01"
                     />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="service-title">
                    Residential Pickup
                    </h4>
                  <p className="service-desc">
                    Make your home clean by choosing the best of waste management services. Let us keep the environment clean by kicking diapers away fro home.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header bin-divs">
                  <div className="features-tiles-item-image mb-16">
                    <Image className='bin-img'
                      src={require('./../../assets/images/bin4.jpg')}
                      alt="Features tile icon 02"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="service-title">
                    Business Pickup
                    </h4>
                  <p className="service-desc">
                    Take care of the business we will take care of the waste for you. Choose ADM for reliable,responsible waste pickup.
                    </p>
                </div>
              </div>
            </div>


            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header bin-divs">
                  <div className="features-tiles-item-image mb-16">
                    <Image className='bin-img'
                      src={require('./../../assets/images/bin4.jpg')}
                      alt="Features tile icon 02"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="service-title">
                    Roll-Off Dumpsters
                    </h4>
                  <p className="service-desc">
                    Take care of the business we will take care of the waste for you. Choose ADM for reliable,responsible waste pickup.
                    </p>
                </div>
              </div>
            </div>


          <div className='more'>
            <h1 id='more-title'>Do More with ADM </h1>
            <a href="#" id='more-btn'> Sign Up for My ADM</a>
          </div>

          <div className='more-small'>

            <div className='see-schedule'>
              <img src={sample} className='imago'/>
              <h4>Hello</h4>
            </div>
            <div className='pay-bill'>
            <img src={sample} className='imago'/>
              <h4>Hello</h4>
            </div>
            <div className='see-schedule'>
            <img src={sample} className='imago'/>
              <h4>Hello</h4>
            </div>
            <div className='pay-bill'>
            <img src={sample} className='imago'/>
              <h4>Hello</h4>
            </div>

          </div>

          <div className='learn'>
            <img src={sample} id='learn-img'/>
            <div>
              <h3>Learn more on Environmental Hygiene</h3>
              <p> lorem </p>
              <a href="#" id='more-btn'> Sign Up for My ADM</a>
            </div>

          </div>

          <div className='assistance'>
            <h3>Need Assistance?</h3>
            <p>Our team is readily available to offer an hand in case of problem</p>
            <a href="#" id='more-btn'> View support center</a>
          </div>


          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;