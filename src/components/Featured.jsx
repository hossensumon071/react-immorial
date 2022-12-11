import React, { useRef } from 'react';
import { useGsapFeatureLeftShutterUnveil, useGsapFeatureRightShutterUnveil } from '../Hooks/gsap';

const Featured = () => {
  const featureRef = useRef(null);
  const fetureLeftShutterRef = useRef(null);
  const fetureRightShutterRef = useRef(null);

  useGsapFeatureLeftShutterUnveil(fetureLeftShutterRef, featureRef);
  useGsapFeatureRightShutterUnveil(fetureRightShutterRef, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">Fetured</h2>
      <div className="features">
        <div className="features-l">
          <span className='features-text'>90'S TELEPHONE</span>
          <img src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="90'S TELEPHONE" />
          <span className="features-shutter-l" ref={fetureLeftShutterRef}></span>
        </div>
        <div className="features-r">
          <span className='features-text'>90'S CASSETTE PLAYE</span>
          <img src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="90'S CASSETTE PLAYER" />
          <span className="features-shutter-r" ref={fetureRightShutterRef}></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;