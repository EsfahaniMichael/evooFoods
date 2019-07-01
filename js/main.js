

$(window).load(function () {
    $("#header").sticky({ topSpacing: 0 });
  });

$( document ).ready(function() {
    console.log( "ready!" );
});

/// Nav Bar functions

var address = window.location.href;
var page = address.substr(address.lastIndexOf('/') + 1);
$('.main-nav a[href*="' + page + '"]').addClass('active');