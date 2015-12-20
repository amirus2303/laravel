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