<template>
  <div id="home">
    <div :class="['pinsel-home', pinselActive]">
      <div class="pinsel-logo"></div>
      <div class="title-wrapper">
        <h1 class="title">
          <small>Веб-студия</small>
          <strong>Pinsel
            <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 323.5 126" style="enable-background:new 0 0 323.5 126;" xml:space="preserve">
              <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" > 
                <stop offset="0%" stop-color="#fb1016">
                  <animate attributeName="stop-color" values="#fb1016; #ae7130; #fb1016; #03398f; #fb1016" dur="10s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="100%" stop-color="#01FF89">
                  <animate attributeName="stop-color" values="#01FF89; #01FF89; #03398f; #ae7130; #01FF89" dur="10s" repeatCount="indefinite"></animate>
                </stop>
              </linearGradient> 

              </svg>
            </strong>
          <blockquote>Комплексные решения<br>для вашего бизнеса</blockquote>
        </h1>
      </div>
      <router-link 
        :to="{ name: 'Pinsel' }"
        class="pinsel-link"
      >Посмотреть больше</router-link>
      <a href="#" class="light-shadow-link" @click.prevent="switchTo('ls')">Light & Shadow</a>
      <div class="right-block"></div>
    </div>
    <div :class="['light-shadow-home', lightShadowActive]">
      <div class="light-shadow-row">
        <div class="light-shadow-col camera">
          <div class="light-shadow-logo"></div>
          <div class="camera-mockup"></div>
        </div>
        <div class="light-shadow-col title-col">
          <div class="title-wrapper">
            <h1 class="title">
              <small>Видео-продакшн</small>
              <strong>Light&</strong>
              <strong class="little">Shadow</strong>
              <blockquote>Видео - одно из лучших<br>рекламных решений</blockquote>
            </h1>
          </div>
        </div>
      </div>
      <router-link 
        :to="{ name: 'Light&Shadow' }"
        class="light-shadow-link"
      >Посмотреть больше</router-link>
      <a href="#" class="pinsel-link" @click.prevent="switchTo('ps')">Pinsel  Studio</a>
      <div class="right-block"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'home',
  mounted: function(){
    var bdy = document.getElementById('bdy');
    setTimeout(function(){
      bdy.className = "home-body";
    }, 500);
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event){
      var delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
      var bdy = document.getElementById('bdy');
      if (delta >= 0) {
        if(!$('.pinsel-home').hasClass('active')){
          $('.pinsel-home').addClass('active');
          $('.light-shadow-home').removeClass('active');
          bdy.className = "pinsel-body";
        } 
      } else {
        if(!$('.light-shadow-home').hasClass('active')){
          $('.pinsel-home').removeClass('active');
          $('.light-shadow-home').addClass('active');
          bdy.className = "light-shadow-body";
        } 
      }
    });
  },
  data: function(){
    return {
      pinselActive: 'active',
      lightShadowActive: ''
    };
  },
  methods: {
    switchTo: function(to){
      var bdy = document.getElementById('bdy');
      if(to == 'ls'){
        $('.pinsel-home').removeClass('active');
        $('.light-shadow-home').addClass('active');
        bdy.className = "light-shadow-body";
      }
      if(to == 'ps'){
        $('.pinsel-home').addClass('active');
        $('.light-shadow-home').removeClass('active');
        bdy.className = "pinsel-body";
      }
    }
  }
};
</script>
