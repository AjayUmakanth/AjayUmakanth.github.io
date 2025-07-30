<template>
  <section id="education" class="education">
    <!-- Antd Timeline -->
    <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="false" class="timeline-container">
      <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="50" data-aos-once="false">Educational History</h1>
      <div class="separator"></div>
      
      <a-timeline>
        <a-timeline-item
          v-for="(education, index) in educationalHistory"
          :key="index"
          color="#ffffff"
        >
          <div class="education-item">
            <div class="date-range">
              {{ formatPeriod(education.From, education.To) }}
            </div>
            <div class="education-content">
              <img
                class="edu-img"
                :src="getImgUrl(education.ImageName)"
                :alt="education.Institution"
              />
              <div class="education-info">
                <h4>
                  <a :href="education.Link" target="_blank">
                    {{ education.Institution }}
                  </a>
                </h4>
                <h5>{{ education.Course }}</h5>
              </div>
            </div>
          </div>
        </a-timeline-item>
        
        <!-- Start Timeline Item -->
        <a-timeline-item color="#4CAF50">
        </a-timeline-item>
      </a-timeline>
    </div>
  </section>
</template>

<script>
import educationalHistory from '../json/Educational.json'
import { Timeline } from 'ant-design-vue'

export default {
  name: 'Education',
  components: {
    // register <a-timeline> and <a-timeline-item>
    'a-timeline': Timeline,
    'a-timeline-item': Timeline.Item
  },
  data() {
    return {
      educationalHistory: []
    }
  },
  mounted() {
    this.educationalHistory = educationalHistory
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/'+pic)
    },
    /**
     * Returns formatted date range, e.g. "2016 – 2020"
     */
    formatPeriod(from, to) {
      const start = from.toString()
      const end = to ? to.toString() : 'Present'
      return `${start} – ${end}`
    }
  }
}
</script>

<style scoped>
/* Education Section */
.education {
  padding: 60px 20px;
  margin: 40px 0;
}

.education h1 {
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

.timeline-container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
}

/* Timeline customization */
:deep(.ant-timeline) {
  color: white;
}


:deep(.ant-timeline-item-tail) {
  border-left: 2px solid rgba(255, 255, 255, 0.3);
}

:deep(.ant-timeline-item-head) {
  background-color: #ffffff;
  border-color: #ffffff;
}

/* Education item layout */
.education-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 20px;
}

.date-range {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 0.95rem;
}

/* Education content styling */
.education-content {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  transition: all 0.3s ease;
}

.education-content:hover {
  transform: translateX(10px);
}

.edu-img {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.education-content:hover .edu-img {
  transform: scale(1.1);
}

.education-info h4 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: #ffffff;
}

.education-info h5 {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 500;
}

.education-info a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.education-info a:hover {
  color: #cccccc;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .education h1 {
    font-size: 2.5rem;
  }
  
  .timeline-container {
    width: 90%;
    padding: 20px;
  }
  
  .education-item {
    gap: 12px;
    margin-left: 15px;
  }
  
  .date-range {
    font-size: 0.9rem;
  }
  
  .education-content {
    gap: 15px;
  }
  
  .edu-img {
    width: 50px;
    height: 50px;
  }
  
  .education-info h4 {
    font-size: 1.2rem;
  }
  
  .education-info h5 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .education {
    padding: 40px 15px;
    margin: 30px 0;
  }
  
  .education h1 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .timeline-container {
    width: 95%;
    padding: 15px;
  }
  
  .education-item {
    gap: 10px;
    margin-left: 10px;
  }
  
  .date-range {
    font-size: 0.85rem;
  }
  
  .education-content {
    gap: 12px;
  }
  
  .edu-img {
    width: 45px;
    height: 45px;
  }
  
  .education-info h4 {
    font-size: 1.1rem;
  }
  
  .education-info h5 {
    font-size: 0.9rem;
  }
}
</style> 