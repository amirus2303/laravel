
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

$(document).ready(function(){

    $circleProgressBar('0.8','.circle.js-circle_80');
    $circleProgressBar('0.75','.circle.js-circle_75');
    $circleProgressBar('0.6','.circle.js-circle_60');
        

});

//la fonction du plugin
var $circleProgressBar = function(value, selector){
    var $offsetCircle = $('.circle').offset().top;// On recupere l'offset des circle pour lancer l'anime qd le scroll arrive chez eux

    //on ajoute la class stop_counting apres le 1er passage du scroll pour eviter la repetion de l'animation à chque passage
    $(window).scroll(function(){
        if( ($(this).scrollTop() >= ($offsetCircle-1000)) && (!$('.js-circle_'+(value*100)).hasClass('stop_counting'))){
            $(selector).circleProgress({
                value: value,
                size: 125,
                fill: {
                    color: "#19bd9a",
                }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('strong').text(parseInt(stepValue*100) + ' %');
            });
            $('.js-circle_'+(value*100)).addClass('stop_counting');
        }
    });
};  
$( document ).ready( function() {
    //Annuler le click sur les liens
    $('.filter_portfolio a').click(function(e){
        e.preventDefault();
    }); 

    //Masonry
    var $container = $('.grid').isotope({
        itemSelector: '.grid-item', 
        masonry: {
            columnWidth: '.grid-item'
        }
    });

    // filter function
    $('.filter_portfolio').on( 'click', 'li', function() {
        var filterValue = $( this ).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
});

$(document).ready(function(){
    $progressBar('80');
    $progressBar('65');
    $progressBar('75');

});

var $progressBar  = function($pourcentage){
        //Gestion de l'affichage de la progress bar 
        var $progressBarWidth = $('.js-progress_bar').width();
        var $greenProgressBarWidth = $progressBarWidth * ('0.'+ $pourcentage);
        $('.js-green_progress_bar_'+$pourcentage).width($greenProgressBarWidth);


        //Gestion de l'affiche du text %
        //Simuler l'animation de la barre avec animate au lieu de wow js pour obtenir 
        //la valeur p qui correspon au pourcentage d'avancement de l'animation pour l'afficher 
        
        var $offsetBar = $('.js-wrapper_homme').offset().top;// On recupere l'offset des circle pour lancer l'anime qd le scroll arrive chez eux
        $(window).scroll(function(){

            //Pour éviter le recomptage du pourcentage on ajoute une class stop counting apres le 1er affichage
            if( ($(this).scrollTop() >= ($offsetBar-800)) && (!$('.js-green_progress_bar_'+$pourcentage).hasClass('stop_counting'))){
                $('.js-green_progress_bar_'+$pourcentage).animate({
                        "width": $greenProgressBarWidth
                    },{
                        duration: 1000,
                        progress: function(a, p, c){
                            var percent = ($pourcentage*p).toFixed(0);
                            $('.js-percent_' + $pourcentage).text(percent + "%");
                        }
                });
                $('.js-green_progress_bar_'+$pourcentage).addClass('stop_counting');
            }
        });
        
    };

