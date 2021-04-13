<template>
	<div id="example">
		<div v-if="drGrape" id="dr-grape-longrid">
			<navbar></navbar>
			<section class="top">
				<div class="left"></div>
				<div class="right"></div>
				<div class="logo"></div>
			</section>
			<section class="logo-text">
				<div class="left">
					<p>Техническое задание предполагало создание фирменного стиля (Логотип, Эмблема, Фирменные цвета) Виноградного концентрата и дальнейшее оформление упаковки для продукта.</p>
				</div>
				<div class="center"></div>
				<div class="right">
					<p>Было представлено 4 варианта эмблемы. Клиент выбрал вариацию с изображением Винограда. Работа выполнена с упором на минимализм и контурное изображение самого рисунка.</p>
				</div>
			</section>
			<section class="circles-with-bottles">
				<div class="circles">
					<div class="circle"></div>
					<div class="circle"></div>
				</div>
				<div class="text-after-circles">
					<h2>Фирменные цвета были выбраны в пользу цвета самой жидкости и его сочетания с белым.</h2>
				</div>
				<div class="bottle-with-text">
					<div class="bottle-left"></div>
					<div class="text-right">
						<h2>Упаковка продукта выполнена в новом виде, который не присущий для Украинского рынка, но будет интересен и запоминающимся для конечного потребителя.</h2>
					</div>
				</div>
			</section>
			<section class="right-bottle-with-text">
				<div class="text-left">
					<h2>На самой бутылке использовано оформление в виде наклеек, с надписью белым цветом. При наполнении бутылки - надпись бросается в глаза.</h2>
				</div>
				<div class="bottle-right"></div>
			</section>
			<section class="bottom">
				<div class="bottle-left"></div>
				<div class="text-right">
					<h2>Презентационная картинка конечного продукта. С расположением упаковки и бутылки на одном рисунке.</h2>
				</div>
			</section>
			<footer-block></footer-block>
		</div>
		<div v-if="perlina" id="perlina-longrid">
			<navbar></navbar>
			<h2 class="perlina-title">Перлина поділля</h2>
			<div class="perlina-top"></div>
			<div class="perlina-text">
				<h2>Внешний вид</h2>
				<p>Внешний вид сайта выполнен в зелёных цветах, с использованием изогнутых линий. Это собирательный образ растительности, листьев, ростков, сельскохозяйственных культур.</p>
			</div>
			<div class="perlina-maps">
				<div class="map-left"></div>
				<div class="equals"></div>
				<div class="map-right"></div>
			</div>
			<div class="perlina-text">
				<h2>Фирменный элементы</h2>
				<p>Одной из главных особенностей сайта является отождествление карты региона, где находится предприятие, с выбранным фирменным стилем и дальнейшее помещение карты на главную страницу.</p>
			</div>
			<div class="perlina-categories"></div>
			<div class="perlina-news"></div>
			<div class="perlina-text">
				<h2>Концепция других блоков</h2>
				<p>Мы использовали все те же элементы фирменного стиля в других блоках с их максимально удобным функционалом.</p>
			</div>
			<div class="perlina-logos">
				<div class="logo-left"></div>
				<div class="logo-right"></div>
			</div>
			<footer-block></footer-block>
		</div>
		<div v-if="pinsel" id="pinsel-longrid">
			<navbar></navbar>
			<div class="pinsel-top">
				<div class="pinsel-logo"></div>
				<div class="pinsel-text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Suspendisse pharetra orci id sapien consequat, iaculis cursus leo cursus.
					Etiam efficitur vel lorem nec pulvinar. Integer in nibh varius, iaculis lectus in, convallis tellus.
					Morbi non tincidunt velit. Etiam eu dolor lorem. Nam facilisis, urna quis pellentesque malesuada,
					justo tortor pellentesque lorem, eget ullamcorper velit ligula pharetra lorem. Nullam neque libero,
					blandit sed quam id, porta porta orci. Integer pretium blandit metus eu sodales.
					Sed condimentum libero tortor, vel venenatis mi hendrerit ac.
					Proin euismod libero eget leo posuere fringilla.</p>
				</div>
			</div>
			<div class="pinsel-text-with-girl">
				<div class="girl">
					<h2>Lorem ipsum</h2>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse pharetra orci id sapien consequat.
				Etiam efficitur vel lorem nec pulvinar. Integer
				in nibh varius,iaculis lectus in, convallis tellus.
				Morbi non tincidunt velit. Etiam eu dolor lorem.
				Nam facilisis, urna quis pellentesque malesuada,
				justo tortor pellentesque lorem, eget ullamcorper
				velit ligula pharetra lorem. Nullam neque libero,
				blandit sed quam id, porta porta orci. Integer
				pretium blandit metus eu sodales.
				Sed condimentum libero tortor,
				vel venenatis mi hendrerit ac.
				Proin euismod libero eget
				leo posuere fringilla.</p>
			</div>
			<div class="pinsel-text-with-spot">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse pharetra orci id sapien consequat.
				Etiam efficitur vel lorem nec pulvinar. Integer
				in nibh varius,iaculis lectus in, convallis tellus.
				Morbi non tincidunt velit. Etiam eu dolor lorem.
				Nam facilisis, urna quis pellentesque malesuada,
				justo tortor pellentesque lorem, eget ullamcorper
				velit ligula pharetra lorem. Nullam neque libero,
				blandit sed quam id, porta porta orci. Integer
				pretium blandit metus eu sodales.
				Sed condimentum libero tortor,
				vel venenatis mi hendrerit ac.
				Proin euismod libero eget
				leo posuere fringilla.</p>
				<div class="spot">
					<h2>Lorem ipsum</h2>
				</div>
			</div>
			<div class="portfolio">
				<h3>Портфолио</h3>
			</div>
			<div class="pinsel-text-area">
				<div class="heading">
					<h2>Lorem ipsum</h2>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse pharetra orci id sapien consequat.
				Etiam efficitur vel lorem nec pulvinar. Integer
				in nibh varius,iaculis lectus in, convallis tellus.
				Morbi non tincidunt velit. Etiam eu dolor lorem.
				Nam facilisis, urna quis pellentesque malesuada,
				justo tortor pellentesque lorem, eget ullamcorper
				velit ligula pharetra lorem. Nullam neque libero,
				blandit sed quam id, porta porta orci. Integer
				pretium blandit metus eu sodales.
				Sed condimentum libero tortor,
				vel venenatis mi hendrerit ac.
				Proin euismod libero eget
				leo posuere fringilla.</p>
			</div>
			<div class="pinsel-text-with-slider">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse pharetra orci id sapien consequat.
				Etiam efficitur vel lorem nec pulvinar. Integer
				in nibh varius,iaculis lectus in, convallis tellus.
				Morbi non tincidunt velit. Etiam eu dolor lorem.
				Nam facilisis, urna quis pellentesque malesuada,
				justo tortor pellentesque lorem, eget ullamcorper
				velit ligula pharetra lorem. Nullam neque libero,
				blandit sed quam id, porta porta orci. Integer
				pretium blandit metus eu sodales.
				Sed condimentum libero tortor,
				vel venenatis mi hendrerit ac.
				Proin euismod libero eget
				leo posuere fringilla.</p>
				<div class="slider-image"></div>
			</div>
			<footer-block></footer-block>
		</div>
		<div v-if="zakarpatsky" id="zakarpatsky-longrid">
			<navbar></navbar>
			<div class="zk-top">
				<div class="venz"></div>
				<div class="mockup"></div>
				<div class="text">
					<h2>Техническое задание</h2>
					<p>Сделать красивый и необычно оформленный интернет магазин для продажи фирменной Алкогольной продукции, с упором на удобство работы клиента с сайтом.</p>
				</div>
				<div class="venz"></div>
			</div>
			<div class="zk-second">
				<div class="tile"></div>
			</div>
			<div class="zk-third">
				<div class="tile"></div>
			</div>
			<div class="zk-fourth">
				<div class="tile"></div>
			</div>
			<div class="zk-fifth">
				<div class="tile"></div>
			</div>
			<footer-block></footer-block>
		</div>
	</div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import FooterBlock from '../components/Footer.vue';
