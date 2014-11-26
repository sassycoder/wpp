(function () {
	'use strict';
	var $document = $(document);

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