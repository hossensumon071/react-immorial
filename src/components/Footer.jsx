import React, { useRef } from 'react';
import {useGsapFooterHeadline} from "../Hooks/gsap"


const Footer = () => {

  const footerRef = useRef(null);
  const footerHeadlineRef = useRef(null);

  useGsapFooterHeadline(footerHeadlineRef, footerRef)
  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeadlineRef}>Bonjour</h1>
      <p>© {new Date().getFullYear} Immemorial. Crafted by yours truly</p>
    </section>
  );
};

export default Footer;