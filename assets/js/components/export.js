(function () {
	'use strict';
	var $document = $(document);

	$document.on('click', '.export', function (ev) {
		var $this = $(this),
				$allButtons = $('.bttn.export');

		if ($this.hasClass('active')) {
			$this.next('.export-buttons').slideUp('fast', function () {
				$this.toggleClass('active');
			});
			return;
		} else {

			$allButtons.each(function () {
				$(this).removeClass('active').next('.export-buttons').slideUp('fast');
			});

			$this.toggleClass('active');
			$this.next('.export-buttons').slideDown('fast');
		}

	ev.preventDefault();
	});

}());