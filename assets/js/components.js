(function () {
  'use strict';

  var isTouch = $('html').hasClass('touch')
    , $document = $(document)
    , isResponsive = true;

  $document.on('click', '.top-level-item, .mega-item', function (ev) {

    var isDesktopEv = $(ev.currentTarget).hasClass('top-level-item');

    if ($(window).innerWidth() < 767 && isDesktopEv && isResponsive) {
      return true;
    } else {

      var $this = $(this).hasClass('mega-item') ? $(this).prev('.top-level-item') : $(this)
        , needsToOpen = ! $this.hasClass('active')
        , $menu = $this.closest('.megamenu-list')
        , closeFn = function (ev) {
            if ($(ev.target).closest('.megamenu-list').length === 0) {
              $menu.find('.top-level-item').removeClass('active');
              $menu.find('.mega-drop').hide();
              console.log(ev);
            }
          };

      $menu.find('.top-level-item').removeClass('active');
      $menu.find('.mega-drop').hide();

      if (needsToOpen) {
        $this
          .addClass('active')
          .closest('li')
          .find('.mega-drop')
          .show();

        if (isTouch) {
          $document.scrollTop( $this.offset().top );
        }

        $document.one('click', closeFn);
      }
      else {
        $document.off('click', closeFn);
      }

      ev.preventDefault();
    }
  });

  $document.on('click', '.mega-drop .close', function (ev) {
    var $tab = $(this).closest('.site-section');

    $tab.find('.top-level-item').removeClass('active');
    $tab.find('.mega-drop').hide();
    ev.preventDefault();
  });

  $document.on('click', '.nav-btn', function (ev) {
    var $this = $(this)
      , needsToOpen = ! $this.hasClass('open')
      , $controls = $this.closest('.nav')
      , dropdownSelector = '.search-box, .megamenu-list';

    $controls.find('.nav-btn').removeClass('open');
    $controls.find(dropdownSelector).hide();

    if (needsToOpen) {
      $this
        .addClass('open')
        .next(dropdownSelector)
        .show();
    }

    ev.preventDefault();
  });

  $(window).on('resize', function () {
    if (isResponsive) {

      var $menu = $('.megamenu-list');
      $menu.parent().find('.nav-btn').removeClass('open');


      if ($(this).innerWidth() > 1008) {
        $menu.show();
      }
      else {
        $menu.hide();
      }

    }
  });
}());
jQuery(document).ready(function($) {
	//Initialize login and register links.
	$('.login-link').click(function(){
		$('.tab-content .tab-pane').removeClass('active');
		$('.tab-content #login_tab').addClass('active');
		jQuery('#alimir_bootmodal').modal('show');
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
	// Perform AJAX register on form submit
	$('form#regform').on('submit', function(e) {
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: ajax_login_object.ajaxurl,
				data: { 
					'action': 'ajaxregister', //calls wp_ajax_nopriv_ajaxlogin
					'user_login': $('form#regform #user_login').val(), 
					'first_name': $('form#regform #first_name').val(),
					'surname': $('form#regform #surname').val(),
					'publication': $('form#regform #publication').val(),
					'job_title': $('form#regform #job_title').val(),
					'user_pass': $('form#regform #user_pass').val(),
					'security2': $('form#regform #security2').val() },
				beforeSend:function(){
					$('#pass-submit').button('loading');
					$('body').modalmanager('loading');
				},						
				success: function(data){
					$('body').modalmanager('removeLoading');
					$('#pass-submit').button('reset');
					$('form#regform div.status').html(data.message).fadeIn();
					if (data.registered == true && ajax_login_object.registerRedirectURL!=''){
						window.location.href = ajax_login_object.registerRedirectURL;
					}					
				}
			});
		e.preventDefault();
	});
	// Perform AJAX resetpass on form submit
	$('form#passform').on('submit', function(e) {
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: ajax_login_object.ajaxurl,
				data: {
					'action'     : 	'ajaxlostpass', // Calls our wp_ajax_nopriv_ajaxlogin
					'lost_pass'   : 	$('form#passform #lost_pass').val(),
					'lostpass_captcha'   : 	$('form#passform #lostpass_captcha').val(),
					'security3'   : 	$('form#passform #security3').val()
				},
				beforeSend:function(){
					$('#user-submit').button('loading');
					$('body').modalmanager('loading');
				},								
				success: function(data){
					$('body').modalmanager('removeLoading');
					$('#user-submit').button('reset');
					$('form#passform div.status').html(data.message).fadeIn();
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
(function () {
	'use strict';

	var $document = $(document),
			searchBox = $('.global-search'),
			searchBoxWidth = $(searchBox).data('width');

	$document.on('click', '.show-search', function (ev) {
		var $this = $(this);		
		
		if ($this.parent().hasClass('search-on')) {
			searchBox.stop().animate({width: 0},{queue: false, duration: 400, complete: function() {
				$this.parent().toggleClass('search-on');
			}});
		} else {
			$this.parent().toggleClass('search-on');
			searchBox.stop().animate({width: searchBoxWidth},{queue: false, duration: 500, complete: function() {
				$(searchBox).focus();
			}});
		}
		ev.preventDefault();
	});

}());