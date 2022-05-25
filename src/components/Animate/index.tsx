import React, { FC, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ContainerAnimate } from './styles';

import Lottie from "lottie-react";

import { animation } from 'polished';

const Animate: React.FC = () => {

  const videoContainer = useRef<HTMLDivElement>(null);
  const videoIntro = useRef<HTMLHeadingElement>(null);
  
	gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tlVideo = gsap.timeline({
      scrollTrigger: {
        trigger: videoContainer.current!,
        markers: { startColor: "blue", endColor: "blue" },
        start: "0%",
        end: "100%",
        scrub: true,
        pin: true,
        id: 'first',
        scroller: document.body,
        
        pinType: 'transform',
        onUpdate: self => console.log("progress:", self.progress)
      },
    });
    
    tlVideo.fromTo(
      ".video-intro",
      { currentTime: 0},
      { currentTime: 3, duration: 1}
    );
    
  });

	return (
		<ContainerAnimate ref={videoContainer}>
      <video className="video-intro" muted>
      </video>
		</ContainerAnimate>
	);
};

export default Animate;
