const Bars = document.querySelector('.bars');
const navListEl = document.querySelector('.nav-list');
let barsCross = false;
let showNav  = false;

console.log('navListEl');

function change() {
        if (!barsCross) {
            Bars.classList.add('cross') & navListEl.classList.add('toggle');
            barsCross = true;
            showNav = true;

        }
        else {
            Bars.classList.remove('cross') & navListEl.classList.remove('toggle');
            barsCross = false;
            showNav = false;
        }
    }

// function toggleNav() {
//     if ()
// }


// event Listener
Bars.addEventListener("click", change)
// navListEl.classList.add('toggle');



