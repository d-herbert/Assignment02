let num1
let num2

// display
document.write('<h3> welcome to the `larger or smaller app`</h3><br>')

// ask for number input
num1 = prompt('enter first number (int)')
num2 = prompt('enter second number (int)')

if (num1 % 1 === 0 && num2 % 1 === 0) {
    if (num1 > num2) {
        document.write(String(num1) + ' is larger')
    } else if (num1 < num2) {
        document.write(String(num2) + ' is larger')
    } else {
        document.write(String(num1) + ' equals ' + String(num2))
    }
} else {
    document.write('Try again. Please enter integers.')
}
