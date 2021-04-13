<template>
	<form action="" @submit.prevent="formSubmit" class="feedback-form">
		<div v-if="onSide">
			<div class="feedback-row feedback-side form-row">
				<div class="feedback-col">
					<input :id="'feedback_name_' + makeHash" type="text" :name="'feedback_name_' + makeHash" v-model="feedbackName" required="required" maxlength="50">
					<label class="down" :for="'feedback_name_' + makeHash">Имя</label>
				</div>
			</div>
			<div class="feedback-row feedback-side form-row">
				<div class="feedback-col">
					<input :id="'feedback_theme_' + makeHash" type="text" :name="'feedback_theme_' + makeHash" v-model="feedbackTheme" required="required" maxlength="100">
					<label class="down" :for="'feedback_theme_' + makeHash">Услуга</label>
				</div>
			</div>
			<div class="feedback-row feedback-side form-row">
				<div class="feedback-col">
					<masked-input :id="'feedback_promo_' + makeHash" type="text" :name="'feedback_promo_' + makeHash" v-model="feedbackPromo" mask="*****" />
					<label class="down" :for="'feedback_promo_' + makeHash">Промо-код</label>
				</div>
			</div>
			<div class="feedback-row feedback-side form-row">
				<div class="feedback-col">
					<input :id="'feedback_tel_' + makeHash" type="tel" :name="'feedback_tel_' + makeHash" v-model="feedbackTel" required="required" maxlength="15">
					<label class="down" :for="'feedback_tel_' + makeHash">Номер телефона</label>
				</div>
			</div>
			<div class="feedback-row feedback-side form-row">
				<div class="feedback-col submit-side">
					<waves-button :submit="true" text="Отправить"></waves-button>
				</div>
			</div>
		</div>
		<div v-else>
			<div class="feedback-row form-row">
				<div class="feedback-col name">
					<input :id="'feedback_name_' + makeHash" type="text" :name="'feedback_name_' + makeHash" v-model="feedbackName" required="required" maxlength="50">
					<label class="down" :for="'feedback_name_' + makeHash">Имя</label>
				</div>
				<div class="feedback-col theme">
					<input :id="'feedback_theme_' + makeHash" type="text" :name="'feedback_theme_' + makeHash" v-model="feedbackTheme" required="required" maxlength="100">
					<label class="down" :for="'feedback_theme_' + makeHash">Услуга</label>
				</div>
			</div>
			<div class="feedback-row form-row">
				<div class="feedback-col promo">
					<masked-input :id="'feedback_promo_' + makeHash" type="text" :name="'feedback_promo_' + makeHash" v-model="feedbackPromo" mask="*****" />
					<label class="down" :for="'feedback_promo_' + makeHash">Промо-код</label>
				</div>
				<div class="feedback-col tel">
					<input :id="'feedback_tel_' + makeHash" type="tel" :name="'feedback_tel_' + makeHash" v-model="feedbackTel" required="required" maxlength="15">
					<label class="down" :for="'feedback_tel_' + makeHash">Номер телефона</label>
				</div>
			</div>
			<div class="feedback-row form-row">
				<div class="feedback-col submit">
					<waves-button :submit="true" text="Отправить"></waves-button>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
	import WavesButton from '../components/WavesButton.vue';
	import DOMPurify from 'dompurify';
	import MaskedInput from 'vue-masked-input';
	import swal from 'sweetalert';
	import $ from 'jquery';
	import promos from './promo.js';
	import axios from 'axios';

	export default {
		name: 'feedback-form',
		props: [
			'side'
		],
		components: {
			WavesButton,
			MaskedInput
		},
		data: function(){
			return {
				feedbackName: '',
				feedbackTheme: '',
				feedbackPromo: '',
				feedbackTel: '',
				errs: [],
				token: '677737032:AAGubHitkP7zoIBJhOdqnCl2II7lEM3ZcAM',
				chatId: '386823831'
			};
		},
		mounted: function(){
			$('input').blur(function(){
				var l = $(this).val().replace(/_/g, '');
				if(l == 0){
					$(this).next('label').removeClass('up').addClass('down');
				} else {
					$(this).next('label').removeClass('down').addClass('up');
				}
			});
			$('input').focus(function(){
				$(this).next('label').removeClass('down').addClass('up');
			});
		},
		methods: {
			formSubmit: function(){
				var promo = this.feedbackPromoCleaned;
				var name = this.feedbackNameCleaned;
				var theme = this.feedbackThemeCleaned;
				var tel = this.feedbackTelCleaned;

				if(promo.length > 0 && promo.length < 5){
					this.addError('promo');
				} else {
					this.removeError('promo');
				}

				if(name.length > 0){
					this.removeError('name');
				} else {
					this.addError('name');
				}

				if(theme.length > 0){
					this.removeError('theme');
				} else {
					this.addError('theme');
				}

				if(tel.length > 0){
					this.removeError('tel');
				} else {
					this.addError('tel');
				}

				if(this.checkErrors()){
					
					if(promo.length == 5){
						if(this.searchPromo(promo)){
							var msg =	'<b>Новая заявка от ' + name + '!</b>\n';
								msg +=	'Услуга: ' + theme + '.\n';
								msg +=	'Промокод: ' + promo + '.\n';
								msg +=	'Номер телефона: ' + tel + '.';
							this.sendMsg(msg);
						} else {
							this.showErrorAlert('Промокод не найден');
						}
					} else {
						var msg =		'<b>Новая заявка от ' + name + '!</b>\n';
								msg +=	'Услуга: ' + theme + '.\n';
								msg +=	'Номер телефона: ' + tel + '.';
						this.sendMsg(msg);
					}

				} else {
					var msg = "";
					Array.prototype.forEach.call(this.errs, function(err){
						if(err == 'promo'){
							msg += 'Промокод должен быть длиной 5 символов. ';
						}
						if(err == 'name'){
							msg += 'Поле имя не должно быть пустое. ';
						}
						if(err == 'theme'){
							msg += 'Поле Услуга не должно быть пустое. ';
						}
						if(err == 'tel'){
							msg += 'Поле телефон не должно быть пустое. ';
						}
					});
					this.showErrorAlert(msg);
				}
			},
			sanitize: function(s){
				return DOMPurify.sanitize(s).trim().replace(/\s+/g,' ').replace(/_/g, '');
			},
			checkError: function(err){
				return this.errs.indexOf(err);
			},
			addError: function(err){
				if(this.checkError(err) == -1){
					this.errs.push(err);
				}
			},
			removeError: function(err){
				if(this.checkError(err) != -1){
					this.errs.splice(this.checkError(err), 1);
				}
			},
			checkErrors: function(){
				if(this.errs.length == 0){
					return true;
				} else {
					return false;
				}
			},
			showErrorAlert: function(msg){
				swal("Ошибка", msg, "error");
			},
			showSuccessAlert: function(){
				swal("Успешно!", "Ваша заявка принята и будет рассмотрена в ближайшее время.", "info");
				this.feedbackName = '';
				this.feedbackTheme = '';
				this.feedbackPromo = '';
				this.feedbackTel = '';
			},
			searchPromo: function(promo){
				if(promos.indexOf(promo) != -1){
					return true;
				} else {
					return false;
				}
			},
			sendMsg: function(msg){
				var url = 'https://api.telegram.org/bot' + this.token + '/sendMessage?chat_id=' + this.chatId + '&text=' + encodeURI(msg) + '&parse_mode=html';
				var $this = this;
				
				axios.get(url).then((response) => {
					var ok = response.data.ok;
					if(ok){
						$this.showSuccessAlert();
					} else {
						$this.showErrorAlert('Случилась какая-то ошибка. Подождите немного и повторите еще раз.');
					}
				}).catch((error) => {
					console.log(error);
					$this.showErrorAlert('Случилась какая-то ошибка. Подождите немного и повторите еще раз.');
				});
			}
		},
		computed: {
			makeHash: function(){
				var hash = "";
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
				for(var i = 0; i < 8; i++)
					hash += possible.charAt(Math.floor(Math.random() * possible.length));

				return hash;
			},
			feedbackNameCleaned: function(){
				return this.sanitize(this.feedbackName);
			},
			feedbackThemeCleaned: function(){
				return this.sanitize(this.feedbackTheme);
			},
			feedbackPromoCleaned: function(){
				return this.sanitize(this.feedbackPromo);
			},
			feedbackTelCleaned: function(){
				return this.sanitize(this.feedbackTel);
			},
			onSide: function(){
				if(this.side){
					return true;
				} else {
					return false;
				}
			}
		}
	};
</script>