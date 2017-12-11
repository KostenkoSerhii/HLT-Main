import ScrollMagic from 'scrollmagic';
import PubSub from 'pubsub-js';


function scrollMagic() {
  let controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onEnter'
    }
  });


  new ScrollMagic.Scene({
    // duration: 100,	
    offset: 150,
    triggerElement: '.js-ww-block',
    reverse: false
  })
    .addTo(controller)
    .on('enter', function(e) {
      PubSub.publish('why-we-animation');
    });



};
module.exports = scrollMagic;
