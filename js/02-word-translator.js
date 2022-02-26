let lang

// display
document.write('<h3> welcome to the `word translator app`</h3><br>')

// ask for lang
lang = prompt('enter language (es, de, en, fr)')

// print to console window
if (lang === 'es') {
    console.log('Hello World translated in Spanish is: Hola Mundo')
} else if (lang === 'de') {
    console.log('Hello World translated in German is: Hallo Welt')
} else if (lang === 'en') {
    console.log('Hello World translated in English is: Hello World')
} else if (lang === 'fr') {
    console.log('Hello World translated in French is: Bonjour le monde')
} else {
    console.log('Hello World translated in English is: Hello World')
}
