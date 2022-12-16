import { useRef } from "react";
import { useGsapNotFoundHeadline, useGsapNotFoundImg } from "../hooks/gsap";

const NotFound = () => {
  const leftHeadlineRef = useRef(null);
  const rightHeadlineRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useGsapNotFoundHeadline(leftHeadlineRef);
  useGsapNotFoundHeadline(rightHeadlineRef, "100vw");
  useGsapNotFoundImg(leftImgRef);
  useGsapNotFoundImg(rightImgRef);

  return (
    <div className="not-found wrapper">
      <div className="headline-1" ref={leftHeadlineRef}>
        Sorry, we couldn't
      </div>
      <div className="img-1" ref={rightImgRef}>
        <img
          src="https://images.pexels.com/photos/13262992/pexels-photo-13262992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman Sitting on a Hood of an Old Volkswagen Golf Car"
        />
      </div>
      <div className="img-2" ref={leftImgRef}>
        <img
          src="https://images.pexels.com/photos/5808388/pexels-photo-5808388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Woman showing retro photo camera and holding blooming flower"
        />
      </div>
      <div className="headline-2" ref={rightHeadlineRef}>
        Find that page
      </div>
    </div>
  );
};

export default NotFound;
