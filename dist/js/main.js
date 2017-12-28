$(function() {

    // Hamburger toggle
  (function() {

    var $hamb = $(".hamburger"),
        $close = $(".close-menu"),
        $menu = $(".mobile-menu");

      $hamb.on("click", function() {
        $menu.fadeIn(200);
      
      });

      $close.on("click", function() {
        $menu.fadeOut(200);
      });
  }());

  // Follow link callout
  (function() {

   var text,
        $link = $(".site-header-menu a.follow-link"),
        $callout = $(".callout"),
        twitter_text = "@ehagemann",
        instagram_text = "@erichagemann",
        mail_text = "hagemann.eric@gmail.com";

    $link.on({
      "mouseenter": function() {
        var name = $(this).attr("name");

        if (name === "twitter") {
          text = twitter_text;
        } else if (name === "instagram") {
          text = instagram_text;       
        } else if (name === "mail") {
          text = mail_text;
        }
        $callout.text(text).fadeIn('100');
      },
      "mouseleave": function() {
        $callout.css("display", "none");
      }
    });
  }());
  
});