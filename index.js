// for smooth scrolling - locomotive js
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Function to make a circle always follow the cursor
function circleFollow(){
    // Get the references of the required elements
    // 1. the circle 
    const circle=document.getElementById('cursor');
    
    document.body.addEventListener('mousemove',function(details){
        gsap.to(circle,{
            left:details.clientX,
            top:details.clientY,
            delay:0.09,
        })
        
    })
}

circleFollow();


// Function to load the animation at the start
function loadingAnim(){
    const heading=document.querySelectorAll("#page1 h1");
    gsap.from(heading,{
        opacity:0,
        y:500,
        duration:1,
        delay:0.3,
        stagger:0.5
    })

    const img_cont=document.getElementById('img_container');
    gsap.from(img_cont,{
        opacity:0,
        duration:1,
        delay:1.5,
    })
}

loadingAnim();

// // Function to animate the buy button in the image to follow the cursor
// function buyImgFollow(){
//     // Get the references of the required elements
//     // 1. the circle 
//     // 2. the view it will manifest in
//     const buy=document.getElementById('buy');
//     const container=document.getElementById('img_container');

//     // the buy button should appear when cursor enters the view
//     container.addEventListener('mouseenter',function(){
//         gsap.to(buy,{
//             scale:1,
//             opacity:0.6
//         })
//     })

//     // the buy button should disappear when cursor leaves the view
//     container.addEventListener('mouseleave',function(){
//         gsap.to(buy,{
//             scale:0,
//             opacity:0
//         })
//     })

//     // add mouse move listener in the view
//     container.addEventListener('mousemove',function(details){
//         console.log(details.clientY);
//         gsap.to(buy,{
//             left:details.clientX,
//             top:details.clientY   
//         })
//     })
// }

// buyImgFollow();

