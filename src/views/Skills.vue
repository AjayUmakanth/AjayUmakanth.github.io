<template>
  <div class="skills">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <h1>Skills</h1>
    <div 
      data-aos="zoom-in-up" 
      class="container">
      <div class="row">
        <div class="col-md-2 col-4 skill" v-for="(skill, index) in skills" :key="index">
          <img v-bind:src="getImgUrl(skill.ImageName)" :alt="skill.Name"/>
          <h4>{{ skill.Name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import skills from '../json/Skills.json';
export default {
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
.skills {
  margin: 25px 50px 100px 50px;
}
.skill {
  background-color: #222;
  margin: 20px;
  padding: 10px;
  display: grid;
  justify-content: center;
}
img {
  height: 100px;
  width: 100px;
}
a {
  color: white;
}
h4 {
  text-align: center;
  margin: 10px 0px 0px 0px;
}
h1 {
  margin: 25px 50px;
}
</style>
