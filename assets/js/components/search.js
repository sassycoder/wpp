(function () {
	'use strict';

	var $document = $(document),
			searchBox = $('.global-search'),
			searchBoxWidth = $(searchBox).data('width'),
			getWidth = function () {
				var searchWidth;
				if ($(window).innerWidth() < 567) {
					searchWidth = '100vw';
				} else {
					searchWidth = searchBoxWidth;
				}
				return searchWidth;
			};

	$document.on('click', '.show-search', function (ev) {
		var $this = $(this);
		
		if ($this.parent().hasClass('search-on')) {
			searchBox.stop().animate({width: 0},{queue: false, duration: 400, complete: function() {
				$this.parent().toggleClass('search-on');
			}});
		} else {
			$this.parent().toggleClass('search-on');
			searchBox.stop().animate({width: getWidth()},{queue: false, duration: 500, complete: function() {
				$(searchBox).focus();
			}});
		}
		ev.preventDefault();
	});

	$(window).on('resize', function () {
		if ($(this).innerWidth() < 1023) {
			searchBox.css('width', '0').parent().removeClass('search-on');
		}
	});

}());