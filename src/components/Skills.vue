<template>
  <section id="skills" class="skills">
    <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="false" class="skills-container">
      <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="50" data-aos-once="false">Skills</h1>
      <div class="separator"></div>
      
      <div class="skills-grid">
        <div class="skill" v-for="(skill, index) in skills" :key="index">
          <img v-bind:src="getImgUrl(skill.ImageName)" :alt="skill.Name"/>
          <h4>{{ skill.Name }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import skills from '../json/Skills.json'

export default {
  name: 'Skills',
  data() {
    return {
      skills: []
    }
  },
  mounted() {
    this.skills = skills
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/'+pic)
    }
  }
}
</script>

<style scoped>
/* Skills Section */
.skills {
  padding: 60px 20px;
  margin: 40px 0;
}

.skills h1 {
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

.skills-container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.skill {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.skill:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.15);
}

.skills img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.skill:hover img {
  transform: scale(1.1);
}

.skills h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .skills h1 {
    font-size: 2.5rem;
  }
  
  .skills-container {
    width: 90%;
    padding: 20px;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
  }
  
  .skill {
    padding: 20px;
  }
  
  .skills img {
    width: 60px;
    height: 60px;
  }
}

@media screen and (max-width: 480px) {
  .skills {
    padding: 40px 15px;
    margin: 30px 0;
  }
  
  .skills h1 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .skills-container {
    width: 95%;
    padding: 15px;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 12px;
  }
  
  .skill {
    padding: 15px;
  }
  
  .skills img {
    width: 50px;
    height: 50px;
  }
  
  .skills h4 {
    font-size: 1rem;
  }
}
</style> 