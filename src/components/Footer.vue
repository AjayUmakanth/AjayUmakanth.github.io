<template>
    <div class="footer-basic">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <div class="social">
                <span class="copyright">Contact me:</span><br>
                <span v-for="(socialMedia, index) in socialMediaHandles" :key="index">
                    <a target="_blank" :href="socialMedia.Link">
                        <i :class="socialMedia.Class"/>
                    </a>
                </span>
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
.footer-basic {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: white;
  background-color: #111;
  height: 80px;
  padding-top: 10px;
}
.fa {
    color: white;
    padding: 10px;
}
</style>