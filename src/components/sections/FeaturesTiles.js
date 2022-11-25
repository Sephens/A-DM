import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import sample from '../../assets/images/pica.jpg'

import { FcMoneyTransfer } from 'react-icons/fc';
import {GrSchedules} from 'react-icons/gr'
import {FaTruckPickup} from 'react-icons/fa'

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
    title: 'Keep the environment clean and safe',
    paragraph: 'Saving our planet, lifting people out of poverty, advancing economic growth… these are one and the same fight..'
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
                    Make your home clean by choosing the best of waste management services. Let us keep the environment clean by kicking diapers away from home.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header bin-divs">
                  <div className="features-tiles-item-image mb-16">
                    <Image className='bin-img'
                      src={require('./../../assets/images/b-pick.jpg')}
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
                      src={require('./../../assets/images/trash.png')}
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
              <FcMoneyTransfer className='pay-icons'/>
              <p className='p'>Pay Your Bills Online</p>
            </div>
            <div className='pay-bill'>
            <GrSchedules className='pay-icons'/>
              <p className='p'>See Pickup Schedules</p>
            </div>
            <div className='see-schedule'>
            <FaTruckPickup className='pay-icons'/>
              <p className='p'>Request Bulk Pickup</p>
            </div>

          </div>

          <div className='learn'>
            <img src={sample} id='learn-img'/>
            <div>
              <h3 id='h3'>Learn more on Environmental Hygiene</h3>
              <p> Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it is the only thing that ever has </p>
              <a href="#" id='more-btn'> Learn</a>
            </div>

          </div>

          <div className='assistance'>
            <h3 id='h3'>Need Assistance?</h3>
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