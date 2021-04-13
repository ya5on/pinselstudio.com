<template>
	<div :class="['intro', isShifted]">
		<div class="intro-row">
			<div class="intro-column left">
				<p>Видео Продакшн <b>Light and Shadow</b> – творческое объединение, что стремится показать своё виденье мира видео.  Мы знаем, что видео должно изумлять картинкой, показывать нужные мысли, рассказывать о продукте. Умеем делать то, что называют WOW – видео. </p>
			</div>
			<div class="intro-column right">
				<div class="intro-camera"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'intro',
		props: [
			'shifted'
		],
		computed: {
			isShifted: function(){
				if(this.shifted)
					return 'shifted';
				else
					return '';
			}
		}
	};
</script>