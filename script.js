function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);



  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#mainpage"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);


  ScrollTrigger.scrollerProxy("#mainpage", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#mainpage").style.transform
      ? "transform"
      : "fixed",
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


  ScrollTrigger.refresh();
}
locomotiveAnimation();

function showSidebar(){
  const sidebarElemnt=document.querySelector('.ri-menu-2-fill')
  // sidebarElemnt.style.color="red"
}
function hideSidebar(){
  const sidebarElemnt=document.querySelector('.ri-close-fill')
  // sidebarElemnt.style.color="red"
}

function navbarAnimation() {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#mainpage",
      start: "top 0",
      end: "top -10%",
      scrub: true,
    },
  });
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#mainpage",
      start: "top 0",
      end: "top -10%",
      scrub: true,
    },
  });
}
navbarAnimation();

function videoconAnimation() {

  var videocon = document.querySelector("#video-container")
  var playbtn = document.querySelector("#play")
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,

    });
  });

  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 80,
      top: dets.y - 80,
    });
  });
}
videoconAnimation();

function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadingAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}
cursorAnimation();



  // function logAnimation() {
  //   gsap.from("#page6 #logo img", {
  //     y: 100,
  //     opacity: 0,
  //     delay: 1,
  //     duration: 1,
  //     stagger: 0.3
  //   });
  // }
  // logAnimation();

  function submitToGoogleSheet() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxEiqWszryY192yaCP45AD9NUmzEi-WmGqwFMGEQ2JujROuBiEUvDGZRZg3pr9gb1od/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Thanks for your feedback";
                setTimeout(function () {
                    msg.innerHTML = "";
                }, 3000);
            })
            .catch(error => console.error('Error!', error.message));

        form.reset();
    });
}
    submitToGoogleSheet();



