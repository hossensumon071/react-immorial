import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadline = useRef(null);

  useGsapFooterHeadline(footerHeadline, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeadline}>Bonjour</h1>
      <p>
        &copy; {new Date().getFullYear()} Immemorial. Crafted by yours truly
      </p>
    </section>
  );
};

export default Footer;
