import React from 'react';
import { ServiceBoxWrap } from './servicesContStyles';

function ServicesContent() {
  return (
    <>
      <ServiceBoxWrap>
        <div className="S1">
          <div className="box">
            <div className="header">
              <h3>Pillows</h3>
            </div>
            <div className="cont">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
              <div className="line"></div>
              <h4>$20</h4>
              <div className="buttons">
                <button>Order Now</button>
                <button>View Gallary</button>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="header">
              <h3>Water Bottles</h3>
            </div>
            <div className="cont">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
              <div className="line"></div>
              <h4>$20</h4>
              <div className="buttons">
                <button>Order Now</button>
                <button>View Gallary</button>
              </div>
            </div>
          </div>
        </div>
        <div className="S1">
          <div className="box">
            <div className="header">
              <h3>Canvas Wall Frame</h3>
            </div>
            <div className="cont">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
              <div className="line"></div>
              <h4>$20</h4>
              <div className="buttons">
                <button>Order Now</button>
                <button>View Gallary</button>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="header">
              <h3>Decals</h3>
            </div>
            <div className="cont">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
              <div className="line"></div>
              <h4>$20</h4>
              <div className="buttons">
                <button>Order Now</button>
                <button>View Gallary</button>
              </div>
            </div>
          </div>
        </div>
      </ServiceBoxWrap>
    </>
  )
}

export default ServicesContent;