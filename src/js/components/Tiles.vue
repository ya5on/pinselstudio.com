<template>
	<div :class="['tiles', isShifted]">
		<div class="tiles-row">
			<div class="tiles-column one-big" @click="routeTo('zakarpatsky')">
				<div class="tiles-overlay"></div>	
				<div class="tiles-heading">
					<h3>Закарпатский & КО</h3>
					<h4>Интернет магазин</h4>
				</div>
			</div>
			<div class="tiles-column two-big">
				<div class="tiles-row one-small">
					<div class="tiles-column one-small" @click="routeTo('perlina')">
						<div class="tiles-overlay"></div>	
						<div class="tiles-heading">
							<h3>Перлина поділля</h3>
							<h4>Корпоративный сайт</h4>
						</div>
					</div>
					<div class="tiles-column two-small" @click="routeTo('dr-grape')">
						<div class="tiles-overlay"></div>	
						<div class="tiles-heading">
							<h3>DR. Grape</h3>
							<h4>Брендинг | Упаковка</h4>
						</div>
					</div>
				</div>
				<div class="tiles-row two-small">
					<div class="tiles-column three-small" @click="routeTo('pinsel')"> 
						<div class="tiles-overlay"></div>	
						<div class="tiles-heading">
							<h3>Pinsel Studio</h3>
							<h4>Сайт нашей студии</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'tiles',
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
	},
	methods: {
		routeTo: function(to){
			this.$emit('routeTo', '/example/' + to);
		}
	}
};
</script>