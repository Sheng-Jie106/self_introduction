$(document).ready(function() {
$('a[href*="#"]:not([href="#"])').click(function() {
var offset = -82;
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
if (target.length) {
$('html, body').animate({
scrollTop: target.offset().top + offset
}, 1000);
return false;
}
}
});
});
window.onload=function(){
var body=document.getElementById("body");
body.style.opacity=1;
}