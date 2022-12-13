import React, { useRef } from 'react';
import { useGsapHeroTextUpStagger } from '../Hooks/gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const heroText1Ref = useRef(null);
  const heroText2Ref = useRef(null);
  const heroBtnRef = useRef(null);
  const heroTextArr = [heroText1Ref, heroText2Ref, heroBtnRef];

  useGsapHeroTextUpStagger(heroTextArr, 1.5);

  return (
    <section className="hero wrapper" ref={heroRef} >
      <div className="hero-content">
        <h1 className="ethereal" ref={heroText1Ref}>
          war is 
        </h1>
        <h1 className="canvas" ref={heroText2Ref}>
          Coming ! 
        </h1>
        <button className='hero-btn' ref={heroBtnRef}>Be Ready</button>
      </div>
    </section>
  );
};

export default Hero;