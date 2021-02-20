//animation grab
const card = document.querySelector('.card');
//3D class grab
const title1 = document.querySelector('.info h3');

// moving animation event
card.addEventListener('mousemove', (e) => {
    // console.log(e.pageX, e.pageY)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 12;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 12;
    title1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
  
//animate in
card.addEventListener('mouseenter', (e) => {
    title1.style.transition = 'none';
//popout effect
    title1.style.transform = 'translateZ(150px)';
});

//animate out
card.addEventListener('mouseleave', (e) => {
    title1.style.transition = 'all 1.2s ease-out';
    title1.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback effect
    title1.style.transform = 'translateZ(0px)';
});
