<template>
  <div class="body">
    <div v-if="isIntroFinish" class="home">
      ??
    </div>
    <div v-else class="intro">
      <div class="text"></div>
      <div v-bind:class="{create: isCreateTextFinish}" id="create"></div>
      <div v-bind:class="{start: !isStartTextStart}" id="start"></div>
      <div class="load">
        <div v-bind:class="{loading: isLoadingStart}" id="loading"></div>
        <div class="loaderwrap"><div v-bind:class="{loader: isLoadingStart}"></div><div v-bind:class="{loaderback: isLoadingStart}"></div></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      textCountCreate: 0,
      textCountStart: 0,
      isCreateTextFinish: false,
      isStartTextStart: false,
      isLoadingStart: false,
      isIntroFinish: false,
    }
  },
  created: function () {
  },
  mounted: async function () {
    await this.typeWriterCreate()
  },
  methods: {
    typeWriterCreate: function () {
      var txt = `$ create project KIM BUBBO PORTFOLIO`
      var speed = 50;
      if (this.textCountCreate < txt.length) {
        document.getElementById("create").innerHTML += txt.charAt(this.textCountCreate);
        this.textCountCreate++;
        if (this.textCountCreate == txt.length) {
          this.isCreateTextFinish = true
          this.isStartTextStart = true
          setTimeout(this.typeWriterStart, 100);
          return
        } 
        setTimeout(this.typeWriterCreate, speed);
      }
    },
    typeWriterStart: function () {
      var txt = `$ start PORTFOLIO`
      var speed = 50;
      if (this.textCountStart < txt.length) {
        document.getElementById("start").innerHTML += txt.charAt(this.textCountStart);
        this.textCountStart++;
        if (this.textCountStart == txt.length) {
          this.isStartTextStart = false
          this.progressBar()
        }
        setTimeout(this.typeWriterStart, speed);
      }
    },
    progressBar: function() {
      this.isLoadingStart = true
      var elem = document.getElementById("loading");   
      var width = 0;
      var id = setInterval(frame, 15);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++; 
          elem.innerHTML = width * 1  + '% LOADING…' ;
          if (width == 100) {
            this.isIntroFinish = true
            console.log(this.isIntroFinish);
            return
          } 
        }
      }
    }
  }
}


</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.body {
  width: 100%;
  height: 100vh;
  background-color: black;
}
.intro {
  display: inline-block;
  font-size: 18px;
  padding: 50px;
  margin-left: 10px;
  color: white;
  font-family: 'Roboto Mono', monospace;
}
#create{
  position: relative;
}
.create::after {
  content: none !important;
}
#create::after{
  content: '';
  width: 1px;
  height: 22px;
  border-right: 8px solid white;
  animation: blink .7s infinite;
}
#start{
  padding-top: 5px;
  position: relative;
}
.start::after {
  content: none !important;
}
#start:after{
  content: '';
  width: 1px;
  height: 22px;
  border-right: 8px solid white;
  animation: blink .7s infinite;
}
.load {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
/* -------------- loader -------------- */
.loaderwrap {
  position: relative;
}
.loader{
  margin-left: 20px;
	position: absolute;
	width: 150px;
	height: 18px;
	background-color: rgba(255, 255, 255, 1);
  -webkit-transform-origin:  0% 100%;
	transform-origin:  0% 100% ;
	-webkit-animation: loader 1.5s ease-in-out;
	animation: loader 1.5s ease-in-out;
}
.loaderback{
  margin-left: 20px;
	position: relative;
	width: 150px;
	height: 18px;
	background-color: rgba(255, 255, 255, .2);
}
@-webkit-keyframes loader{
    0%{width: 0px;}
    100%{width: 150px;}
}
@keyframes loader{
    0%{width: 0px;}
    100%{width: 150px;}
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
