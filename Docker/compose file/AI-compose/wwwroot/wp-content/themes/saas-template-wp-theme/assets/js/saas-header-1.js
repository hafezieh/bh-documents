  var module_8312839 = (function() {
    var __hs_messages = {};
    i18n_getmessage = function() {
      return hs_i18n_getMessage(__hs_messages, hsVars['language'], arguments); 
    };
    i18n_getlanguage = function() {
      return hsVars['language']; 
    };
// Test to see if window is mobile
function isMobile() {
  if ($(window).width() > 768) {
    return false
  } else {
    return true
  }
}

// Ensure menu is visible on window resize 

function showHeader() {
  // console.log('b');
  if (!isMobile()) {
    $(".header__menu").show();
    $(".header__item-content, .header__subitem__menu ul").css('display', 'flex');
  } else {
    $(".header__menu").hide();
    $(".header__item-content, .header__subitem__menu ul").hide();
  }
}

$(function() {
  var windowWidth = $(window).width();

  $(window).resize(function() { 
    if ($(window).width() != windowWidth) {
      windowWidth = $(window).width();
      showHeader(); 
    }
  });
});

// Toggle main menu open / close

$(".header__hamburger").click(function() {
  // console.log('a');
  if (isMobile()) {
    $('.header__mega-menu .header__hamburger i.fa').toggleClass('fa-bars');
    $('.header__mega-menu .header__hamburger i.fa').toggleClass('fa-close');
    $(".header__item-content").slideUp(300);
    $(".header__subitem__menu ul").slideUp(150);
    $(".header__menu").slideToggle(300, function() {
      if($(this).is(":visible")) {
        $(this).css("display", "block")
      }
    });
  }
})

// Toggle Sub Items Open and Close
$(window).click(function(e) {
  // console.log('c');
  if(!isMobile() && !e.metaKey) {
    $('.header__menu > nav > ul > li').removeClass('active');
  }
});

$('.header__menu nav>ul>li>.header__link-wrapper a').on('click', function(e) {
  // if($(this).attr('href') === '') {
  //   e.preventDefault();
  //   var linkWrapper = $(this).closest('.header__link-wrapper');
  //   var linkTrigger = $(linkWrapper).find('.expand-trigger');
  //   $(linkTrigger).click();
  // }
  if($(this).attr('href') === '') {
      var self = this;
    if (isMobile()) {
      e.stopPropagation();
      e.preventDefault();
      var headerContent = $(self).parent().siblings(".header__item-content");
      $(".header__item-content").not(headerContent).slideUp(300);
      $(headerContent).slideToggle(300, function() {
        if($(this).is(":visible")) {
          $(this).css("display", "block")
        }
      });
    } else {
      e.stopPropagation();
      e.preventDefault();
      $(this).closest('li').toggleClass('active');
      $(this).closest('li').siblings().removeClass('active');
    }
  }
});

$(".header__link-wrapper:not(.header__link-wrapper__sublist) > .expand-trigger").click(function(e) {
  // console.log('d');
  var self = this;
  if (isMobile()) {
    var headerContent = $(self).parent().siblings(".header__item-content");
    $(".header__item-content").not(headerContent).slideUp(300);
    $(headerContent).slideToggle(300, function() {
      if($(this).is(":visible")) {
        $(this).css("display", "block")
      }
    });
  } else {
    e.stopPropagation();
    $(this).closest('li').toggleClass('active');
    $(this).closest('li').siblings().removeClass('active');
  }
});



$(".header__link-wrapper__sublist .expand-trigger, .header__link-wrapper__sublist h3").click(function() {
  var self = this;
  // console.log('e');
  if (isMobile()) {
    var siblingUls = $(self).parent().siblings("ul");
    $(".header__subitem__menu ul").not(siblingUls).slideUp(150);
    $(self).parent().siblings("ul").slideToggle(150, function() {
      if($(this).is(":visible")) {
        $(this).css("display", "block")
      }
    });
  }
})
  })();
