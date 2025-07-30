<template>
    <footer class="footer-modern">
        <div class="footer-content">
            <div class="footer-text">
                <span class="copyright">Ajay Umakanth. Contact me here</span>
            </div>
            <div class="social-links">
                <span v-for="(socialMedia, index) in filteredSocialMedia" :key="index">
                    <a target="_blank" :href="socialMedia.Link" :title="socialMedia.Type">
                        <i :class="socialMedia.Class"/>
                    </a>
                </span>
            </div>
        </div>
    </footer>
</template>

<script>
import socialMediaHandles from '../json/SocialMediaHandles.json';

export default {
  data() {
    return {
      socialMediaHandles: []
    }
  },
  computed: {
    filteredSocialMedia() {
      return this.socialMediaHandles.filter(social => social.Type !== 'Facebook');
    }
  },
  mounted() {
    this.socialMediaHandles = socialMediaHandles
  }
}
</script>

<style scoped>
.footer-modern {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px 0;
  margin-top: 50px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
}

.footer-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  text-align: center;
}

.social-links {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-links a:hover {
  background: linear-gradient(135deg, #555555 0%, #777777 100%);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
  border-color: transparent;
}

.social-links i {
  font-size: 1.2rem;
  color: white;
}

@media screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .social-links {
    gap: 15px;
  }
  
  .social-links a {
    width: 40px;
    height: 40px;
  }
  
  .social-links i {
    font-size: 1rem;
  }
}
</style>