<template>
  <div :class="['nav-wrapper', isShifted]">
    <nav class="nav">
    	<div class="nav-logo"></div>
    	<ul class="nav-list">
    		<li>
    			<router-link :to="{ name: 'Home' }">
    				Главная
    			</router-link>
    		</li>
    		<li>
    			<router-link :to="{ name: 'Pinsel' }">
    				Pinsel
    			</router-link>
    		</li>
    		<li>
    			<router-link :to="{ name: 'Light&Shadow' }">
    				Light&Shadow
    			</router-link>
    		</li>
    	</ul>
      <div :class="['nav-bars', shiftedBars]" @click="toggleSidebar">
        <span></span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: [
    'shifted'
  ],
  data: function(){
    return {
      shiftedBars: ''
    };
  },
  computed: {
    isShifted: function(){
      var $this = this;
      if(this.shifted){
        setTimeout(() => {
          $this.shiftedBars = 'shifted';
        }, 350);
        return 'shifted';
      } else {
        setTimeout(() => {
          $this.shiftedBars = '';
        }, 350);
        return '';
      }
    }
  },
  methods: {
    toggleSidebar: function(){
      this.$emit('toggleSidebar');
    }
  }
};
</script>