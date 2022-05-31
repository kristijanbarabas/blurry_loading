const loadText = document.querySelector('.load-text');
const bg = document.querySelector('.bg');

let load = 0;

// POSTAVLJEN INTERVAL OD 30 MILISEKUNDI NA BLURRING FUNKCIJU KAKO BISMO BROAJLI OD 0 DO 100 %
let int = setInterval(blurring, 30)

function blurring() {
    load ++;
    if (load > 99) {
        clearInterval(int);
            // sa clearInterval funkcijom zaustavljamo brojanje;
    }

    loadText.innerText = `${load}%`; // mijenjamo text tako da se vidi brojanje do 100,na load dodajemo %
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0,100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// FUNKCIJA ZA MAPIRANJE BROJKI

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

