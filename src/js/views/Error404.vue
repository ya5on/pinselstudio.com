<template>
  <div id="error">
  	<navbar></navbar>
  	<div class="message"></div>
  	<footer-block></footer-block>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import FooterBlock from '../components/Footer.vue';

export default {
  name: 'error404',
  components: {
  	Navbar,
  	FooterBlock
  }
};
</script>