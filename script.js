function loading(){
    let tl = gsap.timeline();
tl
.from(".loader",{
    y : "-100vh",
    duration : 0.1,
})
.from(".one", {
    opacity : 0,
    duration : 2,
    delay : 2,
    display : "block",
})
.to(".one",{
    opacity : 0,
    duration : 2,
    display : "block",
},'-=1')
.from(".two",{
    opacity : 0,
    duration : 2,
    display : "block",
})
.to(".two",{
    opacity : 0,
    duration : 2,
    display : "block",
},'-=1')
.from(".three",{
    opacity : 0,
    duration : 2,
    display : "block",
})
.to(".three",{
    opacity : 0,
    duration : 2,
    display : "block",
},'-=1')
.to(".loader",{
    y: "-100vh",
    duration : 2,
    display : "none"
})
.from(".navbar",{
    y :"-100vh",
    duration : 2,
})
.from(".box",{
    x : "-100vw",
    duration : 3,
    ease: "bounce.out", 
})
.from(".box .h1",{
    opacity : 0,
    x : "-100vw",
    duration : 1,
    ease : "easeInOut",
})
.from(".box .h2",{
    opacity : 0,
    x : "-100vw",
    duration : 1,
    ease : "easeInOut",
})
.from(".box .h3",{
    opacity : 0,
    x : "-100vw",
    duration : 1,
    ease : "easeInOut",
})
.from(".box-cont",{
    scale : 0,
    duration : 3,
    ease: "power2.inOut",
},'-=1')
.from(".image2",{
    y : "-200vh",
    rotate : 360,
    ease: "bounce.out",
    duration : 3,
},'-=8')
// .to(".page2",{
//     display : "block",
// })
}
loading();

function mover(){
    window.addEventListener("mousemove",function(dets){
        let x = dets.clientX;
        let y = dets.clientY;
        let fix = document.querySelector(".fixer");
        fix.style.left = `${x}px`;
        fix.style.top = `${y}px`;
    })
}
mover();

function imgmover(){
    setTimeout(function(){
        window.addEventListener("mousemove", function(dets){
            document.querySelector(".image2").style.transform = `translate(-35%,-35%) translate(${dets.clientX*0.04}px,${dets.clientY*0.04}px)`
        })
    },23000)
}
imgmover();

function pager(){
    setTimeout(function(){
        document.querySelector(".page2").style.display = "block";
    },25000);
}
pager();

function Anima(){
    let tl2 = gsap.timeline({
        scrollTrigger : {
            trigger: ".page2",
            start: "top center",
            toggleActions : "play pause resume reverse"
        }
    })
    tl2
    .from(".page2 .heading",{
        y : "100vh",
        duration : 1,
        transform : `translateY("360deg")`,
    })
    .from(".page2 .container",{
        y : "100vh",
        duration : 1,
        transform : `translateY("360deg")`,
    })
    .from(".page2 .container .boxes",{
        y : "50vh",
        duration : 2,
        opacity : 0,
        scale: 0.4,
    },'-=1')
}
Anima();