import $ from 'jquery';

	export default {
		name: 'example',
		data: function(){
			return {
				examples: [
					'dr-grape',
					'perlina',
					'pinsel',
					'zakarpatsky'
				],
				titles: [
					'Dr. Grape | Pinsel Studio - брендинг / упаковка',
					'Перлина поділля | Pinsel Studio - корпоративный сайт',
					'Pinsel Studio - разработка веб-сайтов',
					'Закарпатский | Pinsel Studio - интернет магазин'
				],
				drGrape: false,
				perlina: false,
				pinsel: false,
				zakarpatsky: false
			};
		},
		components: {
			Navbar,
			FooterBlock
		},
		mounted: function(){
			$(window).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');
			var id = this.$route.params.id;
			var index = this.examples.indexOf(this.$route.params.id);
			if(index == -1){
				this.$emit('redirect404');
			} else {
				document.title = this.titles[index];
				var bdy = document.getElementById('bdy');
				if(id == 'dr-grape'){
					this.drGrape = true;
        	bdy.className = "dr-grape-body";
				}
				if(id == 'perlina'){
					this.perlina = true;
					bdy.className = "perlina-body";
				}
				if(id == 'pinsel'){
					this.pinsel = true;
					bdy.className = "pinsel-body";
				}
				if(id == 'zakarpatsky'){
					this.zakarpatsky = true;
					bdy.className = "zakarpatsky-body";
				}
			}
		}
	};
</script>