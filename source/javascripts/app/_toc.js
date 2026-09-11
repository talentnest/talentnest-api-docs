//= require ../lib/_jquery
//= require ../lib/_imagesloaded.min
;(function () {
  'use strict';

  var htmlPattern = /<[^>]*>/g;
  var loaded = false;

  var debounce = function(func, waitTime) {
    var timeout = false;
    return function() {
      if (timeout === false) {
        setTimeout(function() {
          func();
          timeout = false;
        }, waitTime);
        timeout = true;
      }
    };
  };

  var closeToc = function() {
    $(".toc-wrapper").removeClass('open');
    $("#nav-button").removeClass('open');
  };

  function loadToc($toc, tocLinkSelector, tocListSelector, scrollOffset) {
    var headerHeights = {};
    var pageHeight = 0;
    var windowHeight = 0;
    var originalTitle = document.title;

    var recacheHeights = function() {
      headerHeights = {};
      pageHeight = $(document).height();
      windowHeight = $(window).height();

      $toc.find(tocLinkSelector).each(function() {
        var targetId = $(this).attr('href');
        if (!targetId || targetId.charAt(0) !== "#") return;
        var $el = $(targetId);
        if (!$el.length || !$el.offset()) return;
        headerHeights[targetId] = $el.offset().top;
      });
    };

    var refreshToc = function() {
      var currentTop = $(document).scrollTop() + scrollOffset;

      var best = null;
      var bestTop = -1;
      for (var name in headerHeights) {
        var top = headerHeights[name];
        if (top < currentTop && top > bestTop) {
          best = name;
          bestTop = top;
        }
      }

      // Catch the initial load case
      if (currentTop == scrollOffset && !loaded) {
        best = window.location.hash;
        loaded = true;
      }

      var $best = $toc.find("[href='" + best + "']").first();
      if (!$best.hasClass("active")) {
        // .active is applied to the ToC link we're currently on, and its parent <ul>s selected by tocListSelector
        // .active-expanded is applied to the ToC links that are parents of this one
        $toc.find(".active").removeClass("active");
        $toc.find(".active-parent").removeClass("active-parent");
        $best.addClass("active");
        $best.parents(tocListSelector).addClass("active").siblings(tocLinkSelector).addClass('active-parent');
        $best.siblings(tocListSelector).addClass("active");
        $toc.find(tocListSelector).filter(":not(.active)").slideUp(150);
        $toc.find(tocListSelector).filter(".active").slideDown(150);
        if (window.history.replaceState) {
          window.history.replaceState(null, "", best);
        }
        var thisTitle = $best.data("title");
        if (thisTitle !== undefined && thisTitle.length > 0) {
          document.title = thisTitle.replace(htmlPattern, "") + " – " + originalTitle;
        } else {
          document.title = originalTitle;
        }
      }
    };

    var makeToc = function() {
      recacheHeights();
      refreshToc();

      $("#nav-button").click(function() {
        $(".toc-wrapper").toggleClass('open');
        $("#nav-button").toggleClass('open');
        return false;
      });
      $(".page-wrapper").click(closeToc);
      $(".toc-link").click(closeToc);

      $toc.find(tocLinkSelector).click(function() {
        var href = $(this).attr('href');
        var $clicked = $(this);
        $toc.find(".active").removeClass("active");
        $toc.find(".active-parent").removeClass("active-parent");
        $clicked.addClass("active");
        $clicked.parents(tocListSelector).addClass("active").siblings(tocLinkSelector).addClass("active-parent");
        $clicked.siblings(tocListSelector).addClass("active");
        $toc.find(tocListSelector).filter(":not(.active)").slideUp(150);
        $toc.find(tocListSelector).filter(".active").slideDown(150);
        setTimeout(function() {
          recacheHeights();
          refreshToc();
        }, 100);
        if (href && href.charAt(0) === "#" && window.history.replaceState) {
          window.history.replaceState(null, "", href);
        }
      });

      $(window).scroll(debounce(refreshToc, 200));
      $(window).resize(debounce(recacheHeights, 200));
    };

    makeToc();

    window.recacheHeights = recacheHeights;
    window.refreshToc = refreshToc;
  }

  window.loadToc = loadToc;
})();
