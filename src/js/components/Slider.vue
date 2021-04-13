<template>
	<div class="slider">
		<div class="slider-item">
			<aside>
				<h3>Разработка сайтов</h3>
				<p>Хорошие сайты решают множество бизнес задач. Именно поэтому, сайт созданный нами поможет конвертировать Вам посетителей в клиентов, повысить узнаваемость бренда, закрепить свой имидж в интернете. </p>
			</aside>
			<aside>
				<h3>Мы разрабатываем</h3>
				<div class="slider-aside-row">
					<h4>Интернет магазин</h4>
					<h4>Сайт визитка</h4>
				</div>
				<div class="slider-aside-row">
					<h4>Landing page</h4>
					<h4>Корпоративный сайт</h4>
				</div>
			</aside>
		</div>
		<div class="slider-item">
			<aside>
				<h3>Дизайн работы</h3>
				<p>Дизайн – важность, что лежит между Вами и потенциальным клиентом. Разрабатываем только уникальные дизайн проекты и не работаем по шаблонам. Всегда стремимся создать что-то новое или же переосмыслить что-то давно забытое.</p>
			</aside>
			<aside>
				<h3>Мы разрабатываем</h3>
				<div class="slider-aside-row">
					<h4>Фирменный стиль</h4>
					<h4>Упаковка</h4>
				</div>
				<div class="slider-aside-row">
					<h4>Логотипы | Эмблемы и тд.</h4>
					<h4>Другое</h4>
				</div>
			</aside>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import 'slick-carousel';
	import '../../../node_modules/slick-carousel/slick/slick.css';

	export default {
		name: 'slider',
		mounted: function(){
			$('.slider').slick({
				dots: true,
				autoplay: true,
				autoplaySpeed: 3000,
				prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><span><i class="fas fa-caret-left"></i></span></button>',
				nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><span><i class="fas fa-caret-right"></i></span></button>'
			});
		}
	};
</script>