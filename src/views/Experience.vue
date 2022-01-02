<template>
  <div class="experience">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <h1>Professional Experience</h1>
    <div 
      data-aos="zoom-in-up" 
      class="container">
      <div class="row" v-for="(profession, index) in professionalHistory" :key="index">
        <div class="col-md-2" >
          <img class="prof-img" v-bind:src="getImgUrl(profession.ImageName)" :alt="profession.Company"/>
        </div>
        <div class="col-md-8" >
          <h4><a :href="profession.Link" target="_blank">{{ profession.Company }}</a></h4>
          <h5>{{ profession.Title }}</h5>
          <h6>{{ moment(profession.From).format('MMM, YYYY') }} - {{ profession.To ? moment(profession.To).format('MMM, YYYY') : "Present" }}</h6>
        </div>
      </div>
    </div>
    <h1>Educational History</h1>
    <div 
      data-aos="zoom-in-up" 
      class="container">
      <div class="row" v-for="(education, index) in educationalHistory" :key="index">
        <div class="col-md-2" >
          <img class="edu-img" v-bind:src="getImgUrl(education.ImageName)" :alt="education.Institution"/>
        </div>
        <div class="col-md-8" >
          <h4><a :href="education.Link" target="_blank">{{ education.Institution }}</a></h4>
          <h5>{{ education.Course }}</h5>
          <h6>{{ education.From }} - {{ education.To ? education.To : "Present" }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import educationalHistory from '../json/Educational.json';
import professionalHistory from '../json/Professional.json';
export default {
  data() {
    return {
      educationalHistory: [],
      professionalHistory: []
    }
  },
  mounted() {
    this.educationalHistory = educationalHistory
    this.professionalHistory = professionalHistory
  },
  methods: {
    setActiveClass(className) {
      this.activeClass = className
    },
    getImgUrl(pic) {
      return require('../assets/'+pic)
    }
  }
}
</script>
<style scoped>
.experience {
  margin: 25px 50px 100px 50px;
}
.row {
  padding: 10px;
  background-color: #222;
  margin: 20px;
}
.edu-img {
  height: 100px;
  width: 100px;
}
a {
  color: white;
}
</style>
