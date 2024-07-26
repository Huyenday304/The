const unresolved = document.querySelector(".unresolved");
const unresolvedWHalf = unresolved.offsetWidth / 1.3;
const untold = document.querySelector("#untold");

untold.addEventListener("mousemove", (e) => {
    unresolved.style.left = e.pageX - unresolvedWHalf + "px";
    unresolved.style.top = e.pageY - unresolvedWHalf + "px";
    unresolved.style.opacity = "1";
});

const ellipse = document.querySelector('.ellipse');
const trembling = document.querySelector('#trembling');
const tremblingImg = trembling.querySelector('img');

ellipse.addEventListener('click', () => {
  tremblingImg.style.animation = 'shake 0.5s infinite';
});
4

const towerIntact = document.querySelector('.tower-intact');
const poem31 = document.getElementById('poem-31');
const poem32 = document.getElementById('poem-32');

const NOGAPSEXISTED = poem31.textContent;
const ITSTOODCOMPLETE = poem32.textContent;
const hoverText1 = "DIDN'T FORESEE THAT";
const hoverText2 = 'IT WAS TEMPORARY';

towerIntact.addEventListener('mouseover', () => {
  poem31.textContent = hoverText1;
  poem32.textContent = hoverText2;
});

towerIntact.addEventListener('mouseout', () => {
  poem31.textContent = NOGAPSEXISTED;
  poem32.textContent = ITSTOODCOMPLETE;
});