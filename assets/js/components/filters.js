(function () {
	'use strict';
	var $document = $(document),
		$body = $('body');

	$document.on('click', '.panel-header', function (ev) {
		if ($(window).innerWidth() < 768) {
			var $this = $(this);

			if ($this.hasClass('active')) {
				$(this).parent().next('.panel').slideUp(500, function () {
					$this.toggleClass('active');
				});
			} else {
				$this.toggleClass('active');
				$(this).parent().next('.panel').slideDown(400);
			}
		}
		ev.preventDefault();
	});

	$(window).on('resize', function () {
		if ($(this).innerWidth() > 768) {
			$('.panel').show();
		} else {
			$('.panel').hide().prev().find('.panel-header').removeClass('active');
		}
	});

	$document.on('click', '.view-grid, .view-list', function (ev) {
		if ($(this).hasClass('active')) {
			return;
		} else {
			$('.view-grid, .view-list').toggleClass('active');
			$body.toggleClass('toggle-mode');
		}
		ev.preventDefault();
	});

	$document.on('click', '.filters, .closeFilters', function (ev) {
		var targetEl = $(this).data('target-element');

		if ($(targetEl)) {
			if ($(targetEl).hasClass('active')) {
				$(targetEl).slideUp(400, function () {
					$(this).toggleClass('active');
				});
			} else {
				$(targetEl).slideDown(500, function () {
					$(this).toggleClass('active');
				});
			}
		}
		ev.preventDefault();
	});

}());