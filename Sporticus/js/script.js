 /*Move to section*/
    $(document).ready(function () {
      $("#navbar").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
          top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 800);
      });
      $("#get_started").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
          top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 800);
      });
    });

    /*Scroll*/
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
    };