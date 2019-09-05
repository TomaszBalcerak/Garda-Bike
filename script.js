//hamburger button zmiana//
$("#menu-button").click(function(){
  $(this).toggleClass("active");
  $("#line-1").toggleClass("active");
  $("#line-2").toggleClass("active");
  $("#line-3").toggleClass("active");
  $("main").toggleClass("blur");
  $("#menu").slideToggle("slow");
  $('.modal').css("display", "none");
});

//Usunięcie defektu skaczącego widoku na mobile//
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {

    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//zamykanie menu gdy kliknie sie gdziekolwiek//

const $menu = $('#menu-button');

$(document).mouseup(e => {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $("#menu").css("display", "none");
     $("#line-1").removeClass("active");
    $("#line-2").removeClass("active");
    $("#line-3").removeClass("active");
    $("main").removeClass("blur");
  }
 });

//zamykanie również na ES//
$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
    $("#menu").css("display", "none");
    $("#line-1").removeClass("active");
    $("#line-2").removeClass("active");
    $("#line-3").removeClass("active");
    $("main").removeClass("blur"); }
});

/*//info o budowie bloga//
let blog = document.getElementsByClassName("blog")[0];
blog.addEventListener("click", blogfunction);

function blogfunction(){
  alert("Blog w przygotowaniu - zapraszamy wkrótce")
}*/


//efekt zanikania zdjęcia//
  //zmienne globalne wykorzystywane we wszystkich projektach ponizej//
  const $doc = $(document);/*pozwala stosować jquery*/
  const $Home = $('#Home');
  const $main = $('main');

//zanikanie zdjęcia głównego//
$doc.on("scroll", function(){
  const scrollPos = $doc.scrollTop();//aktualna wartość scrolla//
  const sectionOffset = $main.offset().top;//ile od początku strony//
  const HomeHeight = $Home.outerHeight();//wysokość z borderem i paddingiem//

  $Home.css({
  'opacity' : 1 - scrollPos/HomeHeight,//działanie pozwalające utrzymywać wartość opacity jako zmienną wyliczaną z pozycji scrollTop-outerHeight-mega fajny efekt!!//
  'filter': 'grayscale(' +scrollPos/HomeHeight +')'//tez korzysta ze zmiennej wyliczającej pozycję. Dwójkę daliśmy by szybciej efekt szarości zachodzil//
  })
  //zmiana przejrzystości headera gdy zaczniemy scrollować//
  if(sectionOffset<0){
    $(".header").css("opacity", "1");
    $(".logo").css("transform", "rotate(360deg)");
  }
})

//Czy element jest w widoku//

var section1 = document.querySelectorAll(".subtitle");
var section2 = document.querySelectorAll(".textContainer");

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
//mechanizm wjezdzania rowerów//
  function callbackFunc() {
    for (var i = 0; i < section1.length; i++) {
      if (isElementInViewport(section1[i])) {
        section1[i].classList.add("in-view");
      }
    }
  }

  function callbackFunc2() {
    for (var i = 0; i < section2.length; i++) {
      if (isElementInViewport(section2[i])) {
        section2[i].classList.add("text-in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc,);
  window.addEventListener("resize", callbackFunc,);
  window.addEventListener("scroll", callbackFunc,);

  window.addEventListener("load", callbackFunc2,);
  window.addEventListener("resize", callbackFunc2,);
  window.addEventListener("scroll", callbackFunc2,);


//Info about routes//

let routbox = document.querySelectorAll(".roadcontainer");
let roadphoto = document.querySelectorAll(".roadphoto");

let i=0;
for(i=0; i<routbox.length; i++){
routbox[i].addEventListener("click", routfunction);
}
function routfunction(){
 this.classList.toggle("routalert");
 $(this).children(".roadphoto").toggleClass("blurry");
};

  /*//Modal Galery//
  var modal = document.getElementById("myModal");
  //get the image and insert it inside the modal//
  var galeryImg = document.getElementsByClassName("myImg");
  var modalImg = document.getElementById("img01");
  for(i=0; i<galeryImg.length; i++){
  galeryImg[i].onclick = function(){
    modal.style.display="flex";
    modalImg.src=this.src;
  }
}
  //Get the <span> element that closes the modal//
  var span = document.getElementsByClassName("close")[0];
  //When the user clicks on <span> (x), close the modal
  span.onclick = function(){
    modal.style.display="none";
  }
*/
  $( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
    $('.modal').css("display", "none");
}
});

//SLIDER ZDJĘĆ//
/*var im =document.getElementsByClassName("modal-content")[0];
var arrow = document.getElementsByClassName("arrow1")[0];
arrow.onclick = function(){
  if(im.src=="img/galery/20.jpg"){
  im.src="img/galery/30.jpg"
}
}NIEUDANA PRÓBA POWYZEJ*/

/*UDANY SLIDER PONIŻEJ*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myImg");
  var dot = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dot.length; i++) {
      dot[i].className = dot[i].className.replace(" active", "");
  }
  x[slideIndex-1].style.display = "flex";
  dot[slideIndex-1].className += " active";  
}
/*KONIEC SLIDERA*/

//Show google maps//
let item = document.querySelectorAll(".item")[0];
let googlemaps = document.querySelector(".googlemaps");
let showmap = document.querySelector(".showmap");

item.addEventListener("click", showfunction);

function showfunction(){
  googlemaps.classList.toggle("googlemapsyes");
  if(googlemaps.classList.contains("googlemapsyes")){
  showmap.innerHTML="Ukryj";
} else {
showmap.innerHTML="Kliknij by nas znaleźć"
}
}