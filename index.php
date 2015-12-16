<!DOCTYPE html>
<html lang="en"><head>
    <meta charset="utf-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <meta name="HandheldFriendly" content="true" />

    <!-- Bootstrap core CSS -->
    <link href="style/bootstrap.min.css" rel="stylesheet">

    <meta name="description" content="Alessandro Grazioli's Personal Web Site" />
    <meta name="author" content="Alessandro Grazioli" />
    <meta name="robots" content="index,follow" />
    <meta name="revisit-after" content="15 DAYS" />
    <meta name="keywords" content="Informatica, Web, Design, Ricerca"/>
    
    <title>AG Intersys</title>
    <link rel="shortcut icon" type="image/x-icon" href="images/ico/favicon.ico" />

    <!-- Le styles -->
    <link href="style/style.css" rel="stylesheet">
            
    <!-- Google Fonts links, to use special fonts -->
    <link href='http://fonts.googleapis.com/css?family=Merriweather:400,900italic,900,700italic,700,400italic,300italic,300' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Oxygen:400,300,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Michroma' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lato:300' rel='stylesheet' type='text/css'>
    
    <link href='http://fonts.googleapis.com/css?family=Oswald:300' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,800' rel='stylesheet' type='text/css'>
    
    <link rel="stylesheet" href="font-awesome-4.1.0/css/font-awesome.min.css">
    
    <!-- For third-generation iPad with high-resolution Retina display: -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/ico/apple-touch-icon-144x144-precomposed.png">
    
    <!-- For iPhone with high-resolution Retina display: -->
    
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/ico/apple-touch-icon-114x114-precomposed.png">
    
    <!-- For first- and second-generation iPad: -->
    
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/ico/apple-touch-icon-72x72-precomposed.png">
    
    <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
    
    <link rel="apple-touch-icon-precomposed" href="images/ico/apple-touch- icon-precomposed.png">
        
    <script>
		<!-- Function which checks if the site is executing on a mobile device to avoid loading parallax effect -->
		function isMobile() {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		}
	</script>
    
    <!-- ********************* Google Analytics monitoring code ********************* -->
    
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		
		ga('create', 'UA-56595936-1', 'auto');
		ga('send', 'pageview');
    
    </script>
        
    <!-- **************************************************************************** -->
    
    <!-- ********************* selectivizr is a JavaScript utility that emulates CSS3 pseudo-classes and attribute selectors in Internet Explorer 6-8 ********************* -->
    <!--[if (gte IE 6)&(lte IE 8)]>
    	<script type="text/javascript" src="js/selectivizr.js"></script>
    	<noscript><link rel="stylesheet" href="[fallback css]" /></noscript>
    <![endif]--> 

  </head>

  <body>
  
    <div id="qLoverlay">
        <!-- Preloader Background -->
        <div id="overlay2">
        </div>
    </div>
    
    <!-- Block with small circles on the right of the page which link to the sections of the page -->  
    <!--  
    <ul class="navigation" style="right:-60px; opacity:0;">
        <li id="firstPixel" class="pixel" data-slide="1"></li>
        <li id="secondPixel" class="pixel" data-slide="2"></li>
        <li id="thirdPixel" class="pixel" data-slide="3"></li>
        <li id="fourthPixel" class="pixel" data-slide="4"></li>
        <li id="fifthPixel" class="pixel" data-slide="5"></li>
        <li id="sixthPixel" class="pixel" data-slide="6"></li>
    </ul>
    -->

    <!-- Static navbar -->
    <div class="navbar navbar-default navbar-fixed-top" id="navbarContainer" style="top:-56px; font-family:'Times New Roman', Times, serif;" role="navigation">
      <div class="container">
      <div class="navbar-inner"> 
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" onClick="blackWords();">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand bar-link-font" style="font-size:30px; color:#FFF; margin-left:70px;"><img id="smallLogoWhite" src="images/logo/logoNoText.png" width="45" height="30" style=" opacity:1;" /><img id="smallLogoBlack" src="images/logo/logoNoTextBlack.png" width="45" height="30" style="position:relative; left:-45px; opacity:0;" /></a>
        </div>
        
        <!-- When the screen width os too little, the bar is collapsed and button is added to display it. The "in" class is added, so its style can change the appearance of the menu -->
        <div id="navbarCollapse" class="navbar-collapse collapse no-transition">
          <ul class="nav navbar-nav">
            <li><a class="barLink" data-slide="1" href="#bio"><font id="bioFont" class="container-content bar-link-font" style="color:rgb(0, 206, 247);">BIO</font></a></li>
            <li><a class="barLink" data-slide="2" href="#research"><font id="researchFont" class="container-content bar-link-font">WORK</font></a></li>
            <li><a class="barLink" data-slide="3" href="#publications"><font id="publicationsFont" class="container-content bar-link-font">RESEARCH</font></a></li>
            <li><a class="barLink" data-slide="4" href="#divsContainer"><font id="miscFont" class="container-content bar-link-font">MISCELLANEOUS</font></a></li>
          </ul>
          
          <ul class="nav navbar-nav navbar-right">
            <li><a class="barLink contact-me" href="javascript:void(0)" onClick="mail();" style="text-decoration:none;"><font id="contactFont" class="container-content bar-link-font">CONTACT ME</font></a></li>
          </ul>
          
          </div>
          
          <!-- Border at the bottom of the bar -->
          <!-- <hr id="navbar-border-bottom" style="width: 85%; border-top:1px dashed rgba(255, 255, 255, 0.3); position: relative; top: -15px; opacity:0;"> -->
          
        </div><!--/.nav-collapse -->
      </div><!--/.container -->
    </div><!--/.navbar -->
           
    <div class="container">
    
    	<!-- Add fixed background if on a mobile device -->
    	<script type="text/javascript">
			// if (isMobile()) {
				document.write('<img id="bioImageBackground" class="background-image-container" src="images/bg/deskNew.jpg" style="position:fixed; z-index:10;" \/>');
			// }
		</script>
        
        
       <!-- 
       <video autoplay loop poster="video/polina.jpg" id="bgvid">
        	<source src="video/polina.webm" type="video/webm">
        	<source src="video/polina.mp4" type="video/mp4">
       </video>
        
       <style type="text/css">
			video#bgvid { 
				position: fixed;
				right: 0;
				bottom: 0;
				min-width: 100%;
				min-height: 100%;
				width: auto;
				height: auto;
				z-index: 1;
				background: url(images/bg/cr.jpg) no-repeat;
				background-size: cover;
			}
		</style>
       --> 
        
        
        <!-- ********************* Cross SVG icon and side menu ********************* -->
        	
		<script src="js/snap.svg-min.js"></script>
		<script src="js/modernizr.custom.js"></script>
        
        <div id="menuButtonBg"></div>
        
        <section class="si-icons si-icons-easing">
            <span class="si-icon si-icon-hamburger-cross" data-icon-name="hamburgerCross" onClick="showMenu();" style="top:-2px; left:-60px;"></span>
        </section>
        
        <div id="sideMenu">
        	<!-- <img src="images/logo/logo.png" width="150" /> -->
            
            <div class="menu-button-current" style="display: table; overflow: hidden;">
                <div style="display: table-cell; vertical-align: middle;">
                	<div>
                		<i class="fa fa-home"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HOME
                	</div>
                </div>
            </div>
            
            <div class="menu-button" style="display: table; overflow: hidden;" onClick="location.href = 'bio.html'">
                <div style="display: table-cell; vertical-align: middle;">
                	<div>
                		<i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BIO
                	</div>
                </div>
            </div>
            
            <div class="menu-button" style="display: table; overflow: hidden;" onClick="location.href = 'work.html'">
                <div style="display: table-cell; vertical-align: middle;">
                	<div>
                		<i class="fa fa-cogs"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORK
                	</div>
                </div>
            </div>
            
            <div class="menu-button" style="display: table; overflow: hidden;" onClick="location.href = 'research.html'">
                <div style="display: table-cell; vertical-align: middle;">
                	<div>
                		<i class="fa fa-graduation-cap"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RESEARCH
                	</div>
                </div>
            </div>
            
            <div id="sideMenuLinks">
            	<a class="linksClass" href="https://twitter.com/AlessandroGraz2"><i class="fa fa-twitter"></i></a>
               <a class="linksClass" href="https://www.facebook.com/alessandro.grazioli1" style="margin-left:20px;"><i class="fa fa-facebook"></i></a>
               <a class="linksClass" href="https://plus.google.com/108184499896505903960/posts" style="margin-left:20px;"><i class="fa fa-google-plus"></i></a>
               <a class="linksClass" href="http://it.linkedin.com/pub/alessandro-grazioli/62/542/1a3" style="margin-left:20px;"><i class="fa fa-linkedin"></i></a>
            </div>
            
       </div>
       
       <!-- Code for the SVG menu button --> 
		<script src="js/svgicons-config.js"></script>
		<script src="js/svgicons.js"></script>
		<script>
			(function() {
				// initialize all
				
				[].slice.call( document.querySelectorAll( '.si-icons-default > .si-icon' ) ).forEach( function( el ) {
					var svgicon = new svgIcon( el, svgIconConfig );
				} );
				
				new svgIcon( document.querySelector( '.si-icons-easing .si-icon-hamburger-cross' ), svgIconConfig, { easing : mina.elastic, speed: 600 } );
			})();
		</script>
        
        <!-- ************************************************************************ -->
        
        
        
        
    
    	<!-- To have parallax effect, add  data-stellar-background-ratio="0" attribute and change the value to the speed (e.g. 0.2); link jstellar script (it is now commented at the bottom of the page) and uncoment its configuration in main.js -->
        <!-- <div id="bio" class="jumbotron masthead slide parallaxBg" data-slide="1" data-stellar-ratio="1.1" style="overflow:hidden; z-index:1; background: no-repeat center center fixed; -moz-background-size: cover; -webkit-background-size: cover; -o-background-size: cover; background-size: cover; background-image: url('images/bg/cr.jpg'); position:absolute; top:0; left:0;"> -->
        
        <div id="bio" class="jumbotron masthead slide parallaxBg" data-slide="1" style="overflow:hidden; z-index:1; position:absolute; top:0; left:0; z-index:10; background-color:rgba(0, 0, 0, 0);">
        
        <!-- Overlay -->
        <!--<div style="position:absolute; top:0; left:0; width:100%; height:100%; background-image:url(images/bgOverlays/05.png); background-repeat:repeat;"></div> -->
        
                <script type="text/javascript">
					<!-- Add parallax background if not on a mobile device -->
					/* if (!isMobile()) {
						document.write('<img id="bioImageBackground" class="background-image-container" src="images/bg/cr.jpg" data-stellar-ratio="0.2" style="position:fixed;" \/>');
					} */
				</script>
            
            <!-- Background image overlays (the first is black, the second is a gradient of blue) -->
            <div id="firstBgDarkOverlay" class="background-dark-overlay" style="opacity:1;"></div>
            <div id="secondBgDarkOverlay"></div>
            
            <!-- <div id="firstWhite" class="row-fluid marketing white" style="top:100%; left:0; text-align:center; -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0);"> -->
            <div id="firstWhite" class="row-fluid marketing white" style="top:100%; left:0; text-align:center; -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0);">
                
                <div class="container-fluid" style="font-family: 'Open Sans'; font-size: 18px; color: #FFF; padding: 0px; margin: 0px;">
                
                    <div class="row">
                        <div class="col-md-12">
                            <!-- To vertically center text in the div, the line-height attribute is put to the same height of the div>; then a single span element includes all the content with vertical-align attribute set to middle and line-height set to normal -->
                            <span style="display: inline-block; vertical-align: middle;">
                                <div id="bioBgDiv" class="dottedBg" style="position:relative; width:100%; background: rgba(0, 0, 0, 0); top:100%; left:0; z-index:4;">
                                    <div style="width:100%; margin:0px;" class="parallaxDiv">
                                        <div style="overflow: hidden;">
                                            <a class="linksClassSameTab" href="bio.html" style="color:#FFF;">
                                               <div id="bioFirstRow" class="row">
                                                    <div class="col-xs-8 col-md-8" style="font-size:268px; color:rgba(255, 255, 255, 0.8); font-family:Oxygen; text-align:right; position:relative; top:-98px;">
                                                        <!-- <b>B</b> -->
                                                        <img src="images/logo/logoNoText.png" width="260" style="opacity:0.9" />
                                                    </div>
                                                    <!--
                                                    <div class="col-xs-4 col-md-4">
                                                        <div>
                                                            <b style="font-weight: 300 !important;">i</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">n</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">t</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">e</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">r</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">s</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">y</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">s</b>
                                                        </div>
                                                    </div>
                                                    -->
                                                </div>
                                               
                                            </a>
                                        </div>
                                    </div>
                                </div><!-- /.bioBgDiv -->
                            </span>
                        </div><!-- /.col-md-12 -->
                    </div><!-- /.row -->
                    
                    <!-- <div id="bioSecondRow" class="row">
                    
                        <div class="col-md-12">
                            <div class="column-1-text-left" style="text-align:left;"><font style="font-weight:800">Innovation</font><font style="font-weight:100"> and </font><font style="font-weight:800;">great solutions </font><font style="font-weight:100">come from </font><font style="font-weight:800">research </font><font style="font-weight:100;">and </font><font style="font-weight:800">initiative</font></div>
                        </div><!-- /.col-md-12 -->
                        
                    <!-- </div><!-- /.row -->
                    
                    <div class="centerText"><font style="font-weight: 800;">Innovation</font> and great solutions come from <font style="font-weight: 800;">research</font> and <font style="font-weight: 800;">initiative</font></div>
                    
                    <hr class="white-hr">

                </div><!-- /.container -->
            </div><!--/#firstWhite -->
        
			<!-- <i id="bioArrowDown" class="fa fa-chevron-down arrowDown" data-slide="2"></i> -->
            
            <!-- <div id="arrowDownBackgroundDiv1" class="arrow-down-background-div"></div> -->
             
            <div id="arrowDown1" class="arrowDownContainer arrowDown" data-slide="2" style="z-index:5001 !important;">
                <div class="arrowDownPng"></div>
                <div class="mouseSvg"></div>
            </div>
            <div id="scrollDownText1" class="scrollDown" style="z-index:5000 !important;">
            	<font id="scroll" class="scroll" style="position: relative; left: -40px;">SCROLL</font><font id="down" class="down" style="position: relative; left: 30px;">DOWN</font>
            </div>
        
        </div><!--/#bio -->
        
        
        
        
        
        
        
        <div id="whiteBelowBio" class="white-separator" style="background-color:#FFF; width:100%; position:absolute; left:0; overflow:hidden; z-index:1000;">
            
            <div id="timeTitle" style="margin-top:20px; margin-left:0px; margin-right:0px;">
            
            	<!--<div style="width:100%;">
            
                    <div class="lead" style="margin-left:30px; margin-right:30px; padding-right:30px; float:left; border-right:1px solid #777; height: 90px;">
                        <button class="border-button" onClick="window.open('resources/cv.pdf')">Curriculum</button><br /><a class="link-button" href="bio.html"><button class="border-button" style="position:relative; top: 10px;">Biography</button></a>
                    </div> -->
                    
                    <div class="section-title">a brief <font class="section-title-bold">description</font></div>
                    
                    <hr class="white-hr">
                    
                    <div class="lead white-text" style="margin-top:10px; text-align:center; padding-left:10%; padding-right:10%;">
                    	I am a Ph.D. Candidate in Information Technologies at the University of Parma (Italy) where I also got my B.Sc. and M.Sc. in Computer Engineering.
                    </div>
                
                <!-- </div> -->
                
                
                <div class="lead white-text" style="margin-top:10px; text-align:center; padding-left:10%; padding-right:10%;">
                	Together with my reasearch activity, I work with companies as an IT Consultant led by the <font style="font-family:'Merriweather',serif; font-weight:800;">love</font> for innovation and research. Occasionally, I also assume the role of teacher for professionals and students.
                </div>
                
                <div style="padding-left:10%; padding-right:10%; text-align:center; position:relative; top:20px; margin-bottom:52px;"><button class="border-button" onClick="window.open('resources/cv.pdf')">Curriculum</button>&nbsp;&nbsp;<a class="link-button" href="bio.html"><button class="border-button">Biography</button></a></div>
                
            </div><!-- /timeTitle -->
        </div><!-- /whiteBelowBio -->
            
            
            
                
            
            <div id="divBetweenWhites" style="width:100%; position:absolute; left:0; overflow:hidden; z-index:1000; background-image:url(images/bgOverlays/01.png); background-repeat:repeat;">
            
            	<script type="text/javascript">
					<!-- Add parallax background if not on a mobile device -->
					/* if (!isMobile()) {
						document.write('<img id="belowBioImageBackground" class="background-image-container" src="images/bg/mapBW.png" data-stellar-ratio="0.1" style="position:absolute;" \/>');
						document.write('<div style="width:100%; height:100%; position:absolute; left:0; overflow:hidden; background-image:url(images/bgOverlays/01.png); background-repeat:repeat; background-color: rgba(24, 0, 44, .2);" ><\/div>');
					} */
				</script>
                
                <!--
                <div class="row">
                
                	<div class="col-md-4 divBetweenWhitesContent" style="padding: 15px; text-align:right; padding-right:20px;">
                        <div class="divBetweenWhitesContent" style="border:0px; width: 100%;">
                            <span style="display: inline-block; vertical-align: middle; line-height: normal; ">
                                CIAO
                            </span>
                        </div>
                    </div>
                
					<div class="col-md-4 divBetweenWhitesContent" style="padding: 15px; text-align:center;">
                        <div class="divBetweenWhitesContent" style="border:0px; width: 100%;">
                            <span style="display: inline-block; vertical-align: middle; line-height: normal; ">
                                CIAO
                            </span>
                        </div>
                    </div>
                    
                    <div class="col-md-4 divBetweenWhitesContent" style="padding: 15px; text-align:left; padding-left:20px;">
                        <div class="divBetweenWhitesContent" style="border:0px; width: 100%;">
                            <span style="display: inline-block; vertical-align: middle; line-height: normal; ">
                                CIAO
                            </span>
                        </div>
                    </div>
                    
				</div>
                -->
            
            </div>
            
            
            
                
            <div id="whiteBelowBio2" class="white-separator" style="background-color:#FFF; width:100%; position:absolute; left:0; overflow:hidden; z-index:1000;">
            
                <div class="lead white-text" style="text-align:center; padding-left:10%; padding-right:10%; position:relative; top:15px; margin-bottom:30px;">
                	I look forward to working with <font style="font-weight:800;">leading-edge companies</font> dealing with the following topics.
                </div>
           
            
            <!--
        	<div style="float:left; width:50%;">
            -->
            <div>
            	<div class="stencil" id="styledBg1"><span class="bar-text lead" id="barText1">&nbsp;&nbsp;&nbsp;WEB DESIGN</span></div>
                <div class="stencil" id="styledBg2"><span class="bar-text lead" id="barText2">&nbsp;&nbsp;&nbsp;MOBILE APPS</span></div>
                <div class="stencil" id="styledBg3"><span class="bar-text lead" id="barText3">&nbsp;&nbsp;&nbsp;LEARNING</span></div>
                <div class="stencil" id="styledBg4"><span class="bar-text lead" id="barText4">&nbsp;&nbsp;&nbsp;ENVIRONMENT</span></div>
                <div class="stencil" id="styledBg5"><span class="bar-text lead" id="barText5">&nbsp;&nbsp;&nbsp;RESEARCH</span></div>
                <div class="stencil" id="styledBg6"><span class="bar-text lead" id="barText6">&nbsp;&nbsp;&nbsp;HEALTH</span></div>
            
                <div class="bar-graph" id="firstBar"></div>
                <div class="bar-graph" id="secondBar"></div>
                <div class="bar-graph" id="thirdBar"></div>
                <div class="bar-graph" id="fourthBar"></div>
                <div class="bar-graph" id="fifthBar"></div>
                <div class="bar-graph" id="sixthBar"></div>
            </div>
            
            <div id="timeFooter" style="margin-bottom:20px; bottom:20px;">
            	<p class="lead white-text" style="text-align:center; text-align:center; padding-left:10%; padding-right:10%;">
                	If you have such features please contact me and we may start a profitable and interesting <font style="font-weight: 800;">collaboration</font>!
                </p>
            </div>
            
            
            
        </div>
        
        
        
        
        
       
     
      	<!-- To have parallax effect, add  data-stellar-background-ratio="0" attribute and change the value to the speed (e.g. 0.2) -->
        <!-- <div id="research" class="jumbotron masthead slide parallaxBg" data-slide="2" style="overflow:hidden; z-index:1; background: no-repeat center center fixed; -moz-background-size: cover; -webkit-background-size: cover; -o-background-size: cover; background-size: cover; background-image: url('images/bg/work.jpg'); position:absolute; left:0;"> -->
        
        <div id="research" class="jumbotron masthead slide parallaxBg" data-slide="2" style="overflow:hidden; z-index:1; position:absolute; top:0; left:0; z-index:10; background-color:rgba(0, 0, 0, 0);">
        
        	<!-- <img id="workImageBackground" class="background-image-container" src="images/bg/work.jpg" data-stellar-ratio="0.2" style="position:absolute;" /> -->
              
			<script type="text/javascript">
                <!-- Add parallax background if not on a mobile device -->
                /* if (!isMobile()) {
                    document.write('<img id="workImageBackground" class="background-image-container" src="images/bg/work.jpg" data-stellar-ratio="0.2" style="position:absolute;" \/>');
                } */
            </script>
        
        	<!--<div id="researchBlurred" class="jumbotron masthead slide parallaxBg" style="overflow:hidden; z-index:2; background: no-repeat center center fixed; -moz-background-size: cover; -webkit-background-size: cover; -o-background-size: cover; background-size: cover; background-image: url('images/bg/deskBlurred.jpg'); position:absolute; left:0;"></div>-->
        
            <!-- Background image overlay -->
            <!-- <div style="width:100%; height:100%; position:absolute; top:0; left:0; background-image:url(images/bgOverlays/05.png); background-repeat:repeat; opacity:0.4;"></div> -->
 
            <!-- Background image overlay -->
            <div id="thirdBgDarkOverlay" class="background-dark-overlay" style="opacity:1;"></div>
            <div id="fourthBgDarkOverlay"></div>
            
            
            
            
            
            
            
            
            
            <!-- <div id="secondWhite" class="row-fluid marketing white" style="top:100%; left:0; text-align:center; -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0);"> -->
            <div id="secondWhite" class="row-fluid marketing white" style="left:0; text-align:center; -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0);">
                
                <div class="container-fluid" style="font-family: 'Open Sans'; font-size: 18px; color: #FFF; padding: 0px; margin: 0px;">
                
                    <div class="row">
                        <div class="col-md-12">
                            <!-- To vertically center text in the div, the line-height attribute is put to the same height of the div>; then a single span element includes all the content with vertical-align attribute set to middle and line-height set to normal -->
                            <span style="display: inline-block; vertical-align: middle;">
                                <div id="researchBgDiv" class="dottedBg" style="position:relative; width:100%; background: rgba(0, 0, 0, 0); top:100%; left:0; z-index:4;">
                                    <div id="workContainer" style="width:100%; margin:0px;" class="parallaxDiv">
                                        <div style="overflow: hidden;">
                                            <a class="linksClassSameTab" href="work.html" style="color:#FFF;">
                                               <div id="researchFirstRow" class="row" style="position:relative; top:25px;">
                                                    <div class="col-xs-8 col-md-8" style="font-size:200px; color:rgba(255, 255, 255, 1); font-family:Oxygen; text-align:right; position:relative; top:-65px;">
                                                        <b>W</b>
                                                    </div>
                                                    <div class="col-xs-4 col-md-4" style="font-size:34px;">
                                                        <div>
                                                            <b style="font-weight: 300 !important;">o</b>
                                                        </div>
                                                        <div>
                                                            <b style="position:relative; top:10px; font-weight: 300 !important;">r</b>
                                                        </div>
                                                        <div>
                                                            <b style="position:relative; top:21px; font-weight: 300 !important;">k</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div><!-- /.researchBgDiv -->
                            </span>
                        </div><!-- /.col-md-12 -->
                    </div><!-- /.row -->
                    
                    <!-- div id="researchSecondRow" class="row">
                        <div class="col-md-12">
                            <div class="column-1-text-right" style="text-align:right;"><font style="font-weight:800">IT Consulting </font><font style="font-weight:100">is a faithful <font style="font-weight:800;">professional </font><font style="font-weight:100">relationship to identify the best </font><font style="font-weight:800">technologies</font><font style="font-weight:100;"> and meet </font><font style="font-weight:800">business objectives</font></div>
                        </div><!-- /.col-md-12 -->
                    <!-- </div><!-- /.row -->
                    
                    <div id="secondWhiteText" class="centerText"><font style="font-weight: 800;">IT Consulting</font> is a faithful professional relationship to identify the best  <font style="font-weight: 800;">technologies</font> and meet  <font style="font-weight: 800;">business</font> objectives</div>
                    
                    <hr id="blueHr2" class="white-hr">
                    
                </div><!-- /.container -->
            </div><!--/#secondWhite -->
            
            
            
            
            
            
            
            
            
            <!-- <i id="researchArrowDown" class="fa fa-chevron-down arrowDown" data-slide="3"></i> -->
            
            <!-- <div id="arrowDownBackgroundDiv2" class="arrow-down-background-div"></div> -->
            
            <div id="arrowDown2" class="arrowDownContainer arrowDown" data-slide="3" style="z-index:5001 !important;">
                <div class="arrowDownPng"></div>
                <div class="mouseSvg"></div>
            </div>
            <div id="scrollDownText2" class="scrollDown" style="z-index:5000 !important;">
            	<font id="scroll" class="scroll" style="position: relative; left: -40px;">SCROLL</font><font id="down" class="down" style="position: relative; left: 30px;">DOWN</font>
            </div>
        
        </div><!--/#research -->
        
        <div id="whiteBelowResearch" class="white-separator" style="background-color:#FFF; width:100%; color:#000; position:absolute; left:0; overflow: hidden; z-index:1000;">
        
        
        
        	<center>
                <div class="container-fluid" style="font-family: 'Open Sans'; font-size: 18px; color: #FFF;">
                    <div class="row">
                        
                        <div class="col-md-6" style="height: 400px; padding: 15px;">
                            <!-- To vertically center text in the div, the line-height attribute is put to the same height of the div>; then a single span element includes all the content with vertical-align attribute set to middle and line-height set to normal -->
                            <div style="border:0px; width: 100%; height: 370px; line-height: 370px; padding: 15px;">
                                <span style="display: inline-block; vertical-align: middle; line-height: normal; ">
                                    <p class="lead" style="font-size:60px; line-height:50px; color:#777; text-align:center;">
                                        my <font style="font-weight: 800; color:#000;">work</font>
                                    </p>
                                    <p class="lead" style="font-size:32px; line-height:50px; color:#777; text-align:center;">
                                        vocational &amp; teaching
                                    </p>
                                    <center><a class="link-button" href="work.html"><button class="border-button" style="width:270px; padding-left:15px; padding-right:15px;">Previous &amp; Current Work</button></a></center>
                                </span>
                            </div>
                        </div>
                        
                        <div id="workBarContainer" class="col-md-6 whiteDivContainingBars" style="padding: 0px; margin: 0px; height: 400px; border-left:1px solid #F6F6F6; padding-left:10px; padding-right:10px;">
                            <div class="bar-graph-vertical" id="firstVerticalBar">
                                <p class="lead vertical-bar-text-from-top">
                                    Programming Teacher
                                </p>
                            </div>
                            <div class="bar-graph-vertical" id="secondVerticalBar">
                                <p class="lead vertical-bar-text-from-top">
                                    Web Designer &amp; Developer
                                </p>
                             </div>
                            <div class="bar-graph-vertical" id="thirdVerticalBar">
                                <p class="lead vertical-bar-text-from-top">
                                    Software Developer
                                </p>
                            </div>
                            <div class="bar-graph-vertical" id="fourthVerticalBar">
                                <p class="lead vertical-bar-text-from-top">
                                    IT Consultant
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </center>
        
        </div>
        
        
        <!-- To have parallax effect, add  data-stellar-background-ratio="0" attribute and change the value to the speed (e.g. 0.2) -->
        <!-- <div id="publications" class="jumbotron masthead slide parallaxBg" data-slide="3" style="overflow:hidden; z-index:1; background: no-repeat center center fixed; -moz-background-size: cover; -webkit-background-size: cover; -o-background-size: cover; background-size: cover; background-image: url('images/bg/research.jpg'); position:absolute; left:0;"> -->
        
        <div id="publications" class="jumbotron masthead slide parallaxBg" data-slide="3" style="overflow:hidden; z-index:1; position:absolute; top:0; left:0; z-index:10; background-color:rgba(0, 0, 0, 0);">
        
        	<!-- <img id="publicationsImageBackground" class="background-image-container" src="images/bg/research.jpg" data-stellar-ratio="0.2" style="position:absolute;" /> -->
            
			<script type="text/javascript">
                <!-- Add parallax background if not on a mobile device -->
                /* if (!isMobile()) {
                    document.write('<img id="publicationsImageBackground" class="background-image-container" src="images/bg/research.jpg" data-stellar-ratio="0.2" style="position:absolute;" \/>');
                } */
            </script>
        
        	<!--<div id="publicationsBlurred" class="jumbotron masthead slide parallaxBg" style="overflow:hidden; z-index:2; background: no-repeat center center fixed; -moz-background-size: cover; -webkit-background-size: cover; -o-background-size: cover; background-size: cover; background-image: url('images/bg/libBlurred.jpg'); position:absolute; left:0;"></div>-->
        
            <!-- Background image overlay -->
            <!-- <div style="width:100%; height:100%; position:absolute; top:0; left:0; background-image:url(images/bgOverlays/05.png); background-repeat:repeat; opacity:0.4;"></div> -->
            
            <!-- Background image overlay -->
            <div id="fifthBgDarkOverlay" class="background-dark-overlay" style="opacity:1;"></div>
            <div id="sixthBgDarkOverlay"></div>
            
            
            
            
            
            
            
            <!-- <div id="thirdWhite" class="row-fluid marketing white" style="top:100%; left:0; text-align:center; -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0);"> -->
            <div id="thirdWhite" class="row-fluid marketing white" style="left:0; text-align:center; -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0); box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0);">
                
                <div class="container-fluid" style="font-family: 'Open Sans'; font-size: 18px; color: #FFF; padding: 0px; margin: 0px;">
                
                    <div class="row">
                        <div class="col-md-12">
                            <!-- To vertically center text in the div, the line-height attribute is put to the same height of the div>; then a single span element includes all the content with vertical-align attribute set to middle and line-height set to normal -->
                            <span style="display: inline-block; vertical-align: middle;">
                                <div id="publicationsBgDiv" class="dottedBg" style="position:relative; width:100%; background: rgba(0, 0, 0, 0); top:100%; left:0; z-index:4;">
                                    <div id="researchContainer" style="width:100%; margin:0px;" class="parallaxDiv">
                                        <div style="overflow: hidden;">
                                            <a class="linksClassSameTab" href="research.html" style="color:#FFF;">
                                               <div id="publicationsFirstRow" class="row" style="position:relative; top:40px;">
                                                    <div class="col-xs-8 col-md-8" style="font-size:232px; color:rgba(255, 255, 255, 1); font-family:Oxygen; text-align:right; position:relative; top:-84px;">
                                                        <b>R</b>
                                                    </div>
                                                    <div class="col-xs-4 col-md-4">
                                                        <div>
                                                            <b style="font-weight: 300 !important;">e</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">s</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">e</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">a</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">r</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">c</b>
                                                        </div>
                                                        <div>
                                                            <b style="font-weight: 300 !important;">h</b>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </a>
                                        </div>
                                    </div>
                                </div><!-- /.publicationsBgDiv -->
                            </span>
                        </div><!-- /.col-md-12 -->
                    </div><!-- /.row -->
                    
                    <!-- <div id="publicationsSecondRow" class="row">
                        <div class="col-md-12">
                            <div class="column-1-text-left" style="text-align:left;"><font style="font-weight:800">Research</font><font style="font-weight:100"> is the fusion of</font><br /><font style="font-weight:800;">creativity </font><font style="font-weight:100">and </font><font style="font-weight:800">science</font><br /><font style="font-weight:100;">to extend </font><font style="font-weight:800">human knowledge</font></div>
                        </div><!-- /.col-md-12 -->
                    <!-- </div><!-- /.row -->
                    
                    <div id="thirdWhiteText" class="centerText"><font style="font-weight: 800;">Research</font> is the fusion of <font style="font-weight: 800;">creativity</font> and <font style="font-weight: 800;">science</font> to extend knowledge</div>
                    
                    <hr id="blueHr3" class="white-hr">
                    
                    <div id="thirdWhiteText2" class="centerText2"><font class="papers-number">0</font><br />PUBLISHED WORKS</div>
                    
                </div><!-- /.container -->
            </div><!--/#thirdWhite -->
            
            
            
            
            
            
            
            
            <!-- <i id="publicationsArrowDown" class="fa fa-chevron-down arrowDown" data-slide="4"></i> -->
            
            <!-- <div id="arrowDownBackgroundDiv3" class="arrow-down-background-div"></div> -->
            
            <div id="arrowDown3" class="arrowDownContainer arrowDown" data-slide="4" style="z-index:5001 !important;">
                <div class="arrowDownPng"></div>
                <div class="mouseSvg"></div>
            </div>
            <div id="scrollDownText3" class="scrollDown" style="z-index:5000 !important;">
            	<font id="scroll" class="scroll" style="position: relative; left: -40px;">SCROLL</font><font id="down" class="down" style="position: relative; left: 30px;">DOWN</font>
            </div>
            
            
            
        </div><!--/#publications -->
        
        <div id="whiteBelowPublications" class="white-separator" style="background-color:#FFF; width:100%; color:#000; position:absolute; left:0; overflow: hidden; z-index:1000;">
          
            <center>
                <div class="container-fluid" style="font-family: 'Open Sans'; font-size: 18px; color: #FFF;">
                    <div class="row">
                        
                        <div id="researchBarContainer" class="col-md-6 whiteDivContainingBars" style="padding: 0px; margin: 0px; height: 400px; border-right:1px solid #F6F6F6; padding-left:10px; padding-right:10px;">
                            <div class="bar-graph-vertical-from-bottom" id="firstVerticalBarFromBottom" style="text-align:center;">
                                 <p class="lead vertical-bar-text-from-bottom">
                                    Vehicular Networks
                                </p>
                            </div>
                            <div class="bar-graph-vertical-from-bottom" id="secondVerticalBarFromBottom" style="text-align:center;">
                                 <p class="lead vertical-bar-text-from-bottom">
                                    Peer-to-Peer Computing
                                </p>
                            </div>
                            <div class="bar-graph-vertical-from-bottom" id="thirdVerticalBarFromBottom" style="text-align:center;">
                                 <p class="lead vertical-bar-text-from-bottom">
                                    Autonomic Computing
                                </p>
                            </div>
                            <div class="bar-graph-vertical-from-bottom" id="fourthVerticalBarFromBottom" style="text-align:center;">
                                 <p class="lead vertical-bar-text-from-bottom">
                                    Cloud Computing
                                </p>
                            </div>
                            <div class="bar-graph-vertical-from-bottom fifth-bar" id="fifthVerticalBarFromBottom" style="text-align:center;">
                                 <p class="lead vertical-bar-text-from-bottom">
                                    Mobile Computing
                                </p>
                            </div>
                        </div>
                        
                         <div class="col-md-6" style="height: 400px; padding: 15px;">
                            <!-- To vertically center text in the div, the line-height attribute is put to the same height of the div>; then a single span element includes all the content with vertical-align attribute set to middle and line-height set to normal -->
                            <div style="border:0px; width: 100%; height: 370px; line-height: 370px; padding: 15px;">
                                <span style="display: inline-block; vertical-align: middle; line-height: normal; ">                                
                                    <p class="lead" style="font-size:60px; line-height:50px; color:#777; text-align:center;">
                                        my <font style="font-weight: 800; color:#000;">research</font>
                                    </p>
                                    <p class="lead" style="font-size:32px; line-height:50px; color:#777; text-align:center;">
                                        interests &amp; activities
                                    </p>
                                    <center><a class="link-button" href="research.html"><button class="border-button" style="width:250px; padding-left:15px; padding-right:15px;">Details &amp; Publications</button></a></center>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </center>
           
        </div><!--/#whiteBelowPublications -->
        
        
        
        
        <div id="divsContainer" style="width:100%; overflow:hidden; z-index:1000;">
        
        	<!-- To have parallax effect, add  data-stellar-background-ratio="0" attribute and change the value to the speed (e.g. 0.2) -->
			<!-- <div id="research2" class="slide" data-slide="4" style="z-index:11; background: no-repeat center center fixed; -moz-background-size: cover; -webkit-background-size: cover; -o-background-size: cover; background-size: cover; background-image: url('images/bg/work.jpg'); position:absolute; top:300%; left:0;"> -->
            <div id="research2" class="slide" data-slide="4" style="z-index:11; position:absolute; top:300%; left:0;">
            
            	<div id="darkOverlay" style="width:100%; height:100%; background-image:url(images/bgOverlays/01.png); background-repeat:repeat;"></div>
            
            <!-- <div id="research2" class="jumbotron masthead slide parallaxBg" data-slide="4" style="overflow:hidden; z-index:11; position:absolute; top:0; left:0; background-color:rgba(0, 0, 0, 0);">
        
        	  <img id="wordsImageBackground" class="background-image-container" src="images/bg/desk.jpg" style="position:absolute; top:0; left:0; z-index:11;" /> -->
        
            
                <!-- Background image overlay -->
                <!--<div style="width:100%; height:100%; position:absolute; top:0; left:0; background-image:url(images/bgOverlays/05.png); background-repeat:repeat; opacity:0.4;"></div>-->
                <!-- Background image overlay -->
            	<div class="background-dark-overlay"></div>        
            
            </div><!--/#research2 -->
            
            <!-- To have parallax effect, add  data-stellar-background-ratio="0" attribute and change the value to the speed (e.g. 0.2) -->
            <div id="research3" class="jumbotron masthead parallaxBg slide divInside" style="z-index:11; position:absolute; top:300%; left:100%; background-color:rgba(0, 0, 0, 0); overflow:hidden;">
            
            	<!-- Blue background which covers research3 div and on which the external links are displayed -->
                <div id="research3Bg" style="position:absolute; top:0; left:0; width:100%; height:100%; overflow:hidden"></div>
                                
                    <div id="l1" style="position:absolute; left:100%;">
                        <a class="linksClass" href="http://it.linkedin.com/pub/alessandro-grazioli/62/542/1a3" target="_blank">
                            <h2 style="font-family:Verdana, Geneva, sans-serif;">Linkedin</h2>
                        </a>
                    </div>
                    
                    <div id="l2" style="position:absolute; left:100%;">
                        <a class="linksClass" href="http://dsg.ce.unipr.it/?q=node/37" target="_blank">
                            <h2 style="font-family:'Palatino Linotype', 'Book Antiqua', Palatino, serif;">DSG</h2>
                        </a>
                    </div>
                    
                    <div id="l3" style="position:absolute; left:100%;">
                        <a class="linksClass" href="https://twitter.com/AlessandroGraz2" target="_blank">
                            <h2 style="font-family: 'Merriweather', serif;">Twitter</h2>
                        </a>
                    </div>
                    
                    <div id="l4" style="position:absolute; left:100%;">
                    	<a class="linksClass" href="http://www.mendeley.com/profiles/alessandro-grazioli/" target="_blank">
                            <h2 style="font-family: 'Lucida';">Mendeley</h2>
                        </a>
                    </div>
                    
                    <div id="l5" style="position:absolute; left:100%;">
                        <a class="linksClass" href="http://scholar.google.it/citations?user=JT8hneEAAAAJ&hl" target="_blank">
                            <h2 style="font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;">Scholar</h2>
                        </a>
                    </div>
                    
                    <!-- <i id="titlesArrowDown" class="fa fa-chevron-down arrowDown" data-slide="6"></i> -->
                    <div id="arrowDown4" class="arrowDownContainer arrowDown" data-slide="6">
                        <div class="arrowDownPng"></div>
                        <div class="mouseSvg"></div>
                    </div>
                    <div id="scrollDownText4" class="scrollDown">
                        <font id="scroll" class="scroll" style="position: relative; left: -40px;">SCROLL</font><font id="down" class="down" style="position: relative; left: 30px;">DOWN</font>
                    </div>
                                    
			</div><!-- research3 -->
            
            <div id="onTopOfFooter" class="masthead slide divInside mapBg" style="z-index:11; background: no-repeat center center fixed; background-image: url('images/bg/map.png'); position:absolute; left:0;" data-slide="5">
            
            	<div class="arrow-up-background-div"></div>
            	
                <div class="arrowUpContainerWhite arrowUp" data-slide="1"  style="z-index:5001 !important;">
                    <div class="arrowUpPng" style="background-image: url(images/arrowUpWhite.png);"></div>
                    <div class="mouseUpSvg" style="background-image: url(images/whiteMouse.png);"></div>
                </div>
                <div id="scrollUpText" class="scrollUp" style="z-index:5000 !important;">
                    <font id="scroll" class="scroll" style="position: relative; left: -40px; color:#FFF;">SCROLL</font><font id="down" class="down" style="position: relative; left: 30px; color:#FFF;">UP</font>
                </div>
            
            </div>
            
            <!-- <div id="onTopOfFooterOverlay" class="mapBg" style="z-index:11; background: no-repeat center center fixed; background-image: url('images/bg/mapBW.png'); position:absolute; left:0;">
            
            	<div class="arrow-up-background-div"></div>
            	
                <div class="arrowUpContainerWhite arrowUp" data-slide="1"  style="z-index:5001 !important;">
                    <div class="arrowUpPng" style="background-image: url(images/arrowUpWhite.png);"></div>
                    <div class="mouseUpSvg" style="background-image: url(images/whiteMouse.png);"></div>
                </div>
                <div id="scrollUpText" class="scrollUp" style="z-index:5000 !important;">
                    <font id="scroll" class="scroll" style="position: relative; left: -40px; color:#FFF;">SCROLL</font><font id="down" class="down" style="position: relative; left: 30px; color:#FFF;">UP</font>
                </div> -->
            
            </div>
            
            <div id="orangeContent2" class="slide" style="position:absolute; left:0;" data-slide="6">
            
            
            
            
            
            	<div class="row" style="margin-left: 0px !important; margin-right: 0px !important;">
                
                    <div class="col-md-3 imageContainer">
                        <div class="view view-first">
                            <img class="imageClass" src="images/svg/bio.svg" />
                            <div class="mask" style="display:table;">
                                <span style="display:table-cell; vertical-align: middle;">
                                    <h2>BIOGRAPHY</h2>
                                    <p>Know something about me</p>
                                    <a href="bio.html" class="linksClassSameTab info">Read More</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-3 imageContainer">
                        <div class="view view-first">
                            <img class="imageClass" src="images/svg/work.svg" />
                            <div class="mask" style="display:table;">
                                <span style="display:table-cell; vertical-align: middle;">
                                    <h2>WORK</h2>
                                    <p>What I did and do</p>
                                    <a href="work.html" class="linksClassSameTab info">Read More</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-3 imageContainer">
                        <div class="view view-first">
                            <img class="imageClass"  src="images/svg/research.svg" />
                            <div class="mask" style="display:table;">
                                <span style="display:table-cell; vertical-align: middle;">
                                    <h2>RESEARCH</h2>
                                    <p>My interests and activities</p>
                                    <a href="research.html" class="linksClassSameTab info">Read More</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-3 imageContainer">
                        <div class="view view-first">
                            <img class="imageClass" src="images/svg/contactMe.svg"  />
                            <div class="mask" style="display:table;">
                                <span style="display:table-cell; vertical-align: middle;">
                                    <h2>CONTACT ME</h2>
                                    <p>Send me a message if you'd like to collaborate with me</p>
                                    <a href="javascript:void(0)" onClick="showContactMeFunction();" class="linksClass info">OK</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
                            
                <!-- FOOTER -->
                
                	<div style="background: repeat center center fixed; background-color:rgba(0, 0, 0, 0); background-image: url(images/azulejo.png); top: -1px;">
                        
                        <!-- <div id="nameContainer">
                            <h4 style="font-size:25px;">ALESSANDRO GRAZIOLI</h4>
                        </div> -->
                            
                        <footer class="footer" style="background-color:rgba(0, 0, 0, .95);">
                        
                            <center>
                            
                                <div class="container" style="font-family: 'Open Sans'; font-size: 18px; color:  color:rgba(255, 255, 255, .6);">
                                    <div class="row">
                                        
                                        <div class="col-md-6" style="margin-top: 30px;">
                                            <dl class="dl-horizontal" style="text-align:left;">
                                                <dt style="color:  color:rgba(255, 255, 255, .6);"><i class="fa fa-envelope" style="color:  color:rgba(255, 255, 255, .6);; font-size:16px;"></i> </dt><dd><a class="emailClass" id="sm" href="javascript:void(0)" onClick="showContactMeFunction();" style="color:rgba(255, 255, 255, .6);">grazioli [at] ce.unipr.it</a><br /></dd>
                                                <dt style="color:  color:rgba(255, 255, 255, .6); margin-top:10px;"><i class="fa fa-phone" style="color:  color:rgba(255, 255, 255, .6);F; font-size:18px;"></i> </dt><dd style="color: color:rgba(255, 255, 255, .6);; margin-top:10px;">+39 0521 906183</dd>
                                                <dt style="color:  color:rgba(255, 255, 255, .6); margin-top:10px;"><i class="fa fa-home" style="color:  color:rgba(255, 255, 255, .6);; font-size:18px;"></i> </dt>
                                                <dd>
                                                    <address style="color:  color:rgba(255, 255, 255, .6); margin-top:10px;">
                                                        Dipartimento di Ingegneria dell'Informazione<br/>
                                                        Universit&agrave; degli Studi di Parma<br/>
                                                        Viale G.P. Usberti, 181/A<br/>
                                                        43124 - Parma (PR)<br/>
                                                        Italy
                                                    </address>
                                                </dd>
                                            </dl>                            
                                        </div>
                                        
                                        <div class="col-md-6" style="margin-top: 20px;">
                                            <div><font style="font-size:30px; font-family:'Merriweather', serif; color:rgba(255, 255, 255, .6);">Follow me</font></div>
                                            <hr style="width:250px; margin-top:5px; border-top: 1px solid rgba(255, 255, 255, .6);">
                                            <div style="margin-top: -5px;">
                                                <a class="linksClass" href="https://twitter.com/AlessandroGraz2"><i class="fa fa-twitter-square enlarge-on-hover" style="color: rgba(255, 255, 255, .6); font-size: 50px;"></i></a>
                                                <a class="linksClass" href="https://www.facebook.com/alessandro.grazioli1" style="margin-left:20px;"><i class="fa fa-facebook-square enlarge-on-hover" style="color: rgba(255, 255, 255, .6); font-size: 50px;"></i></a>
                                                <a class="linksClass" href="https://plus.google.com/108184499896505903960/posts" style="margin-left:20px;"><i class="fa fa-google-plus-square enlarge-on-hover" style="color: rgba(255, 255, 255, .6); font-size: 50px;"></i></a>
                                                <a class="linksClass" href="http://it.linkedin.com/pub/alessandro-grazioli/62/542/1a3" style="margin-left:20px;"><i class="fa fa-linkedin-square enlarge-on-hover" style="color: rgba(255, 255, 255, .6); font-size: 50px;"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <hr style="width: 70%; border-top: 1px solid rgba(255, 255, 255, .6);">
                                <font id="footerName" style="font-size:16px; color:rgba(255, 255, 255, .6);">Copyright &copy; 2014 Alessandro Grazioli</font>
                            </center>
                            
                            
                        
                        </footer>
                    </div>
                    <!-- END OF FOOTER -->
                    
                    
                    
                    
                    
                    <!-- OLD BLUE FOOTER -->
                
                    <!-- <div id="nameContainer">
                        <h4 style="font-size:25px;">ALESSANDRO GRAZIOLI</h4>
                    </div>
                        
                    <footer class="footer">
                    
                        <center>
                        
                            <div class="container" style="font-family: 'Open Sans'; font-size: 16px; color: #FFF;">
                                <div class="row">
                                    
                                    <div class="col-md-6" style="margin-top: 10px;">
                                        <dl class="dl-horizontal" style="text-align:left;">
                                            <dt style="color:#FFF;"><i class="fa fa-envelope" style="color: #FFF; font-size:18px;"></i> </dt><dd><a class="emailClass" id="sm" href="javascript:void(0)" onClick="showContactMeFunction();">grazioli [at] ce.unipr.it</a><br /></dd>
                                            <dt style="color:#FFF; margin-top:10px;"><i class="fa fa-phone" style="color: #FFF; font-size:18px;"></i> </dt><dd style="color: #FFF; margin-top:10px;">+39 0521 906183</dd>
                                            <dt style="color:#FFF; margin-top:10px;"><i class="fa fa-home" style="color: #FFF; font-size:18px;"></i> </dt>
                                            <dd>
                                                <address style="color: #FFF; margin-top:10px;">
                                                    Dipartimento di Ingegneria dell'Informazione<br/>
                                                    Universit&agrave; degli Studi di Parma<br/>
                                                    viale G.P. Usberti, 181/A<br/>
                                                    43124 - Parma (PR)<br/>
                                                    Italy
                                                </address>
                                            </dd>
                                        </dl>                            
                                    </div>
                                    
                                    <div class="col-md-6">
                                        <div><font style="font-size:30px; font-family:'Merriweather', serif;">Follow me</font></div>
                                        <hr style="width:250px; margin-top:5px;">
                                        <div style="margin-top: -5px;">
                                            <a class="linksClass" href="https://twitter.com/AlessandroGraz2" target="_blank"><i class="fa fa-twitter-square" style="color: #FFF; font-size: 50px;"></i></a>
                                            <a class="linksClass" href="https://www.facebook.com/alessandro.grazioli1" target="_blank" style="margin-left:20px;"><i class="fa fa-facebook-square" style="color: #FFF; font-size: 50px;"></i></a>
                                            <a class="linksClass" href="https://plus.google.com/108184499896505903960/posts" target="_blank" style="margin-left:20px;"><i class="fa fa-google-plus-square" style="color: #FFF; font-size: 50px;"></i></a>
                                            <a class="linksClass" href="http://it.linkedin.com/pub/alessandro-grazioli/62/542/1a3" target="_blank" style="margin-left:20px;"><i class="fa fa-linkedin-square" style="color: #FFF; font-size: 50px;"></i></a>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        
                            <hr style="width: 70%;">
                            <font id="footerName" style="font-size:16px;">Copyright &copy; 2014 Alessandro Grazioli</font>
                        </center>
                    </footer> -->
                    
                    
                    
                    
                    
                    
            
            </div><!-- orangeContent2 -->
        </div><!--/#divsContainer -->
    </div><!--/.container -->
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    
    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    
    <!-- A Javascript script which looks in the page for images, pre-loads them and shows a percentage and a progress bar while loading -->
    <script type="text/javascript" src="js/jquery.queryloader2.js"></script>
    
    <!-- E-mail address -->
    <script type="text/javascript" src="js/email.js"></script>
    
    <!-- A JQuery plugin that animates color changes (used to change footer color) -->
	<script type="text/javascript" src="js/jquery.animate-colors.js"></script>

    <!-- Waypoints is a Javascript library to execute functions when particular points on the page are reached -->
    <script type="text/javascript" src="js/jquery.waypoints.js"></script>
    
    <script type="text/javascript">
		<!-- Stellar.js for parallax effect gets loaded only if not on a mobile device-->
    	if (!isMobile()) {
			<!-- Plugin implementing the parallax effect -->
    		document.write('<script type="text/javascript" src="js/jquery.stellar.js"><\/script>');
    	}
    </script>
    
    <!-- A JQuery plugin to manage touch screen gestures -->
    <script type="text/javascript" src="js/jquery.touchSwipe.min.js"></script>
        
    <!-- File containing all the functions I wrote -->
	<script type="text/javascript" src="js/main.js"></script>
    
  </body>
</html>
