const btns = document.querySelectorAll(".faq-toggle");
const faqs = 

btns.forEach(btn => {
    btn.addEventListener(('click'), () => {
       const faq = btn.closest('.faq');
       faq.classList.toggle('active')
       // btn.parentNode.classList.toggle('active')
    })
});


