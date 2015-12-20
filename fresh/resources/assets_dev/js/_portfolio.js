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
