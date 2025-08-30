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
            <div class="experience-header">
              <img
                class="prof-img"
                :src="getImgUrl(profession.ImageName)"
                :alt="profession.Company"
                @error="onImgError"
              />
              <div class="header-info">
                <h4 class="company-name">
                  <a :href="profession.Link" target="_blank">
                    {{ profession.Company }}
                  </a>
                </h4>
                <div class="position-title">
                  {{ profession.Title }}
                </div>
              </div>
            </div>
            <div class="experience-content">
              <div class="experience-info">
                <div class="meta-info">
                  <div class="meta-item">
                    <i class="fa fa-clock-o meta-icon"></i>
                    <span class="meta-text">{{ formatPeriod(profession.From, profession.To) }}</span>
                  </div>
                  <div class="meta-item">
                    <i class="fa fa-map-marker meta-icon"></i>
                    <span class="meta-text">{{ profession.Location || 'Remote' }}</span>
                  </div>
                </div>
                <div class="description-points">
                  <ul>
                    <li v-for="(point, pointIndex) in profession.Description" :key="pointIndex">
                      {{ point }}
                    </li>
                  </ul>
                </div>
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
      try {
        return require('../assets/' + pic)
      } catch (e) {
        return '/favicon.ico'
      }
    },
    onImgError(event) {
      event.target.src = '/favicon.ico'
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
  padding: 40px 20px;
  margin: 30px 0;
}

.experience h1 {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.separator {
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
  background-size: 200% 100%;
  margin: 0 auto 25px;
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
  padding: 30px;
}

/* Timeline customization */
:deep(.ant-timeline) {
  color: white;
}

:deep(.ant-timeline-item) {
  padding-bottom: 20px;
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
  gap: 10px;
  margin-left: 20px;
}

.experience-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

.header-info {
  display: flex;
  flex-direction: column;
}

.company-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: #ffffff;
}

.company-name a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.company-name a:hover {
  color: #cccccc;
}

.position-title {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0;
  font-style: italic;
}

/* Experience content styling */
.experience-content {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 10px 0;
  transition: all 0.3s ease;
  margin-left: 75px; /* Align with the header info text */
}

.experience-content:hover {
  transform: translateX(8px);
}

.prof-img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.experience-content:hover .prof-img {
  transform: scale(1.05);
}

.experience-info {
  flex: 1;
}

/* Meta info styling */
.meta-info {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.meta-icon {
  color: #4CAF50;
  font-size: 1rem;
  width: 16px;
  text-align: center;
}

.meta-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
}

.description-points ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.description-points li {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin-bottom: 6px;
  line-height: 1.4;
  position: relative;
  padding-left: 18px;
}

.description-points li::before {
  content: "•";
  color: #4CAF50;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
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
    gap: 8px;
    margin-left: 15px;
  }
  
  .experience-header {
    gap: 12px;
    margin-bottom: 8px;
  }
  
  .company-name {
    font-size: 1.2rem;
    margin-bottom: 4px;
  }
  
  .position-title {
    font-size: 0.9rem;
    margin-bottom: 0;
  }
  
  .experience-content {
    gap: 12px;
    margin-left: 0; /* Remove margin for mobile */
    padding: 8px 0;
  }
  
  .prof-img {
    width: 50px;
    height: 50px;
  }
  
  .meta-info {
    gap: 15px;
    margin-bottom: 12px;
  }
  
  .meta-text {
    font-size: 0.85rem;
  }
  
  .description-points li {
    font-size: 0.85rem;
    margin-bottom: 5px;
    padding-left: 16px;
  }
}

@media screen and (max-width: 480px) {
  .experience {
    padding: 30px 15px;
    margin: 25px 0;
  }
  
  .experience h1 {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  .timeline-container {
    width: 95%;
    padding: 15px;
  }
  
  .experience-item {
    gap: 6px;
    margin-left: 10px;
  }
  
  .experience-header {
    gap: 10px;
    margin-bottom: 6px;
  }
  
  .company-name {
    font-size: 1.1rem;
    margin-bottom: 3px;
  }
  
  .position-title {
    font-size: 0.8rem;
    margin-bottom: 0;
  }
  
  .experience-content {
    gap: 10px;
    margin-left: 0; /* Remove margin for mobile */
    padding: 6px 0;
  }
  
  .prof-img {
    width: 45px;
    height: 45px;
  }
  
  .meta-info {
    gap: 12px;
    margin-bottom: 10px;
    flex-direction: column;
  }
  
  .meta-text {
    font-size: 0.8rem;
  }
  
  .description-points li {
    font-size: 0.8rem;
    margin-bottom: 4px;
    padding-left: 14px;
  }
}
</style>





