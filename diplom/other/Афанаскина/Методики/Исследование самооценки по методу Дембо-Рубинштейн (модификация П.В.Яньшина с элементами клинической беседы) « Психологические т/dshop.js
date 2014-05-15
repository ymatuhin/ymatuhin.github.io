jQuery(document).ready(function($) {

  
  if ($('#attachFile').length) {
    var actionType = $('#attachFile').attr('class');
    //alert (actionType);
  new AjaxUpload('#attachFile', {
    action: 'http://vsetesti.ru',
    name: 'attachment',
    data: {
      action : 'attach_file',
      action_type: actionType
    },
    autoSubmit: true,
    responseType: "json",
    onSubmit: function(file, extension) {
      $(".attachFileForm .init"). hide();
      $(".attachFileForm .jqLoading"). show();
      $('.postForm .formMessages div').hide();
    },
    onComplete: function(file, response) {
      //alert(response);
      $(".attachFileForm .jqLoading").hide();
      $(".attachFileForm .init").show();
      
      if (!response['error']) {
        $('#action').after('<input class="child-'+response['success']['id']+' afterRemove" type="hidden" name="post_childrens[]" value="'+response['success']['id']+'"/>');
        
        $('#attach').append('<tr id="post-'+response['success']['id']+'" class="afterRemove thumbsWrap-'+response['success']['id']+'"><td class="dshopThumbs"><a href="javascript:void(0);" title="Показать Эскиз работы">'+response['success']['title']+'</a></td><td class="fileInfo">'+response['success']['filesize']+'</td><td class="fileOper"><a href="javascript:void(0);" class="hide delAttachment p-'+response['success']['id']+'">удалить</a></td></tr>');        
        $('#attach:hidden').show();
      }
      else {
        $('.postForm .formMessages .jqError').html(response['error']).show();
      }
    }
  });
  };

  
  /* Delete Post */
  $(".delAttachment").live("click", function () {
    if (confirm('Удалить?')) {
      
      $.ajax({
        url: "http://vsetesti.ru",
        type:"POST",
        dataType: 'json',
        data: { action: "del-post", pid: $(this).classData("p") },
        beforeSend: function() {
          //$(link).find('img').attr('src', 'http://noktik.ru/wp-content/plugins/noktik/images/loading.gif');
        },        
        success: function(data) {
          if(!data['error']) {
            $("#post-" + data['pid']).remove();
            if (!$('#attach tr').length)
              $('#attach').hide();
            $('input [class="child-'+data['pid']+'"]').remove();              
          }
          else { alert(data['error']); }
        }
      })
    }
  });  
  
  
  $('#attach tr').live('mouseover', function(event) {
      $(this).addClass('active');
      $(this).find('.fileOper a').show();
  }).live('mouseout', function(event) {
      $(this).removeClass('active');
      $(this).find('.fileOper a').hide();
  });
  
  /*
  $('.dshopSimple').live('mouseover', function(event) {
      $(this).addClass('grayBack');
  }).live('mouseout', function(event) {
      $(this).removeClass('grayBack');
  });  
  */
   

  $('[class*="buyConfirm"]').live("click", function () {
    //alert($(this).classData('dshopBuy'));
    var pid = $(this).classData('buyConfirm');
    $.ajax({
      url: "http://vsetesti.ru/",
      type:"POST",
      data: {
        action: "dshop_buy",
        pid: $(this).classData('buyConfirm')
      },
      dataType: "json",
      beforeSend: function() {
        //alert('Oops!');
        $('#dshopAlert .formMessages .jqLoading').html('Пожалуйста, подождите...').show();
      },
      success: function(data) {
        $('#dshopAlert .formMessages .jqLoading').html('').hide();        
        if(data['success']) {
          $.each(data, function (metaKey, urlArr) {
            $.each(urlArr, function (key, value){
              $('a[class*="a-'+key+'"]').attr('href', value);
              $('a[class*="a-'+key+'"]').removeClass('dshopBuy-'+pid).removeClass('light');
            });           
          });
          $('#dshopAlert .dshopAlertWrap').html('<h2>Вы успешно оплатили покупку</h2><p>Чтобы скачать работу нажмите на имя файла.</p><p class="small light">Это окно можно закрыть.</p>');
        }
        if(data['error'])
          $('#dshopAlert .dshopAlertWrap').html(data['error']);
      }
    });
  });  


  $('[class*="dshopBuy"]').live("click", function () {
    $('#dshopAlert .dshopAlertWrap').html('');
    $('#dshopAlert .formMessages .jqLoading').html('Пожалуйста, подождите...').show();
      
      $("#dshopAlert").overlay({
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

    var pid = $(this).classData('dshopBuy');
    $.ajax({
      url: "http://vsetesti.ru/",
      type:"POST",
      data: {
        action: "dshop_pre_buy",
        pid: $(this).classData('dshopBuy')
      },
      dataType: "json",
      beforeSend: function() {
        //alert('Oops!');
      },
      success: function(data) {
        $('#dshopAlert .formMessages .jqLoading').html('').hide();      
        if (data['success'])
          $('#dshopAlert .dshopAlertWrap').html(data['success']);
      }
    });    
    });          
  
  // dShop Show Thumbs
  $('[class*="thumbsWrap"] .dshopThumbs a, div[class*="thumbsWrap"] .showAllThumbs').live("click", function () {
    //$("#dshopAlert").addClass('overlayWide');
    var width = $("#dshopAlert").css('width');
    $("#dshopAlert").css('width', '760px');
    
    var attachmentId = $(this).parents('[class*="thumbsWrap"]').classData('thumbsWrap');
    $("#dshopAlert .dshopAlertWrap").html('');
    $('#dshopAlert .formMessages .jqLoading').html('Пожалуйста, подождите...').show();    
    
      $("#dshopAlert").overlay({
        // some expose tweaks suitable for modal dialogs 
        expose: { 
          color: '#333', 
          loadSpeed: 200, 
          opacity: 0.9 
          },
        // we want to use the programming API 
        api: true,
        onClose: function() {
          $("#dshopAlert").css('width', width);      
        },
        top: '5%' 
      }).load();
      
    $.ajax({
      url: "http://vsetesti.ru/",
      type:"POST",
      data: {
        action: "get_dshop_thumbs",
        attachment_id: attachmentId
      },
      dataType: "json",
      beforeSend: function() {
        //alert('Oops!');
      },
      success: function(data) {
        $('#dshopAlert .formMessages .jqLoading').html('').hide();      
        if (data['success'])
          $('#dshopAlert .dshopAlertWrap').html(data['success']);
      }
    });             
  });
  
  $('a.hideMe').live("click", function () {
    $(this).next().show();
    $(this).hide();
  });
  
  
});