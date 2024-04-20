// generate random color

const randomcolor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervalId;

const startcolorchanger = function () {
    function changeBgColor() {
        document.body.style.backgroundColor = randomcolor()
    }
 if (!intervalId) {
    intervalId =  setInterval( changeBgColor , 1000)
 }
}

const stopcolorchanger = function () {

    clearInterval(intervalId)
    intervalId = null;
   
}

document.getElementById("start").addEventListener("click" , startcolorchanger)

document.getElementById("stop").addEventListener("click" , stopcolorchanger)