/*	Copyright AG Intersys, 2014
	Author: Alessandro Grazioli
*/

var bodyWidth = $(window).width(),
	bodyHeight = $(window).height(),
	ratioWidth,
	ratioHeight,
	ratio4Width,
	ratio4Height,
	ratioImageWidthHeight,
	ratioImageHeightWidth,
	ratioImage4WidthHeight,
	ratioImage4HeightWidth,
	currentWindowWidth,
	currentWindowHeight,
	currentBg = "cr",
	alphaRatio = 0.7,
	horizontalScrollStrength = 300,
	maxHorizontalScrollOffsetForFirstBlock,
	animatingBar = false,
	alpha = false, /* NavBar opacity indicator (true means the bar is not opaque, false means its opacity is 1) */
	firstShown = true,
	secondShown = false,
	thirdShown = false,
	fourthShown = false,
	fifthShown = false,
	sixthShown = false,
	barAnimationDuration = 200,
	barAnimationDurationSmallMovement = 130,
	publishedPapers = 8,
    publishedPapersInternationalJournal = 3,
    publishedPapersInternationalConference = 5,
	counterUpdateRate = 100,
	counter = 0;

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
		
		// $('.navbar-brand').animate({ 'color': 'rgba(0, 0, 0, 1)' }, barAnimationDuration);
		$('#smallLogoBlack').animate({ 'opacity': '1' }, 0);
		$('#researchFont').animate({ 'color': 'rgba(0, 0, 0, 1)' }, barAnimationDuration);
		$('#publicationsFont').animate({ 'color': 'rgba(0, 0, 0, 1)' }, barAnimationDuration);
		$('#miscFont').animate({ 'color': 'rgba(0, 0, 0, 1)' }, barAnimationDuration);
		$('#contactFont').animate({ 'color': 'rgba(0, 0, 0, 1)' }, barAnimationDuration);
	}
	else {
		
		/* Removing the shadow under the bar */
		$('#navbarContainer').removeClass('navbar-shadow');
		
        /*
		if($('#sideMenu').css('left') == '0px') {
			$('.si-icon').trigger('click');
			$('.si-icon').animate({'left': '-60px'}, barAnimationDuration);
			$('#menuButtonBg').animate({'left': '-350px'}, barAnimationDuration);*/
			$('#navbarContainer').animate({ 'background-color': 'rgba(255, 255, 255, 0)' }, barAnimationDuration, function() {
				animatingBar = false;	
			});/*
		} else {
		
			$('.si-icon').animate({'left': '-60px'}, barAnimationDuration);
			$('#sideMenu').animate({'left': '-350px'}, barAnimationDuration);
			$('#menuButtonBg').animate({'left': '-60px'}, barAnimationDuration,function(){
				$('#navbarContainer').animate({ 'background-color': 'rgba(255, 255, 255, 0)' }, barAnimationDuration, function(){
					animatingBar = false;	
				});
			});
		}*/
						
		/* Showing the bottom border of the bar */
		// $('#navbar-border-bottom').animate({'opacity': '1'}, barAnimationDuration);
		
		// $('.navbar-brand').animate({ 'color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration);
		$('#smallLogoBlack').delay(barAnimationDuration).animate({ 'opacity': '0' }, 0);
		if(!$("#navbarCollapse").hasClass("in")) $('#researchFont').animate({ 'color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration);
		if(!$("#navbarCollapse").hasClass("in")) $('#publicationsFont').animate({ 'color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration);
		if(!$("#navbarCollapse").hasClass("in")) $('#miscFont').animate({ 'color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration);
		if(!$("#navbarCollapse").hasClass("in")) $('#contactFont').animate({ 'color': 'rgba(255, 255, 255, 1)' }, barAnimationDuration);
	}
	alpha = !alpha;
}

function body_sizer() {
	
	bodyWidth = $(window).width();
	bodyHeight = $(window).height();
	
	$(".imageClass").css("width", $(".imageContainer").css("width"));
	$(".imageClass").css("height", 'auto');
	$(".mask").css("height", $(".imageClass").height());
	$(".mask").css("width", $(".imageClass").width());
	
	$('#publicationsBgDiv').css('top', -30);
	$('#researchBgDiv').css('top', -30);
	
	// $('#secondWhite').css('top', ($(window).height() / 2.5));
	// $('#thirdWhite').css('top', ($(window).height() / 2.5));
	
	/* ********************** Div with horizontal bars ********************** */
		
	/* Setting the height of the divs that cover the bars */
	$("#styledBg1").css("height", 30);
	$("#styledBg2").css("height", 30);
	$("#styledBg3").css("height", 30);
	$("#styledBg4").css("height", 30);
	$("#styledBg5").css("height", 30);
	$("#styledBg6").css("height", 30);
	
	/* Setting the margin-top of the divs that cover the bars */
	
	$("#styledBg1").css("margin-top", 5);
	$("#styledBg2").css("margin-top",(30) + 10 + 5);
	$("#styledBg3").css("margin-top", ((30) + 10) * 2 + 5);
	$("#styledBg4").css("margin-top", ((30) + 10) * 3 + 5);
	$("#styledBg5").css("margin-top", ((30) + 10) * 4 + 5);
	$("#styledBg6").css("margin-top", ((30) + 10) * 5 + 5);
	
	/* Div footer margin-top */
	$("#timeFooter").css("margin-top", ((30) + 18) * 6);
	
	/* Setting bars heigth */
	$("#firstBar").css("height", 30);
	$("#secondBar").css("height", 30);
	$("#thirdBar").css("height", 30);
	$("#fourthBar").css("height", 30);
	$("#fifthBar").css("height", 30);
	$("#sixthBar").css("height", 30);
	
	/* Setting bars width */
	$("#firstBar").css("width", Math.floor(((bodyWidth * 60 / 100) / 30)) * 30); /* WEB DESIGN */
	$("#secondBar").css("width", Math.floor(((bodyWidth * 45 / 100) / 30)) * 30); /* MOBILE APPS */
	$("#thirdBar").css("width", Math.floor(((bodyWidth * 25 / 100) / 30)) * 30); /* LEARNING */
	$("#fourthBar").css("width", Math.floor(((bodyWidth * 50/ 100) / 30)) * 30); /* ENVIRONMENT */
	$("#fifthBar").css("width", Math.floor(((bodyWidth * 70 / 100) / 30)) * 30); /* RESEARCH */
	$("#sixthBar").css("width", Math.floor(((bodyWidth * 30 / 100) / 30)) * 30); /* HEALTH */
	
	if($('#firstBar').css("left") > 0) {
		$('#barText1').css("left", $('#firstBar').width() + 10);
		$('#barText2').css("left", $('#secondBar').width() + 10);
		$('#barText3').css("left", $('#thirdBar').width() + 10);
		$('#barText4').css("left", $('#fourthBar').width() + 10);
		$('#barText5').css("left", $('#fifthBar').width() + 10);
		$('#barText6').css("left", $('#sixthBar').width() + 10);
	}
	
	/* Setting bars margin-top */
	$("#firstBar").css("margin-top", 5);
	$("#secondBar").css("margin-top", (30) + 10 + 5);
	$("#thirdBar").css("margin-top", ((30) + 10) * 2 + 5);
	$("#fourthBar").css("margin-top", ((30) + 10) * 3 + 5);
	$("#fifthBar").css("margin-top", ((30) + 10) * 4 + 5);
	$("#sixthBar").css("margin-top", ((30) + 10) * 5 + 5);
	
	/* ************************************************************* */
	
	/* ********************** Divs with vertical bars ********************** */
	
	/* Setting bars heigth */
	$("#firstVerticalBar").css("height", '25%');
	$("#secondVerticalBar").css("height", '40%');
	$("#thirdVerticalBar").css("height", '65%');
	$("#fourthVerticalBar").css("height", '95%');
	
	/* Setting bars width */
	$("#firstVerticalBar").css("margin-right", $('#workBarContainer').width() * 1.3 / 100);
	$("#secondVerticalBar").css("margin-right", $('#workBarContainer').width() * 1.3 / 100);
	$("#thirdVerticalBar").css("margin-right", $('#workBarContainer').width() * 1.3 / 100);
	
	$("#firstVerticalBar").css("width", Math.floor((($('#workBarContainer').width() * 24 / 100))));
	$("#secondVerticalBar").css("width", Math.floor((($('#workBarContainer').width() * 24 / 100))));
	$("#thirdVerticalBar").css("width", Math.floor((($('#workBarContainer').width() * 24 / 100))));
	$("#fourthVerticalBar").css("width", Math.floor((($('#workBarContainer').width() * 24 / 100))));
	
	$("#firstVerticalBarText").css("width", $("#firstVerticalBar").css("width"));
	$("#secondVerticalBarText").css("width",$("#secondVerticalBar").css("width"));
	$("#thirdVerticalBarText").css("width", $("#thirdVerticalBar").css("width"));
	$("#fourthVerticalBarText").css("width", $("#fourthVerticalBar").css("width"));
		
	/* Setting bars heigth */
	$("#firstVerticalBarFromBottom").css("height", '20%');
	$("#secondVerticalBarFromBottom").css("height", '30%');
	$("#thirdVerticalBarFromBottom").css("height", '50%');
	$("#fourthVerticalBarFromBottom").css("height", '72%');
	$("#fifthVerticalBarFromBottom").css("height", '95%');
	
	/* Setting bars width */	
	$("#firstVerticalBarFromBottom").css("margin-right", $('#researchBarContainer').width() * 1.25 / 100);
	$("#secondVerticalBarFromBottom").css("margin-right", $('#researchBarContainer').width() * 1.25 / 100);
	$("#thirdVerticalBarFromBottom").css("margin-right", $('#researchBarContainer').width() * 1.25 / 100);
	$("#fourthVerticalBarFromBottom").css("margin-right", $('#researchBarContainer').width() * 1.25 / 100);
		
	$("#firstVerticalBarFromBottom").css("width", Math.floor((($('#researchBarContainer').width() * 19 / 100))));
	$("#secondVerticalBarFromBottom").css("width", Math.floor((($('#researchBarContainer').width() * 19 / 100))));
	$("#thirdVerticalBarFromBottom").css("width", Math.floor((($('#researchBarContainer').width() * 19 / 100))));
	$("#fourthVerticalBarFromBottom").css("width",Math.floor((($('#researchBarContainer').width() * 19 / 100))));
	$("#fifthVerticalBarFromBottom").css("width", Math.floor((($('#researchBarContainer').width() * 19 / 100))));
	
	$("#firstVerticalBarFromBottomText").css("width", $("#firstVerticalBarFromBottom").css("width"));
	$("#secondVerticalBarFromBottomText").css("width",$("#secondVerticalBarFromBottom").css("width"));
	$("#thirdVerticalBarFromBottomText").css("width", $("#thirdVerticalBarFromBottom").css("width"));
	$("#fourthVerticalBarFromBottomText").css("width", $("#fourthVerticalBarFromBottom").css("width"));
	$("#fifthVerticalBarFromBottomText").css("width", $("#fifthVerticalBarFromBottom").css("width"));
	
	$(".leftDivBelowResearch").css("width", $(window).width() - $(".rightDivBelowResearch").width());
			
	/* ************************************************************* */
	
	// $(".white").css("min-width", '800px');
	$(".white").css("width", bodyWidth);
	
	// $('#bio').css("min-width", '800px');
	$('#bio').css("min-height", '780px');
	
	// var sum = parseInt(($(window).height() / 2.5) + $("#bioFirstRow").height() + $("#bioSecondRow").height());
	
	// alert(sum + ' ; ' + bodyHeight);
	
	// $('#bio').css("min-height", sum + 'px');
	$('#bio').css("height", bodyHeight);
	
	// $("#bioSecondBg").css("height", bodyHeight);
	// $("#bioFirstBlurred").css("height", bodyHeight);
	// $("#bioSecondBlurred").css("height", bodyHeight);
	
	// $('#research').css("min-width", '800px');
	$('#research').css("min-height", '780px');
	// $('#research').css("min-height", parseInt($("#secondWhite").position().top + $("#researchFirstRow").height() + $("#researchSecondRow").height()) + 'px');
	$('#research').css("height", bodyHeight);
	
	// $('#researchBlurred').css("height", bodyHeight);
	// $('#publications').css("min-width", '800px');
	$('#publications').css("min-height", '900px');
	$('#publications').css("height", bodyHeight);
	// $('#publicationsBlurred').css("height", bodyHeight);
	
	// $('#researchBgDiv').css("top", - $('#research').height() / 2.2);
	// $('#publicationsBgDiv').css("top", - $('#publications').height() / 2.2);
	
	$('#research2').css("min-height", '780px');
	$('#research2').css("height", bodyHeight); /* Container of links to other pages */
	
	$('#research3').css("min-height", '780px');
	$('#research3').css("height", $('#research2').height()); /* The height is set equal to the height of the container of links to other pages */
	
	var spaceForEachWordHeight = ($('#research3').height() - $('#navbarContainer').height() - 60) / 5;
	
	$('#l1').css("top", $('#navbarContainer').height());
	$('#l2').css("top", spaceForEachWordHeight + $('#navbarContainer').height());
	$('#l3').css("top", 2 * spaceForEachWordHeight + $('#navbarContainer').height());
	$('#l4').css("top", 3 * spaceForEachWordHeight + $('#navbarContainer').height());
	$('#l5').css("top", 4 * spaceForEachWordHeight + $('#navbarContainer').height());
	
	$('#onTopOfFooter').css("height", bodyHeight);
	// $('#onTopOfFooterOverlay').css("height", bodyHeight);
	
	$('#whiteBelowBio').css("top", $('#bio').height());
	
	var whiteBelowBio2Margin = bodyHeight / 2;
	
	$('#divBetweenWhites').css("top", $('#bio').height() + $('#whiteBelowBio').height());
	$('#divBetweenWhites').css("height", whiteBelowBio2Margin);
	
	$('.divBetweenWhitesContent').css("height", whiteBelowBio2Margin + 'px');
	$('.divBetweenWhitesContent').css("line-height", whiteBelowBio2Margin + 'px');
	
	$('#whiteBelowBio2').css("top", $('#bio').height() + $('#whiteBelowBio').height() + $('#divBetweenWhites').height());
	
	$('#research').css("top", $('#bio').height() + $('#whiteBelowBio').height() + $('#whiteBelowBio2').height() + $('#divBetweenWhites').height());
	
	$('#whiteBelowResearch').css("top", ($('#bio').height() + $('#research').height() + $('#whiteBelowBio').height() + $('#whiteBelowBio2').height() + $('#divBetweenWhites').height()));
	
	$('#publications').css("top", ($('#bio').height() + $('#research').height() + $('#whiteBelowBio').height() + $('#whiteBelowBio2').height() + $('#divBetweenWhites').height() + $('#whiteBelowResearch').height()));
	
	$('#whiteBelowPublications').css("top", ($('#bio').height() + $('#research').height() + $('#publications').height() + $('#whiteBelowBio').height() + $('#whiteBelowBio2').height() + $('#divBetweenWhites').height() + $('#whiteBelowResearch').height()));
	
	$('#research2').css("top", ($('#bio').height() + $('#research').height() + $('#publications').height() + $('#whiteBelowBio').height() + $('#whiteBelowBio2').height() + $('#divBetweenWhites').height() + $('#whiteBelowResearch').height() + $('#whiteBelowPublications').height()));
	
	$('#research3').css("top", ($('#bio').height() + $('#research').height() + $('#publications').height() + $('#whiteBelowBio').height() + $('#whiteBelowBio2').height() + $('#divBetweenWhites').height() + $('#whiteBelowResearch').height() + $('#whiteBelowPublications').height()));
	
	$('#onTopOfFooter').css("top", ($('#bio').height() + $('#research').height() + $('#publications').height() + $('#research3').height() + $('#whiteBelowBio').height() + $('#whiteBelowBio2').height() + $('#divBetweenWhites').height() + $('#whiteBelowResearch').height() + $('#whiteBelowPublications').height()));
	
	// $('#onTopOfFooterOverlay').css("top", ($('#bio').height() + $('#research').height() + $('#publications').height() + $('#research3').height() + $('#onTopOfFooter').height() + $('#whiteBelowBio').height() + $('#whiteBelowBio2').height() + $('#divBetweenWhites').height() + $('#whiteBelowResearch').height() + $('#whiteBelowPublications').height()));
	
	// $('#orangeContent2').css("top", ($('#bio').height() + $('#research').height() + $('#publications').height() + $('#research3').height() + $('#onTopOfFooter').height() + $('#onTopOfFooterOverlay').height() + $('#whiteBelowBio').height() + $('#whiteBelowBio2').height() + $('#divBetweenWhites').height() + $('#whiteBelowResearch').height() + $('#whiteBelowPublications').height()));	
	// $('#orangeContent2').css("top", ($('#bio').height() + $('#research').height() + $('#publications').height() + $('#research3').height() + $('#onTopOfFooter').height() + $('#onTopOfFooterOverlay').height() + $('#whiteBelowBio').height() + $('#whiteBelowBio2').height() + $('#divBetweenWhites').height() + $('#whiteBelowResearch').height() + $('#whiteBelowPublications').height()));
	$('#orangeContent2').css("top", ($('#bio').height() + $('#research').height() + $('#publications').height() + $('#research3').height() + $('#onTopOfFooter').height() + $('#whiteBelowBio').height() + $('#whiteBelowBio2').height() + $('#divBetweenWhites').height() + $('#whiteBelowResearch').height() + $('#whiteBelowPublications').height()));
	
	// maxHorizontalScrollOffsetForFirstBlock = $('#onTopOfFooter').height() + $('#onTopOfFooterOverlay').height() + $('#orangeContent2').height();
	maxHorizontalScrollOffsetForFirstBlock = $('#onTopOfFooter').height() + $('#orangeContent2').height();
	
	// Vertically center the sections' content (#firstWhite is centered by queryloader script)
	$("#secondWhite").css("top", (($('#research').height() / 2) - ($('#secondWhite').height() / 2) - $('#navbarContainer').height() + 'px'));
	$("#thirdWhite").css("top", (($('#publications').height() / 2) - ($('#thirdWhite').height() / 2) - $('#navbarContainer').height() + 'px'));
	
	$('#bio').css("width", bodyWidth);
	// $("#bioSecondBg").css("width", bodyWidth);
	// $("#bioFirstBlurred").css("width", bodyWidth);
	// $("#bioSecondBlurred").css("width", bodyWidth);
	$('#research').css("width", bodyWidth);
	// $('#researchBlurred').css("width", bodyWidth);
	$('#publications').css("width", bodyWidth);
	// $('#publicationsBlurred').css("width", bodyWidth);
	$('#research2').css("width", bodyWidth);
	$('#research3').css("width", bodyWidth);
	
	// Setting the maps width as bodyWidth plus the max horizontal scrolling amount, so that it can be correctly scrolled
	$('#onTopOfFooter').css("width", bodyWidth + (horizontalScrollStrength / bodyWidth * maxHorizontalScrollOffsetForFirstBlock));
	// $('#onTopOfFooterOverlay').css("width", bodyWidth + (horizontalScrollStrength / bodyWidth * maxHorizontalScrollOffsetForFirstBlock));
	
	$('#onTopOfFooter').css("-moz-background-size", bodyWidth + (horizontalScrollStrength / bodyWidth * maxHorizontalScrollOffsetForFirstBlock));
	$('#onTopOfFooter').css("-webkit-background-size", bodyWidth + (horizontalScrollStrength / bodyWidth * maxHorizontalScrollOffsetForFirstBlock));
	$('#onTopOfFooter').css("-o-background-size", bodyWidth + (horizontalScrollStrength / bodyWidth * maxHorizontalScrollOffsetForFirstBlock));
	$('#onTopOfFooter').css("background-size", bodyWidth + (horizontalScrollStrength / bodyWidth * maxHorizontalScrollOffsetForFirstBlock));
	
	/* $('#onTopOfFooterOverlay').css("-moz-background-size", bodyWidth + (horizontalScrollStrength / bodyWidth * maxHorizontalScrollOffsetForFirstBlock));
	$('#onTopOfFooterOverlay').css("-webkit-background-size", bodyWidth + (horizontalScrollStrength / bodyWidth * maxHorizontalScrollOffsetForFirstBlock));
	$('#onTopOfFooterOverlay').css("-o-background-size", bodyWidth + (horizontalScrollStrength / bodyWidth * maxHorizontalScrollOffsetForFirstBlock));
	$('#onTopOfFooterOverlay').css("background-size", bodyWidth + (horizontalScrollStrength / bodyWidth * maxHorizontalScrollOffsetForFirstBlock)); */
	
	var heightForWhiteDivs = parseInt((bodyHeight * 1.7 / 3));
	
	/* ******************** Arrow down positioning ******************** */
	
	$("#arrowDownBackgroundDiv1").css("top", ($('#bio').height() - ($("#arrowDownBackgroundDiv1").height())));
	$("#arrowDownBackgroundDiv2").css("top", ($('#bio').height() - ($("#arrowDownBackgroundDiv1").height())));
	$("#arrowDownBackgroundDiv3").css("top", ($('#bio').height() - ($("#arrowDownBackgroundDiv1").height())));
	
	$(".arrowDown").css("left", ((bodyWidth / 2) - ($(".arrowDown").width() / 2)));
	
	$(".arrowDownContainer").css("left", ((bodyWidth / 2) - ($(".arrowDownContainer").width() /2)));
	// $(".arrowDownContainer").css("top", (bodyHeight - ($(".arrowDownContainer").height() + 20)));
	
	$("#arrowDown1").css("top", ($('#bio').height() - $(".arrowDown").height() - 20));
	$("#arrowDown2").css("top", ($('#research').height() - 67));
	$("#arrowDown3").css("top", ($('#publications').height() - 67));
	$("#arrowDown4").css("top", ($('#research3').height() - 67));
	
	$(".scrollDown").css("left", ((bodyWidth / 2) - ($(".scrollDown").width() / 2)));
	// $(".scrollDown").css("top", (bodyHeight - ($(".scrollDown").height()) - $(".arrowDownContainer").height() / 2) - 10);
	
	$("#scrollDownText1").css("top", ($('#bio').height() - $(".arrowDown").height() - 2));
	$("#scrollDownText2").css("top", ($('#research').height() - 49));
	$("#scrollDownText3").css("top", ($('#publications').height() - 49));
	$("#scrollDownText4").css("top", ($('#research3').height() - 49));
	
	$(".arrowDownPng").css("left", (($(".arrowDownContainer").width() / 2) - ($(".arrowDownPng").width() /2)));
	$(".arrowDownPng").css("top", (($(".arrowDownContainer").height() / 2) - ($(".arrowDownPng").height() / 2)));
	
	$(".mouseSvg").css("left", (($(".arrowDownContainer").width() / 2) - ($(".mouseSvg").width() / 2)));
	$(".mouseSvg").css("top", (($(".arrowDownContainer").height() / 2) - ($(".mouseSvg").height() / 2)) - 105);
	
	/* ******************** End of arrow down positioning ******************** */
	
	/* ******************** Arrow up positioning ******************** */
	$(".arrowUp").css("left", ((bodyWidth / 2) - ($(".arrowUp").width() / 2)));
	$(".arrowUp").css("top", (bodyHeight - ($(".arrowUp").height() + 20)));
	
	$(".scrollUp").css("left", ((bodyWidth / 2) - ($(".scrollUp").width() /2) - 18));
	$(".scrollUp").css("bottom", (($(".arrowUpContainerWhite").height() / 2) - ($(".arrowUpPng").height() / 2) + 19));
	
	$(".arrowUpPng").css("left", (($(".arrowUpContainerWhite").width() / 2) - ($(".arrowUpPng").width() /2)));
	$(".arrowUpPng").css("top", (($(".arrowUpContainerWhite").height() / 2) - ($(".arrowUpPng").height() / 2) - 2));
	
	$(".mouseUpSvg").css("left", (($(".arrowUpContainerWhite").width() / 2) - ($(".mouseUpSvg").width() / 2)));
	$(".mouseUpSvg").css("top", (($(".arrowUpContainerWhite").height() / 2) - ($(".mouseUpSvg").height() / 2)) + 105);
	
	/* ******************** End of arrow up positioning ******************** */
	
	/* Center text with max-width set in the big image background blocks */
	$('.centerText').css("margin-left", (bodyWidth - $('.centerText').css("max-width").replace("px", "")) / 2);
	
	/* ********* Set background image size ********* */
	adaptImage($('#bioImageBackground'));
	adaptImage($('#belowBioImageBackground'));
	adaptImage($('#workImageBackground'));
	adaptImage($('#publicationsImageBackground'));
	// adaptImage($('#wordsImageBackground'));
	/* ******************************************** */
	
	/* if($('#sideMenu').height() <  bodyHeight - $('.navbar').height()) {
		$('#sideMenu').css('height', bodyHeight - $('.navbar').height());
	}
	$('#sideMenu').css('top', $('.navbar').height()); */
	
    /*
	if($('#sideMenu').height() <  bodyHeight) {
		$('#sideMenu').css('height', bodyHeight);
	}
	$('#sideMenu').css('top', '0px');
	$('#sideMenu').css('padding-top', $('.navbar').height() + 10 + 'px');
	*/
    
	// var deskTop = $('#bio').height() + $('#whiteBelowBio').height() + $('#research').height() + $('#whiteBelowResearch').height() + $('#publications').height() + $('#whiteBelowPublications').height();
	// console.log("----- " + $(body).height());
	
	currentWindowHeight = bodyHeight;
	currentWindowWidth = bodyWidth;
}

/* ********* Method to set background image size ********* */
var adaptImage = function(imageElement) {
	/*
	if (($(window).width() / $(window).height()) < (imageElement.width() / imageElement.height())) {
		imageElement.css({
			'height' : '100%',
			'width' : 'auto'
		});
	} else {
		imageElement.css({
			'width' : 'auto',
			'height' : $(window).height() + 'px'
		});
	}
	
	imageElement.css({
		'left' : (($(window).width() - imageElement.width()) / 2) + 'px'
	});
	*/
	
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

/*
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
*/

<!--END OF WINDOW RESIZE MANAGEMENT FOR THE 2 ASIDE DIVS -->
		
	var fifthCurrentlyDisplayed = false;
	var sixthCurrentlyDisplayed = false;
	
	var topResearch2Reached = false;
	
	function seTtopResearch2Reached(value) {
		topResearch2Reached = value;
	};
	
	/* Function to scroll to a certain point of the page marked by 'data-slide' attribute */
	function goToByScroll(dataslide) {
		htmlbody.animate({
			scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
			}, 720, function(){ });
	}
	
	

<!-- FUNCTION CALLED WHEN PAGE IS LOADED -->

/* Taking the browser back to initial position when page is reloaded */
window.onload = function() {
	setTimeout (function () {
		scrollTo(0,0);
	}, 0);
}

/* Initializing stellar.js if not on a mobile device */
function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
	$.stellar({
		horizontalScrolling: false,
		verticalScrolling: true,
		horizontalOffset: 0,
		verticalOffset: 0,
		hideDistantElements: true,
		responsive: true
	});
}

jQuery(document).ready(function ($) {
	
	/* Centering the rotating crown (rays.png image) of the preloader window */
	/* $("#raysImg").css('left', ($(window).width() / 2) - ($("#raysImg").width() / 2));
	$("#raysImg").css('opacity', '0.2');
	*/
				
	$("body").queryLoader2();
				
	/* ********************** BACKGROUNDS CROSSFADE EFFECT FOR THE 1ST SECTION ********************** */
	/* The following function alternatively fades in and out the div #bioSecondBg to create a
	   crossfade effect showing and hiding a second bg which covers the original one */
	
	var fadingDuration = 3000; /* millisecs taken to make disappear or appear the div on the top */
	var stayingTime = 7000; /* millisecs between 2 fadings */
	
	/* The blurred image overlays are initially invisible */
	// $("#bioFirstBlurred").css({ opacity: 0 });
	// $("#bioSecondBlurred").css({ opacity: 0 });
	
	/* Switch background image for first div
	setInterval(function() {
		
		isAnimating = true;
		
		var top = $(this).scrollTop();
		var ratio = top / (alphaRatio * currentWindowHeight);
		if(ratio <= 0) ratio = 0;
		if(ratio > currentWindowHeight) ratio = 1;
		
		if(currentBg == "cr") {
			
			currentBg = "porto";
			
			$('#bioSecondBg').animate({opacity: 1}, fadingDuration, function() { isAnimating = false; });
			$("#bioFirstBlurred").animate({opacity: 0}, fadingDuration);
			
			$("#bioSecondBlurred").animate({opacity: ratio}, fadingDuration);
		}
		else{
			
			currentBg = "cr";
			
			$('#bioSecondBg').animate({opacity: 0}, fadingDuration, function() { isAnimating = false; });
			$("#bioSecondBlurred").animate({opacity: 0}, fadingDuration);
			
			$("#bioFirstBlurred").animate({opacity: ratio}, fadingDuration);
		}
	}, stayingTime);
	*/
	/* ********************************************************************************************** */
	
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
	
	$('#firstBar').css('left', - $('#firstBar').width());
	$('#secondBar').css('left', - $('#secondBar').width());
	$('#thirdBar').css('left', - $('#thirdBar').width());
	$('#fourthBar').css('left', - $('#fourthBar').width());
	$('#fifthBar').css('left', - $('#fifthBar').width());
	$('#sixthBar').css('left', - $('#sixthBar').width());
	
	$('#barText1').css('left', 0);
	$('#barText2').css('left', 0);
	$('#barText3').css('left', 0);
	$('#barText4').css('left', 0);
	$('#barText5').css('left', 0);
	$('#barText6').css('left', 0);
	
	$('#firstVerticalBar').css('top', - $('#firstVerticalBar').height());
	$('#secondVerticalBar').css('top', - $('#secondVerticalBar').height());
	$('#thirdVerticalBar').css('top', - $('#thirdVerticalBar').height());
	$('#fourthVerticalBar').css('top', - $('#fourthVerticalBar').height());
	// $('#fifthVerticalBar').css('top', - $('#fifthVerticalBar').height());
	
	$('#firstVerticalBarFromBottom').css('top', $('#whiteBelowPublications').height());
	$('#secondVerticalBarFromBottom').css('top', $('#whiteBelowPublications').height());
	$('#thirdVerticalBarFromBottom').css('top', $('#whiteBelowPublications').height());
	$('#fourthVerticalBarFromBottom').css('top', $('#whiteBelowPublications').height());
	$('#fifthVerticalBarFromBottom').css('top', $('#whiteBelowPublications').height());
	
	//Cache some variables
	// var links = $('.navigation').find('li');
	slide = $('.slide');
	button = $('.button');
	buttonUp = $('.buttonUp');
	buttonRight = $('.buttonRight');
	buttonLeft = $('.buttonLeft');
	mywindow = $(window);
	htmlbody = $('html,body');
	/*
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
	*/
			
	/* waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code,
	   that removes the class from navigation link slide 2 and adds it to navigation link slide 1. */
	/*
	mywindow.scroll(function () {
		if (mywindow.scrollTop() == 0) {
			$('.navigation li[data-slide="1"]').addClass('active');
			$('.navigation li[data-slide="2"]').removeClass('active');
		}
	});
	*/		
	
	//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
	/*
	links.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});
	*/
	
	//When the user clicks on the button, get the data-slide attribute value of the button and pass that variable to the goToByScroll function
	button.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});

	$(".topLink").click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});
	
	$(".barLink").click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});
	
	$(".arrowDown").click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});
	
	$(".arrowUp").click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});
	
	
	
	<!-- USING WAYPOINT.JS TO TRIGGER EVENTS, AND MANAGE THEM, WHEN DIVS REACH THE TOP OF THE VIEWPORT (the part of the window that the user sees) -->
	
	<!-- CHANGE COLORS OF LITTLE BALLS ON THE RIGHT AND OF PARALLAXDIVs BACKGROUNDS -->
			
	// var colorToReplace = "rgb(255,251,137, 0.3); -moz-radial-gradient(center, ellipse cover, rgba(255,251,137,1) 0%, rgba(255,170,50,0.3) 100%); -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,251,137,0.3)), color-stop(100%,rgba(255,170,50,0.3))); -webkit-radial-gradient(center, ellipse cover, rgba(255,251,137,0.3) 0%,rgba(255,170,50,0.3) 100%); -o-radial-gradient(center, ellipse cover, rgba(255,251,137,0.3) 0%,rgba(255,170,50,0.3) 100%); -ms-radial-gradient(center, ellipse cover, rgba(255,251,137,0.3) 0%,rgba(255,170,50,0.3) 100%); radial-gradient(ellipse at center, rgba(255,251,137,0.3) 0%,rgba(255,170,50,0.3) 100%);";
	
	var colorToReplace = 'rgba(255, 127, 36, 0.3)';
				
	var liftBlock = function(id) {
		
		if(document.getElementById(id).style.top == '100%') {
			
			$('#' + id).delay(340).animate({'top': '0'}, 500);
		}
		else {
			
			$('#' + id).animate({
				backgroundColor: 'rgba(0, 0, 0, 0)'
			}, 500, function() {});
			
			$('#' + id).delay(250).animate({'top': '100%'}, 500);
		}
	}
	
	/* ************ Functions to animate the text in the white divs *********** */
	
	var rotatedWorkContainer = false,
		rotatedSecondWhiteText = false,
		rotateResearchContainer = false,
		rotateThirdWhiteText = false;
	
	function animateRotate(element, degrees, duration){		
		$({deg: -5}).animate({deg: degrees}, {
			duration: duration,
			step: function(now){
				element.css({
					transform: "rotate(" + now + "deg)"
				});
			}
		});
	}
	
	$('#workContainer').waypoint(function() {
		
		$('#workContainer').animate({'left':0, 'opacity': 1}, 600);
		$('#thirdBgDarkOverlay').animate({'opacity': 0}, 800);
		$('#fourthBgDarkOverlay').animate({'opacity': 1}, 800);
	
	/*
		$('#workContainer').animate({'top':100, 'opacity': 1}, 600);
		
		/* Rotate div if not yet rotated */
		/* if(!rotatedWorkContainer) {
			animateRotate($('#workContainer'), 0, 600);
			rotatedWorkContainer = true;
		} */
	
	}, { offset: $(window).height() / 1.3});
	
	$('#secondWhiteText').waypoint(function() {
		
		$('#secondWhiteText').animate({'left':0, 'opacity': 1}, 600);
		$('#blueHr2').animate({'left':0, 'opacity': 1}, 600);
	
	/*
		$('#secondWhiteText').animate({'top':0, 'opacity': 1}, 600);
		
		/* Rotate div if not yet rotated */
		/* if(!rotatedSecondWhiteText) {
			animateRotate($('#secondWhiteText'), 0, 600);
			rotatedSecondWhiteText = true;
		} */
	
	}, { offset: $(window).height() / 1.3});
	
	$('#researchContainer').waypoint(function() {
		
		$('#researchContainer').animate({'left':0, 'opacity': 1}, 600);
		$('#fifthBgDarkOverlay').animate({'opacity': 0}, 800);
		$('#sixthBgDarkOverlay').animate({'opacity': 1}, 800);
	
	/*
		$('#researchContainer').animate({'top':100, 'opacity': 1}, 600);
		
		/* Rotate div if not yet rotated */
		/* if(!rotateResearchContainer) {
			animateRotate($('#researchContainer'), 0, 600);
			rotateResearchContainer = true;
		} */
	
	}, { offset: $(window).height() / 1.3});
	
	$('#thirdWhiteText').waypoint(function() {
	
		$('#thirdWhiteText').animate({'left':0, 'opacity': 1}, 600);
		$('#blueHr3').animate({'left':0, 'opacity': 1}, 600);
		
		/* $('#thirdWhiteText').animate({'top':0, 'opacity': 1}, 600);
		
		/* Rotate div if not yet rotated */
		/* if(!rotateThirdWhiteText) {
			animateRotate($('#thirdWhiteText'), 0, 600);
			rotateThirdWhiteText = true;
		} */
	
	}, { offset: $(window).height() / 1.3});
	
    /*
	var timerId; // current timer if started

	function clockStart() {  
		if (timerId) return;
		
		counter = 0;
		timerId = setInterval(update, counterUpdateRate);
		update();  // (*)
	}
	
	function clockStop() {
	  clearInterval(timerId);
	  timerId = null;
	}
	
	function update() {
		$('#thirdWhiteText2').html("<font class=\"papers-number\">" + counter + "</font><br />PUBLISHED WORKS");
		counter = counter + 1;
		if(counter > publishedPapers)  {
			clockStop();
		}
	}
    */
    
    
    /* ************************* Circles management ********************* */
    
    /* Center circles container based on its max-width */
	$('.circles-container').css("margin-left", (bodyWidth - $('.circles-container').css("max-width").replace("px", "")) / 2);
    
    var canvas = document.getElementById('canvas'),
        circlesCreated = false;
    
    function onScroll() {
        if (!circlesCreated && elementInViewport(canvas)) {
            circlesCreated = true;
            createCircles();
        }
    }

    function elementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top  >= 0 &&
            rect.left >= 0 &&
            rect.top  <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function createCircles() {
        var colors = [
                ['rgba(255, 255, 255, .15)', 'rgba(255, 255, 255, 1)'],
                ['rgba(255, 255, 255, .15)', 'rgba(255, 255, 255, 1)']
            ],
            circles = [],
            values = [publishedPapersInternationalJournal, publishedPapersInternationalConference];

        for (var i = 0; i < colors.length; i++) {
            var child = document.getElementById('circles-' + i),
                percentage = values[i],
                circle = Circles.create({
                    id:         child.id,
                    value:      percentage,
                    radius:     50,
                    width:      10,
                    colors:     colors[i],
                    maxValue:   publishedPapersInternationalJournal + publishedPapersInternationalConference, // The full circle represents this value (e.g., if the circles goes from 0 to 100, this must be 100)
                });
            circles.push(circle);
        }
    }
        
    window.onscroll = onScroll;
    
    /* ************************************************************************ */

    /*
	$('#thirdWhiteText2').waypoint(function() {
	
		$('#thirdWhiteText2').animate({'left':0, 'opacity': 1}, 600, function() {
						
			if(counter < publishedPapers) {
				clockStart();
			}
			
		});
	
	}, { offset: $(window).height() / 1.3});
    */
	
	/* ************************************************************************ */
	
	$('#bio').waypoint(function() {
		
		/*
		document.getElementById('firstPixel').style.background = "rgba(204,0,102,.7)";
		document.getElementById('secondPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('thirdPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('fourthPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('fifthPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('sixthPixel').style.background = "rgba(154, 255, 0, 1)";
		*/
		
		document.getElementById('bioFont').style.color = "rgb(0, 206, 247)";
					
		firstShown = true;
		secondShown = false;
		thirdShown = false;
		fourthShown = false;
		fifthShown = false;
		sixthShown = false;
					
		seTtopResearch2Reached(false);
					
	}, { offset: -1 });
	
	$('#whiteBelowBio2').waypoint(function() {
	
		$('#firstBar').delay(200).animate({'left': 0}, 800);
		$('#secondBar').delay(400).animate({'left': 0}, 800);
		$('#thirdBar').delay(600).animate({'left': 0}, 800);
		$('#fourthBar').delay(800).animate({'left': 0}, 800);
		$('#fifthBar').delay(1000).animate({'left': 0}, 800);
		$('#sixthBar').delay(1200).animate({'left': 0}, 800);
		
		$('#barText1').delay(200).animate({'left': $('#firstBar').width() + 10}, 800);
		$('#barText2').delay(400).animate({'left': $('#secondBar').width() + 10}, 800);
		$('#barText3').delay(600).animate({'left': $('#thirdBar').width() + 10}, 800);
		$('#barText4').delay(800).animate({'left': $('#fourthBar').width() + 10}, 800);
		$('#barText5').delay(1000).animate({'left': $('#fifthBar').width() + 10}, 800);
		$('#barText6').delay(1200).animate({'left': $('#sixthBar').width() + 10}, 800);
	
	}, { offset: $(window).height() / 2.4 });
	
	$('#whiteBelowResearch').waypoint(function() {
	
		$('#firstVerticalBar').delay(0).animate({'top': '0'}, 800);
		$('#secondVerticalBar').delay(200).animate({'top': '0'}, 800);
		$('#thirdVerticalBar').delay(400).animate({'top': '0'}, 800);
		$('#fourthVerticalBar').delay(600).animate({'top': '0'}, 800);
		// $('#fifthVerticalBar').delay(800).animate({'top': '0'}, 800);
	
	}, { offset: $(window).height() / 1.4 });
	
	$('#whiteBelowPublications').waypoint(function() {
	
		$('#firstVerticalBarFromBottom').delay(0).animate({'top': $('#whiteBelowPublications').height() - $('#firstVerticalBarFromBottom').height()}, 500);
		$('#secondVerticalBarFromBottom').delay(200).animate({'top': $('#whiteBelowPublications').height() - $('#secondVerticalBarFromBottom').height()}, 500);
		$('#thirdVerticalBarFromBottom').delay(400).animate({'top': $('#whiteBelowPublications').height() - $('#thirdVerticalBarFromBottom').height()}, 500);
		$('#fourthVerticalBarFromBottom').delay(600).animate({'top': $('#whiteBelowPublications').height() - $('#fourthVerticalBarFromBottom').height()}, 500);
		$('#fifthVerticalBarFromBottom').delay(800).animate({'top': $('#whiteBelowPublications').height() - $('#fifthVerticalBarFromBottom').height()}, 500);
	
	}, { offset: $(window).height() / 1.4 });
	
	$('#research').waypoint(function() {
		
		/*
		document.getElementById('firstPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('secondPixel').style.background = "rgba(204,0,102,.7)";
		document.getElementById('thirdPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('fourthPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('fifthPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('sixthPixel').style.background = "rgba(154, 255, 0, 1)";
		*/
		
		document.getElementById('researchFont').style.color = "rgb(0, 206, 247)";
		
		if(alpha) {
			document.getElementById('bioFont').style.color = "#FFF";
			document.getElementById('publicationsFont').style.color = "#FFF";
			document.getElementById('miscFont').style.color = "#FFF";
		} else {
			document.getElementById('bioFont').style.color = "#000";
			document.getElementById('publicationsFont').style.color = "#000";
			document.getElementById('miscFont').style.color = "#000";
		}
		
		firstShown = false;
		secondShown = true;
		thirdShown = false;
		fourthShown = false;
		fifthShown = false;
		sixthShown = false;
					
		seTtopResearch2Reached(false);
		
	}, { offset: 0 });
	
	$('#publications').waypoint(function(direction) {
		
		/*
		document.getElementById('firstPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('secondPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('thirdPixel').style.background = "rgba(204,0,102,.7)";
		document.getElementById('fourthPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('fifthPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('sixthPixel').style.background = "rgba(154, 255, 0, 1)";
		*/
		
		document.getElementById('publicationsFont').style.color = "rgb(0, 206, 247)";
		
		if(alpha) {
			document.getElementById('bioFont').style.color = "#FFF";
			document.getElementById('researchFont').style.color = "#FFF";
			document.getElementById('miscFont').style.color = "#FFF";
		} else {
			document.getElementById('bioFont').style.color = "#000";
			document.getElementById('researchFont').style.color = "#000";
			document.getElementById('miscFont').style.color = "#000";
		}
		
		firstShown = false;
		secondShown = false;
		thirdShown = true;
		fourthShown = false;
		fifthShown = false;
		sixthShown = false;
					
		seTtopResearch2Reached(false);
		
	}, { offset: 0 });

	$('#research2').waypoint(function(direction) {
		
		document.getElementById('miscFont').style.color = "rgb(0, 206, 247)";
		
		if(alpha) {
			document.getElementById('bioFont').style.color = "#FFF";
			document.getElementById('researchFont').style.color = "#FFF";
			document.getElementById('publicationsFont').style.color = "#FFF";
		} else {
			document.getElementById('bioFont').style.color = "#000";
			document.getElementById('researchFont').style.color = "#000";
			document.getElementById('publicationsFont').style.color = "#000";
		}
		
		if(fifthCurrentlyDisplayed && !sixthCurrentlyDisplayed) {
			/*
			document.getElementById('firstPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('secondPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('thirdPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('fourthPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('fifthPixel').style.background = "rgba(204,0,102,.7)";
			document.getElementById('sixthPixel').style.background = "rgba(154, 255, 0, 1)";
			*/
							
			firstShown = false;
			secondShown = false;
			thirdShown = false;
			fourthShown = false;
			fifthShown = true;
			sixthShown = false;
							
			seTtopResearch2Reached(true);
		}
		
		else if(sixthCurrentlyDisplayed) {
			/*
			document.getElementById('firstPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('secondPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('thirdPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('fourthPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('fifthPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('sixthPixel').style.background = "rgba(204,0,102,.7)";
			*/
			
			firstShown = false;
			secondShown = false;
			thirdShown = false;
			fourthShown = false;
			fifthShown = false;
			sixthShown = true;
							
			fifthCurrentlyDisplayed = true;
			
			seTtopResearch2Reached(true);
		}
		
		else {
			/*
			document.getElementById('firstPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('secondPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('thirdPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('fourthPixel').style.background = "rgba(204,0,102,.7)";
			document.getElementById('fifthPixel').style.background = "rgba(154, 255, 0, 1)";
			document.getElementById('sixthPixel').style.background = "rgba(154, 255, 0, 1)";
			*/
			
			document.getElementById('miscFont').style.color = "rgb(0, 206, 247)";
			
			if(alpha) {
				document.getElementById('bioFont').style.color = "#FFF";
				document.getElementById('researchFont').style.color = "#FFF";
				document.getElementById('publicationsFont').style.color = "#FFF";
			} else {
				document.getElementById('bioFont').style.color = "#000";
				document.getElementById('researchFont').style.color = "#000";
				document.getElementById('publicationsFont').style.color = "#000";
			}
			
			firstShown = false;
			secondShown = false;
			thirdShown = false;
			fourthShown = true;
			fifthShown = false;
			sixthShown = false;
							
			seTtopResearch2Reached(true);
		}
		
	}, { offset: 0 });
	
	$('#research2').waypoint(function(direction) {
		
		if(direction == 'down') {
			
			$('#research3').animate({
					left: 0,
				}, 720, null);
					
			$('#l1').delay(720).animate({'left': '2%'}, 400);
			$('#l2').delay(720).animate({'left': '2%'}, 600);
			$('#l3').delay(720).animate({'left': '2%'}, 800);
			$('#l4').delay(720).animate({'left': '2%'}, 1000);
			$('#l5').delay(720).animate({'left': '2%'}, 1200);
								
		} else {
			
			$('#research3').animate({
					left:  window.innerWidth,
				}, 720, null);
					
			$('#l1').delay(720).animate({'left': '100%'}, 400);
			$('#l2').delay(720).animate({'left': '100%'}, 600);
			$('#l3').delay(720).animate({'left': '100%'}, 800);
			$('#l4').delay(720).animate({'left': '100%'}, 1000);
			$('#l5').delay(720).animate({'left': '100%'}, 1200);
		}
		
	}, { offset: $(".navbar").height() });
			
	$('#wrap').waypoint(function() {
		/*
		document.getElementById('firstPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('secondPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('thirdPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('fourthPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('fifthPixel').style.background = "rgba(154, 255, 0, 1)";
		document.getElementById('sixthPixel').style.background = "rgba(204,0,102,.7)";
		*/
		
		firstShown = false;
		secondShown = false;
		thirdShown = false;
		fourthShown = false;
		fifthShown = false;
		sixthShown = true;
		
		seTtopResearch2Reached(true);
		
	}, { offset: (window.innerHeight / 2) });
	
});

