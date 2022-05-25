import React, { FC, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from './styles';

import Scrollbar from 'smooth-scrollbar';


const SmoothScroll: React.FC = () => {

  gsap.registerPlugin(ScrollTrigger);

  var options = {
    'damping': 0.05,
    'renderByPixels': true,
    'delegateTo': document.body
  }

  useEffect (() => {

    const bodyScrollBar = Scrollbar.init(document.body, options);
 
    bodyScrollBar.setPosition(0, 0);
    bodyScrollBar.track.xAxis.element.remove();

  // How to get them to work together
    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value!;
        }
        return bodyScrollBar.scrollTop;
      }
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

  }, []);

	return (
	null
	);
};

export default SmoothScroll;
