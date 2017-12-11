import sayHello from './lib/sayHello.js';
import {TimelineMax} from 'gsap';
import PubSub from 'pubsub-js';
import svgUseIt from 'svg-use-it';
import ScrollMagic from 'scrollmagic';
// components
import scrollMagic from './components/scrollmagic.js';
import heroAnimation from './components/hero-anim.js';
import tokenAnimation from'./components/token-anim.js';
import roadMapAnimation from './components/road-map-anim.js';



document.ready(function() {
  let supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  svgUseIt();
  scrollMagic();
  heroAnimation();
  tokenAnimation();
  roadMapAnimation();

});

