let active = 'home';

/* Page buttons */
$('.nav-link').on('click', function() {

    /* Set page to show */
    let page = $(this).attr('data-page');

    if(page == active) return;

    /* Remove active class from all buttons */
    $('.nav-link').removeClass('active');

    /* Add active class to actual button */
    $(this).addClass('active');
    
    /* Hide old page and show new page */
    $('#'+active).fadeOut(100).fadeOut(500, function() {
        $('#'+page).fadeIn(500);
    });

    /* Set new page to active */
    active = page;

});