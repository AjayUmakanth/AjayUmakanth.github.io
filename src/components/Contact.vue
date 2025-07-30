<template>
  <section id="contact" class="contact">
    <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="false" class="contact-container">
      <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="50" data-aos-once="false">Contact me here</h1>
      <div class="separator"></div>
      
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
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
}

.contact-icon i {
  font-size: 1.5rem;
  color: white;
}

.contact-info {
  flex: 1;
}

.contact-type {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5px;
  font-weight: 500;
}

.contact-name {
  font-size: 1.1rem;
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
  color: #cccccc;
}

.contact-name .fa-external-link {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .contact h1 {
    font-size: 2.5rem;
  }
  
  .contact-container {
    width: 90%;
    padding: 20px;
  }
  
  .contact-item {
    padding: 15px;
    gap: 15px;
  }
  
  .contact-icon {
    width: 40px;
    height: 40px;
  }
  
  .contact-icon i {
    font-size: 1.2rem;
  }
  
  .contact-name {
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
    width: 95%;
    padding: 15px;
  }
  
  .contact-item {
    padding: 12px;
    gap: 12px;
  }
  
  .contact-icon {
    width: 35px;
    height: 35px;
  }
  
  .contact-icon i {
    font-size: 1rem;
  }
  
  .contact-type {
    font-size: 0.8rem;
  }
  
  .contact-name {
    font-size: 0.9rem;
  }
}
</style> 