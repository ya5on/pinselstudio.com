<template>
  <div id="light-shadow">
    <navbar 
      @toggleSidebar="toggleSidebar"
      :shifted="sidebarActive"
    ></navbar>
    <intro
      :shifted="sidebarActive"
    ></intro>
    <sidebar 
      :active="sidebarActive"
    ></sidebar>
    <sliderls></sliderls>
    <feedback text="Заказывай быстрее и получи мощнейший рекламный инструмент перед тем, как это сделают твои  конкуренты."></feedback>
    <footer-block></footer-block>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Intro from '../components/Intro.vue';
import Sliderls from '../components/SliderLS.vue';
import VideoPlaceholder from '../components/VideoPlaceholder.vue';
import Feedback from '../components/Feedback.vue';
import FooterBlock from '../components/Footer.vue';
import $ from 'jquery';

export default {
  name: 'lightshadow',
  components: {
    Navbar,
    Intro,
    Sidebar,
    Sliderls,
    VideoPlaceholder,
    Feedback,
    FooterBlock
  },
  mounted: function(){
    $(window).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');
    var $this = this;
    $(window).scroll(function(){
      var scroll = $(document).scrollTop();
      var height = $('.sidebar').height();
      if(scroll > (height - 100)){
        $this.sidebarActive = false;
      }
    });
    var bdy = document.getElementById('bdy');
    setTimeout(function(){
      bdy.className = "light-shadow-body";
    }, 500);
  },
  data: function(){
    return {
      sidebarActive: ''
    };
  },
  methods: {
    toggleSidebar: function(){
      if(this.sidebarActive)
        this.sidebarActive = false;
      else
        this.sidebarActive = true;
    }
  }
};
</script>
