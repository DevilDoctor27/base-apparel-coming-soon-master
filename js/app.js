const errorMark = document.querySelector('.element__error')
const errorText = document.querySelector('.element__validate')
const input = document.querySelector('.element__input')
const formError = document.querySelector('.element__form')

input.addEventListener("invalid", (event) => {
    event.preventDefault()
    errorMark.classList.add('error')
    errorText.classList.add('error')
    formError.style.borderColor = 'hsl(0, 93%, 68%)'
})