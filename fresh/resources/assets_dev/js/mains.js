
$( document ).ready(function() {
    new WOW().init();

    //Gestion du hover sur wokr
    $('.js-work').click(function(){
		$(this).addClass('work-hover').removeClass("work-small");// on elargi la div à 50% et on eneleve l'ancienne taille de 25% si elle existe
		$(this).find('.js-work-content').removeClass('opacity-content'); //on cache le texe en opacité

		$('.js-work').not(this).removeClass('work-hover').addClass("work-small");// on fait le contraire avec les autres boites
		$('.js-work').not(this).find('.js-work-content').addClass('opacity-content');
    });
});
