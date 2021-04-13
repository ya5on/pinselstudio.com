<template>
	<div class="slider-ls">
		<div class="slider-ls-item">
			<div class="slider-ls-row">
				<div class="slider-ls-col left"></div>
				<div class="slider-ls-col right">
					<aside>
						<h3>Видео</h3>
						<p>Создаем видеоролики, что будут отличать Вас от конкурентов. Занимаемся комплексными проектами.</p>
					</aside>
					<aside>
						<div class="slider-ls-aside-row">
							<h4>Интерьерная съёмка</h4>
							<h4>Рекламные ролики</h4>
						</div>
						<div class="slider-ls-aside-row">
							<h4>Репортажная Съёмка</h4>
							<h4>Видео портреты и др.</h4>
						</div>
					</aside>
				</div>
			</div>
		</div>
		<div class="slider-ls-item">
			<div class="slider-ls-row">
				<div class="slider-ls-col left"></div>
				<div class="slider-ls-col right">
					<aside>
						<h3>Фото</h3>
						<p>Фотографируем быстро, качественно, красиво с дальнейшей отличной постобработкой.</p>
					</aside>
					<aside>
						<div class="slider-ls-aside-row">
							<h4>Каталожная съёмка</h4>
							<h4>Лукбуки</h4>
						</div>
						<div class="slider-ls-aside-row">
							<h4>Предметная фотосъёмка</h4>
							<h4>Фотоотчёты</h4>
						</div>
					</aside>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import 'slick-carousel';
	import '../../../node_modules/slick-carousel/slick/slick.css';

	export default {
		name: 'sliderls',
		mounted: function(){
			$('.slider-ls').slick({
				dots: true,
				autoplay: true,
				autoplaySpeed: 3000,
				prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><span><i class="fas fa-caret-left"></i></span></button>',
				nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><span><i class="fas fa-caret-right"></i></span></button>'
			});
		}
	};
</script>