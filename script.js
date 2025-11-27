document.addEventListener('DOMContentLoaded', function() {
    // Product Carousel Logic
    const productsCarousel = document.getElementById('productsCarousel');
    const productsScrollLeftBtn = document.getElementById('scrollLeft');
    const productsScrollRightBtn = document.getElementById('scrollRight');

    if (productsCarousel && productsScrollLeftBtn && productsScrollRightBtn) {
        productsScrollRightBtn.addEventListener('click', () => {
            productsCarousel.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });

        productsScrollLeftBtn.addEventListener('click', () => {
            productsCarousel.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
    }

    // Hero Carousel Logic
    const heroCarousel = document.getElementById('heroCarousel');
    const heroScrollLeftBtn = document.getElementById('heroScrollLeft');
    const heroScrollRightBtn = document.getElementById('heroScrollRight');
    const heroItems = document.querySelectorAll('.hero-carousel-item');
    let currentHeroIndex = 0;
    const totalHeroItems = heroItems.length;
    let heroAutoplayInterval;

    function updateHeroCarousel() {
        const offset = -currentHeroIndex * 100;
        heroCarousel.style.transform = `translateX(${offset}%)`;
    }

    function showNextHeroItem() {
        currentHeroIndex = (currentHeroIndex + 1) % totalHeroItems;
        updateHeroCarousel();
    }

    function showPrevHeroItem() {
        currentHeroIndex = (currentHeroIndex - 1 + totalHeroItems) % totalHeroItems;
        updateHeroCarousel();
    }

    function startHeroAutoplay() {
        clearInterval(heroAutoplayInterval);
        heroAutoplayInterval = setInterval(showNextHeroItem, 3000);
    }

    // Manual navigation for hero carousel
    if (heroScrollLeftBtn && heroScrollRightBtn) {
        heroScrollRightBtn.addEventListener('click', () => {
            showNextHeroItem();
            startHeroAutoplay();
        });
        heroScrollLeftBtn.addEventListener('click', () => {
            showPrevHeroItem();
            startHeroAutoplay();
        });
    }

    // Pause autoplay when hovering over carousel
    heroCarousel.addEventListener('mouseenter', () => {
        clearInterval(heroAutoplayInterval);
    });

    heroCarousel.addEventListener('mouseleave', () => {
        startHeroAutoplay();
    });

    // Initial load and autoplay start
    updateHeroCarousel();
    startHeroAutoplay();
});