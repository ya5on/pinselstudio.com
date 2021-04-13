<template>
  <div id="content">
  	<transition :name="transitionName">
  		<router-view 
  			@redirect404="redirect404"
  			@routeTo="routeTo"
  		></router-view>
  	</transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
  	return {
  		transitionName: 'default'
  	};
  },
  methods: {
  	redirect404: function(){
  		this.$router.replace({ name: 'Error404' });
  	},
  	routeTo: function(to){
  		this.$router.push({ path: to });
  	}
  },
  watch: {
  	'$route' (to, from) {
  		if(to.name == 'Pinsel' && from.name == 'Home'){
  			this.transitionName = 'right';
  		}
  		if(to.name == 'Home' && from.name == 'Pinsel'){
  			this.transitionName = 'left';
  		}
  		if(to.name == 'Light&Shadow' && from.name == 'Home'){
  			this.transitionName = 'right';
  		}
  		if(to.name == 'Home' && from.name == 'Light&Shadow'){
  			this.transitionName = 'left';
  		}
  		if(to.name == 'Pinsel' && from.name == 'Light&Shadow'){
  			this.transitionName = 'left';
  		}
  		if(to.name == 'Light&Shadow' && from.name == 'Pinsel'){
  			this.transitionName = 'right';
  		}
  		if(to.name == 'Pinsel' && from.name == 'Example'){
  			this.transitionName = 'left';
  		}
  	}
  }
};
</script>

<style>
	.default-enter-active {
		-webkit-animation: comingLeft 1s;
		-o-animation: comingLeft 1s;
		animation: comingLeft 1s;
		-webkit-animation-delay: .5s;
		-o-animation-delay: .5s;
		animation-delay: .5s;
		opacity: 0;
	}

	.default-leave-active {
		-webkit-animation: goingLeft 1s;
		-o-animation: goingLeft 1s;
		animation: goingLeft 1s;
		overflow: hidden;
	}

	.right-enter-active {
		-webkit-animation: comingRight 1s;
		-o-animation: comingRight 1s;
		animation: comingRight 1s;
		-webkit-animation-delay: .5s;
		-o-animation-delay: .5s;
		animation-delay: .5s;
		opacity: 0;
	}

	.right-leave-active {
		-webkit-animation: goingRight 1s;
		-o-animation: goingRight 1s;
		animation: goingRight 1s;
		overflow: hidden;
	}

	.left-enter-active {
		-webkit-animation: comingLeft 1s;
		-o-animation: comingLeft 1s;
		animation: comingLeft 1s;
		-webkit-animation-delay: .5s;
		-o-animation-delay: .5s;
		animation-delay: .5s;
		opacity: 0;
	}

	.left-leave-active {
		-webkit-animation: goingLeft 1s;
		-o-animation: goingLeft 1s;
		animation: goingLeft 1s;
		overflow: hidden;
	}

	.top-enter-active {
		-webkit-animation: comingTop 1s;
		-o-animation: comingTop 1s;
		animation: comingTop 1s;
		-webkit-animation-delay: .5s;
		-o-animation-delay: .5s;
		animation-delay: .5s;
		opacity: 0;
	}

	.top-leave-active {
		-webkit-animation: goingTop 1s;
		-o-animation: goingTop 1s;
		animation: goingTop 1s;
		overflow: hidden;
	}

	.bottom-enter-active {
		-webkit-animation: comingBottom 1s;
		-o-animation: comingBottom 1s;
		animation: comingBottom 1s;
		-webkit-animation-delay: .5s;
		-o-animation-delay: .5s;
		animation-delay: .5s;
		opacity: 0;
	}

	.bottom-leave-active {
		-webkit-animation: goingBottom 1s;
		-o-animation: goingBottom 1s;
		animation: goingBottom 1s;
		overflow: hidden;
	}

	@-webkit-keyframes goingRight {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-100%);
			opacity: 0;
		}
	}

	@keyframes goingRight {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-100%);
			opacity: 0;
		}
	}

	@-webkit-keyframes comingRight {
		from {
			transform: translateX(100%);
			opacity: 0;
		}

		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes comingRight {
		from {
			transform: translateX(100%);
			opacity: 0;
		}

		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@-webkit-keyframes goingLeft {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(100%);
			opacity: 0;
		}
	}

	@keyframes goingLeft {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(100%);
			opacity: 0;
		}
	}

	@-webkit-keyframes comingLeft {
		from {
			transform: translateX(-100%);
			opacity: 0;
		}

		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes comingLeft {
		from {
			transform: translateX(-100%);
			opacity: 0;
		}

		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@-webkit-keyframes goingTop {
		from {
			transform: translateY(0);
		}

		to {
			transform: translateY(-100%);
			opacity: 0;
		}
	}

	@keyframes goingTop {
		from {
			transform: translateY(0);
		}

		to {
			transform: translateY(-100%);
			opacity: 0;
		}
	}

	@-webkit-keyframes comingTop {
		from {
			transform: translateY(100%);
			opacity: 0;
		}

		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes comingTop {
		from {
			transform: translateY(100%);
			opacity: 0;
		}

		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@-webkit-keyframes goingBottom {
		from {
			transform: translateY(0);
		}

		to {
			transform: translateY(100%);
			opacity: 0;
		}
	}

	@keyframes goingBottom {
		from {
			transform: translateY(0);
		}

		to {
			transform: translateY(100%);
			opacity: 0;
		}
	}

	@-webkit-keyframes comingBottom {
		from {
			transform: translateY(-100%);
			opacity: 0;
		}

		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes comingBottom {
		from {
			transform: translateY(-100%);
			opacity: 0;
		}

		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>