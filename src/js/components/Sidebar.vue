<template>
	<div :class="['sidebar', isActive]">
		<h2>Написать нам</h2>
		<feedback-form :side="true"></feedback-form>
	</div>
</template>

<script>
	import FeedbackForm from '../components/FeedbackForm.vue';

	export default {
		name: 'sidebar',
		props: [
			'active'
		],
		components: {
			FeedbackForm
		},
		computed: {
			isActive: function(){
				if(this.active)
					return 'active';
				else
					return '';
			}
		}
	};
</script>