jQuery(document).ready(function($) {


  $(".wpVoting a.vote").live("click", function () {
    var wpVoting = $(this).parents('.wpVoting');
    var votingScoreClass = $(wpVoting).find('.votingScore').attr('class');
    $.ajax({
      url: "http://vsetesti.ru",
      type:"POST",
      dataType: 'json',
      data: {
        action: "wpv_jq_voting",
        vote_for: $(this).classData("for"),
        vote_for_id: $(this).classData("forId"),
        vote_sign: $(this).classData("sign"),
        author_id: $(wpVoting).find('.votes').classData('authorId')
      },
      beforeSend: function() {
        $(wpVoting).find('.votingMessages p').hide();
        $(wpVoting).find('.votingMessages .jqLoading').show();
      },
      success: function(data) {
        $(wpVoting).find('.votingMessages p').hide();
        if(!data['error']) {
          $(wpVoting).find('.votingMessages .jqSuccess').show();
          $(wpVoting).find('.votingScore').attr('class', 'votingScore').text(data['voting']['voting_score']);

          if (data['voting']['voting_score'] > 0)
            $(wpVoting).find('.votingScore').addClass('plus');
          if (data['voting']['voting_score'] < 0)
            $(wpVoting).find('.votingScore').addClass('minus');
          if (data['voting']['voting_score'] == 0)
            $(wpVoting).find('.votingScore').addClass('zero');
        }
        else {
          $(wpVoting).find('.votingMessages .jqError').text(data['error']).show();
        }
      }
    });
  });
  
  $(".wpVoting a.vote").bind("mouseenter", function(e){
    var wpVoting = $(this).parents('.wpVoting');
    $(wpVoting).find('.votingMessages p').hide();
    $(wpVoting).find('.votingMessages .' + $(this).classData('sign') + 'Message').show();
  });
  $(".wpVoting a.vote").bind("mouseleave", function(e){
    var wpVoting = $(this).parents('.wpVoting');
    $(wpVoting).find('.votingMessages .' + $(this).classData('sign') + 'Message').hide();
  });
  
 
  
  
  
});