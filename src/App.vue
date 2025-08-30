<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <div :class="navClass">
      <a href="javascript:void(0);" class="icon" @click="myFunction">
        <i :class="hamburgerMenu"></i>
      </a>
      <div @click="scrollToSection('home', $event)" :class="{ active: activeClass == 'home' }">
        Home
      </div>
      <div @click="scrollToSection('experience', $event)" :class="{ active: activeClass == 'experience' }">
        Experience
      </div>
      <div @click="scrollToSection('education', $event)" :class="{ active: activeClass == 'education' }">
        Education
      </div>
      <div @click="scrollToSection('skills', $event)" :class="{ active: activeClass == 'skills' }">
        Skills
      </div>
      <div @click="scrollToSection('contact', $event)" :class="{ active: activeClass == 'contact' }">
        Contact
      </div>
    </div>

    <!-- Home Section -->
    <section id="home" class="home">
      <div class="about container">
        <div class="profile-section">
          <div class="profile-content">
            <div class="image-container" data-aos="zoom-in" data-aos-duration="1000">
              <img src="./assets/MyImage.jpg" alt="Ajay Umakanth"/>
            </div>

            <div class="content-container" data-aos="fade-up" data-aos-duration="1000">
              <div class="name-container">
                <div class="full-name">AJAY UMAKANTH</div>
                <div class="title">
                  <span class="typing-text">{{ currentTitle }}</span>
                  <span class="cursor">|</span>
                </div>
              </div>
              
              <div class="social-links">
                <a v-for="social in socialMediaHandles" 
                   :key="social.Type" 
                   :href="social.Link" 
                   :title="social.Type"
                   target="_blank"
                   rel="noopener noreferrer">
                  <i :class="social.Class"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Component -->
    <Experience />

    <!-- Education Component -->
    <Education />

    <!-- Skills Component -->
    <Skills />

    <!-- Contact Component -->
    <Contact />

    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import './assets/styles.css'
import socialMediaHandles from './json/SocialMediaHandles.json'

export default {
  components: {
    Footer,
    Experience,
    Education,
    Skills,
    Contact
  },
  data() {
    return {
      navClass: "topnav",
      activeClass: "home",
      hamburgerMenu: "fa fa-bars",
      startYear: 2020,
      socialMediaHandles,
      currentTitle: ""
    }
  },
  computed: {
    yearsOfExperience() {
      const startYear = 2020;
      const currentYear = new Date().getFullYear();
      return currentYear - startYear -1;
    }
  },
  mounted() {
    // Add scroll event listener to update active nav item
    window.addEventListener('scroll', this.updateActiveSection)
    
    // Add click outside listener to close mobile menu
    document.addEventListener('click', this.handleClickOutside)

    // Start typing animation
    this.startTyping();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateActiveSection)
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    scrollToSection(sectionId, event) {
      // Prevent default anchor behavior
      if (event) {
        event.preventDefault()
      }
      
      this.activeClass = sectionId
      const element = document.getElementById(sectionId)
      if (element) {
        // Account for fixed navbar height
        const navbarHeight = 60
        const elementPosition = element.offsetTop - navbarHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
      // Close mobile menu if open
      if (this.navClass.includes('responsive')) {
        this.myFunction()
      }
    },
    updateActiveSection() {
      const sections = ['home', 'experience', 'education', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          this.activeClass = sections[i]
          break
        }
      }
    },
    myFunction() {
      if (this.navClass === "topnav") {
        this.navClass += " responsive";
        this.hamburgerMenu = "fa fa-times";
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
      } else {
        this.navClass = "topnav";
        this.hamburgerMenu = "fa fa-bars";
        // Restore body scroll when menu is closed
        document.body.style.overflow = 'auto';
      }
    },
    handleClickOutside(event) {
      const navbar = document.querySelector('.topnav');
      const hamburgerIcon = document.querySelector('.icon');
      
      // Only close menu if it's open and click is outside navbar
      if (this.navClass.includes('responsive') && navbar && hamburgerIcon) {
        if (!navbar.contains(event.target)) {
          this.myFunction(); // Close mobile menu
        }
      }
    },
    startTyping() {
      const titles = ["Software Engineer", "Full Stack Developer", "Machine Learning Engineer", "Systems Architect"];
      let titleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      
      const type = () => {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
          // Deleting characters
          this.currentTitle = currentTitle.substring(0, charIndex - 1);
          charIndex--;
          
          if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(type, 300); // Reduced pause before typing next title
            return;
          }
          
          setTimeout(type, 50); // Much faster deletion
        } else {
          // Typing characters
          this.currentTitle = currentTitle.substring(0, charIndex + 1);
          charIndex++;
          
          if (charIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(type, 500); // Reduced pause before deleting
            return;
          }
          
          setTimeout(type, 80); // Much faster typing
        }
      };
      
      // Start the animation
      setTimeout(type, 500);
    }
  }
}
</script>

<style scoped>
.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
}

.profile-content {
  display: flex;
  align-items: center;
  gap: 80px;
  width: 100%;
}

.image-container {
  flex-shrink: 0;
}

.image-container img {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.image-container img:hover {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.content-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.name-container {
  margin-bottom: 40px;
}

.full-name {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.1em;
  color: #ffffff;
  text-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  margin-bottom: 20px;
}

.title {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.1em;
  font-weight: 400;
  margin-bottom: 30px;
  min-height: 2.5rem;
  display: flex;
  align-items: left;
  justify-content: left;
}

.typing-text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid transparent;
}

.cursor {
  display: inline-block;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  animation: blink 1s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.social-links {
  display: flex;
  gap: 25px;
  align-items: center;
}

.social-links a {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.6rem;
  transition: all 0.3s ease;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-links a:hover {
  color: white;
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.about-text {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  .profile-content {
    flex-direction: column;
    align-items: center;
    gap: 50px;
    text-align: center;
  }

  .content-container {
    align-items: center;
    text-align: center;
  }

  .image-container img {
    width: 280px;
    height: 280px;
  }

  .full-name {
    font-size: 3.8rem;
    letter-spacing: 0.1em;
  }

  .title {
    font-size: 1.8rem;
    margin-bottom: 35px;
  }
  
  .social-links {
    gap: 20px;
    justify-content: center;
  }
  
  .social-links a {
    font-size: 1.4rem;
    width: 50px;
    height: 50px;
    padding: 12px;
  }

  .profile-section {
    min-height: 70vh;
  }
}

@media screen and (max-width: 425px) {
  .profile-content {
    gap: 40px;
  }

  .image-container img {
    width: 240px;
    height: 240px;
  }

  .full-name {
    font-size: 3rem;
    letter-spacing: 0.05em;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  
  .social-links {
    gap: 18px;
  }
  
  .social-links a {
    font-size: 1.2rem;
    width: 45px;
    height: 45px;
    padding: 10px;
  }

  .profile-section {
    min-height: 60vh;
  }
}
</style>
