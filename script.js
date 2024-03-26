let out = document.getElementById("show");
let docNum = document.getElementById("select");
let docNumb = document.getElementById("selectt");
let loadd = document.getElementById("enter");
let airtime;
let allPins = []
console.log(out.innerHTML);
// out.innerHTML = Math.floor(Math.random() *10000000000);

function generate() {
    out.innerHTML = ""
    // let out = document.getElementById("show")
    if (docNum.value == '' ) {
        alert("Select a Network ")
    }else if (docNumb.value == ''){
        alert("Select an amount")
    } 
    else {
        for (let index = 1; index <= 16; index++) {
            airtime = Math.floor(Math.random() * 10)
            out.innerHTML += airtime;
        }
        console.log(out.innerHTML);
    }
    out.innerHTML += `<button id="copy" onclick = "copy()"><i class="fa-regular fa-clipboard"></i></button>`
}

function load() {
    if (loadd.value == '') {
        alert("You haven't enter your airtime yet")
    }
    else if (loadd.value.startsWith("*311*") && loadd.value.includes(airtime) && loadd.value.endsWith("#")) {
        alert(`Account recharge of ${docNum.value}  #${docNumb.value} was successful, 1hr free on Tiktok + 1.2GB N500, Dial *406*2# to buy.`)
    } else {
        alert("Dear customer, this pin is incorrect and your line will be BARRED from the service after 5 incorrect attempts ")
    }
    console.log(docNum.value, docNumb.value);
    // console.log(docNumb.value);
}

function copy() {
    navigator.clipboard.writeText(out.innerText)
}