<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	
	<title>Organic Tabs</title>
	
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	
    <script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>
    <script type="text/javascript" src="js/withoutPlugin.js"></script>
</head>

<body>

    <?php include("../header.php"); ?>

	<div id="page-wrap">

		<h1>Organic Tabs</h1>
		<p>By <a href="http://css-tricks.com"><strong>CSS</strong>-Tricks</a> &mdash; <a href="/organic-tabs/">Back to Tutorial</a></p>
		
		<p>The purpose of this demo is to show a tabbed area where the content in tabbed panels are 
		of different heights. When we switch between tabs, the content below is gently moved up or down 
		to accomodate.</p>
		
		<div id="organic-tabs">
					
    		<ul id="explore-nav">
                <li id="ex-featured"><a rel="featured" href="#" class="current">Featured</a></li>
                <li id="ex-core"><a rel="core" href="#">Core</a></li>
                <li id="ex-jquery"><a rel="jquerytuts" href="#">jQuery</a></li>
                <li id="ex-classics" class="last"><a rel="classics" href="#">Classics</a></li>
            </ul>
    		
    		<div id="all-list-wrap">
    		
    			<ul id="featured">
    				<li><a href="http://css-tricks.com/perfect-full-page-background-image/">Full Page Background Images</a></li>
    				<li><a href="http://css-tricks.com/designing-for-wordpress-complete-series-downloads/">Designing for WordPress</a></li>
    				<li><a href="http://css-tricks.com/build-your-own-social-home/">Build Your Own Social Home!</a></li>
    				<li><a href="http://css-tricks.com/absolute-positioning-inside-relative-positioning/">Absolute Positioning Inside Relative Positioning</a></li>
    				<li><a href="http://css-tricks.com/ie-css-bugs-thatll-get-you-every-time/">IE CSS Bugs That'll Get You Every Time</a></li>
    				<li><a href="http://css-tricks.com/404-best-practices/">404 Best Practices</a></li>
    				<li><a href="http://css-tricks.com/date-display-with-sprites/">Date Display with Sprites</a></li>
    			</ul>
        		 
        		 <ul id="core">
                    <li><a href="http://css-tricks.com/video-screencasts/58-html-css-the-very-basics/">The VERY Basics of HTML &amp; CSS</a></li>
                    <li><a href="http://css-tricks.com/the-difference-between-id-and-class/">Classes and IDs</a></li>
                    <li><a href="http://css-tricks.com/the-css-box-model/">The CSS Box Model</a></li>
                    <li><a href="http://css-tricks.com/all-about-floats/">All About Floats</a></li>
                    <li><a href="http://css-tricks.com/the-css-overflow-property/">CSS Overflow Property</a></li>
    				<li><a href="http://css-tricks.com/css-font-size/">CSS Font Size - (px - em - % - pt - keyword)</a></li>
    				<li><a href="http://css-tricks.com/css-transparency-settings-for-all-broswers/">CSS Transparency / Opacity</a></li>
    				<li><a href="http://css-tricks.com/css-sprites/">CSS Sprites</a></li>
    				<li><a href="http://css-tricks.com/nine-techniques-for-css-image-replacement/">CSS Image Replacement</a></li>
        		 	<li><a href="http://css-tricks.com/what-is-vertical-align/">CSS Vertial Align</a></li>
    				<li><a href="http://css-tricks.com/the-css-overflow-property/">The CSS Overflow Property</a></li>
        		 </ul>
        		 
        		 <ul id="jquerytuts">
        		    <li><a href="http://css-tricks.com/anythingslider-jquery-plugin/">Anything Slider jQuery Plugin</a></li>
        		    <li><a href="http://css-tricks.com/moving-boxes/">Moving Boxes</a></li>
    				<li><a href="http://css-tricks.com/simple-jquery-dropdowns/">Simple jQuery Dropdowns</a></li>
    				<li><a href="http://css-tricks.com/creating-a-slick-auto-playing-featured-content-slider/">Featured Content Slider</a></li>
    				<li><a href="http://css-tricks.com/startstop-slider/">Start/Stop Slider</a></li>
    				<li><a href="http://css-tricks.com/banner-code-displayer-thing/">Banner Code Displayer Thing</a></li>
    				<li><a href="http://css-tricks.com/highlight-certain-number-of-characters/">Highlight Certain Number of Characters</a></li>
    				<li><a href="http://css-tricks.com/auto-moving-parallax-background/">Auto-Moving Parallax Background</a></li>
        		 </ul>
        		 
        		 <ul id="classics">
                    <li><a href="http://css-tricks.com/css-wishlist/">Top Designers CSS Wishlist</a></li>
                    <li><a href="http://css-tricks.com/what-beautiful-html-code-looks-like/">What Beautiful HTML Code Looks Like</a></li>
                    <li><a href="http://css-tricks.com/easily-password-protect-a-website-or-subdirectory/">Easily Password Protect a Website or Subdirectory</a></li>
                    <li><a href="http://css-tricks.com/how-to-create-an-ie-only-stylesheet/">IE-Only Stylesheets</a></li>
                    <li><a href="http://css-tricks.com/ecommerce-considerations/">eCommerce Considerations</a></li>
                    <li><a href="http://css-tricks.com/php-for-beginners-building-your-first-simple-cms/">PHP: Build Your First CMS</a></li>
        		 </ul>
        		 
    		 </div> <!-- END List Wrap -->
		 
		 </div> <!-- END Organic Tabs -->
		 
		 <p>This is some content below the tabs. I will be moved up or down to accomodate the tabbed area above me.</p>
	
	</div>
	
	<?php include("../footer"); ?>

</body>

</html>