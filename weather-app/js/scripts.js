// Randomize Header

// Store & Generate Number
var maxRand = 42;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = '/stand-alone-portfolio/img/fullsize/1.jpg';
var img1 = '/stand-alone-portfolio/img/fullsize/2.jpg';
var img2 = '/stand-alone-portfolio/img/fullsize/3.jpg';
var img3 = '/stand-alone-portfolio/img/fullsize/4.jpg';
var img4 = '/stand-alone-portfolio/img/fullsize/5.jpg';
var img5 = '/stand-alone-portfolio/img/fullsize/6.jpg';
var img6 = '/stand-alone-portfolio/img/fullsize/7.jpg';
var img7 = '/stand-alone-portfolio/img/fullsize/8.jpg';
var img8 = '/stand-alone-portfolio/img/fullsize/9.jpg';
var img9 = '/stand-alone-portfolio/img/fullsize/10.jpg';
var img10 = '/stand-alone-portfolio/img/fullsize/11.jpg';
var img11 = '/stand-alone-portfolio/img/fullsize/12.jpg';
var img12 = '/stand-alone-portfolio/img/fullsize/13.jpg';
var img13 = '/stand-alone-portfolio/img/fullsize/14.jpg';
var img14 = '/stand-alone-portfolio/img/fullsize/15.jpg';
var img15 = '/stand-alone-portfolio/img/fullsize/16.jpg';
var img16 = '/stand-alone-portfolio/img/fullsize/17.jpg';
var img17 = '/stand-alone-portfolio/img/fullsize/18.jpg';
var img18 = '/stand-alone-portfolio/img/fullsize/19.jpg';
var img19 = '/stand-alone-portfolio/img/fullsize/20.jpg';
var img20 = '/stand-alone-portfolio/img/fullsize/21.jpg';
var img21 = '/stand-alone-portfolio/img/fullsize/22.jpg';
var img22 = '/stand-alone-portfolio/img/fullsize/23.jpg';
var img23 = '/stand-alone-portfolio/img/fullsize/24.jpg';
var img24 = '/stand-alone-portfolio/img/fullsize/25.jpg';
var img25 = '/stand-alone-portfolio/img/fullsize/26.jpg';
var img26 = '/stand-alone-portfolio/img/fullsize/27.jpg';
var img27 = '/stand-alone-portfolio/img/fullsize/28.jpg';
var img28 = '/stand-alone-portfolio/img/fullsize/29.jpg';
var img29 = '/stand-alone-portfolio/img/fullsize/30.jpg';
var img30 = '/stand-alone-portfolio/img/fullsize/31.jpg';
var img31 = '/stand-alone-portfolio/img/fullsize/32.jpg';
var img32 = '/stand-alone-portfolio/img/fullsize/33.jpg';
var img33 = '/stand-alone-portfolio/img/fullsize/34.jpg';
var img34 = '/stand-alone-portfolio/img/fullsize/35.jpg';
var img35 = '/stand-alone-portfolio/img/fullsize/36.jpg';
var img36 = '/stand-alone-portfolio/img/fullsize/37.jpg';
var img37 = '/stand-alone-portfolio/img/fullsize/38.jpg';
var img38 = '/stand-alone-portfolio/img/fullsize/39.jpg';
var img39 = '/stand-alone-portfolio/img/fullsize/40.jpg';
var img40 = '/stand-alone-portfolio/img/fullsize/41.jpg';
var img41 = '/stand-alone-portfolio/img/fullsize/42.jpg';

// Show Images
$('header img').attr('src', eval('img' + numRand) );

// Activate Gallery
$('figure').lightGallery({
    selector: 'a'
});
