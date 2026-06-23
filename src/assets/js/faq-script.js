document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.faq-trigger');
    const arrows = document.querySelectorAll('.faq-arrow');
    const contents = document.querySelectorAll('.faq-content');

    triggers.forEach((trigger, index) => {
        trigger.addEventListener('click', () => {
        
        // Перебираем ВСЕ элементы и принудительно гасим их через !hidden
        arrows.forEach(arrow => arrow.classList.add('hidden'));
        contents.forEach(content => content.classList.add('!hidden'));
        
        // Сбрасываем иконки во всех кнопках (всем возвращаем плюс, прячем стрелку)
        triggers.forEach(t => {
            t.querySelector('.plus')?.classList.remove('hidden');
            t.querySelector('.arrow')?.classList.add('hidden');
        });

        // У КЛИКНУТОГО индекса убираем !hidden (исправили arrows с hidden на !hidden)
        if (arrows[index]) {
            arrows[index].classList.remove('hidden');
        }
        if (contents[index]) {
            contents[index].classList.remove('!hidden');
        }
        
        // Меняем иконку на стрелочку внутри активной кнопки
        trigger.querySelector('.plus')?.classList.add('hidden');
        trigger.querySelector('.arrow')?.classList.remove('hidden');
        });
    });

    // АВТОАКТИВАЦИЯ ПЕРВОГО БЛОКА ПРИ ЗАГРУЗКЕ
    // Если на странице есть хотя бы один триггер, имитируем клик по первому
    if (triggers.length > 0) {
        triggers[0].click();
    }
});