$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 240) {
        $('#sidebar').addClass('navbar-default');
        $('#sidebar').addClass('navbar-fixed-top');
    } else {
    	$('#sidebar').removeClass('navbar-default');
        $('#sidebar').removeClass('navbar-fixed-top');
    }
});