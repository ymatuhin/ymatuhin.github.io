jQuery(document).ready(function($) {
  
  // Clear EMO colors after page refresh
  if ($("#emo_color").length) {
    $("#emo_color, #emo_colorr").val('FFFFFF');
  }

  $(".eet .liColor li").live("click", function(){   
    var colorNo = $(this).classData("c");
    var colors = new Array(
      '2653A5', '2B5564', 'E35218', 'FEE855', '5C259A', '6E4010','AFAFAF','090909'
    );
    //alert (colors[colorNo]);
    var color = colors[colorNo];
      
      if ($("#emo_colorr").length) {

        if($("#emo_color").val() == 'FFFFFF' && $("#emo_colorr").val() == 'FFFFFF') {
          //alert ('1');
          $("#emo_color").val(color);
          $("#emo-color-input").css({"background-color":"#"+color, 'border-color':"#"+color}) ;      
        }
        else if($("#emo_color").val() != 'FFFFFF' && $("#emo_colorr").val() == 'FFFFFF') {
                //alert ('2');
          $("#emo_colorr").val(color);
          $("#emo-color-inputt").css({"background-color":"#"+color, 'border-color':"#"+color}) ;        
        }
        else if($("#emo_color").val() != 'FFFFFF' && $("#emo_colorr").val() != 'FFFFFF') {
                //alert ('3');
          $("#emo_color").val(color);
          $("#emo-color-input").css({"background-color":"#"+color, 'border-color':"#"+color}) ;        
          
          $("#emo_colorr").val('FFFFFF');
          $("#emo-color-inputt").css({"background-color":"#FFFFFF", 'border-color':"#959596"}) ;               
        }    
      }
      else {
        $("#emo_color").val(color);
        $("#emo-color-input").css({"background-color":"#"+color, 'border-color':"#"+color}) ;
        $("#emo_url").val('0');
      }      

    });   
   
   
     /* EXPRESS EMO TEST */
    $(".eet .emoClear").live("click", function(){
      $('#emo-color-input, #emo-color-inputt').css({'background-color': '#FFFFFF', 'border-color':"#959596"});
      $("#emo_color, #emo_colorr").val('FFFFFF');
    });  
    
    $(".eet .emoClose").live("click", function(){
      $('.eet').hide("slide", {"direction":"right"}, 1000);
    });     
    
    $(".eet .emoSend").live("click", function(){
    if ($("#emo_color").val() != 'FFFFFF' && $("#emo_colorr").val() != 'FFFFFF' && $("#emo_colorr").val() != $("#emo_color").val()) {
      $.ajax({
        url: "http://vsetesti.ru",
        type:"POST",
        dataType: 'json',
        data: { action: "emoSet", emo_color: $("#emo_color").val(), emo_colorr: $("#emo_colorr").val()},
        beforeSend: function() {
          $('.emoSend, .emoClear').attr("disabled","disabled");  
          $('.eet .jqLoading').text('Отправляется...').show();
        },        
        success: function(data) {
          $('.eet .jqLoading').hide();          
          if (!data['error']) {
            $('.eet .eetForm').hide();
            $('.emoTest').css({'width':'540px'});
            $('.eet .eetRes').html(data['success']['interp']).show();
            $('#eeFeedbackForm #emo_id').val(data['success']['emo_id']);
            $('.eeFeedbackForm').show();
            $('.moreRes').show();
          }
          else
            $('.eet .jqError').html(data['error']).show()          
        }
      });
    }
    else if ($("#emo_color").val() != 'FFFFFF' && $("#emo_colorr").val() == $("#emo_color").val()){
      alert('Пожалуйста, выберите два разных цвета.')
    }  
    else if ($("#emo_color").val() == 'FFFFFF' || $("#emo_colorr").val() == 'FFFFFF'){
      alert('Пожалуйста, выберите два цвета.')
    }      
    });        
    
    // SEND FEEDBACK
    $('#eeFeedbackForm').submit(function(){    
      $(this).ajaxSubmit({
        dataType: 'json',
        beforeSubmit: function(){
          $('#eeFeedbackForm input, #eeFeedbackForm textarea, #eeFeedbackForm  select').attr("disabled","disabled");
          $('.eeFeedbackForm  .formMessages div').hide();
          $('.eeFeedbackForm  .formMessages .jqLoading').html("Отправляется...").show();
        },
        success: function(data) {
          $('.eeFeedbackForm .formMessages .jqLoading').hide();
          if (!data['error']) {
            $('.eet .eetRes').hide();
            $('#eeFeedbackForm ').hide();
            $('.eeFeedbackForm .formMessages .jqSuccess').text('Спасибо!').show();
          }  
          else {
            $('#eeFeedbackForm input, #eeFeedbackForm textarea, #eeFeedbackForm  select').removeAttr("disabled");          
            $('.eeFeedbackForm .formMessages .jqError').text(data['error']).show();          
          }
          
        }
      });
      return false;
    });

    $(".emoFeedMore a").live("click", function(){
      var emoId;
      var moreLink = $(this);
      var moreWay = $(this).classData('way');
      
      if (moreWay == 'old')
        emoId = $('.emoFeed div[class*="item"]:last').classData('emoFeedId');  
      else  
        emoId = $('.emoFeed div[class*="item"]:first').classData('emoFeedId');  
      
      
      $.ajax({
        url: "http://vsetesti.ru",
        type:"POST",
        dataType: 'json',
        data: { action: "moreEmoFeed", emo_id: emoId, way: moreWay },
        beforeSend: function() {
          $(moreLink).addClass('moreLoading');
        },        
        success: function(data) {
          $(moreLink).removeClass('moreLoading');
          if (!data['error']) {
            if (moreWay == 'old')      
              $(data['success']).appendTo('.emoFeed');
            else
              $(data['success']).prependTo('.emoFeed');
          }
        }
      });      
    });
           
    
    
});    