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

const projectDetails = {
    'project-1': {
        image: 'assets/imgs/Question_generation_model.png',
        title: 'AI based Question Generation Model',
        link: 'https://github.com/Fmfizzy',
        description: 'The following project focuses on developing an innovative Quiz and Question Generation application powered by Natural Language Processing (NLP). This application leverages advanced AI techniques to automate the creation of quizzes and questions, making it a powerful tool for modern educational practices. The utility of quizzes in education is well-documented, with benefits including real-time assessments, immediate feedback, and accessibility from multiple devices. By enabling learners to engage with quizzes anytime and anywhere, this application supports self-paced learning and fosters a dynamic and interactive educational environment. Research shows that the integration of quiz-related software can significantly enhance student engagement and academic performance, making it an invaluable resource for educators. <br><br>  The core of our project lies in the Automatic Question Generation (AQG) component, which uses cutting-edge machine learning models to generate valid, fluent, and contextually relevant questions with minimal human intervention. By employing neural networks, reinforcement learning, and transformer models, our application can produce high-quality questions that are syntactically and semantically accurate. These models excel at understanding contextual nuances and linguistic structures, ensuring the generated questions are both meaningful and engaging. While the implementation of these AI techniques presents challenges such as computational demands and the need for large datasets, our project addresses these with innovative solutions, making it a robust and scalable tool for enhancing educational practices. Through this project, we aim to revolutionize the way educational content is created, providing educators with a reliable and efficient means to support and enhance student learning.'
    },
    'project-2': {
        image: 'assets/imgs/Kevlar_Commands.png',
        title: 'Kevlar - Password Manager',
        link: 'https://github.com/Fmfizzy',
        description: 'Using SHA-256 hashing, Base64 conversion, and AES-256 encryption, my group members and I developed a secure password management system. This project not only showcases our understanding of cryptographic principles but also demonstrates our ability to create practical, security-focused applications. The system ensures user data protection while providing an intuitive interface for password storage and retrieval.'
    },
    'project-3': {
        image: 'assets/imgs/PMO_home.png',
        title: 'NLP Travel Application',
        link: 'https://github.com/Fmfizzy',
        description: 'The following project is an innovative outing application designed to transform event planning and travel experiences. It addresses significant gaps in current applications by integrating crucial medical and travel-related information, including weather and infectious disease updates. Leveraging advanced Natural Language Processing (NLP) techniques, our app provides dynamic and relevant recommendations based on user preferences without requiring a return to the home page. This is especially valuable in Sri Lanka, where NLP-powered travel apps are scarce.<br><br>The application utilizes Named Entity Recognition (NER) and semantic analysis to extract key information from user inputs, such as location, date, participant count, and activity preferences. The BART-Large model, trained on the MultiNLI dataset, performs zero-shot classification to categorize activities effectively. The TOPSIS model then scores these activities based on relevance, quality, and user preferences, sourced through the Google Place API. A two-pass recommendation approach further refines suggestions, while a district filtration system ensures relevance to the users location. This robust system offers personalized, accurate activity recommendations, setting a new standard in the travel and event planning industry.'
    },
    'project-4': {
        image: 'assets/imgs/wevolve_full.jpg',
        title: 'Wevolve Emotion Detection Application',
        link: 'https://github.com/Fmfizzy',
        description: 'A group project in which we created an application that detects users emotional states, stores the data in a calendar, and provides generic feedback.'
    },
    'project-5': {
        image: 'assets/imgs/Moosic_home_page.png',
        title: 'Moosic - E-commerce website',
        link: 'https://github.com/Fmfizzy',
        description: 'My team and I built a website for browsing and selecting musical products, featuring a cart with pricing, a browsing page, a gallery, a mini-game, and reviews.'
    },
    'project-6': {
        image: 'assets/imgs/Digital_Marketing_Analytics.png',
        title: 'Digital Marketing, Social Media and Web Analytics Project',
        link: 'https://github.com/Fmfizzy',
        description: 'A solo project in which I created a website on a famous celebrity and conducted research in optimizing the website to get as much traction as possible using SEO techniques, keyword analysis and etc.'
    },
};

document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const popup = document.getElementById('portfolio-popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupLink = document.getElementById('popup-link');
    const popupDescription = document.getElementById('popup-description');
    const closeButton = document.querySelector('.close');

    portfolioItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.id;
            const project = projectDetails[projectId];

            if (project) {
                popupImage.src = project.image;
                popupTitle.textContent = project.title;
                popupLink.href = project.link;
                popupLink.textContent = "Further Information";
                popupDescription.innerHTML = project.description;
                popup.style.display = 'block';
            }
        });
    });

    closeButton.onclick = function() {
        popup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});