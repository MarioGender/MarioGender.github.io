var btn = $('#topbtn');
var brokenLinks = $('.brokenlink');

$(window).resize(function() {

/*
var x = document.getElementById("header").offsetWidth;
nav.offsetWidth = x;
console.log(header.offsetWidth + '+' + nav.offsetWidth);
*/
    
/////////////////RESIZE FUNCTION/////////////////  
if (window.innerWidth < 500) {
    CV.innerHTML = 'CV';
}
else {
    CV.innerHTML = 'Curriculum Vitae';
}

if ($(window).scrollTop() > 300 && window.innerWidth < 580) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }

}).resize();

/////////////////SCROLL FUNCTION/////////////////
$(window).scroll(function() {
  if ($(window).scrollTop() > 400 && window.innerWidth < 769) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  $('html, body').animate({scrollTop:0}, '300');
});

var brokenLinks = $('.brokenlink');

brokenLinks.on('click', function(e) {
      event.preventDefault();
      alert('Link has nothing to lead to, YET!');         
});