document.addEventListener('DOMContentLoaded', function () {
    const objectives = document.querySelectorAll('.objective');
    objectives.forEach((element, index) => {
        setTimeout(() => {
            if (index % 2 === 0) {
                element.classList.add('left');
                element.style.animation = 'slideInLeft 2s forwards';
            } else {
                element.classList.add('right');
                element.style.animation = 'slideInRight 2s forwards';
            }
            element.style.opacity = 1;
            element.style.transform = 'translateX(0)';
        }, index * 1500); // Adjust timing to your preference
    });
});
