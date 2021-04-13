<template>
	<div class="feedback">
		<div class="feedback-row">
			<div class="feedback-col left">
				<h2>Связь с нами</h2>
				<feedback-form></feedback-form>
			</div>
			<div class="feedback-col right">
				<p>{{ text }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import FeedbackForm from '../components/FeedbackForm.vue';

	export default {
		name: 'feedback',
		props: [
			'text'
		],
		components: {
			FeedbackForm
		},
	};
</script>