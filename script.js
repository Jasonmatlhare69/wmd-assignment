document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var slides = document.getElementsByClassName("mySlides");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 7000); 
    }

   
   
    });




(function() {
    
    var imageSlider = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
})();

document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById('backToTopBtn');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            
            backToTopBtn.style.display = 'block';
        } else {
            
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var trendingLink = document.querySelector('.small-navbar a[href="#swiper-section"]');
    trendingLink.addEventListener('click', function(event) {
        event.preventDefault();
        var targetSection = document.getElementById('swiper-section');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
