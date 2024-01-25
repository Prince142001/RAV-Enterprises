// let counts = setInterval(HappyCustomer);
// let happyCustomerVar = 0;
// let design = 0;
// let city = 0;

// function HappyCustomer() {
//     let countHappyCustomer = document.getElementById("happy-customers");
//     countHappyCustomer.innerHTML = ++happyCustomerVar;
//     if (happyCustomerVar === 1055) {
//         clearInterval(counts);
//     }
// }

// let countDesigns = document.getElementById("designs");
// countDesigns.innerHTML = ++design;
// if (design === 100) {
//     clearInterval(counts);
// }

// let countCities = document.getElementById("cities");
// countCities.innerHTML = ++city;
// if (city === 9) {
//     clearInterval(counts);
// }

// // function updated() {
// //     let count = document.getElementById("designs");
// //     count.innerHTML = ++design;
// //     if (design === 300) {
// //         clearInterval(counts);
// //     }
// // }

// // function updated() {
// // }

let hcCounts = setInterval(HappyCustomer);
let dCounts = setInterval(design);
let cCounts = setInterval(cities);
let wCounts = setInterval(workers);
let hcVar = 0;
let dVar = 0;
let cVar = 0;
let wVar = 0;

function HappyCustomer() {
    let countHappyCustomer = document.getElementById("happy-customers");
    countHappyCustomer.innerHTML = ++hcVar;
    if (hcVar === 1055) {
        clearInterval(hcCounts);
    }
}

function design() {
    let countDesign = document.getElementById("designs");
    countDesign.innerHTML = ++dVar;
    if (dVar === 100) {
        clearInterval(dCounts);
    }
}

function workers() {
    let countWorkers = document.getElementById("workers");
    countWorkers.innerHTML = ++wVar;
    if (wVar === 75) {
        clearInterval(wCounts);
    }
}

function cities() {
    let countCities = document.getElementById("cities");
    countCities.innerHTML = ++cVar;
    if (cVar === 9) {
        clearInterval(cCounts);
    }
}