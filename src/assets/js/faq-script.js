document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.faq-trigger');
    const arrows = document.querySelectorAll('.faq-arrow');
    const contents = document.querySelectorAll('.faq-content');

    triggers.forEach((trigger, index) => {
        trigger.addEventListener('click', () => {
        
        arrows.forEach(arrow => arrow.classList.add('hidden'));
        contents.forEach(content => content.classList.add('!hidden'));
        
        triggers.forEach(t => {
            t.querySelector('.plus')?.classList.remove('hidden');
            t.querySelector('.arrow')?.classList.add('hidden');
        });

        if (arrows[index]) {
            arrows[index].classList.remove('hidden');
        }
        if (contents[index]) {
            contents[index].classList.remove('!hidden');
        }
        
        trigger.querySelector('.plus')?.classList.add('hidden');
        trigger.querySelector('.arrow')?.classList.remove('hidden');
        });
    });

    if (triggers.length > 0) {
        triggers[0].click();
    }
});