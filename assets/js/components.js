(function () {
  'use strict';

  var isTouch = $('html').hasClass('touch')
    , $document = $(document)
    , isResponsive = true;

  $document.on('click', '.top-level-item, .mega-item', function (ev) {

    var isDesktopEv = $(ev.currentTarget).hasClass('top-level-item');

    if ($(window).innerWidth() < 1024 && isDesktopEv && isResponsive) {
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


      if ($(this).innerWidth() > 1024) {
        $menu.show();
      }
      else {
        $menu.hide();
      }

    }
  });
}());
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