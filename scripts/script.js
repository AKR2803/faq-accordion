document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');

            // Toggle the active class
            answer.classList.toggle('active');

            const button = question.querySelector('.toggle-btn');

            console.info(button);

            // Change the button text
            button.innerHTML = answer.classList.contains('active')
                ? `<img src="./assets/images/icon-minus.svg" alt="icon-minus">`
                : `<img src="./assets/images/icon-plus.svg" alt="icon-plus">`;
        });
    });
});