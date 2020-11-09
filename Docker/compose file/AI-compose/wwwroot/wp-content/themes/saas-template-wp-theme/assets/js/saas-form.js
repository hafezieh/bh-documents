  var module_7582806 = (function() {
    var __hs_messages = {};
    i18n_getmessage = function() {
      return hs_i18n_getMessage(__hs_messages, hsVars['language'], arguments); 
    };
    i18n_getlanguage = function() {
      return hsVars['language']; 
    };
$(function() {
  $(window).load(function() {
    $('.saas-form-1').each(function(i, el) {
      console.log($(el).find('form').children('div').length);
      if($(el).find('form').children('div').length > 2) {
        $(el).addClass('multiple-fields');
      }
    });
  });
});
  })();
