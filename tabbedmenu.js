/*
*
* credit: phpacademy
*
/*


/* first create a selector to the title element that we clicked on */

$('.tabs > ul li a').on('click', function(){

  var that = $(this), /*the elemnt that we clicked on */
      tabs = that.parent().parent().parent(),
      target = $.trim(that.attr('href').substring(1)),
      items = tabs.find('ul li');

  items.removeClass('selected').find('a[href="#' + target + '"]').parent().addClass('selected');

  /*hide that we haven't clicked on */
    tabs.find('.tab').fadeIn();
    tabs.find('.tab:not(".' + target + '")').hide();

});
