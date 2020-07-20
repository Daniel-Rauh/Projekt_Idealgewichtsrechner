const height = document.getElementById("height")
const age = document.getElementById("age")
const breit = document.getElementById("breit")
const output = document.getElementById("result")
function calc() {
    let result
    if (breit.checked) {
        result = (((height.value - 100) + (age.value / 10)) * 0.9 * 1.1).toFixed(2)
    } else {
        result = (((height.value - 100) + (age.value / 10)) * 0.9 * 0.9).toFixed(2)
    }
    output.innerHTML = `Dein Idealgewicht beträgt ${result}kg`
}