const charLow = "abcdefghijklmnopqrstuvwxyz"
const charUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const charSpe = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~"

const ALLOWED_CHARACTERS = {
    numbers: false,
    specials: false
}

var len = 4

window.addEventListener("load", () => {
    const button = document.getElementById("copyButton")
    const showPasswordButton = document.getElementById("showPassword")
    const passwordInput = document.getElementById("passwordGenerated")
    const range = document.getElementById("passwordLen")
    const reload = document.getElementById("reloadPassword")
    const addNumbersCheck = document.getElementById("addNumbers")
    const addSpecialsCheck = document.getElementById("addSpecials")

    button.onclick = () => {
        const passwordText = passwordInput.value

        navigator.clipboard.writeText(passwordText)
            .then(() => {
                alert('Texto copiado al portapapeles')
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles:', err)
            })
    }

    // showPasswordButton.addEventListener("mouseover", () => {
    //     passwordInput.type = "text"
    // })

    // showPasswordButton.addEventListener("mouseout", () => {
    //     passwordInput.type = "password"
    // })

    showPasswordButton.addEventListener("click", () => {
        passwordInput.type = (passwordInput.type == "password" ? "text" : "password")
        showPasswordButton.querySelector("i").classList.toggle("fa-eye")
        showPasswordButton.querySelector("i").classList.toggle("fa-eye-slash")
    })

    reload.addEventListener("click", () => {
        createPassword(passwordInput)
    })

    addNumbersCheck.addEventListener("change", () => {
        ALLOWED_CHARACTERS.numbers = (ALLOWED_CHARACTERS.numbers ? false : true)
        createPassword(passwordInput)
    })

    addSpecialsCheck.addEventListener("change", () => {
        ALLOWED_CHARACTERS.specials = (ALLOWED_CHARACTERS.specials ? false : true)
        createPassword(passwordInput)
    })

    range.addEventListener("input", () => {
        document.querySelector("label").innerHTML = range.value
        len = range.value
        createPassword(passwordInput)
    })

    createPassword(passwordInput)
})

function createPassword(passwordInput) {
    passwordInput.value = randomizedPassword()
}

function randomizedPassword() {
    let psw = ""
    let check
    let tempLen = len

    for (tempLen; tempLen; tempLen--) {
        if (tempLen <= 4) {
            check = checkRequeriments(psw)
            if (check[0]) {
                psw += check[1]
                psw = shuffle(psw)
                continue
            }
        }
        psw += selectRandomChar()
        psw = shuffle(psw)
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
    while (true) {
        let randomChoice = Math.floor(Math.random() * 4) + 1
        if (randomChoice == 1) return randomCharLow()
        if (randomChoice == 2) return randomCharUpp()
        if (randomChoice == 3 && ALLOWED_CHARACTERS.numbers) return randomNumber()
        if (randomChoice == 4 && ALLOWED_CHARACTERS.specials) return randomCharSpe()
    }
}

function checkRequeriments(string) {
    let hasLow = false, hasUpp = false, hasNum = false, hasSpe = false

    for (let i = 0; i < string.length; i++) {
        if (charLow.includes(string[i])) hasLow = true
        else if (charUpp.includes(string[i])) hasUpp = true
        else if (numbers.includes(string[i])) hasNum = true
        else if (charSpe.includes(string[i])) hasSpe = true
    }

    if (!hasLow) return [true, randomCharLow()]
    if (!hasUpp) return [true, randomCharUpp()]
    if (!hasNum && ALLOWED_CHARACTERS.numbers) return [true, randomNumber()]
    if (!hasSpe && ALLOWED_CHARACTERS.specials) return [true, randomCharSpe()]

    return [false]
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