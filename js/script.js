$(function() {

  $('#da-slider').cslider({
    autoplay    : true,
    bgincrement : 0,
    interval    : 9000
  });

});

jQuery(function($){
  $('div#items').easyPaginate({
    step:3
  });
});    

$(document).ready(function(){
	$('#feedback-form').validate({
	rules: {
	  name: {
	    minlength: 2,
	    required: true
	  },
	  email: {
	    required: true,
	    email: true
	  },
	  city: {
	  	minlength: 3,
	    required: true,
	  },
	  subject: {
	  	minlength: 2,
	    required: true
	  },
	  message: {
	    minlength: 2,
	    required: true
	  }
	},
	highlight: function(label) {
		$(label).closest('.control-group').addClass('error');
	},
	success: function(label) {
		label
			.text('OK!').addClass('valid')
			.closest('.control-group').addClass('success');
	}
	});
	$("form#feedback-form").submit(function() {
		if ($("#feedback-form").valid()==true){
			var name     = $('#feedback-form-name').attr('value');
			var email    = $('#feedback-form-email').attr('value');
			var subject  = $('#feedback-form-subject').attr('value');
			var message  = $('#feedback-form-message').attr('value');
			var city  	 = $('#feedback-form-city').attr('value');
				$.ajax({
					type: "POST",
					url: "feedback.php",
					data: "feedback=1&name="+ name +"&email="+ email +"&subject="+ subject +"&message="+ message +"&city="+ city,
					success: function(){
						$('form#feedback-form').hide(function(){$('#feedback-success').fadeIn();});

					}
				});
				return false;
		}
	});
//---------------------------------------------------------------------------------------------------------------------------------------	
	$('#contact-form').validate({
	rules: {
	  name: {
	    minlength: 2,
	    required: true
	  },
	  email: {
	    required: true,
	    email: true
	  },
	  subject: {
	  	minlength: 2,
	    required: true
	  },
	  message: {
	    minlength: 2,
	    required: true
	  }
	},
	highlight: function(label) {
		$(label).closest('.control-group').addClass('error');
	},
	success: function(label) {
		label
			.text('OK!').addClass('valid')
			.closest('.control-group').addClass('success');
	}
	});
	$("form#contact-form").submit(function() {
		if ($("#contact-form").valid()==true){
			var name     = $('#contact-form-name').attr('value');
			var email    = $('#contact-form-email').attr('value');
			var subject  = $('#contact-form-subject').attr('value');
			var message  = $('#contact-form-message').attr('value');
			alert(name);
				$.ajax({
					type: "POST",
					url: "feedback.php",
					data: "name="+ name +"&email="+ email +"&subject="+ subject +"&message="+ message,
					success: function(){
						$('form#contact-form').hide(function(){$('#contact-success').fadeIn();});

					}
				});
				return false;
		}
	});

});