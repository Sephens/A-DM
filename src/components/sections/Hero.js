import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import '../../styles/mine.css'
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>

        <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800" id='heroic'>
        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" id='hero-title'>
              A+ Diaper <span className="text-color-primary" id='manage'>Management</span>
            </h1>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" id='p'>
                Our solution aims at creating a link between the <br /> users and the recyclers for effective diaper disposal
                </p>
              
              
                
          </div>

          
          <div className="middle-hero">
                <div className="waste-services">
                    <div className='waste-head'>
                        <h3 id='find'>Find sustainable waste services</h3>
                    </div>
                    <div className="waste-input">
                        <input type="text" placeholder='Kisumu' id='service-input' />
                        <select name="" id="" className='select-service'>
                            <option value="">For Home</option>
                            <option value="">For Business</option>
                        </select>
                        <a href="#" id='show-services'> Show services</a>
                    </div>
                </div>
            </div>


          <div className="hero-content">
            
            {/* <div className="container-xs">
              
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Get started
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;