import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapDownStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
       {
        y: "-100%",
        opacity: 0,
       },
       {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: Expo.easeIn,
        delay: delay
       }
       );
  }, []);
};
export const useGsapHeroTextUpStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
       {
        y: "100%",
        opacity: 0,
       },
       {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.4,
        ease: Expo.easeOut,
        delay: delay
       }
       );
  }, []);
}


