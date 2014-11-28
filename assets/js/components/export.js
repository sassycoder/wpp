(function () {
	'use strict';
	var $document = $(document);
			// closeBtns = function (ev) {
			// 	if ($(ev.target).parent('.export').length > 0) {
			// 		return;
			// 	} else {
			// 		$('.export').next('.export-buttons').slideUp('fast', function () {
			// 			$('.export').removeClass('active');
			// 		});
			// 	}
			// };

	$document.on('click', '.export', function (ev) {
		var $this = $(this);

		if ($this.hasClass('active')) {
			$this.next('.export-buttons').slideUp('fast', function () {
				$this.toggleClass('active');
			});
			return;
		} else {
			// $('.export').next('.export-buttons').slideUp('fast', function () {
			// 	$('.export').removeClass('active');
			// });
			$this.toggleClass('active');
			$this.next('.export-buttons').slideDown('fast');
		}

	ev.preventDefault();
	});

}());