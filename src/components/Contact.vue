<template>
  <section id="contact" class="contact">
    <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="false" class="contact-container">
      <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="50" data-aos-once="false">Contact me here</h1>
      <div class="separator"></div>
      
      <div class="contact-content">
        <div class="contact-left">
          <div class="contact-intro">
            <p>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you!</p>
          </div>
          
          <div class="contact-details">
            <h4>What I'm interested in:</h4>
            <ul>
              <li>Web Development Projects</li>
              <li>Machine Learning Collaborations</li>
              <li>IoT Innovation</li>
              <li>Technology Discussions</li>
              <li>Any other interesting projects</li>
            </ul>
          </div>
        </div>
        
        <div class="contact-right">
          <div class="contact-list">
            <div class="contact-item" v-for="(socialMedia, index) in socialMediaHandles" :key="index">
              <div class="contact-icon">
                <i :class="socialMedia.Class"/>
              </div>
              <div class="contact-info">
                <div class="contact-type">{{ socialMedia.Type }}</div>
                <div class="contact-name">
                  {{ socialMedia.Name }}
                  <a target="_blank" :href="socialMedia.Link">
                    <i class="fa fa-external-link"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import socialMediaHandles from '../json/SocialMediaHandles.json'

export default {
  name: 'Contact',
  data() {
    return {
      socialMediaHandles: []
    }
  },
  mounted() {
    this.socialMediaHandles = socialMediaHandles
  }
}
</script>

<style scoped>
/* Contact Section */
.contact {
  padding: 60px 20px;
  margin: 40px 0;
}

.contact h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.separator {
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
  background-size: 200% 100%;
  margin: 0 auto 40px;
  width: 80%;
  border-radius: 1px;
  position: relative;
  animation: gradientMove 3s ease-in-out infinite;
}

@keyframes gradientMove {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.contact-container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
}

.contact-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  width: 100%;
}

.contact-left {
  flex: 1;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
}

.contact-right {
  flex: 1;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
}

.contact-intro {
  text-align: left;
  padding: 0 0 30px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-intro h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: white;
  font-weight: 600;
}

.contact-intro p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin: 0;
  font-weight: 400;
}

.contact-details {
  text-align: left;
  padding: 0;
  margin-bottom: 0;
}

.contact-details h4 {
  font-size: 1.3rem;
  color: white;
  margin-bottom: 20px;
  font-weight: 500;
}

.contact-details ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-details li {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
  font-weight: 400;
  padding-left: 25px;
  position: relative;
}

.contact-details li::before {
  content: "→";
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 0;
  height: auto;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  transition: all 0.3s ease;
  height: auto;
  position: relative;
}

.contact-item:hover {
  transform: translateX(8px);
  background: transparent;
  box-shadow: none;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.contact-icon i {
  font-size: 1.8rem;
  color: white;
}

.contact-info {
  flex: 1;
}

.contact-type {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.contact-name {
  font-size: 1.2rem;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-name a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-name a:hover {
  color: rgba(255, 255, 255, 0.8);
}

.contact-name .fa-external-link {
  font-size: 0.9rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.contact-name a:hover .fa-external-link {
  opacity: 1;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .contact h1 {
    font-size: 2.5rem;
  }
  
  .contact-container {
    width: 95%;
    padding: 30px 20px 30px 25px;
    margin: 0 auto;
  }
  
  .contact-content {
    flex-direction: column;
    gap: 30px;
  }

  .contact-left,
  .contact-right {
    padding: 0 0 0 10px;
    width: 100%;
  }

  .contact-intro h3 {
    font-size: 1.6rem;
  }

  .contact-details h4 {
    font-size: 1.1rem;
  }

  .contact-details li {
    font-size: 0.95rem;
  }
  
  .contact-item {
    padding: 20px;
    gap: 15px;
  }
  
  .contact-icon {
    width: 50px;
    height: 50px;
  }
  
  .contact-icon i {
    font-size: 1.5rem;
  }
  
  .contact-name {
    font-size: 1.1rem;
  }
  
  .contact-intro p {
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .contact {
    padding: 40px 15px;
    margin: 30px 0;
  }
  
  .contact h1 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .contact-container {
    width: 98%;
    padding: 20px 15px 20px 20px;
    margin: 0 auto;
  }
  
  .contact-content {
    gap: 25px;
  }
  
  .contact-intro h3 {
    font-size: 1.4rem;
  }

  .contact-details h4 {
    font-size: 1rem;
  }

  .contact-details li {
    font-size: 0.9rem;
  }
  
  .contact-item {
    padding: 15px;
    gap: 12px;
  }
  
  .contact-icon {
    width: 45px;
    height: 45px;
  }
  
  .contact-icon i {
    font-size: 1.3rem;
  }
  
  .contact-type {
    font-size: 0.9rem;
  }
  
  .contact-name {
    font-size: 1rem;
  }
  
  .contact-intro p {
    font-size: 0.9rem;
  }
}
</style> 