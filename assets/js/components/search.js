(function () {
	'use strict';

	var $document = $(document);

	$document.on('click', '.show-search', function (ev) {
		var $this = $(this);
		$this.parent().toggleClass('search-on');
		ev.preventDefault();
	});

}());