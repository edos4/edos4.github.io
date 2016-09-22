(function(window){
var bot = document.getElementById("phone");
var top = -50;


window.onscroll = function() {
    var bodyHeight	= 800;
    var scrollTop	= document.body.scrollTop; 
    bot.style.top	= bodyHeight - scrollTop + "px" ;
}     


    
})(window);

particlesJS.load('particles-js', './particles.json', function() {
  console.log('callback - particles.js config loaded');
});
