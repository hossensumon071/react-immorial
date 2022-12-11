import { useEffect } from "react";
import gsap, {Expo} from "gsap";

export const useGsapShutterUnveil = (item, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(el,
      {
      height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: delay,
      })
  }, [])
}