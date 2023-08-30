function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco()

var anim = "";

document.querySelector("#page2>h1").textContent.split(" ").forEach(function (dets) {
    anim += `<span> ${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = anim;
})

gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:'#page2>h1>span',
        start:'top bottom',
        end:'bottom top',
        scroller:'#main',
        scrub:0.1,
        // markers:true
    },
    color:'#fff',
    stagger:0.1
})




function canvas(){
    const canvas = document.querySelector("#page3>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
            ./resources/frames00007.png
            ./resources/frames00010.png
            ./resources/frames00013.png
            ./resources/frames00016.png
            ./resources/frames00019.png
            ./resources/frames00022.png
            ./resources/frames00025.png
            ./resources/frames00028.png
            ./resources/frames00031.png
            ./resources/frames00034.png
            ./resources/frames00037.png
            ./resources/frames00040.png
            ./resources/frames00043.png
            ./resources/frames00046.png
            ./resources/frames00049.png
            ./resources/frames00052.png
            ./resources/frames00055.png
            ./resources/frames00058.png
            ./resources/frames00061.png
            ./resources/frames00064.png
            ./resources/frames00067.png
            ./resources/frames00070.png
            ./resources/frames00073.png
            ./resources/frames00076.png
            ./resources/frames00079.png
            ./resources/frames00082.png
            ./resources/frames00085.png
            ./resources/frames00088.png
            ./resources/frames00091.png
            ./resources/frames00094.png
            ./resources/frames00097.png
            ./resources/frames00100.png
            ./resources/frames00103.png
            ./resources/frames00106.png
            ./resources/frames00109.png
            ./resources/frames00112.png
            ./resources/frames00115.png
            ./resources/frames00118.png
            ./resources/frames00121.png
            ./resources/frames00124.png
            ./resources/frames00127.png
            ./resources/frames00130.png
            ./resources/frames00133.png
            ./resources/frames00136.png
            ./resources/frames00139.png
            ./resources/frames00142.png
            ./resources/frames00145.png
            ./resources/frames00148.png
            ./resources/frames00151.png
            ./resources/frames00154.png
            ./resources/frames00157.png
            ./resources/frames00160.png
            ./resources/frames00163.png
            ./resources/frames00166.png
            ./resources/frames00169.png
            ./resources/frames00172.png
            ./resources/frames00175.png
            ./resources/frames00178.png
            ./resources/frames00181.png
            ./resources/frames00184.png
            ./resources/frames00187.png
            ./resources/frames00190.png
            ./resources/frames00193.png
            ./resources/frames00196.png
            ./resources/frames00199.png
            ./resources/frames00202.png
            `;
        return data.split("\n")[index];
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = {
    frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()

var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.1,
  },
  stagger:.1,
  color:`#fff`
})

function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./resources/bridges00004.png
./resources/bridges00007.png
./resources/bridges00010.png
./resources/bridges00013.png
./resources/bridges00016.png
./resources/bridges00019.png
./resources/bridges00022.png
./resources/bridges00025.png
./resources/bridges00028.png
./resources/bridges00031.png
./resources/bridges00034.png
./resources/bridges00037.png
./resources/bridges00040.png
./resources/bridges00043.png
./resources/bridges00046.png
./resources/bridges00049.png
./resources/bridges00052.png
./resources/bridges00055.png
./resources/bridges00058.png
./resources/bridges00061.png
./resources/bridges00064.png
./resources/bridges00067.png
./resources/bridges00070.png
./resources/bridges00073.png
./resources/bridges00076.png
./resources/bridges00079.png
./resources/bridges00082.png
./resources/bridges00085.png
./resources/bridges00088.png
./resources/bridges00091.png
./resources/bridges00094.png
./resources/bridges00097.png
./resources/bridges00100.png
./resources/bridges00103.png
./resources/bridges00106.png
./resources/bridges00109.png
./resources/bridges00112.png
./resources/bridges00115.png
./resources/bridges00118.png
./resources/bridges00121.png
./resources/bridges00124.png
./resources/bridges00127.png
./resources/bridges00130.png
./resources/bridges00133.png
./resources/bridges00136.png
./resources/bridges00139.png
./resources/bridges00142.png
./resources/bridges00145.png
./resources/bridges00148.png
./resources/bridges00151.png
./resources/bridges00154.png
./resources/bridges00157.png
./resources/bridges00160.png
./resources/bridges00163.png
./resources/bridges00166.png
./resources/bridges00169.png
./resources/bridges00172.png
./resources/bridges00175.png
./resources/bridges00178.png
./resources/bridges00181.png
./resources/bridges00184.png
./resources/bridges00187.png
./resources/bridges00190.png
./resources/bridges00193.png
./resources/bridges00196.png
./resources/bridges00199.png
./resources/bridges00202.png
`;
return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page5`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()


var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.1,
  },
  stagger:.1,
  color:`#fff`
})

