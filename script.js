const button = document.getElementById('calculateButton')
const input = document.getElementById('inputCost')
const result = document.getElementById('result')


function Calculate() {
    let cost = Number(input.value);

    if (cost <= 100) {
        cost += 10;
    }
    result.innerHTML = `shiping Cost is ${cost}`

    
}