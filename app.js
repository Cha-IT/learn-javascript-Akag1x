// Lag et program som tar inn et navn som en variabel, og skriver ut "Hei" + navnet.
let navn = "Makss"
console.log("Hei " + navn)

let tall1 = 4
let tall2 = 3

console.log(tall1 + ' + ' + tall2 + ' = ' + (tall1 + tall2))
console.log(tall1 + ' * ' + tall2 + ' = ' + (tall1 * tall2))

let alder = 30

if (alder < 18) {
    console.log("Du er et barn")
} else {
    console.log("Du er Voksen.")
}

let barnebillet
let Voksenbillet = 200
let hønørbillet = 300
let alder2 = 40

if (alder2 < 18)
    console.log("barnebillet")
else if (alder2 < 67)  
    console.log("Voksenbillet")
else
    console.log("hønørbillet")