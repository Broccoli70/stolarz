let controller = new ScrollMagic.Controller();

let tween = new TweenMax.to("#fade", 1, {
  opacity: "1",
  transform: "scale(1)",
})

let tween2 = new TweenMax.to("#show", 1, {
  opacity: "1",
  marginTop: "10px",
  transform: "scaleX(0.95)"

})

new ScrollMagic.Scene({
  triggerElement: 'body',
  duration: 50,
  triggerHook: 0,
})
.setTween(tween)
.addTo(controller)

new ScrollMagic.Scene({
  triggerElement: '#fade',
  duration: 100,
  triggerHook: 0,
})
.setTween(tween2)
.addTo(controller)
