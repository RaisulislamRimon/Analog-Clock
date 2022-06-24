/* const deg = 6;

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm/12)}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}); */
const HOURHAND = document.querySelector("#hr");
const MINUTEHAND = document.querySelector("#mn");
const SECONDHAND = document.querySelector("#sc");

    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = (hr*(360/12) + (min*((360/60)/12))), minPosition = ((min*(360/60)) + (sec*((360/60)/60))), secPosition = sec*(360/60);

function runTheClock() {

    secPosition += 6;
    minPosition += (6/60);
    hrPosition += (6/360);

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);