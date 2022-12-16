import { useRef } from "react";
import { useGsapLeftWalking } from "../hooks/gsap";

const SectionTitle = ({ title, needMargin = false }) => {
  const secTitle = useRef(null);

  useGsapLeftWalking(secTitle);

  const optionalMarginStyles = {
    margin: needMargin ? "0 5vw" : null,
  };

  return (
    <h6 className="section-title" style={optionalMarginStyles} ref={secTitle}>
      {title}
    </h6>
  );
};

export default SectionTitle;
