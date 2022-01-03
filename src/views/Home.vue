<template>
  <div class="home">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <div id="greet">
      Hi, I am
      <div id="fname"
      data-aos="fade-right"
      data-aos-duration="1000">Ajay</div>
      <div id="lname"
      data-aos="fade-left"
      data-aos-duration="1000"> Umakanth</div>
    </div>
    <div class="about container">
      <div class="row">
        <div class="col-10 offset-md-3 col-md-3" 
        data-aos="flip-right" 
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000">
          <img src="../assets/MyImage.jpg"/>
        </div>
        <div class="col-10 col-md-6">
          <p><i class="fa fa-quote-left"></i>
            Hello, I am Ajay Umakanth. I am a software engineer. 
            I have experience working on multiple domains including 
            Web Development, Machine Larning and Internt of Things.
            I am currently working as an Associate Software Engineer at DeltaX
          <i class="fa fa-quote-right"></i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
<style scoped>
.home {
  margin-bottom: 100px;
}
.about {
  margin: 20px;
}
#greet{
  font-size: 60px;
  margin: 50px 150px 200px;
}
#fname {
  font-size: 100px;
  margin-left: 200px;
}
#lname {
  font-size: 100px;
  margin-left: 250px;
}
@media screen and (max-width: 600px) {
  #greet{
    font-size: 30px;
    margin: 40px 30px 80px 30px;
  }
  #fname {
    font-size: 60px;
    margin-left: 40px;
  }
  #lname {
    font-size: 60px;
    margin-left: 50px;
  }
}
</style>

