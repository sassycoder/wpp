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
		ev.preventDefault();
		if ($(this).hasClass('active')) {
			return;
		} else {
			$('.view-grid, .view-list').toggleClass('active');
			$body.toggleClass('toggle-mode');
		}
		$('.v1, .v2, .v3, .v4').isotope('updateSortData').isotope();
	});

	$document.on('click', '.bttn.filters, .closeFilters', function (ev) {
		$('.bttn.filters').toggleClass('active');
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
(function () {
  'use strict';

  var isTouch = $('html').hasClass('touch')
    , $document = $(document)
    , isResponsive = true;

  $document.on('click', '.top-level-item, .mega-item', function (ev) {

    var isDesktopEv = $(ev.currentTarget).hasClass('top-level-item');

    if ($(window).innerWidth() < 1023 && isDesktopEv && isResponsive) {
      return true;
    } else {

      var $this = $(this).hasClass('mega-item') ? $(this).prev('.top-level-item') : $(this)
        , needsToOpen = ! $this.hasClass('active')
        , $menu = $this.closest('.megamenu-list')
        , closeFn = function (ev) {
            if ($(ev.target).closest('.megamenu-list').length === 0) {
              $menu.find('.top-level-item').removeClass('active').parents('.megamenu').removeClass('open');
              $menu.find('.mega-drop').hide();
              //console.log(ev);
            }
          };

      $menu.find('.top-level-item').removeClass('active').parents('.megamenu').removeClass('open');
      $menu.find('.mega-drop').hide();

      if (needsToOpen) {
        $this
          .addClass('active')
          .closest('li')
          .find('.mega-drop')
          .show()
          .parents('.megamenu')
          .addClass('open');

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

    $tab.find('.top-level-item').removeClass('active').parents('.megamenu').removeClass('open');
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

      if ($(this).innerWidth() > 1023) {
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
			},
			closeSearch = function () {
				searchBox.stop().animate({width: 0},{queue: false, duration: 400, complete: function() {
					searchBox.parent().toggleClass('search-on');
				}});
			};

	$document.on('click', '.show-search', function (ev) {
		var $this = $(this);
		
		if ($this.parent().hasClass('search-on')) {
			searchBox.stop().animate({width: 0},{queue: false, duration: 400, complete: function() {
				$this.parent().toggleClass('search-on');
				$('.off-area').off('click', closeSearch);
			}});
		} else {
			$this.parent().toggleClass('search-on');
			searchBox.stop().animate({width: getWidth()},{queue: false, duration: 500, complete: function() {
				$(searchBox).focus();
				$('.off-area').one('click', closeSearch);
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