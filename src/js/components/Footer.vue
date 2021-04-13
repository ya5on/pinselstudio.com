<template>
	<footer class="footer">
		<div class="footer-row">
			<div class="footer-logos">
				<div class="light-shadow-logo"></div>
				<div class="pinsel-logo"></div>
			</div>
			<div class="footer-socials">
				<a href="#" class="link" @click.prevent="cpr">
					<i class="fab fa-twitter"></i>
				</a>
				<a href="#" class="link" @click.prevent="cpr">
					<i class="fab fa-facebook-f"></i>
				</a>
				<a href="https://www.instagram.com/pinsel.studio/" class="link" target="_blank">
					<i class="fab fa-instagram"></i>
				</a>
			</div>
		</div>
		<div class="footer-row">
			<p><i class="far fa-copyright"></i><span class="year">{{ year }}</span> Pinsel<br>All rights reserved</p>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'footer-block',
		data: function(){
			return {
				date: new Date()
			};
		},
		methods: {
			cpr: function(){
				
			}
		},
		computed: {
			year: function(){
				return this.date.getFullYear();
			}
		}
	};
</script>