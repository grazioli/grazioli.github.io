/*	Copyright AG Intersys, 2014
	Author: Alessandro Grazioli
*/

var bodyWidth = $(window).width(),
	bodyHeight = $(window).height(),
	ratioWidth,
	ratioHeight,
	ratioImageWidthHeight,
	ratioImageHeightWidth,
	currentWindowWidth,
	currentWindowHeight,
	maxHorizontalScrollOffsetForFirstBlock,
	animatingBar = false,
	barAnimationDuration = 200,
	barAnimationDurationSmallMovement = 130,
	alpha = false; /* NavBar opacity indicator (true means the bar is not opaque, false means its opacity is 1) */

/* Method to change the background color of the menu bar (requires jquery.animate-colors.js plugin) */
function togglenavbarBg() {
	
	animatingBar = true;
	
	if(alpha) {
		
		$('#navbarContainer').animate({ 'background-color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration, function() {
			
			/* Adding the shadow under the bar */
			$('#navbarContainer').addClass('navbar-shadow');
			
			$('.si-icon').animate({'left': '12px'}, barAnimationDuration);
			$('#menuButtonBg').animate({'left': '0px'}, barAnimationDuration);
			
			animatingBar = false;
		});
		
		/* Hiding the bottom border of the bar */
		// $('#navbar-border-bottom').animate({'opacity': '0'}, barAnimationDuration);
		
		$('#smallLogoBlack').animate({ 'opacity': '1' }, 0);
		$('#homeFont').animate({ 'color': 'rgba(0, 0, 0, 1)' }, barAnimationDuration);
		$('#researchFont').animate({ 'color': 'rgba(0, 0, 0, 1)' }, barAnimationDuration);
		$('#publicationsFont').animate({ 'color': 'rgba(0, 0, 0, 1)' }, barAnimationDuration);
		$('#miscFont').animate({ 'color': 'rgba(0, 0, 0, 1)' }, barAnimationDuration);
		$('#contactFont').animate({ 'color': 'rgba(0, 0, 0, 1)' }, barAnimationDuration);
	}
	else {
		
		/* Removing the shadow under the bar */
		$('#navbarContainer').removeClass('navbar-shadow');
		
		if($('#sideMenu').css('left') == '0px') {
			$('.si-icon').trigger('click');
			$('.si-icon').animate({'left': '-60px'}, barAnimationDuration);
			$('#menuButtonBg').animate({'left': '-350px'}, barAnimationDuration);
			$('#navbarContainer').animate({ 'background-color': 'rgba(255, 255, 255, 0)' }, barAnimationDuration, function() {
				animatingBar = false;	
			});
		} else {
		
			/* $('.si-icon').trigger('click'); */
			
			$('.si-icon').animate({'left': '-60px'}, barAnimationDuration);
			$('#sideMenu').animate({'left': '-350px'}, barAnimationDuration);
			$('#menuButtonBg').animate({'left': '-60px'}, barAnimationDuration,function(){
				$('#navbarContainer').animate({ 'background-color': 'rgba(255, 255, 255, 0)' }, barAnimationDuration, function(){
					animatingBar = false;	
				});
			});
		}
						
		/* Showing the bottom border of the bar */
		// $('#navbar-border-bottom').animate({'opacity': '1'}, barAnimationDuration);
		
		// $('.navbar-brand').animate({ 'color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration);
		$('#smallLogoBlack').delay(barAnimationDuration).animate({ 'opacity': '0' }, 0);
		$('#homeFont').animate({ 'color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration);
		$('#researchFont').animate({ 'color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration);
		$('#publicationsFont').animate({ 'color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration);
		$('#miscFont').animate({ 'color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration);
		$('#contactFont').animate({ 'color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration);
	}
	alpha = !alpha;
}

function body_sizer() {
	
	bodyWidth = $(window).width();
	bodyHeight = $(window).height();
	
	$(".imageClass").css("width", $(".imageContainer").css("width"));
	$(".imageClass").css("height", 'auto');
	$(".mask").css("height", $(".imageClass").css("height"));
	$(".mask").css("width", $(".imageClass").css("width"));
	
	/* Center text with max-width set in the big image background blocks */
	$('.centerText').css("margin-left", (bodyWidth - $('.centerText').css("max-width").replace("px", "")) / 2);
	
	if(bodyWidth < 768) {
		$("#leftContainer").css('border-right', 'none');
	} else {
		$("#leftContainer").css('border-right', '1px solid #F00');
	}
	
	$("#backgroundOverlay").css("width", bodyWidth);
	$("#backgroundOverlay").css("height", bodyHeight);
	
	$(".white").css("width", bodyWidth);
	
	// $("#firstWhite").css("margin-top", bodyHeight);
	
	$("#fourthWhite").css("height", bodyHeight * 40 / 100);
	$("#fifthWhite").css("height", bodyHeight * 40 / 100);
	// $("#sixthWhite").css("height", bodyHeight * 60 / 100);
	
	$("#circle").css("width", Math.floor($("#fourthWhite").css("height") * 70 / 100));
	$("#circle").css("height", Math.floor($("#fourthWhite").css("height") * 70 / 100));
	$("#circle").css("left", ((parseInt($("#fourthWhite").css("width")) / 2) - (parseInt($("#circle").css("width")) / 2)));
	$("#circle").css("top", ((parseInt($("#fourthWhite").css("height"))) - (parseInt($("#circle").css("height")) / 2)) );
	
	$('#orangeContent2').css("top", $('#bio').height());
	
	maxHorizontalScrollOffsetForFirstBlock = $('#onTopOfFooter').height() + $('#onTopOfFooterOverlay').height() + $('#orangeContent2').height();
	
	$('#bio').css("width", bodyWidth);
		
	/* ******************** Arrow down positioning ******************** */
	
	$(".arrow-down-background-div").css("top", (bodyHeight - ($(".arrow-down-background-div").height())));
	
	$(".arrowDownContainer").css("left", ((bodyWidth / 2) - ($(".arrowDownContainer").width() / 2)));
	$(".arrowDownContainer").css("top", (bodyHeight - ($(".arrowDownContainer").height() + 20)));
	
	$(".button2-container").css("left", (($("#circle2").width() / 2) - ($(".button2-container").width() / 2)));
	$(".button2-container").css("top", (($("#circle2").height() / 2) - ($(".button2-container").height() / 2)));
	$("#button2").css("left", ($("#circle2").width() / 2) - ($("#button2").width() / 2) + 1);
	$("#button2").css("top", ($("#circle2").height() / 2) - ($("#button2").height() / 2) + 1);
	
	$(".scrollDown").css("left", ((bodyWidth / 2) - ($(".scrollDown").width() /2)));
	$(".scrollDown").css("top", (bodyHeight - ($(".scrollDown").height()) - $(".arrowDownContainer").height() / 2) - 10);
	
	$(".arrowDownPng").css("left", (($(".arrowDownContainer").width() / 2) - ($(".arrowDownPng").width() / 2)));
	$(".arrowDownPng").css("top", (($(".arrowDownContainer").height() / 2) - ($(".arrowDownPng").height() / 2)));
	
	$(".mouseSvg").css("left", (($(".arrowDownContainer").width() / 2) - ($(".mouseSvg").width() / 2)));
	$(".mouseSvg").css("top", (($(".arrowDownContainer").height() / 2) - ($(".mouseSvg").height() / 2)) - 105);
	
	/* ******************** End of arrow down positioning ******************** */
	
	/* ******************** Arrow up positioning ******************** */
	
	$(".arrowUp").css("left", ((bodyWidth / 2) - ($(".arrowUpContainerWhite").width() /2)));
	// $(".arrowUp").css("bottom", (bodyHeight - ($(".arrowUpContainerWhite").height() + 20)));
	
	$(".arrowUp").css("top", ($('#sixthWhite').height() - ($(".arrowUpContainerWhite").height())));
	
	// $(".arrowUp").css("bottom", ($(".footer").height() + 40));
	
	$(".scrollUp").css("left", ((bodyWidth / 2) - ($(".scrollUp").width() /2) - 18));
	$// (".scrollUp").css("bottom", ($(".footer").height() + ($(".arrowUp").height() / 2) + 33));
	
	$(".scrollUp").css("top", ($('#sixthWhite').height() - ($(".arrowUpContainerWhite").height()) + 13));
	
	$(".arrowUpPng").css("left", (($(".arrowUpContainerWhite").width() / 2) - ($(".arrowUpPng").width() /2)));
	$(".arrowUpPng").css("top", (($(".arrowUpContainerWhite").height() / 2) - ($(".arrowUpPng").height() / 2) - 2));
	
	$(".mouseUpSvg").css("left", (($(".arrowUpContainerWhite").width() / 2) - ($(".mouseUpSvg").width() / 2)));
	$(".mouseUpSvg").css("top", (($(".arrowUpContainerWhite").height() / 2) - ($(".mouseUpSvg").height() / 2)) + 105);
	
	/* ******************** End of arrow up positioning ******************** */
	
	/* ********* Set background image size ********* */
	adaptImage($('#bioImageBackground'));
	/* ******************************************** */
	
	if($('#sideMenu').height() <  bodyHeight) {
		$('#sideMenu').css('height', bodyHeight);
	}
	$('#sideMenu').css('top', '0px');
	$('#sideMenu').css('padding-top', $('.navbar').height() + 10 + 'px');
	
	currentWindowHeight = bodyHeight;
	currentWindowWidth = bodyWidth;
}

/* ********* Method to set background image size ********* */
var adaptImage = function(imageElement) {
	var imgWidth = imageElement.width(),
		imgHeight = imageElement.height(),
		imgRatio = imgWidth / imgHeight;
		
	if(bodyWidth <= imgWidth) {
		if(bodyHeight > imgHeight) {
			imageElement.css({
				'height' : '100%',
				'width' : 'auto'
			});
		}
	} else {
		if(bodyHeight < imgHeight) {
			imageElement.css({
				'width' : 'auto',
				'height' : $(window).height() + 'px'
			});
		} else {
			imageElement.css({
				'width' : $(window).width() + 'px',
				'height' : $(window).width() / imgRatio + 'px'
			});
		}
	}
	
	imageElement.css({
		'left' : (($(window).width() - imageElement.width()) / 2) + 'px'
	});
}

var showMenu = function() {
	
	var amountToSlide = '350px';
	
	if($('#sideMenu').css('left') == '0px') {
		$('#sideMenu').animate({
				left: '-' + amountToSlide
			}, barAnimationDuration, function(){ });
		
	} else {
		$('#sideMenu').animate({
				left: '0px'
			}, barAnimationDuration, function(){
			
				$('#sideMenu').animate({
					left: '-10px'
				}, barAnimationDurationSmallMovement, function(){
					
					$('#sideMenu').animate({
						left: '0px'
					}, barAnimationDurationSmallMovement, function(){ });
				
				});	
			});
	}
}

<!--END OF WINDOW RESIZE MANAGEMENT FOR THE 2 ASIDE DIVS -->
		
/* Function to scroll to a certain point of the page marked by 'data-slide' attribute */
function goToByScroll(dataslide) {
	htmlbody.animate({
		scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
		}, 720, function(){ });
}

$(".arrowDown").click(function (e) {
	e.preventDefault();
	dataslide = $(this).attr('data-slide');
	goToByScroll(dataslide);
});
$("#button2").click(function (e) {
	e.preventDefault();
	dataslide = $(this).attr('data-slide');
	goToByScroll(dataslide);
});

$(".arrowUp").click(function (e) {
	e.preventDefault();
	dataslide = $(this).attr('data-slide');
	goToByScroll(dataslide);
});
		
var fifthCurrentlyDisplayed = false;
var sixthCurrentlyDisplayed = false;

var topResearch2Reached = false;

function seTtopResearch2Reached(value) {
	topResearch2Reached = value;
};

<!-- FUNCTION CALLED WHEN PAGE IS LOADED -->

/* Taking the browser back to initial position when page is reloaded */
window.onload = function() {
	setTimeout (function () {
		scrollTo(0,0);
	}, 0);
}

jQuery(document).ready(function ($) {
	
	$("body").queryLoader2();
	
	/* Activating links for permitted elements opening a new tab */
	$(".linksClass").click(function() {
		window.open($(this).attr("href"));
		return false;
	});
	
	/* Activating links for permitted elements opening in the same tab */
	$(".linksClassSameTab").click(function() {
		window.open($(this).attr("href"), "_self");
		return false;
	});
	
	/* RESIZING THE ELEMENTS ON THE PAGE WHENEVER THE USER RESIZES THE WINDOW */
	body_sizer(); /* Called when the page is loaded for the 1st time */
	
	/* Each time the user resizes the window, the function to resize is called */
	$(window).resize(body_sizer);
	/* ********************************************************************** */
	
	$('.border-button').hover(function(){
    		$(this).animate({"backgroundColor":"rgb(0, 206, 247)", "color":"white"}, 150);
    	}, function(){
   			$(this).animate({"backgroundColor":"white", "color":"rgb(0, 206, 247)"}, 150);
	}, 600);
	
	$('.border-button-red').hover(function(){
    		$(this).animate({"backgroundColor":"rgb(255, 0, 0)", "color":"white"}, 150);
    	}, function(){
   			$(this).animate({"backgroundColor":"white", "color":"rgb(255, 0, 0)"}, 150);
	}, 600);
	
	//Cache some variables
	var links = $('.navigation').find('li');
	slide = $('.slide');
	button = $('.button');
	buttonUp = $('.buttonUp');
	buttonRight = $('.buttonRight');
	buttonLeft = $('.buttonLeft');
	mywindow = $(window);
	htmlbody = $('html,body');
	//Setup waypoints plugin
	slide.waypoint(function (event, direction) {
		//cache the variable of the data-slide attribute associated with each slide
		dataslide = $(this).attr('data-slide');
		//If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
		//remove the active class from the previous navigation link
		if (direction === 'down') {
			$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
		}
		// else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
		//remove the active class from the next navigation link
		else {
			$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
		}
	});
	
});


<!-- COOKIE MANAGEMENT -->

	function getCookie(name) {

		var search = name + "=";
	
		if (document.cookie.length > 0) { // if there are cookies
	
			offset = document.cookie.indexOf(search);
	
			// if cookie exists
			if (offset != -1) { 
	
				offset += search.length; 
	
				// set index of beginning of value
				end = document.cookie.indexOf(";", offset); 
	
				// set index of end of cookie value
				if (end == -1) 
	
					end = document.cookie.length;
	
					return unescape(document.cookie.substring(offset, end));
			} 
		}
	}
	
	function setCookie(NameOfCookie, value, expiredays) {
		var ExpireDate = new Date();
		ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
	
		document.cookie = NameOfCookie + "=language:" + escape(value) + ";path=/;" +  
		((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
	}
					
	/* DE-COMMENT THIS  TO START CREATING COOKIES
	
	var cookieContent = getCookie("bazini"); 
	if (cookieContent == null) {		
						
		setCookie('bazini','italian', '1');
						
	}
					
	else {					
								
		// Get the parameters of the cookie
		var the_values = cookieContent;
						
		// the_values contains the string"uid:" followed by the uid value used to authenticate the session of the user					
		var broken_language = the_values.split(":");
		var language = broken_language[1];
		
		if(language == "english") engLang();		
	
	} */
	
<!-- END OF COOKIE MANAGEMENT -->

var showPersonalPhotoOverlay = function() {
	// $('.personalPhotoWhite').animate({opacity: 1}, 100);
	$('#personalPhotoOverlay').animate({top: '0'}, 300);
}

var hidePersonalPhotoOverlay = function() {
	// $('.personalPhotoWhite').animate({opacity: 0}, 100);
	$('#personalPhotoOverlay').animate({top: $('#personalPhotoOverlay').height()}, 300);
}

/* Variable used to check if the user is scrolling up or down */
var lastScrollTop = 0;

$(window).scroll(function(e){
	
	var top = $(this).scrollTop();
	
	/* Animating the bar opacity */
	
	if(top > lastScrollTop && top > $('.navbar').height() && !animatingBar) {
		
		// Scrolling down
		
		if($('#navbarContainer').css('background-color') != 'rgba(255, 255, 255, 1)' && $('#navbarContainer').css('background-color') != 'rgb(255, 255, 255)') {
			togglenavbarBg();
		}
		
	} else if(top < lastScrollTop && top <= $('.navbar').height() && !animatingBar) {
		
		// Scrolling up
		
		if($('#navbarContainer').css('background-color') == 'rgba(255, 255, 255, 1)' || $('#navbarContainer').css('background-color') == 'rgb(255, 255, 255)') {
			togglenavbarBg();
		}
	}
	
	lastScrollTop = top;
});

/* When the navbar is collapsed, the words must be black since the menu background is white */
var blackWords = function() {
	if($('#homeFont').css('color') == 'rgb(255, 255, 255)') {
		$('#homeFont').css('color', 'rgba(0, 0, 0, 1)');
	}
	if($('#bioFont').css('color') == 'rgb(255, 255, 255)') {
		$('#bioFont').css('color', 'rgba(0, 0, 0, 1)');
	}
	if($('#researchFont').css('color') == 'rgb(255, 255, 255)') {
		$('#researchFont').css('color', 'rgba(0, 0, 0, 1)');
	}
	if($('#publicationsFont').css('color') == 'rgb(255, 255, 255)') {
		$('#publicationsFont').css('color', 'rgba(0, 0, 0, 1)');
	}
	if($('#miscFont').css('color') == 'rgb(255, 255, 255)') {
		$('#miscFont').css('color', 'rgba(0, 0, 0, 1)');
	}
	if($('#contactFont').css('color') == 'rgb(255, 255, 255)') {
		$('#contactFont').css('color', 'rgba(0, 0, 0, 1)');
	}
}

/* Prevent sliding on touch screens by using jquery.touchSwipe.min.js plugin */
$(function() {
	$('body').swipe({allowPageScroll:"vertical"});
});