(function () {
	'use strict';
	var $document = $(document);

	$document.on('click', '.export', function (ev) {
		var $this = $(this),
				$allButtons = $('.bttn.export'),
				closeFn = function (ev) {
          if ($(ev.target).closest('.export').length === 0) {
							$allButtons.each(function () {
							$(this).removeClass('active').next('.export-buttons').slideUp('fast');
						});
          }
        };

		if ($this.hasClass('active')) {
			$this.next('.export-buttons').slideUp('fast', function () {
				$this.toggleClass('active');
				$document.off('click', closeFn);
			});
		} else {

			$allButtons.each(function () {
				$(this).removeClass('active').next('.export-buttons').slideUp('fast');
			});

			$this.toggleClass('active');
			$this.next('.export-buttons').slideDown('fast', function () {
				$document.on('click', closeFn);
			});
		}

	ev.preventDefault();
	});

}());