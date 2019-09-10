$('.tile').click(function (e) { 
    var id = $(this).attr('for'),
	    number = id.split('-').pop(),
	    scrollPx = $(this).offset().top - 80;
    
    (number > 4) ? scrollPx -= $('.column-outer').first().height() : null;
    
    $('html, body').animate({
        scrollTop: scrollPx 
    }, 600);

    id = '#' + id;
    $(id).prop('checked') ? (requestAnimationFrame(function(){ $(id).prop('checked', false) })) : null;
});