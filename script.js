//assign elements to variables

const faqBtns = document.querySelectorAll('.btn');
const plusBtn = document.querySelectorAll('.plus-sign');
const minusBtn =document.querySelectorAll('.minus-sign');
const answers = document.querySelectorAll('.answers');


//activate faq button
faqBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        plusBtn.classList.toggle('hide');
        minusBtn.classList.toggle('show');
        answers.classList.toggle('show');

    })
})
