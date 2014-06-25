
jQuery(document).ready(function($) {

  $('#button_show_questions input').live("click", function () {
    $('#questions').show();
    $(this).remove();
    $('#tmr_fld').everyTime(1000, 'totaltime', function(i){
      $('#tmr_fld').val(i);
    });     
  });

  
  $('.content-inner-survey ul').bind("mouseenter mouseleave", function(e){ 
    //$(this).toggleClass('grayBack');
  });
  
  
  /*  Submit Survey */
  $('#tform').submit(function(){
    
    $(this).ajaxSubmit({
      dataType: 'json',
      beforeSubmit: function(){
        $('#tmr_fld').stopTime();

        $('#tform:visible input, #tform:visible textarea, #tform:visible select').attr("disabled","disabled");
        $(' .formMessages:visible div').hide();
        $('.formMessages .jqLoading').html("Ответы сохраняются...").show();
      },
      success: function(data) {
        $('.formMessages:visible .jqLoading').hide();
        //alert (data['error']);
        if (!data['error']) {
          $("#tform").clearForm();
          $('.jqSuccess').html(data['success']).show();
          if (data['redirect']) { window.location = data['redirect']; }
          if (data['close_form']) { 
            $('#tform').hide(); 
            $('#questions h5.qstTitle').text('Спасибо!')
          }          
        }
        else {
          var loopTime = parseInt($('#tmr_fld').val());
          $('#tmr_fld').everyTime(1000, 'totaltime', function(i){
            
            $('#tmr_fld').val(loopTime + i);
          }); 
          
          $('#tform:visible input, #tform:visible textarea, #tform:visible select').removeAttr("disabled");
          $('.jqError').html(data['error']).show();
        }
      }
    })
    return false;
  });  
  
 
  $('#sciomSurvey').oneTime(1500, function(i){
    $("#sciomSurvey").overlay({
      closeOnClick: false,
      // some expose tweaks suitable for modal dialogs 
      expose: { 
        color: '#333', 
        loadSpeed: 200, 
        opacity: 0.9 
      },
      // we want to use the programming API 
      api: true 
    }).load();  
  });   
  
});