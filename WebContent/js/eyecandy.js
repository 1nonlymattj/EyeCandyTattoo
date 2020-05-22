$(function() {
   $(".dropdown-toggle").dropdown('toggle').click();
});

$(function() {
   $("#nav-placeholder").load("navbar.html");
});

$(function() {
   $("#reviews-placeholder").load("reviews.html");
});

$(function() {
   $("#foot-placeholder").load("footer.html");
});

$('.list-hours li').eq(new Date().getDay()).addClass('today');

function openModal() {
   document.getElementById("myModal").style.display = "block";
}

function closeModal() {
   document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
   showSlides(slideIndex += n);
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
   var captionText = document.getElementById("caption");
   if (n > slides.length) {
      slideIndex = 1
   }
   if (n < 1) {
      slideIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
   captionText.innerHTML = dots[slideIndex - 1].alt;
}

function rotateCard(btn) {
   var $card = $(btn).closest('.card-container');
   console.log($card);
   if ($card.hasClass('hover')) {
      $card.removeClass('hover');
   } else {
      $card.addClass('hover');
   }
}

// Google Analytics Tracking Script
(function(i, s, o, g, r, a, m) {
   i['GoogleAnalyticsObject'] = r;
   i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
   }, i[r].l = 1 * new Date();
   a = s.createElement(o), m = s.getElementsByTagName(o)[0];
   a.async = 1;
   a.src = g;
   m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-38417733-17', 'www.eyecandytattooomaha.com');
ga('send', 'pageview');