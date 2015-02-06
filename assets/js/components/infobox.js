$(document).ready(function() {
	'use strict';
		var $this = $(this);

		$this.on('click', '.tooltipstered', function (ev) {
			ev.preventDefault();
		});

		$this.on('focus', '.infographic', function () {
			$(this).tooltipster('show');
		});

		$this.on('blur', '.infographic', function () {
			$(this).tooltipster('hide');
		});

		var touchEnabled = $('html').hasClass('touchenabled');

		if (touchEnabled) {
			
		}
});