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

