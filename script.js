const charLow = "abcdefghijklmnopqrstuvwxyz"
const charUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const charSpe = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~"

const ALLOWED_CHARACTERS = {
    lowers: true,
    uppers: true,
    numbers: true,
    specials: true
}

window.addEventListener("load", () => {
    const button = document.getElementById("copyButton")
    const showPasswordButton = document.getElementById("showPassword")
    const passwordInput = document.getElementById("passwordGenerated")

    button.onclick = () => {
        const passwordText = passwordInput.value

        navigator.clipboard.writeText(passwordText)
            .then(() => {
                console.log('Texto copiado al portapapeles')
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles:', err)
            })
    }

    showPasswordButton.addEventListener("mouseover", () => {
        passwordInput.type = "text"
    })

    showPasswordButton.addEventListener("mouseout", () => {
        passwordInput.type = "password"
    })

    console.log('a'.charCodeAt(0))

    // passwordInput.value(randomizedPassword())


    console.log(shuffle("hO0."))
    console.log(randomCharLow(), randomCharUpp(), randomNumber(), randomCharSpe())
    randomizedPassword()
})

function randomizedPassword() {
    let len = 10
    let psw = ""
    let check

    for (len; len; len--) {
        if (len == 4) {
            check = checkRequeriments(psw)
            continue
        }
        else {
            psw += selectRandomChar()
        }
        psw = shuffle(psw)
        console.log(len, psw)
    }
    psw = shuffle(psw)
    return psw
}

function randomCharLow() {
    return charLow[Math.floor(Math.random() * charLow.length)]
}

function randomCharUpp() {
    return charUpp[Math.floor(Math.random() * charUpp.length)]
}

function randomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function randomCharSpe() {
    return charSpe[Math.floor(Math.random() * charSpe.length)]
}

function selectRandomChar() {
    let randomChoice = Math.floor(Math.random() * 4) + 1
    if (randomChoice == 1) return randomCharLow()
    if (randomChoice == 2) return randomCharUpp()
    if (randomChoice == 3) return randomNumber()
    if (randomChoice == 4) return randomCharSpe()
    return 0
}

function checkRequeriments(string) {
}

function shuffle(inputString) {
    // Convertir el string en un array de caracteres
    var charArray = inputString.split('');

    // Función de comparación aleatoria
    function compareRandom() {
        return Math.random() - 0.5;
    }

    // Utilizar la función de comparación aleatoria en el método sort
    charArray.sort(compareRandom);

    // Unir los caracteres nuevamente en un string
    var shuffledString = charArray.join('');

    return shuffledString;

}