// To make toggle menu disapear after clicking. Copied from github, written by user: kevinnelson.
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});