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
        link: 'https://colab.research.google.com/drive/1j8X2eSBiTkebr9LEbbXh2BQXD7a4Lm7d?usp=sharing',
        description: 'The following project focuses on developing an innovative Quiz and Question Generation application powered by Natural Language Processing (NLP). This application leverages advanced AI techniques to automate the creation of quizzes and questions, making it a powerful tool for modern educational practices. The utility of quizzes in education is well-documented, with benefits including real-time assessments, immediate feedback, and accessibility from multiple devices. By enabling learners to engage with quizzes anytime and anywhere, this application supports self-paced learning and fosters a dynamic and interactive educational environment. Research shows that the integration of quiz-related software can significantly enhance student engagement and academic performance, making it an invaluable resource for educators. <br><br>  The core of our project lies in the Automatic Question Generation (AQG) component, which uses cutting-edge machine learning models to generate valid, fluent, and contextually relevant questions with minimal human intervention. By employing neural networks, reinforcement learning, and transformer models, our application can produce high-quality questions that are syntactically and semantically accurate. These models excel at understanding contextual nuances and linguistic structures, ensuring the generated questions are both meaningful and engaging. While the implementation of these AI techniques presents challenges such as computational demands and the need for large datasets, our project addresses these with innovative solutions, making it a robust and scalable tool for enhancing educational practices. Through this project, we aim to revolutionize the way educational content is created, providing educators with a reliable and efficient means to support and enhance student learning.'
    },
    'project-2': {
        image: 'assets/imgs/Kevlar_Commands.png',
        title: 'Kevlar - Password Manager',
        link: 'https://github.com/Fmfizzy/Kevlar',
        description: 'Kevlar is a robust password management application that prioritizes security through advanced encryption techniques. To protect user credentials, the application utilizes SHA-256 hashing for master passwords and validation keys. These hashed values are then Base64 encrypted before being transmitted to the server. For storing passwords, Kevlar employs AES-256 encryption, chosen for its strong security and large key size. The AES-256 encryption uses the hashed master password as the secret key and the users username as the salt, ensuring that the stored passwords remain secure even if the database is compromised.<br><br>The application’s critical design includes a two-layer encryption approach to safeguard user data. Master passwords and validation keys are hashed and encrypted to prevent unauthorized access. This method ensures that even if data is intercepted, it remains protected and indecipherable without the correct credentials. However, a noted limitation is the potential for users to be locked out of their accounts if they forget their master password. To address this, a potential enhancement could be the introduction of a one-time recovery key to regain access, thereby further securing user accounts while maintaining robust protection against breaches.'
    },
    'project-3': {
        image: 'assets/imgs/PMO_home.png',
        title: 'NLP Travel Application',
        link: 'https://github.com/Fmfizzy/NLP_Powered_Travel_Application',
        description: 'The following project is an innovative outing application designed to transform event planning and travel experiences. It addresses significant gaps in current applications by integrating crucial medical and travel-related information, including weather and infectious disease updates. Leveraging advanced Natural Language Processing (NLP) techniques, our app provides dynamic and relevant recommendations based on user preferences without requiring a return to the home page. This is especially valuable in Sri Lanka, where NLP-powered travel apps are scarce.<br><br>The application utilizes Named Entity Recognition (NER) and semantic analysis to extract key information from user inputs, such as location, date, participant count, and activity preferences. The BART-Large model, trained on the MultiNLI dataset, performs zero-shot classification to categorize activities effectively. The TOPSIS model then scores these activities based on relevance, quality, and user preferences, sourced through the Google Place API. A two-pass recommendation approach further refines suggestions, while a district filtration system ensures relevance to the users location. This robust system offers personalized, accurate activity recommendations, setting a new standard in the travel and event planning industry.'
    },
    'project-4': {
        image: 'assets/imgs/wevolve_full.jpg',
        title: 'Wevolve Emotion Detection Application',
        link: 'https://github.com/WathsaradeSilva/reactNativeWeVolve',
        description: 'Emotions are a fundamental part of human experience, and understanding them is crucial for maintaining mental well-being. However, negative emotions, if left unrecognized or untreated, can evolve into chronic conditions like depression. To address this issue, our project introduces WeVolve, a mobile application designed to help users monitor and manage their emotional states. By capturing and analyzing facial images using advanced image detection technology, WeVolve provides insights into users emotions, offering actionable tips to improve their mood. Additionally, the app allows users to track their emotional fluctuations over time, providing valuable data for personal reflection or professional therapy.<br><br>The project responds to the heightened awareness of mental health issues, exacerbated by the pandemic and increased screen time. WeVolve aims to deliver a user-friendly solution for identifying and addressing negative emotions through real-time image processing and questionnaires. By focusing on fundamental emotions such as anger, happiness, sadness, and neutrality, the app offers targeted feedback and therapeutic suggestions. While it does not provide medication recommendations, it supports emotional well-being through personalized advice and mood tracking, making it a valuable tool for both personal use and professional mental health support.'
    },
    'project-5': {
        image: 'assets/imgs/Moosic_home_page.png',
        title: 'Moosic - E-commerce website',
        link: 'https://github.com/DhirajWishal/Moosic',
        description: 'My team and I developed an engaging website designed to showcase a variety of musical products. The site features an intuitive browsing page, allowing users to explore different items effortlessly. It includes a detailed gallery to highlight product visuals and a user-friendly cart for managing selections and viewing pricing. To enhance the user experience, we incorporated interactive elements such as a mini-game and a review section where customers can share their feedback.<br><br> Building this website was an enjoyable and collaborative process for our team. We aimed to create a platform that not only facilitates easy browsing and purchasing of music products but also offers additional features to make the experience more interactive and fun. The combination of practical tools and entertaining elements ensures that users have a pleasant and engaging time while exploring and shopping for their favorite musical items.'
    },
    'project-6': {
        image: 'assets/imgs/Digital_Marketing_Analytics.png',
        title: 'Digital Marketing, Social Media and Web Analytics Project',
        link: 'https://sites.google.com/view/muttiahmuralitharanspinking/home-page',
        description: 'In a solo project, I developed a website dedicated to a renowned Sri Lankan celebrity, focusing on maximizing its online visibility. I employed various SEO techniques and keyword analysis to optimize the site for better search engine rankings and increased traffic. Additionally, I utilized Google Analytics to track and visualize website performance, generating graphs and insights to fine-tune the optimization strategies.<br><br>The project involved a thorough research phase to implement best practices for SEO and digital marketing. By analyzing performance data and adjusting the site accordingly, I aimed to enhance its reach and engagement with visitors. This hands-on experience not only honed my skills in web development and SEO but also provided valuable insights into the effectiveness of different optimization strategies.'
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
                popupLink.textContent = "More Information >>>";
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