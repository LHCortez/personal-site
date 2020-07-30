jQuery(document).ready(function () {

    var offsetTop = $(".skillbar").offset().top;
    $(window).scroll(function () {
      var height = $(window).height();
      if ($(window).scrollTop() + height > offsetTop) {
        jQuery(".progress-bar").each(function () {
          jQuery(this).find(".progress-content").animate({
              width: jQuery(this).attr("data-percentage")
            },
            2000
          );
  
          jQuery(this).find(".progress-number-mark").animate({
            left: jQuery(this).attr("data-percentage")
          }, {
            duration: 2000,
            step: function (now, fx) {
              var data = Math.round(now);
              jQuery(this).find(".percent").html(data + "%");
            }
          });
        });
      }
    });
  })