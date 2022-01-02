<template>
  <div class="contact">    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <h1>Contact me here</h1>
    <div 
      data-aos="zoom-in-up" 
      class="container">
      <div class="row" v-for="(socialMedia, index) in socialMediaHandles" :key="index">
          <div class="col-12 offset-md-2 col-md-2" >
            <i :class="socialMedia.Class"/> {{ socialMedia.Type }}
          </div>
          <div class="col-10 offset-2 offset-md-0 col-md-4" >
              {{ socialMedia.Name }}
            <a target="_blank" :href="socialMedia.Link">
              <i class="fa fa-external-link"/>
            </a>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import socialMediaHandles from '../json/SocialMediaHandles.json';
export default {
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
.contact {
  margin: 25px 50px 100px 50px;
}
.container {
  background-color: #222;
  margin: 30px 10px;
  padding: 50px;
}
.fa {
    color: white;
    padding: 10px;
}
.row {
    margin: 10px 0px;
}
a, i {
  color: white;
}
</style>