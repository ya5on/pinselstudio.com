function changeViewport(){
	var mvp = document.getElementById('viewport');
  if(window.innerWidth < 991){
    mvp.setAttribute('content','width=991, shrink-to-fit=no');
  } else {
    mvp.setAttribute('content','width=device-width, initial-scale=1, shrink-to-fit=no');
  }
}

window.onload = function(){
	changeViewport();
	var preloader = document.getElementById('preloader');
  if( !preloader.classList.contains('done') ){
  	setTimeout(function(){
			preloader.classList.add('done');
		}, 500);
		setTimeout(function(){
			preloader.classList.add('hide');
		}, 1000);		
  }
};

/* LOOOOOL */

document.onkeyup = function(e){
	var evtobj = window.event ? event : e;
  if(evtobj.keyCode == 8 && evtobj.ctrlKey && evtobj.shiftKey){
  	var lol = document.getElementById('lol');
  	if(lol === null){
  		var content = document.getElementById('content');
	  	var audio = document.createElement('audio');
	  	audio.setAttribute('src', 'dist/js/lol.mp3');
	  	audio.setAttribute('id', 'lol');
	  	audio.setAttribute('hidden', 'true');
	  	audio.setAttribute('autoplay', 'true');
	  	audio.volume = 0.5;
	  	audio.style.display = 'none';
	  	content.appendChild(audio);
  	}  	
  }
};

import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

import App from './views/App.vue';
import Home from './views/Home.vue';
import Pinsel from './views/Pinsel.vue';
import LightShadow from './views/LightShadow.vue';
import Example from './views/Example.vue';
import Error404 from './views/Error404.vue';
import swal from 'sweetalert';
import axios from 'axios';

import '../../node_modules/nprogress/nprogress.css';

Vue.use(VueRouter);

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home,
		meta: {
			title: 'Pinsel Studio | Light & Shadow - разработка сайтов и дизайнов, создание видеороликов, фотографий'
		}
	},
	{
		name: 'Pinsel',
		path: '/pinsel',
		component: Pinsel,
		meta: {
			title: 'Pinsel Studio - разработка сайтов и дизайнов'
		}
	},
	{
		name: 'Light&Shadow',
		path: '/light-and-shadow',
		component: LightShadow,
		meta: {
			title: 'Light & Shadow Production - создание видеороликов, фотографий'
		}
	},
	{
		path: '/example',
		redirect: '/example/pinsel'
	},
	{
		name: 'Examples',
		path: '/example/:id',
		component: Example,
		meta: {
			title: 'Pinsel Studio | Light & Shadow - разработка сайтов и дизайнов, создание видеороликов, фотографий'
		}
	},
	{
		name: 'Error404',
		path: '/404',
		component: Error404,
		meta: {
			title: 'Ошибка 404'
		}
	},
	{
		path: '*',
		redirect: '/404'
	},
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start();
  }
  next();
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
  axios.get('/log.php?uri=' + to.path);
});

new Vue({
  render: h => h(App),
  router
}).$mount('#content');