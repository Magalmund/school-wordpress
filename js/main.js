window.onload = function() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', scroller);
    
    function scroller() {
        var position = window.pageYOffset;

        if (position > 96) {
            navbar.classList.add('scrolldown');
        } else {
            navbar.classList.remove('scrolldown');
        }
    }
}





var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }*/
    });