<template>
  <section id="experience" class="experience">
    <!-- Antd Timeline -->
    <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="false" class="timeline-container">
      <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="50" data-aos-once="false">Professional Experience</h1>
      <div class="separator"></div>
      
      <a-timeline>
        <a-timeline-item
          v-for="(profession, index) in professionalHistory"
          :key="index"
          color="#ffffff"
        >
          <div class="experience-item">
            <div class="date-range">
              {{ formatPeriod(profession.From, profession.To) }}
            </div>
            <div class="experience-content">
              <img
                class="prof-img"
                :src="getImgUrl(profession.ImageName)"
                :alt="profession.Company"
              />
              <div class="experience-info">
                <h4>
                  <a :href="profession.Link" target="_blank">
                    {{ profession.Company }}
                  </a>
                </h4>
                <h5>{{ profession.Title }}</h5>
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
import professionalHistory from '../json/Professional.json'
import moment from 'moment'
import { Timeline } from 'ant-design-vue'

export default {
  name: 'Experience',
  components: {
    // register <a-timeline> and <a-timeline-item>
    'a-timeline': Timeline,
    'a-timeline-item': Timeline.Item
  },
  data() {
    return {
      professionalHistory: []
    }
  },
  mounted() {
    this.professionalHistory = professionalHistory
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/' + pic)
    },
    /**
     * Returns formatted date range, e.g. "Jan, 2020 – Present"
     */
    formatPeriod(from, to) {
      const start = moment(from, 'MM/DD/YYYY').format('MMM, YYYY')
      const end = to ? moment(to, 'MM/DD/YYYY').format('MMM, YYYY') : 'Present'
      return `${start} – ${end}`
    }
  }
}
</script>

<style scoped>
/* Experience Section */
.experience {
  padding: 60px 20px;
  margin: 40px 0;
}

.experience h1 {
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

:deep(.ant-timeline-item) {
  padding-bottom: 30px;
}

:deep(.ant-timeline-item-tail) {
  border-left: 2px solid rgba(255, 255, 255, 0.3);
}

:deep(.ant-timeline-item-head) {
  background-color: #ffffff;
  border-color: #ffffff;
}

/* Experience item layout */
.experience-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 20px;
}

.date-range {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 10px;
}

/* Experience content styling */
.experience-content {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  transition: all 0.3s ease;
}

.experience-content:hover {
  transform: translateX(10px);
}

.prof-img {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.experience-content:hover .prof-img {
  transform: scale(1.1);
}

.experience-info h4 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: #ffffff;
}

.experience-info h5 {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 500;
}

.experience-info a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.experience-info a:hover {
  color: #cccccc;
}

/* Start marker styling */
.start-marker {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  padding: 10px 0;
}

.clock-icon {
  font-size: 1.5rem;
  color: white;
  background: transparent;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  line-height: 1;
}

.start-marker:hover .clock-icon {
  transform: scale(1.2);
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .experience h1 {
    font-size: 2.5rem;
  }
  
  .timeline-container {
    width: 90%;
    padding: 20px;
  }
  
  .experience-item {
    gap: 12px;
    margin-left: 15px;
  }
  
  .date-range {
    font-size: 0.9rem;
  }
  
  .experience-content {
    gap: 15px;
  }
  
  .prof-img {
    width: 50px;
    height: 50px;
  }
  
  .experience-info h4 {
    font-size: 1.2rem;
  }
  
  .experience-info h5 {
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .experience {
    padding: 40px 15px;
    margin: 30px 0;
  }
  
  .experience h1 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .timeline-container {
    width: 95%;
    padding: 15px;
  }
  
  .experience-item {
    gap: 10px;
    margin-left: 10px;
  }
  
  .date-range {
    font-size: 0.85rem;
  }
  
  .experience-content {
    gap: 12px;
  }
  
  .prof-img {
    width: 45px;
    height: 45px;
  }
  
  .experience-info h4 {
    font-size: 1.1rem;
  }
  
  .experience-info h5 {
    font-size: 0.9rem;
  }
}
</style>
