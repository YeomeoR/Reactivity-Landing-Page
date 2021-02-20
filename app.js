//movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//items
const title = document.querySelector('.title')
const title1 = document.querySelector('.info h3')
const atom = document.querySelector('.atom img')
const circle = document.querySelector('.circle-back-back')
const circleBack = document.querySelector('.circle-back')
const projects = document.querySelector('.projects')
const prices = document.querySelector('.prices')

// moving animation event
container.addEventListener('mousemove', (e) => {
  // console.log(e.pageX, e.pageY)
  let xAxis = (window.innerWidth / 2 - e.pageX) / 8;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 8;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener('mouseenter', (e) => {
    card.style.trasition = 'none';
    //popout effect
    title.style.transform = 'translateZ(200px)'
    title1.style.transform = 'translateZ(150px)'
    atom.style.transform = 'translateZ(150px) rotateZ(360deg)';
    circle.style.transform = 'translateZ(75px) rotateZ(360deg)';
    circleBack.style.transform = 'translateZ(40px) rotateZ(360deg)';
    projects.style.transform = 'translateZ(120px)';
    prices.style.transform = 'translateZ(80px)';
})

//animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.9s ease-out'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback effect
    title.style.transform = 'translateZ(0px)'
    title1.style.transform = 'translateZ(0px)'
    atom.style.transform = 'translateZ(0px) rotateZ(0deg)'
    circle.style.transform = 'translateZ(0px)'
    circleBack.style.transform = 'translateZ(0px)'
    projects.style.transform = 'translateZ(0px)'
    prices.style.transform = 'translateZ(0px)'
})