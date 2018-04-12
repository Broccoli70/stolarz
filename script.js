let controller = new ScrollMagic.Controller();

let tween = new TweenMax.to("#animate", 1, {
  transform: "translateY(10%)",
  opacity: "0.8",

})
new ScrollMagic.Scene({
  triggerElement: 'body',
  duration: 200,
  triggerHook: 0,
})
.setTween(tween)
.addTo(controller)
//SCROLL MAGIC /\/\/\/\/\


class clicking {
  constructor(object) {
    this.object = object;
  }
  //Click and unclick
  menuDisplay() {
    let count = 0;
    return function() {
      if(count == 0) {
        $("html").css({overflow: "hidden"});
        $("body").css({height: "100vh"});
        $(".open").css({display: "flex"});
        count++;
      } else if(count == 1) {
        $("html").css({overflow: ""});
        $("body").css({height: ""});
        $(".open").css({display: ""});
        count = 0;
      }
    }
  }
}
let ele = new clicking("#open");
$("#open").on("click", ele.menuDisplay() );

$("#gallery").on("click", () => {
  let tl = new TimelineMax();
  tl.fromTo(".gallery-open", 0.5, {
    transform: "scale(0.2)",
    opacity: 1,
    display: "flex",
  }, {
    transform: "scale(1)",
    display: "flex",
    onStart: foo,
  })
  function foo() {
    $("html").css({overflow: "hidden"});
    $("body").css({height: "100vh"});
    $(".gallery-open").css({display: "flex"});
    $(".photo").css({display: "grid"})
    $("#hammerIco").css({display: "none"})
    $("#back").css({display: "flex"})
  }

  $("#back").on("click", () => {
    let tl = new TimelineMax();
    tl.fromTo(".gallery-open", 0.3, {
      transform: "scale(1)",
      display: "flex",
    }, {
      transform: "scale(0.5)",
      opacity: 0,
      onComplete: del,
    })
    function del() {
      $("html").css({overflow: ""});
      $("body").css({height: ""});
      $(".gallery-open").css({display: "none",})
      $(".photo").css({display: "none"})
      $("#back").css({display: "none"})
    }
  });
});

let arrayImg = ["yellow", "blue", "pink", "darkred" ,"green"]
let actualImg = 0;
$("#left").on("click", ()=> {
  actualImg++;
})
$("#right").on("click", ()=> {
  actualImg--;

})
$(window).on("click", () => {fool();})

function fool() {
  $(".photo__content").css({
    background: arrayImg[actualImg],
    backgroundSize: "cover",
  });
  if(actualImg > arrayImg.length-2) {
    actualImg = arrayImg.length-1 ;
  } else if(actualImg < 0) {
    actualImg = 0;
  }
}
