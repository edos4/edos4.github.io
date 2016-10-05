$(document).ready(function(){
            var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 300) {
                    $("#mainNav").css('background-color', 'rgba(201,183,138,.6)');
                } else {
                    $("#mainNav").css('background-color', 'transparent');
                }
            });


            $(function() {
              $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html, body').animate({
                      scrollTop: target.offset().top
                    }, 1000);
                    return false;
                  }
                }
              });
            });

            //open modal
      $('.link').on('click', function(e){
        e.preventDefault();
        $('#myModal').modal('show').find('.modal-body').load($(this).attr('href'));
      });
});
