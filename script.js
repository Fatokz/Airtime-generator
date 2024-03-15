let out = document.getElementById("show");
let docNum = document.getElementById("select");
let docNumb = document.getElementById("selectt");
let loadd = document.getElementById("enter");
let airtime ;
console.log(out.innerHTML);
// out.innerHTML = Math.floor(Math.random() *10000000000);

function generate() {
    if (docNum.value == '' || docNumb. value == '' ) {
        alert("Select an Amount and a service provider 🎭🎭 ")
    } else {
        airtime = Math.floor(Math.random() *10000000000000000);
        out.innerHTML = airtime
        console.log(out.innerHTML);
    }
}

function load() {
    if (loadd.value == ''){
        alert("You haven't enter your airtime yet")
    }
    else if (loadd.value.startsWith("*311*") && loadd.value.includes(airtime) &&  loadd.value.endsWith( "#")) {
        alert(`you have successfully recharge  ${docNum.value} ${docNumb.value} airtime`)
    } else {
        alert("Dear customer, this pin is incorrect and your line will BARRED from the service after 5 incorrect attempts ")
    }
    console.log(docNum.value);
    console.log(docNumb.value);
}