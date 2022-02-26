let userNum

// display
document.write('<h3> welcome to the `grade assigner app`</h3><br>')

// ask for grade
userNum = prompt('enter a number between 1 & 100')

if (1 <= userNum && userNum <= 100) {
    if (60 <= userNum && userNum < 70) {
        console.log('you received a D')
    } else if (70 <= userNum && userNum < 80) {
        console.log('you received a C')
    } else if (80 <= userNum && userNum < 90) {
        console.log('you received a B')
    } else if (90 <= userNum) {
        console.log('you received an A')
    }
    else {
        console.log('you received an F')
    }
} else {
    alert('you must specify a number between 1 & 100')
}
