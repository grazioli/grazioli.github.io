/*
 * QueryLoader v2 - A simple script to create a preloader for images
 *
 * For instructions read the original post:
 * http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/
 *
 * Copyright (c) 2011 - Gaya Kessler
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version:  2.3
 * Last update: 13-06-2013
 *
 */
(function($) {
	
	/*Browser detection patch*/
	jQuery.browser = {};
	jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt /*, from*/) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++) {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }

    var qLimages = [];
    var qLbgimages = [];
    var qLdone = 0;
    var qLdestroyed = false;

    var qLparent = "";
    var qLimageContainer = "";
    var qLoverlay = "";
    var qLbar = "";
    var qLpercentage = "";
    var qLimageCounter = 0;
    var qLstart = 0;
	var qLdiv = "";

    var qLoptions = {
        onComplete: function () {},
        // backgroundColor: "orange", /* The color is set as a gradient in the CSS (look for #qLoverlay element) */
		 barColor: "#fff",
		 percColor: "#000",
		 overlayId: 'qLoverlay',
		 overlayBar: 'qLbar',
		 overlayDiv: 'qLdiv',
		 barHeight: 10,
		 percentage: true,
		 deepSearch: true,
		 completeAnimation: "fade",
		 minimumTime: 500,
        onLoadComplete: function () {
            if (qLoptions.completeAnimation == "grow") {
                var animationTime = 500;
                var currentTime = new Date();
                if ((currentTime.getTime() - qLstart) < qLoptions.minimumTime) {
                    animationTime = (qLoptions.minimumTime - (currentTime.getTime() - qLstart));
                }

                $(qLbar).stop().animate({
                    "width": "100%"
                }, animationTime, function () {
                    $(this).animate({
                        top: "0%",
                        width: "100%",
                        height: "100%"
                    }, 500, function () {
                        $('#'+qLoptions.overlayId).fadeOut(500, function () {
                            $(this).remove();
                            qLoptions.onComplete();
                        });
                    });
                });
            } else {
				
				/* Once the image loading finished, the following animations remove the bar and the circle first,
				   then the loader div to show the page and, finally, it shows the menu bar with an animation sliding
				   from the top of the window. */
				
				// $('#'+qLoptions.overlayBar).delay(500).fadeOut(500, function () {});
				
				$('#'+qLoptions.overlayId).delay(500).fadeOut(500, function () {
					
					$('#'+qLoptions.overlayDiv).fadeOut(500, function () {
						$('#'+qLoptions.overlayDiv).remove();
						qLoptions.onComplete();
						
						<!-- SHOWING NAVBAR, TITLE AND WHITE DIVs -->
						$('#navbarContainer').animate({'top': '0'}, 800);
						$('#navbar-border-bottom').animate({'opacity': '1'}, 800);
						
						var minContainerHeight = 780;
						var actualContainerHeight;
						
						// On small displays, the container of the top container is 780 height (it is the min height)
						// So, to vertically center its content, its actual size is computed
						if($(window).height() < minContainerHeight) {
							// Small display
							actualContainerHeight = minContainerHeight;
						}
						else {
							// Big display
							actualContainerHeight = $(window).height();
						}
						
						$('#firstWhite').animate({'top': ((actualContainerHeight / 2) - ($('#firstWhite').height() / 2)) - $('#navbarContainer').height() + 'px'}, 800);
						$('#firstBgDarkOverlay').animate({'opacity': 0}, 800);
						$('#secondBgDarkOverlay').animate({'opacity': 1}, 800);
						
						// $('.navigation').animate({'right': '-10'}, 800);
					});
				});
            }
        }
    };

    var afterEach = function (element) {
        //set parent
        qLparent = element;

        //start timer
        qLdestroyed = false;
        var currentTime = new Date();
        qLstart = currentTime.getTime();

        if (qLimages.length > 0) {
			
			// The next timeout waits for the fade-in circle animation defined below to end, before starting the images loading
			setTimeout(function() {
			      createPreloadContainer();
			}, 500);
            
            createOverlayLoader();
        } else {
            //no images == instant exit
            destroyQueryLoader();
        }
    };

    var createPreloadContainer = function() {
        qLimageContainer = $("<div></div>").appendTo("body").css({
            display: "none",
            width: 0,
            height: 0,
            overflow: "hidden"
        });
        
        for (var i = 0; qLbgimages.length > i; i++) {
            $.ajax({
                url: qLbgimages[i],
                type: 'HEAD',
                complete: function (data) {
                    if (!qLdestroyed) {
                        addImageForPreload(this['url']);
                    }
                }
            });
        }        	

    };

    var addImageForPreload = function(url) {	
        var image = $("<img />").attr("src", url).appendTo(qLimageContainer);
        bindLoadEvent(image);
    };

    var bindLoadEvent = function (element) {
        qLimageCounter++;
        element.bind("load error", function () {
            completeImageLoading();
        });
    }

    var completeImageLoading = function () {
        qLdone++;

        var percentage = (qLdone / qLimageCounter) * 100;
        $(qLbar).stop().animate({
            width: percentage + "%",
            minWidth: percentage + "%"
        }, 200);

        if (qLoptions.percentage == true) {
            $(qLpercentage).text(Math.ceil(percentage) + "%");
        }

        if (qLdone == qLimageCounter) {
            destroyQueryLoader();
        }
    };

    var destroyQueryLoader = function () {
        $(qLimageContainer).remove();
        qLdestroyed = true;
        qLoptions.onLoadComplete();
    };

    var createOverlayLoader = function () {
		
        var overlayPosition = "absolute";
		
        if (qLparent.prop("tagName") == "BODY") {
            overlayPosition = "fixed";
        } else {
            qLparent.css("position", "relative");
        }

		/* The following line replaces the definition of the qLoverlay block underneath because, with that one, the page displays
		   for a second BEFORE the loader. So the div is defined in the page immediately after the body tag, styled in the CSS file
		   and is recalled here. */
		qLoverlay = $("#qLoverlay");
		
		var angle = 0;
		/*
		setInterval(function(){
			angle+=0.8;
			$("#raysImg").rotate(angle);
		},50);
		*/
		
		qLdiv = $("<div id='"+qLoptions.overlayDiv+"'><font id='loaderText'></font><br /><font id='loaderText2'></font></div>").css({
            marginTop: "-" + (qLoptions.barHeight / 2) + "px",
            position: "absolute",
            top: (window.innerHeight / 2),
			left: (window.innerWidth / 2),
			width: "0px",
			height: "0px",			 
        }).appendTo(qLoverlay);
		
		/* The circle grows from width and height (0px, 0px) to 360px, 360px) and then shrinks to the right size of (300px, 300px)
		   to show a "bounce" effect. Since the animation starts from the top right corner of the container, the position of
		   the circle is set to (x, y) both equal to half the size of the window menus half its radius (0 in the beginning,
		   180 when it becomes 360px, and 150 when it becomes 300px). */
		$('#qLdiv').animate({
				width: "280px",
				height: "280px",
				top: (window.innerHeight / 2) - 140,
				left: (window.innerWidth / 2) - 140,
			}, 300, function(){
				
				$('#qLdiv').animate({
					width: "240px",
					height: "240px",
					top: (window.innerHeight / 2) - 120,
					left: (window.innerWidth / 2) - 120,
				}, 200, function(){
				
					// $('#loaderText').text("AG Intersys");
					// $('#loaderText2').text("Alessandro Grazioli");
					
					if (qLoptions.percentage == true) {
						qLpercentage = $("<div id='qLpercentage'></div>").text("0%").css({
						}).appendTo(qLdiv);
					}
			});
				
		});
		
        qLbar = $("<div id='"+qLoptions.overlayBar+"'></div>").css({
            // marginTop: "-" + (qLoptions.barHeight / 2) + "px",
            width: "0%",
            // top: (window.innerHeight / 2) + 250 + 'px'
        }).appendTo(qLoverlay);
		
        
        if (!qLimages.length) {
        	destroyQueryLoader();
        }
    };

    var findImageInElement = function (element) {
        var url = "";
        var obj = $(element);
        var type = "normal";

        if (obj.css("background-image") != "none") {
            var url = obj.css("background-image");
            var type = "background";
        } else if (typeof(obj.attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
			
			/* Removed the following line because in local it just works with background images (for img src it doesn't return the full path,
			   but just the local and it doesn't find the image to download) */
			   
            // var url = obj.attr("src"); 
			
        }

        if (url.indexOf("gradient") == -1) {
            url = url.replace(/url\(\"/g, "");
            url = url.replace(/url\(/g, "");
            url = url.replace(/\"\)/g, "");
            url = url.replace(/\)/g, "");

            var urls = url.split(", ");

            for (var i = 0; i < urls.length; i++) {
                if (urls[i].length > 0 && qLimages.indexOf(urls[i]) == -1 && !urls[i].match(/^(data:)/i)) {
                    var extra = "";
                    if ($.browser.msie && $.browser.version < 9) {
                        extra = "?" + Math.floor(Math.random() * 3000);

                        qLbgimages.push(urls[i] + extra);
                        qLimages.push(urls[i]);
                    } else {
                        qLimages.push(urls[i]);

                        if (type == "background") {
                            qLbgimages.push(urls[i] + extra);
                        } else {
                            bindLoadEvent(obj);
                        }
                    }
                }
            }
        }
    }

    $.fn.queryLoader2 = function(options) {
        if(options) {
            $.extend(qLoptions, options );
        }

        this.each(function() {
            findImageInElement(this);
            if (qLoptions.deepSearch == true) {
                $(this).find("*:not(script)").each(function() {
                    findImageInElement(this);
                });
            }
        });

        afterEach(this);

        return this;
    };

    //browser detect
    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function (data) {
            for (var i=0;i<data.length;i++)	{
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            { 	string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            },
            {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            },
            {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
            },
            {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            },
            {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            },
            {		// for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            { 		// for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ],
        dataOS : [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]

    };
	BrowserDetect.init();
    jQuery.browser.version = BrowserDetect.version;
})(jQuery);
