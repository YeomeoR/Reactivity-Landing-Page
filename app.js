//animation grab
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//3D class grab
const title = document.querySelector('.title');
const title1 = document.querySelector('.info h3');
const title2 = document.querySelector('.info h4');
const atom = document.querySelector('.atom img');
const circle = document.querySelector('.circle-back-back');
const circleBack = document.querySelector('.circle-back');
const projects = document.querySelector('.services');
const prices = document.querySelector('.prices');

// moving animation event
container.addEventListener('mousemove', (e) => {
  // console.log(e.pageX, e.pageY)
  let xAxis = (window.innerWidth / 2 - e.pageX) / 12;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  //popout effect
  title.style.transform = 'translateZ(200px)';
  title1.style.transform = 'translateZ(150px)';
  title2.style.transform = 'translateZ(130px)';
  atom.style.transform = 'translateZ(180px)';
  circle.style.transform = 'translateZ(75px) ';
  circleBack.style.transform = 'translateZ(40px) ';
  projects.style.transform = 'translateZ(120px)';
  prices.style.transform = 'translateZ(80px)';
});

//animate out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 1.2s ease-out';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //popback effect
  title.style.transform = 'translateZ(0px) ease-out';
  title1.style.transform = 'translateZ(0px)';
  atom.style.transform = 'translateZ(0px) ease-out';
  circle.style.transform = 'translateZ(0px) linear';
  circleBack.style.transform = 'translateZ(0px) linear';
  projects.style.transform = 'translateZ(0px)';
  prices.style.transform = 'translateZ(0px)';
});

