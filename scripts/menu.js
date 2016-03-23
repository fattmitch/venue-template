$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});     
    
    $('.menu-button').click(function(event) {
        $('.menu').toggleClass('show');
    });
    
    $('.menu ul li a').click(function(event) {
        $('.menu ul li a').removeClass();
        $(this).addClass('active');
    });
});