const pwEl = document.getElementById('pw')
const copyEl = document.getElementById('copy')
const lenEl = document.getElementById('len')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()-_=+{}[]|;:<>,.?/'

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    const len = lenEl.value
    let sanckbarLen = document.getElementById("snackbarLen")

    let password = ''

    if(len < 8 || len > 30) {
        // snackbar
        sanckbarLen.className = "show";
        setTimeout(function(){ sanckbarLen.className = sanckbarLen.className.replace("show", ""); }, 3000);
        return ''
    }

    if(upperEl.checked) {
        password += getUpperCase()
    }

    if(lowerEl.checked) {
        password += getLowerCase()
    }

    if(numberEl.checked) {
        password += getNumber()
    }

    if(symbolEl.checked) {
        password += getSymbol()
    }

    for(let i = password.length; i < len; i++) {
        const x = generateX()
        password += x
    }
    
    pwEl.innerText = password
}

function generateX() {
    const xs = []
    let snackbarPw = document.getElementById("snackbarPw")

    if(upperEl.checked) {
        xs.push(getUpperCase())
    }

    if(lowerEl.checked) {
        xs.push(getLowerCase())
    }

    if(numberEl.checked) {
        xs.push(getNumber())
    }

    if(symbolEl.checked) {
        xs.push(getSymbol())
    }

    if(xs.length === 0) {
        // snackbar
        snackbarPw.className = "show";
        setTimeout(function(){ snackbarPw.className = snackbarPw.className.replace("show", ""); }, 3000);
        return ''
    }

    return xs[Math.floor(Math.random() * xs.length)]
}

generateEl.addEventListener('click', generatePassword)

copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = pwEl.innerText
    let snackbarCopy = document.getElementById("snackbarCopy")

    if(!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    // snackbar
    snackbarCopy.className = "show";
    setTimeout(function(){ snackbarCopy.className = snackbarCopy.className.replace("show", ""); }, 3000);
})