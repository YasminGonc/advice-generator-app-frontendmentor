const adviceText = document.querySelector('.container__advice');
const adviceNumber = document.querySelector('.container__titulo');

const btn = document.querySelector('.container__central-botao');

async function advice() {
    let advice = await fetch ('	https://api.adviceslip.com/advice');
    let adviceTransformed = await advice.json();

    adviceText.innerHTML = `<p class="container__advice">"${adviceTransformed.slip.advice}"</p>`;
    adviceNumber.innerHTML = `<h3 class="container__titulo">Advice # <span>${adviceTransformed.slip.id}</span></h3>`;

}

btn.addEventListener('click', () => {
    advice();
});

