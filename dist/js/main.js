$(function() {
  // Hamburger toggle
  (function() {

    var $hamb = $(".hamburger"),
      $menu = $(".mobile-menu");

    $hamb.on("click", function() {
      $menu.slideToggle(200);

    });
  }());

  // Follow link callout
  (function() {

    var text,
      $link = $(".site-header-menu a.follow-link"),
      $callout = $(".callout"),
      twitter_text = "@ehagemann",
      instagram_text = "@erichagemann",
      mail_text = "eric@endurostrengthcoaching.com";

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