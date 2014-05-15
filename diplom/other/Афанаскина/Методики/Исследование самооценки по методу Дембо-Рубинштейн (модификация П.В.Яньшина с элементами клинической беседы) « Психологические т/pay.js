
jQuery(document).ready(function($) {
 
  
  $('.payment').live("click", function () {
    $.ajax({
      url: "http://vsetesti.ru/",
      type:"POST",
      data: {
        action: "pay_trac"
      },
      dataType: "json",
      beforeSend: function() {
      },
      success: function(data) {
        alert(data);
      }
    });
  });  
  


});