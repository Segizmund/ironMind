function scrollToElementWithOffset(element, offset) {
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

window.Scrolls = {
    scrollToElementWithOffset: function(element, offset) {
        scrollToElementWithOffset(element, offset);
    }
};