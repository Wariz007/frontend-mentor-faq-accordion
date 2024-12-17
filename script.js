//assign elements to variables

const faqBtns = document.querySelectorAll('.btn');
const plusBtn = document.querySelectorAll('.plus-sign');
const minusBtn =document.querySelectorAll('.minus-sign');
const answers = document.querySelectorAll('.answers');


//activate faq button
faqBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        plusBtn.forEach((plus) => {
            plus.classList.remove('hide');
        })

        minusBtn.forEach((minus) => {
            minus.classList.remove('show');
        })

        answers.forEach((answer) => {
            answer.classList.remove('show');
        })

        plusBtn[index].classList.toggle('hide');

        minusBtn[index].classList.toggle('show');

        answers[index].classList.toggle('show');
        }) 
})