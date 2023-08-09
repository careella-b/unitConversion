/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function(){
    renderLengthValues()
    renderVolumeValues()
    renderMassValues()
})

function renderLengthValues() {
    let getFeet = inputEl.value * meterToFeet // convert meters to feet
    let getMeters = inputEl.value / meterToFeet // convert feet to meters
    let lengthResult = `
                        ${inputEl.value} meters = ${Number(getFeet).toFixed(3)} feet
                        | ${inputEl.value} feet = ${Number(getMeters).toFixed(3)} meters
                    `
    lengthEl.innerHTML = lengthResult
}

function renderVolumeValues() {
    let getGallons = inputEl.value * literToGallon
    let getLiters = inputEl.value / literToGallon
    let volumeResult = `
                        ${inputEl.value} liters = ${Number(getGallons).toFixed(3)} gallons
                        | ${inputEl.value} gallons = ${Number(getLiters).toFixed(3)} liters
                    `
    volumeEl.innerHTML = volumeResult
}

function renderMassValues() {
    let getPounds = inputEl.value * kiloToPound
    let getKilos = inputEl.value / kiloToPound
    let massResult = `
                        ${inputEl.value} kilos = ${Number(getPounds).toFixed(3)} pounds
                        | ${inputEl.value} pounds = ${Number(getKilos).toFixed(3)} kilos
                    `
    massEl.innerHTML = massResult
}


// VERSION TWO

// const meterToFeet = 3.281
// const literToGallon = 0.264
// const kiloToPound = 2.204

// convertBtn.addEventListener("click", function() {
//     let baseValue = inputEl.value

//     let finalFeetValue = `${baseValue} meter = ${Number(baseValue * meterToFeet).toFixed(3)} feet`
//     lengthEl.textContent = finalFeetValue

//     let finalMeterValue = `${baseValue} feet = ${Number(baseValue / meterToFeet).toFixed(3)} meters`
//     lengthEl.textContent += finalMeterValue
// })