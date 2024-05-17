document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
});


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
    
    window.addEventListener("scroll", function() {
        var slideshow = document.querySelector(".slideshow-container");
        if (window.scrollY > 0) {
            slideshow.classList.add("active");
        } else {
            slideshow.classList.remove("active");
        }
    });
    