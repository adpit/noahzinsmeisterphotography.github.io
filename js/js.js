//$(window).load(function() {});

$(document).ready(function() {

	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		openEffect  : 'fade',
		closeEffect : 'fade',
		padding     : 0,
		margin      : [20, 60, 20, 60],
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});


var vph = $(window).height();
var vpw = $(window).width();

if (vph*1.1 > vpw) {
	alert('For optimal viewing, please use your device in landscape orientation or scale your browser window until it is longer than it is tall');
}
else {
}

$(window).resize(function() {
    vph = $(window).height();
    vpw = $(window).width();
$('.fullpage').height(vph);
$('#gallery1').height(vph*.6);
$('#gallery1').css('top', vph*.2);
$('#gallery2').height(vph*.6);
$('#gallery2').css('top', vph*.2);
$('h1').css('font-size', ((vph*.09)+(vpw*.02))/2 );
$('h2').css('font-size', vph*.03);
$('i').css('font-size', vph*.08);
$('img#logos').css('height', vph*.1);
$('#nav a').css('font-size', vph*.03);
$('#box').css('width', vpw*.28);
$('#box').css('top', -vph*.63);
$('#box').css('left', vpw*.352);
$('#gallerycontainer1').css('height', vph*.26);
$('#gallerycontainer2').css('height', vph*.26);
$('#gallerycontainer3').css('height', vph*.26);
$('#gallerycontainer4').css('height', vph*.26);
$('#gallerycontainer5').css('height', vph*.26);
$('#gallerycontainer6').css('height', vph*.26);
$('iframe').css('height', vph*.26);
$('video').css('height', vph*.26);
$('p').css('font-size', vph*.08);
$('#insidegallerycontainer1').css('height', vph*.26);
$('#insidegallerycontainer1').css('margin-top', vph*.00001);
$('#insidegallerycontainer2').css('height', vph*.26);
$('#insidegallerycontainer2').css('margin-top', vph*.00001);
$('#insidegallerycontainer3').css('height', vph*.26);
$('#insidegallerycontainer3').css('margin-top', vph*.00001);
$('#insidegallerycontainer4').css('height', vph*.26);
$('#insidegallerycontainer4').css('margin-top', vph*.00001);
$('#insidegallerycontainer5').css('height', vph*.26);
$('#insidegallerycontainer5').css('margin-top', vph*.00001);
$('#insidegallerycontainer6').css('height', vph*.26);
$('#insidegallerycontainer6').css('margin-top', vph*.00001);

});

$('.fullpage').height(vph);
$('#gallery1').height(vph*.6);
$('#gallery1').css('top', vph*.2);
$('#gallery2').height(vph*.6);
$('#gallery2').css('top', vph*.2);
$('h1').css('font-size', ((vph*.09)+(vpw*.02))/2 );
$('h2').css('font-size', vph*.03);
$('i').css('font-size', vph*.08);
$('img#logos').css('height', vph*.1);
$('#box').css('width', vpw*.28);
$('#box').css('top', -vph*.63);
$('#box').css('left', vpw*.352);
$('#nav a').css('font-size', vph*.03);
$('#gallerycontainer1').css('height', vph*.26);
$('#gallerycontainer2').css('height', vph*.26);
$('#gallerycontainer3').css('height', vph*.26);
$('#gallerycontainer4').css('height', vph*.26);
$('#gallerycontainer5').css('height', vph*.26);
$('#gallerycontainer6').css('height', vph*.26);
$('iframe').css('height', vph*.26);
$('video').css('height', vph*.26);
$('p').css('font-size', vph*.08);
$('#insidegallerycontainer1').css('height', vph*.26);
$('#insidegallerycontainer1').css('margin-top', vph*.00001);
$('#insidegallerycontainer2').css('height', vph*.26);
$('#insidegallerycontainer2').css('margin-top', vph*.00001);
$('#insidegallerycontainer3').css('height', vph*.26);
$('#insidegallerycontainer3').css('margin-top', vph*.00001);
$('#insidegallerycontainer4').css('height', vph*.26);
$('#insidegallerycontainer4').css('margin-top', vph*.00001);
$('#insidegallerycontainer5').css('height', vph*.26);
$('#insidegallerycontainer5').css('margin-top', vph*.00001);
$('#insidegallerycontainer6').css('height', vph*.26);
$('#insidegallerycontainer6').css('margin-top', vph*.00001);

$('div#gallerycontainer1').mouseenter(function() {
	$('#insidegallerycontainer1').fadeTo(80, 1)
});

$('div#gallerycontainer1').mouseleave(function() {
	$('#insidegallerycontainer1').fadeTo(80, 0)
});

$('div#gallerycontainer2').mouseenter(function() {
	$('#insidegallerycontainer2').fadeTo(80, 1)
});

$('div#gallerycontainer2').mouseleave(function() {
	$('#insidegallerycontainer2').fadeTo(80, 0)
});

$('div#gallerycontainer3').mouseenter(function() {
	$('#insidegallerycontainer3').fadeTo(80, 1)
});

$('div#gallerycontainer3').mouseleave(function() {
	$('#insidegallerycontainer3').fadeTo(80, 0)
});

$('div#gallerycontainer4').mouseenter(function() {
	$('#insidegallerycontainer4').fadeTo(80, 1)
});

$('div#gallerycontainer4').mouseleave(function() {
	$('#insidegallerycontainer4').fadeTo(80, 0)
});

$('div#gallerycontainer5').mouseenter(function() {
	$('#insidegallerycontainer5').fadeTo(80, 1)
});

$('div#gallerycontainer5').mouseleave(function() {
	$('#insidegallerycontainer5').fadeTo(80, 0)
});

$('div#gallerycontainer6').mouseenter(function() {
	$('#insidegallerycontainer6').fadeTo(80, 1)
});

$('div#gallerycontainer6').mouseleave(function() {
	$('#insidegallerycontainer6').fadeTo(80, 0)
});

var images = ['header1.jpg', 'header1.jpg', 'header1.jpg'];

$('#blurimage').css({'background': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ') no-repeat center center fixed'})


	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, function () {
	        window.location.hash = target;
	    });
	});

	//if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		//alert("This website is not optimized for mobile devices, please visit from a computer. Sorry for the inconvenience.");
		//$('html').empty();
		//$('html').css({'background': 'rgba(255,255,255,1)'});
	//}
	//else {
	//}
});