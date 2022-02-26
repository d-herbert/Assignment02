//  coinFlip generates random number that is 0 or 1
let coinFlip = Math.round(Math.random(1))
let flipValue

// display
document.write('<h3> welcome to the `coin flip app`</h3><br>')

// ask for choice
choice = prompt('enter heads or tails (h/t)')

if (coinFlip === 1) {
    flipValue = 'h'
} else {
    flipValue = 't'
}
console.log(coinFlip)

if (choice === 'h' && flipValue === 'h') {
    alert('The flip was heads and you chose heads...you win!')
} else if (choice === 't' && flipValue === 'h') {
    alert('The flip was heads but you chose tails...you lose!')
} else if (choice === 'h' && flipValue === 't') {
    alert('The flip was tails but you chose heads...you lose!')
} else if (choice === 't' && flipValue === 't') {
    alert('The flip was tails and you chose tails...you win!')
} else {
    alert('specify `h` for heads or `t` for tails')
}