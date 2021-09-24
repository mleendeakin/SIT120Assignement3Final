<template>
  <div class="container">
    <div class="left-box">
      <div class="left-box-title">
        <h1>About FruitPedia!</h1>
        <div class="left-box-para">
          <p>FruitPedia is a website for fruit lovers, who want to know more information about their favourite fruits.
            Help contribute with Recipes, Seasonal information and fruit facts and information! We love hearing about what you have to say
            and most of all! We love talking about fruit!
          </p>
          <p>We want to make your experiece has enjoyable as possible! And most of all, we want to bring people together with fruit! So any feedback would be greatly appreciated!</p>
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="right-box-title">
        <h1>About The Author</h1>
        <div class="right-box-para">
          <p>My name is Michael Leen, I am a 3rd year university student who is currently enrolled in Cloud Computing and Application Development Majors
            I really enjoy creating project using a variety of languages and frameworks, but this is my first project using Vue. And I really have enjoyed it! </p>
          <h3>About the Project</h3>
          <p>This was covered over multiple assignments for SIT120 - Introduction to Responsive Web Apps
            Covering on how to use and apply Vue concepts to what we learned earlier in the trimest with HTML and CSS
          </p>
        </div>
      </div>
    </div>
  </div>



</template>


<script>
export default {
  props: ['id']
}
</script>


<style>

.container {
  display: flex;
}
.left-box {
  width: 600px;
  height: 500px;
  background-color: #7aac5b;
  border-radius: 10px;
  margin-left: 200px;
  margin-top: 100px;
  border-style: solid;
  border-width: 15px;
  border-color: #519945;
}

.left-box-title {
  height: 10%;
  width: 80%;
  background: #519945;
  margin-left: auto;
  margin-right: auto;
  border-radius: inherit;
}

.left-box-para {
  width: 480px;
  height: 300px;
  padding-top: 30px;
  background: #519945;
  border-radius: inherit;
}


.right-box
{

  height: 500px;
  width: 450px;
  margin-left: 200px;
  margin-top: 100px;
  background-color: #7aac5b;
  border-style: solid;
  border-width: 15px;
  border-color: #519945;
  border-radius: 10px;

}

.right-box-title {
  height: 10%;
  width: 80%;
  background: #519945;
  margin-left: auto;
  margin-right: auto;
  border-radius: inherit;
}

.right-box-para {
  width: 350px;
  height: 350px;
  padding-top: 30px;
  background: #519945;
  border-radius: inherit;
}


@media (max-width: 1400px) {
  .left-box-para {
    width: 300px;
    height: 250px;
    font-size: 12px;
  }
}

@media (max-width: 1150px) {
  .left-box-para {
    width: 250px;
    height: 200px;
    font-size: 12px;
  }


  .left-box {
    margin: 0;
    height: 85%;
    width: 55%;
  }

  .left-box-title {
    font-size: 12px;
  }

  .right-box {
    margin: 0;
    margin-top: 50px;
  }

  .container {
    display: inline;
  }

}
</style>