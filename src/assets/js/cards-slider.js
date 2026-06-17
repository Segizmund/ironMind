document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const container = document.getElementById("sliderContainer");
    let activeIndex = 0;

    function updateCards() {
        cards.forEach((card, i) => {
            let offset = i - activeIndex;

            if (offset < 0) {
                offset += cards.length;
            }

            card.classList.remove(
                "translate-x-[-110px]", "translate-y-0", "scale-100", "z-20", "pointer-events-auto", "shadow-[0px_0px_58px_7px_#ccff00ad]",
                "translate-x-[40px]", "translate-y-[30px]", "scale-[0.94]", "z-10", "pointer-events-none",
                "translate-x-[80px]", "translate-y-[60px]", "scale-[0.88]", "z-0"
            );

            if (offset === 0) {
                card.classList.add(
                    "translate-x-[-110px]", 
                    "translate-y-0",
                    "scale-100", 
                    "z-20", 
                    "pointer-events-auto",
                    "shadow-[0px_0px_58px_7px_#ccff00ad]"
                );
            } else if (offset === 1 || (offset === -1 && cards.length === 2)) {
                // Карточка на заднем плане
                card.classList.add(
                    "translate-x-[40px]", 
                    "translate-y-[30px]", 
                    "scale-[0.94]", 
                    "z-10", 
                    "pointer-events-none"
                );
            }
        });
    }

    container.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(".nextBtn")) {
        activeIndex = (activeIndex + 1) % cards.length;
        updateCards();
    } else if (target.closest(".prevBtn")) {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    updateCards();
    }
    });

    updateCards();
});