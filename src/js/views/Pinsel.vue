<template>
  <div id="pinsel">
		<navbar 
			@toggleSidebar="toggleSidebar"
			:shifted="sidebarActive"
		></navbar>
		<tiles 
			:shifted="sidebarActive"
      @routeTo="routeTo"
		></tiles>
		<sidebar 
			:active="sidebarActive"
		></sidebar>
    <slider></slider>
    <feedback text="Pinsel Studio – создаём только качественные дизайн работы и удобные сайты. Закажи прямо сейчас."></feedback>
    <footer-block></footer-block>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Tiles from '../components/Tiles.vue';
import Sidebar from '../components/Sidebar.vue';
import Slider from '../components/Slider.vue';
import About from '../components/About.vue';
import Feedback from '../components/Feedback.vue';
import FooterBlock from '../components/Footer.vue';
import $ from 'jquery';

export default {
  name: 'pinsel',
  components: {
  	Navbar,
  	Tiles,
  	Sidebar,
    Slider,
    About,
    Feedback,
    FooterBlock
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
  	},
    routeTo: function(to){
      this.$emit('routeTo', to);
    }
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
      bdy.className = "pinsel-body";
    }, 500);
  }
};
</script>