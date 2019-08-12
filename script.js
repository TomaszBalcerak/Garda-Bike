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

  //Modal Galery//
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

  $( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
    $('.modal').css("display", "none");
}
});
