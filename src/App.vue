<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <div :class="navClass">
      <a href="javascript:void(0);" class="icon" @click="myFunction">
        <i :class="hamburgerMenu"></i>
      </a>
      <a href="javascript:void(0)" @click="scrollToSection('home', $event)" :class="{ active: activeClass == 'home' }">
        Home
      </a>
      <a href="javascript:void(0)" @click="scrollToSection('experience', $event)" :class="{ active: activeClass == 'experience' }">
        Experience
      </a>
      <a href="javascript:void(0)" @click="scrollToSection('education', $event)" :class="{ active: activeClass == 'education' }">
        Education
      </a>
      <a href="javascript:void(0)" @click="scrollToSection('skills', $event)" :class="{ active: activeClass == 'skills' }">
        Skills
      </a>
      <a href="javascript:void(0)" @click="scrollToSection('contact', $event)" :class="{ active: activeClass == 'contact' }">
        Contact
      </a>
    </div>

    <!-- Home Section -->
    <section id="home" class="home">
      <div class="about container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12" 
          data-aos="flip-right" 
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000">
            <div class="image-container">
              <img src="./assets/MyImage.jpg" alt="Ajay Umakanth"/>
              <div id="fname" data-aos="fade-right" data-aos-duration="1000">Ajay Umakanth</div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="about-text">
              <p><i class="fa fa-quote-left"></i>
                Hello, I am Ajay Umakanth. I am a software engineer. 
                I have experience working on multiple domains including 
                Web Development, Machine Learning and Internet of Things.
                With over {{ yearsOfExperience }}+ years of hands-on experience in web development, I have had the privilege of building dynamic web 
                applications and contributing to innovative projects. I have contributed to innovative projects in diverse domains including Web Development, Machine Learning, and the Internet of Things (IoT).
                I am passionate about technology and always excited to explore new challenges. Feel free to connect with me for interesting projects, ideas or opportunities!!
              <i class="fa fa-quote-right"></i></p>
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
      hamburgerMenu: "fa fa-bars"
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
    }
  }
}
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
