<template>
	<button v-if="submit" type="submit" @click="createRipple">
		{{ text }}
	</button>
	<button v-else @click="createRipple">
		{{ text }}
	</button>
</template>

<script>
	export default {
		name: 'waves-button',
		props: [
			'text',
			'submit'
		],
		methods: {
			createRipple: function(e) {
				var circle = document.createElement('div');
				var $this = this.$el;

				$this.appendChild(circle);

				var d = Math.max($this.clientWidth, $this.clientHeight) / 2;

				circle.style.width = circle.style.height = d + 'px';

				circle.style.left = e.clientX - $this.getBoundingClientRect().left - d / 2 + 'px';
				circle.style.top = e.clientY - $this.getBoundingClientRect().top - d / 2 + 'px';

				circle.classList.add('ripple');

				setTimeout(() => {
					$this.removeChild(circle);
				}, 1000);
			}
		}
	};
</script>