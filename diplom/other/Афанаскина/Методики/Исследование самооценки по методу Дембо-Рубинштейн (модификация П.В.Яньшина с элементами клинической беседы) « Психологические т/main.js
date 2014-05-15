
jQuery(document).ready(function($) {





 /* Round Block Tab */
	$('.pgHeader a[class*="tab"]').live("click", function () {

  	var header = $(this).parents('.pgHeader');
  	var content = $(this).parents('.pgHeader').siblings('.pgContent');
  	var el = $(content).find('.tab-' + $(this).classData('tab'));
    var tabs = $(content).find("div[class*='tab']");

		//$(header).find('[class*="tab"]').removeClass('down').removeClass('up');
  	if ($(el).is(':hidden')) {
 	 		$(tabs).hide();

    	$(el).show();
    	//$(this).addClass('up');
    }
    else {
			$(el).hide();
    }
 	})

	$(".pgHeader a[class*='tab'][class*='collapsed']").bind("mouseenter", function(e){
  	var content = $(this).parents('.pgHeader').siblings('.pgContent');
  	var el = $(content).find('.tab-' + $(this).classData('tab'));

		if($(el).is(':hidden'))
			$(this).addClass("down");
  });
	$(".pgHeader a[class*='tab'][class*='collapsed']").bind("mouseleave", function(e){
  	var content = $(this).parents('.pgHeader').siblings('.pgContent');
  	var el = $(content).find('.tab-' + $(this).classData('tab'));

		if($(el).is(':hidden'))
			$(this).removeClass("down");
  });

  
 /* Round Block Tab */
  $('.hideBlock .continue').live("click", function () {

    var tabHide = $(this).parents('.hideBlock');
    $(tabHide).hide().next('.hideBlock').show();

  });  
  


  /*  Submit LOGIN (Signon) Form */
	$('.jqLoginForm').submit(function(){
		$(this).ajaxSubmit({
			dataType: 'json',
			beforeSubmit: function(){
      	$('.jqLoginForm:visible input, .jqLoginForm:visible textarea').attr("disabled","disabled");
      	$('.pgSmall .pgMessage:visible div').hide();
      	$('.pgSmall .pgMessage:visible .jqLoading').html("Отправляется...").show();
			},
			success: function(data) {
      	$('.pgSmall .pgMessage:visible .jqLoading').hide();
				if (!data['error']) {
					$(".jqLoginForm").clearForm();
	      	$('.pgSmall .pgMessage:visible .jqSuccess').html(data['success']).show();
	      	if (data['redirect']) { window.location = data['redirect']; }
  				}
				else {
	      	$('.jqLoginForm:visible input, .jqLoginForm:visible textarea').removeAttr("disabled");
					$('.pgSmall .jqError').html(data['error']).show();
				}
			},
      clearForm:true
		})
		return false;
	});


  $('.jqLogout').live("click", function () {
		$.ajax({
	  	url: "http://vsetesti.ru/",
	  	type:"POST",
			data: {
				action: "logout"
			},
			dataType: "json",
			beforeSend: function() {
	     	$('.pgSmall .pgMessage:visible div').hide();
	     	$('.pgSmall .pgMessage:visible .jqLoading').html("Отправляется...").show();
			},
			success: function(data) {
	    $('.pgSmall .pgMessage:visible .jqLoading').hide();
				if (!data['error']) {
			   	$('.pgSmall .pgMessage:visible .jqSuccess').html(data['success']).show();
			   	if (data['redirect']) { window.location = data['redirect']; }
		  	}
				else {
					$('.pgSmall .jqError').html(data['error']).show();
				}
			}
		})
  });



  /*  Submit Edit-Profile Form */
	$('.jqForm').submit(function(){
		$(this).ajaxSubmit({
			dataType: 'json',
			beforeSubmit: function(){
      	$('.jqForm:visible input, .jqForm:visible textarea, .jqForm:visible select').attr("disabled","disabled");
      	$('.formMessage:visible div').hide();
      	$('.formMessage:visible .jqLoading').html("Отправляется...").show();
			},
			success: function(data) {
      	$('.formMessage:visible .jqLoading').hide();
				if (!data['error']) {
					//$(".jqForm").clearForm();
	      	$('.jqForm:visible input, .jqForm:visible textarea, .jqForm:visible select').removeAttr("disabled");
	      	$('.formMessage:visible .jqSuccess').html(data['success']).show();
	      	if (data['redirect']) { window.location = data['redirect']; }
  			}
				else {
	      	$('.jqForm:visible input, .jqForm:visible textarea, .jqForm:visible select').removeAttr("disabled");
					$('.formMessage .jqError').html(data['error']).show();
				}
			},
      clearForm:false
		})
		return false;
	});


  // Char Counter
	$(".counter").charCounter(300, {
		container: "<p></p>",
		classname: "note",
		format: "Осталось знаков: %1",
		pulse: false,
		delay: 50
	});

  $(".counter-500").charCounter(500, {
    container: "<p></p>",
    classname: "note",
    format: "Осталось знаков: %1",
    pulse: false,
    delay: 50
  });

  /*  Submit Forum Form */
	$('#jqForumForm').submit(function(){
		if ($('.mceEdit').length) {
			$('#postContent').attr('value', tinyMCE.activeEditor.getContent());
		}

		$(this).ajaxSubmit({
			dataType: 'json',
			beforeSubmit: function(){
      	$('#jqForumForm input, #jqForumForm textarea, #jqForumForm  select').attr("disabled","disabled");
        $('.mceEdit').attr('disabled', 'disabled');
        if ($('#jqForumForm .mceEdit').length )
	        tinyMCE.execCommand('mceRemoveControl', false, 'postContent');

      	$('.postForm .formMessages div').hide();
      	$('.postForm  .formMessages .jqLoading').html("Отправляется...").show();
			},
			success: function(data) {
      	$('.postForm .formMessages .jqLoading').hide();
      	$('#jqForumForm  input, #jqForumForm  textarea, #jqForumForm  select').removeAttr("disabled");
				if ($('#jqForumForm .mceEdit').length )
	      	tinyMCE.execCommand('mceAddControl', false, 'postContent');

				if (!data['error']) {
					$("#jqForumForm").clearForm();
					$("#forumForm input[type='hidden'][name!='action'][name!='post_category']").attr('value', '');
	      	$('.postForm .formMessages .jqSuccess').html(data['success']).show();

          // REMOVE AND HIDE
          $('#jqForumForm [class*="afterRemove"]').remove();
          $('#jqForumForm [class*="afterHide"]').hide();
          
	      	// Delete inline photo
					if ( $('.inlineNailPic img').length ) {
						$('.inlineNailPic img').remove();
					}
					$('.nailImgUrlBlock').hide();
					$('#imgFile').attr('value','0');

	      	if (data['redirect']) { window.location = data['redirect']; }
					if (data['close_form']) { $('#jqForumForm').addClass('hide'); }
  				}
				else {
					$('.postForm .formMessages .jqError').html(data['error']).show();
				}
			}
		})
		return false;
	});


	/* Delete Post */
	$(".delPost").live("click", function () {
		if (confirm('Удалить запись?')) {
			$.ajax({
	  		url: "http://vsetesti.ru",
	  		type:"POST",
				dataType: 'json',
				data: { action: "del-post", pid: $(this).classData("p") },
				success: function(data) {
					if(!data['error']) {
						$("#post-" + data['pid']).hide("highlight", {"color":"#DFDFDF"}, 1000);
					}
					else { alert(data['error']); }
				}
			})
		}
	});

	/* Submit Comment */

	jQuery('#jqCForm').submit(function(){
		jQuery(this).ajaxSubmit({
			beforeSubmit: function(){
      	jQuery(".jqCForm .jq_loading").show();
			},
			success: function(data) {
      	jQuery(".jqCForm .jq_loading").hide();
				jQuery(".jqCForm .jq_success, .jqCForm .jq_clear").show();
        //alert(data);
				// If Edit Comment
				if (jQuery(".commentlist .cEdited").length) {
					jQuery("table.cEdited").after(data).remove();
				}
				else {
          // if reply
					if (parseInt(jQuery("#comment_parent").val())) {
						jQuery("table.comment-"+jQuery("#comment_parent").val()).after(data);
					}
					else {
						if (!jQuery("ol.commentlist").length) {
							jQuery("#respond").before("<ol class='commentlist'></ol>");
						}
						jQuery("ol.commentlist").append("<li class='comment'>" +  data + "</li>");
					}
				}
				jQuery("table.comment-"+jQuery("#comment_ID").val()).show("highlight", {"color":"#DFDFDF"}, 1000);
				clearCForm();
			},
      clearForm:true
		})
		return false;
	});

	/* Delete Comment */
	$(".delComment").live("click", function () {
		if (confirm('Удалить комментарий?')) {
			$.ajax({
  			url: "http://vsetesti.ru",
  			type:"POST",
				data: { action: "del-comment", cid: $(this).classData("c") },
				success: function(data) {
					$("table.comment-" + data).hide("highlight", {"color":"#DFDFDF"}, 1000);
					setTimeout(function(){ $(".comment-" + data).remove(); }, 1000);
				}
			})
		}
	});






  /* Comment Replay */
	jQuery(".commentlist .reply, .commentlist .editComment").live("click", function(){
    //alert("Oops!");
    // Show all hide comment
    jQuery(".commentlist .cEdited").show();

    var cID = jQuery(this).classData("c");
    var cTemp = jQuery("table.comment-" + cID);

    // Move Comment Form after comment content
  	jQuery("div.jqCForm").insertAfter(jQuery("table.comment-" + cID));

 		// Clear Form if we move it
		jQuery("#jqCForm").clearForm();

		var parentID = jQuery(cTemp).find(".inlineEdit .cParent").text();
		var postID = jQuery(cTemp).find(".inlineEdit .cPostId").text();
		var cUid = jQuery(cTemp).find(".inlineEdit .cUid").text();

		// Set Some Variables
		jQuery("#comment_post_ID").val(postID);

		if (jQuery(this).hasClass("reply")) {
	    jQuery(".cFormTitle").text('Ответить на комментарий');
			jQuery("#comment_parent").val(cID);
		}
		else {

	    jQuery("table.comment-" + cID).addClass('cEdited').hide();
	    jQuery(".cFormTitle").html('Править комментарий');

		  $("#comment_content").val($(cTemp).find("[class*='cb'][class*='c-" + cID + "']").html().split('  ').join(' '));


	  //tinyMCE.activeEditor.setContent($('#c-' + cID).html());

			jQuery("#cAction").val('edit-comment');
			jQuery("#comment_parent").val(parentID);
			jQuery("#user_id").val(cUid);
			jQuery("#comment_ID").val(cID);
		}
	});


	/* Close Comment Form */
	jQuery("#jqCForm .cancel").live("click", function () {
		clearCForm();
	});

function clearCForm() {
 		// Clear Form
		$("#jqCForm").clearForm();
		$("#comment_ID, #user_id,  ").val('');

		// Set Initial Variables
		$("#cAction").val('add-comment');
		$("#comment_parent").val('0');
		$("#comment_post_ID").val(jQuery(".post").classData("post"));
	  $("div.jqCForm").find(".cFormTitle").text('Добавить комментарий');
    $(".formMessage div").hide();
		if ( !$(this).parents("div#post_form").length ){
  		// Move it Home
			$("#respond").append($("div.jqCForm"));
		  $('#comment_content').attr('value', '');
			$('.formContent').show();
	    // Show all hide comment
  	  $(".commentlist .cEdited").show();
		}
};




	$(".free").live("click", function(){
		var postId = $(this).parents('.post');

		if ($(this).parents('table.horizontWide').length)
			$('.payAccount').insertAfter($('table.horizontWide')).show();
		else
			$('.payAccount').insertAfter($(postId)).show();

		window.location.href=window.location.href.replace(/(#.*)$/g, '') + "#profAccount";
	});



  // Prepare country
  $("select#country option").remove();
	var countryTitle = '<option value="100" selected="selected">Выберите страну</option>';
	$(countryTitle).appendTo("select#country");
  $("select#country").show();  
	$.each(JSONResponse, function(k, v) {
		var row = '<option value="' +  k +  '">' +  v.country_name + '</option>';
		$(row).appendTo("select#country");
	});

  $("select#country").change(function(){

    var current = $(this).val();
    var providers = (current != '100') ? JSONResponse[current]['providers'] :'';

	  $("select#providers option").remove();
	  $("select#providers").hide();

    $('span[class*="sms"], p[class*="sms"]').text('').hide();
    $('div[class*="sms"]').hide();

  	if (providers.length && current != 100 ) {
			var providersTitle = '<option value="-1" selected="selected" class="opTitle">Выберите оператора</option>';
			$(providersTitle).appendTo("select#providers");
			$.each(providers, function(k, v) {
				var row = '<option value="' +  k +  '">' +  v.name + '</option>';
				$(row).appendTo("select#providers");
			});
		  $("select#providers").show();
  	}
  	else if (!providers.length && current != 100 ) {
  		fill_sms(JSONResponse[$(this).val()]);
  	}

  });

  $("select#providers").change(function(){
    $('span[class*="sms"], p[class*="sms"]').text('').hide();
    $('div[class*="sms"]').hide();
    fill_sms(JSONResponse[$('#country').val()]['providers'][$(this).val()]);
  });



	function fill_sms (data) {
	  var keyId = 215946;
  	var msg = (data['rewrite'] == '') ? data['prefix'] + ' ' + keyId : data['rewrite'];
  	var vat = (parseInt(data['vat'])) ? ' (включая НДС)' : ' (не включая НДС)'; 
    var price = data['price'] + ' ' + data['currency'] + vat;
  	var special = (data['special']) ? data['special'] : '';

  	$('.payAccount span.sms_msg').prepend(msg);
  	$('.payAccount span.sms_num').prepend(data['number']);
		$('.payAccount span.sms_price').prepend(price);
		$('.payAccount .sms_special').prepend(special);
	  $('span[class*="sms"], p[class*="sms"], div[class*="sms"]').show();
  	$('.msg_plus').show();
	}

  //if (('.lesterchanUo').length) {
  
    checkUo();  
    //$('.lesterchanUo').everyTime(10000, 'uo', function(i){
    $('.rightMenu').everyTime(10000, 'uo', function(i){      
      checkUo();  
    });     
  //};

 
  /*
  var next = adRotator (-1);
  $('.menuFixed').everyTime(10000, 'uo', function(i){      
    next = adRotator (next);  
  });     
  
  function adRotator (next) {
    var next, index;
    
    var len = $('.slideAd div').length;
    if (next == -1) {
      next = Math.floor(Math.random() * len)
      $($('.slideAd div').get(next)).show("slide", {"direction":"right"}, 1000); 
    }
    else {
      index = next;
      next = (index == (len - 1) ) ? 0 : index + 1;
      $($('.slideAd div').get(index)).hide("slide", {"direction":"right"}, 1000);
      setTimeout(function(){  
        $($('.slideAd div').get(next)).show("slide", {"direction":"right"}, 1000); 
      }, 1000);  
    }
    return next;
  }  
  */
  
  function checkUo(){
    
        var len = $('.slideAd div').length;
        var index = $('.slideAd div').index($('.slideAd div:visible'));

        if (index != -1) {
          $($('.slideAd div').get(index)).hide("slide", {"direction":"right"}, 1000);
          var next = (index == (len - 1) ) ? 0 : index + 1;
        }
        else 
          var next = Math.floor(Math.random() * len)
          
        
        //$('.lesterchanUo').hide("slide", {"direction":"right"}, 1000);
        setTimeout(function(){  
          //$('.lesterchanUo').show("slide", {"direction":"right"}, 1000); 
          $($('.slideAd div').get(next)).show("slide", {"direction":"right"}, 1000); 
        }, 1000);
  };
  
  /*
  function checkUo(){
    $.ajax({
      url: "http://vsetesti.ru",
      type:"POST",
      dataType: 'json',
      data: { action: "lesterchan_uo" },
      success: function(data) {

        
        var len = $('.slideAd div').length;
        var index = $('.slideAd div').index($('.slideAd div:visible'));

        if (index != -1) {
          $($('.slideAd div').get(index)).hide("slide", {"direction":"right"}, 1000);
          var next = (index == (len - 1) ) ? 0 : index + 1;
        }
        else 
          var next = Math.floor(Math.random() * len)
          
        
        $('.lesterchanUo').hide("slide", {"direction":"right"}, 1000);
        setTimeout(function(){  
          $('.lesterchanUo').html(data['success']['new_user'] + '<br/>' + data['success']['uo']).show("slide", {"direction":"right"}, 1000); 
          $($('.slideAd div').get(next)).show("slide", {"direction":"right"}, 1000); 
        }, 1000);
      }
    });  
  };
  */

  $(".carousel").jCarouselLite({
    btnNext: ".pulseNav .next",
    btnPrev: ".pulseNav .prev",
    visible: 1
  });
   
  
  
  $(".clickCounter a").live("click", function () {
    cl($(this).attr('href')); 
    //alert($(this).attr('href'));   
  });
  
  function cl(link) {
    var img = new Image(1,1);
    img.src = 'http://www.liveinternet.ru/click?*' + link;
  }   
   

   
   /*
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
   */
   
     /* EXPRESS EMO TEST */
     /*
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
            $('.eet .eetRes').html(data['success']).show();
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
    */

    $(".pulseClose").live("click", function(){
      $('.pulse').hide("slide", {"direction":"left"}, 1000);
    });  

  if($('#buySellAd').length) {
  var width = $("#buySellAd").css('width');
  
  $('#buySellAd').oneTime(1500, function(i){
    $("#buySellAd").overlay({
      closeOnClick: false,
      // some expose tweaks suitable for modal dialogs 
      expose: { 
        color: '#333', 
        loadSpeed: 200, 
        opacity: 0.9 
      },
      // we want to use the programming API 
      api: true,
      onBeforeLoad: function () {
        $("#buySellAd").css('width', '500px');              
      },
      onClose: function () {
        $("#buySellAd").css('width', width);                      
      } 
    }).load();  
  });
  }   
   
});