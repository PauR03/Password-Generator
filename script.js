const charLow = "abcdefghijklmnopqrstuvwxyz"
const charUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const charSpe = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~"

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

})

function randomizedPassword() {
    let len = 10

}

function randomChar() {

}