<!-- END OF WAYPOINT.JS INIZIALIZATION -->



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

$(window).scroll(function(e) {
	
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
	/*
	var bioRatio = top / (alphaRatio * currentWindowHeight);
	var researchRatio = (top - currentWindowHeight - $('#whiteBelowBio').height()) / (alphaRatio * currentWindowHeight);
	var publicationsRatio = (top - (2 * currentWindowHeight) - $('#whiteBelowBio').height() - $('#whiteBelowResearch').height()) / (alphaRatio * currentWindowHeight);
							
	if(bioRatio <= 0) bioRatio = 0;
	if(bioRatio > 1) bioRatio = 1;
	if(researchRatio <= 0) researchRatio = 0;
	if(researchRatio > 1) researchRatio = 1;
	if(publicationsRatio <= 0) publicationsRatio = 0;
	if(publicationsRatio > 1) publicationsRatio = 1;
	
	if(currentBg == "cr") {
		$("#bioFirstBlurred").css({ opacity: bioRatio });
		$("#bioSecondBlurred").css({ opacity: 0 });
	}
	else {
		$("#bioFirstBlurred").css({ opacity: 0 });
		$("#bioSecondBlurred").css({ opacity: bioRatio });
	}
	
	$("#bioBlurred").css({ opacity: bioRatio });
	$("#researchBlurred").css({ opacity: researchRatio });
	$("#publicationsBlurred").css({ opacity: publicationsRatio });
	*/
	
	// Scrolling horizontally the map div
	var pageX = top - $('#onTopOfFooter').css("top").replace('px', '') + bodyHeight;
	
	var maxScroll = horizontalScrollStrength / $(window).width() * maxHorizontalScrollOffsetForFirstBlock * -1;
	
	if(pageX >= 0) {
		var newvalueX = pageX * -1;
		var bp = $('#onTopOfFooter').css("background-position").split(' '); // Vertical position
		
		// Since setting just background-position-x is not standard, the whole background-position is set; the sintax is:
		// background-position: Xpx Ypx
		// so it sets the new X value and the current Y value
		$('#onTopOfFooter').css("background-position", (horizontalScrollStrength / $(window).width() * pageX * -1) + "px " + bp[1]);
		// $('#onTopOfFooterOverlay').css("background-position", (horizontalScrollStrength / $(window).width() * pageX * -1) + "px " + bp[1]);
	}
});

/* When the navbar is collapsed, the words must be black since the menu background is white */
var blackWords = function() {
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