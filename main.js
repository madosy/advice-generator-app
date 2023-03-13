const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice",{cache: 'reload'})
    .then ((response) => response.json())
    .then ((data) => {
        slip = data.slip
    })
    .then (() => {
        const adviceID = document.querySelector('.advice-id')
        const adviceContent = document.querySelector('.advice-content')
        adviceID.textContent = slip.id
        adviceContent.textContent = slip.advice
    })
}

const button = document.querySelector('button')
button.addEventListener('click', () => {
    getAdvice()
})

getAdvice();