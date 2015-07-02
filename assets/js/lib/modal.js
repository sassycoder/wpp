jQuery(document).ready(function($) {
	//Initialize login and register links.
	$('.login-link').click(function(){
		$('.tab-content .tab-pane').removeClass('active');
		$('.tab-content #login_tab').addClass('active fade in');
		jQuery('#alimir_bootmodal').modal('show');
	});
	$('.add-more').click(function(){
		jQuery(this).next('.add_more_popup').modal('show');
	});
	$('.wine').click(function(){
		jQuery('#wine_popup').addClass('animated').modal('show');
	});
	$('.register-link').click(function(){
		$('.tab-content .tab-pane').removeClass('active');
		$('.tab-content #register_tab').addClass('active');
		jQuery('#alimir_bootmodal').modal('show');
	});    // Perform AJAX login on form submit
    $('form#login').on('submit', function(e){
			var checkbox_value = "";
			if ($('#rememberme').is(":checked")) {
				checkbox_value = $('form#login #rememberme').val();
			}
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: ajax_login_object.ajaxurl,
				data: {
					'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
					'username': $('form#login #username').val(), 
					'password': $('form#login #password').val(),
					'login_captcha': $('form#login #login_captcha').val(),
					'rememberme': checkbox_value,
					'security': $('form#login #security').val() },
				beforeSend:function(){
					$('#wp-submit').button('loading');
					$('body').modalmanager('loading');
				},	
				success: function(data){
					$('body').modalmanager('removeLoading');
					$('#wp-submit').button('reset');
					$('form#login div.status').html(data.message).fadeIn();
					if (data.loggedin == true){
						window.location.href = ajax_login_object.loginRedirectURL;
					}
				}
			});
        e.preventDefault();
    });
	// refresh login captcha
	$("#login_captcha_img").click(function() {
		document.getElementById('login_captcha_img').src=ajax_login_object.captchaLink + "log-captcha.php";
	});
	// refresh register captcha
	$("#register_captcha_img").click(function() {
		document.getElementById('register_captcha_img').src=ajax_login_object.captchaLink + "reg-captcha.php";
	});
	// refresh lostpass captcha
	$("#lostpass_captcha_img").click(function() {
		document.getElementById('lostpass_captcha_img').src=ajax_login_object.captchaLink + "lost-captcha.php";
	});
	// enable tooltip
	$(function () {
		$("[data-toggle='tooltip']").tooltip();
	});
	// remove status box
	$("#register_tab a,#lostpass_tab a,#login_tab a,.close").click(function(){
		$('div.status').slideUp();
	});
});