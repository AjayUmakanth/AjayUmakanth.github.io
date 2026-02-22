<template>
  <section id="skills" class="skills">
    <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="false" class="skills-container">
      <h1 data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="50" data-aos-once="false">Skills</h1>
      <div class="separator"></div>

      <div class="skill-groups">
        <div class="skill-group" v-for="(group, groupIndex) in skillGroups" :key="groupIndex">
          <h2 class="group-title">{{ group.group }}</h2>
          <div class="skills-grid">
            <div class="skill" v-for="(skill, index) in group.skills" :key="index">
              <div class="skill-icon" v-html="iconSvg(skill.icon)" :aria-label="skill.Name"></div>
              <h4>{{ skill.Name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import skills from '../json/Skills.json'
import iconCsharp from '~icons/simple-icons/csharp?raw'
import iconVue from '~icons/simple-icons/vuedotjs?raw'
import iconHtml5 from '~icons/simple-icons/html5?raw'
import iconCss3 from '~icons/simple-icons/css3?raw'
import iconDotnet from '~icons/simple-icons/dotnet?raw'
import iconPython from '~icons/simple-icons/python?raw'
import iconJavascript from '~icons/simple-icons/javascript?raw'
import iconTypescript from '~icons/simple-icons/typescript?raw'
import iconReact from '~icons/simple-icons/react?raw'
import iconNodedotjs from '~icons/simple-icons/nodedotjs?raw'
import iconExpress from '~icons/simple-icons/express?raw'
import iconMongodb from '~icons/simple-icons/mongodb?raw'
import iconMicrosoftsqlserver from '~icons/simple-icons/microsoftsqlserver?raw'
import iconMysql from '~icons/simple-icons/mysql?raw'
import iconPostgresql from '~icons/simple-icons/postgresql?raw'
import iconDocker from '~icons/simple-icons/docker?raw'
import iconKubernetes from '~icons/simple-icons/kubernetes?raw'
import iconGit from '~icons/simple-icons/git?raw'

const iconMap = {
  'simple-icons/csharp': iconCsharp,
  'simple-icons/vuedotjs': iconVue,
  'simple-icons/html5': iconHtml5,
  'simple-icons/css3': iconCss3,
  'simple-icons/dotnet': iconDotnet,
  'simple-icons/python': iconPython,
  'simple-icons/javascript': iconJavascript,
  'simple-icons/typescript': iconTypescript,
  'simple-icons/react': iconReact,
  'simple-icons/nodedotjs': iconNodedotjs,
  'simple-icons/express': iconExpress,
  'simple-icons/mongodb': iconMongodb,
  'simple-icons/microsoftsqlserver': iconMicrosoftsqlserver,
  'simple-icons/mysql': iconMysql,
  'simple-icons/postgresql': iconPostgresql,
  'simple-icons/docker': iconDocker,
  'simple-icons/kubernetes': iconKubernetes,
  'simple-icons/git': iconGit
}

export default {
  name: 'Skills',
  data() {
    return {
      skillGroups: []
    }
  },
  mounted() {
    this.skillGroups = skills
  },
  methods: {
    iconSvg(iconKey) {
      return iconMap[iconKey] || ''
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

.skill-groups {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.skill-group:first-child {
  margin-top: 0;
}

.group-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 0;
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

.skill-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.skill-icon >>> svg {
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
  max-width: 80px;
  max-height: 80px;
  object-fit: contain;
}

.skill:hover .skill-icon {
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
  .skill-groups {
    gap: 32px;
  }

  .group-title {
    font-size: 1.25rem;
  }

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
  
  .skill-icon {
    width: 60px;
    height: 60px;
  }

  .skill-icon >>> svg {
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    max-width: 60px;
    max-height: 60px;
  }
}

@media screen and (max-width: 480px) {
  .skill-groups {
    gap: 28px;
  }

  .group-title {
    font-size: 1.1rem;
  }

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
  
  .skill-icon {
    width: 50px;
    height: 50px;
  }

  .skill-icon >>> svg {
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
  }

  .skills h4 {
    font-size: 1rem;
  }
}
</style> 