const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from(".big-heading",{
        y: '-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5,
        
    })
    t1.from("#feature",{
        y: '-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5,
        
    })
    
}

function mouseskew(){
    //define deffult scale value 
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mouseover",function(data){
        var xdiff = data.clientX - xprev;
        var ydiff = data.clientY - yprev;
        xprev = data.clientX;
        yprev = data.clientY;

        gsap.utils.clamp(9,1.2,xdiff);
        gsap.utils.clamp(9,1.2,ydiff);

        circleMouseFollower(xscale,yscale);

    })
}

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(data){

        document.querySelector("#minicircle").style.transform = `translate(${data.clientX}px, ${data.clientY}px) scale(${xscale},${yscale})`;
    })
}
mouseskew();  
circleMouseFollower();
firstPageAnim();

