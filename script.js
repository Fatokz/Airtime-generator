let copys = document.getElementById('copy')
let paste = document.getElementById('paste')
let out = document.getElementById("show");
let docNum = document.getElementById("select");
let docNumb = document.getElementById("selectt");
let loadd = document.getElementById("enter");
let table = document.getElementById("shownetwork");
let airtime;
let allPins = [] && JSON.parse(localStorage.getItem("airtime"))


// copys.style.display = "initial"
// paste.style.display = "none"


function generate() {
    out.innerHTML = ""
    // let out = document.getElementById("show")
    if (docNum.value == '') {
        alert("Select a Network ")
    } else if (docNumb.value == '') {
        alert("Select an amount")
    }
    else {
        for (let index = 1; index <= 16; index++) {
            airtime = Math.floor(Math.random() * 10)
            out.innerHTML+= airtime;
        }
        console.log(out.innerHTML);
        let date = new Date()
        let pins = {
            pin: out.innerHTML,
            network: docNum.value,
            amount: docNumb.value,
            date: `${date.toLocaleString()}`,
            isUsed: false,
        }
        
    table.innerHTML = ''
        console.log(pins);
        allPins.push(pins)
        localStorage.setItem("airtime", JSON.stringify(allPins))
        console.log(allPins);
    }

    table.innerHTML = ''
    for (let index = 0; index < allPins.length; index++) {
        const element = allPins[index];
        console.log(element);
        table.innerHTML += `
            <tr>
                <td>${element.network}</td>
                <td> ${element.amount}</td>
                <td id="ccpin${index}">
                    ${element.pin}
                    ${'<button id="copys" onclick = "copy()"> <i class="fa-regular fa-clipboard"></i> </button>'}
                </td>
                <td>${element.date}</td>
                <td>${element.isUsed? "Been Used" : "Not Used"}</td>
            </tr>
        `
    }
}

function load() {
    console.log(loadd.value);
    console.log(loadd.value.slice(5, 21));

    let ppin = loadd.value.slice(5, 21);
    // let loadingPin = allPins.find((el)=> el.pin == ppin);
    console.log(airtime);
    if (loadd.value == '') {
        alert("You haven't enter your airtime yet")
    }
    else if (loadd.value.startsWith("*311*") && loadd.value.includes(airtime) && loadd.value.endsWith("#")) {
        alert(`Account recharge of ${docNum.value}  #${docNumb.value} was successful, 1hr free on Tiktok + 1.2GB N500, Dial *406*2# to buy.`)
    }
     else {
        alert("Dear customer, this pin is incorrect and your line will be BARRED from the service after 5 incorrect attempts ")
    }
    console.log(docNum.value, docNumb.value);
    // console.log(docNumb.value);
}

function copy(i) {
    let ccpin = document.getElementById(`ccpin${i}`)
    navigator.clipboard.writeText(out.innerText)
}