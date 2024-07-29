/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
  $(".navbar .nav-link").on('click', function(event) {

      if (this.hash !== "") {

          event.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 700, function(){
              window.location.hash = hash;
          });
      } 
  });

  // Carousel functionality
  const carousel = document.querySelector('.carousel');
  const containers = carousel.querySelectorAll('.image-container');
  const images = carousel.querySelectorAll('.carousel-image');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  let currentIndex = 0;

  function showImage(index) {
      images.forEach(img => img.classList.remove('active'));
      images[index].classList.add('active');
      containers.forEach(container => container.classList.remove('active'));
      containers[index].classList.add('active');
  }

  prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
  });

  nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
  });
});

// portfolio filters
$(window).on("load", function() {
  var t = $(".portfolio-container");
  t.isotope({
      filter: ".new",
      animationOptions: {
          duration: 750,
          easing: "linear",
          queue: !1
      }
  }), $(".filters a").click(function() {
      $(".filters .active").removeClass("active"), $(this).addClass("active");
      var i = $(this).attr("data-filter");
      return t.isotope({
          filter: i,
          animationOptions: {
              duration: 750,
              easing: "linear",
              queue: !1
          }
      }), !1
  });
});

// CV download function
function downloadCV() {
    var link = document.createElement('a');
    link.href = 'https://fmfizzy.github.io/Portfolio_website/assets/Faizan_Muthaliff_Resume.pdf';
    link.download = 'Faizan_Muthaliff_Resume.pdf';

    link.onerror = function() {
        console.error('Error: The file could not be downloaded.');
        alert('Sorry, the CV file is currently unavailable. Please try again later.');
    };
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}