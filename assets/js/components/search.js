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