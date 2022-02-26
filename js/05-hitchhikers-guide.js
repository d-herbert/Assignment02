let gameChoice
let ratingVal

// display
document.write('<h3> welcome to the `hitchhiker`s guide to the galaxy` app</h3><br>')

// ask for grade
gameChoice = prompt('are you ready to play the game (yes/no)?')

if (gameChoice === 'yes') {
    alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain C. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.')
    dirChoice = prompt('Which direction would you like to head (please enter forward, left, or right)?')
    switch (dirChoice) {
        case 'left':
            alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!')
            break;
        case 'forward':
            alert('You walk 100 yards and safely make your way out of the cave.')
            break;
        case 'right':
            alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!')
            break;
        default:
            alert('The ghost of Captain C has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.')
    }
} else {
    alert('thanks, play again sometime')
}

ratingVal = prompt('game over. rate the game between 1 & 10')
if (ratingVal < 11 && ratingVal >= 6) {
    document.write('thank you, play again?')
} else if (ratingVal < 6 && ratingVal >= 1) {
    document.write('thank you, we are working hard to improve the game')
} else {
    document.write('thank you, the game has ended')
}


