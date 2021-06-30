/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend/checkout.js":
/*!**********************************!*\
  !*** ./src/frontend/checkout.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/frontend/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var selectWoo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! selectWoo */ "selectWoo");
/* harmony import */ var selectWoo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(selectWoo__WEBPACK_IMPORTED_MODULE_2__);




(function ($) {
  "use strict";

  var is_blocked = function is_blocked($node) {
    return $node.is('.processing') || $node.parents('.processing').length;
  };

  var block = function block($node) {
    if (!is_blocked($node)) {
      $node.addClass('processing').block({
        message: null,
        overlayCSS: {
          background: '#fff',
          opacity: 0.6
        }
      });
    }
  };

  var unblock = function unblock($node) {
    $node.removeClass('processing').unblock();
  };

  var append_image = function append_image(list, i, source, name, filetype) {
    var $field_list = $(list),
        source_class;

    if (filetype.match('image.*')) {
      source_class = 'image';
    } else if (filetype.match('application/ms.*')) {
      source = wooccm_upload.icons.spreadsheet;
      source_class = 'spreadsheet';
    } else if (filetype.match('application/x.*')) {
      source = wooccm_upload.icons.archive;
      source_class = 'application';
    } else if (filetype.match('audio.*')) {
      source = wooccm_upload.icons.audio;
      source_class = 'audio';
    } else if (filetype.match('text.*')) {
      source = wooccm_upload.icons.text;
      source_class = 'text';
    } else if (filetype.match('video.*')) {
      source = wooccm_upload.icons.video;
      source_class = 'video';
    } else {
      //if ((false === filetype.match('application/ms.*') && false === filetype.match('application/x.*') && false === filetype.match('audio.*') && false === filetype.match('text.*') && false === filetype.match('video.*')) || (0 === filetype.length || !filetype)) {
      source = wooccm_upload.icons.interactive;
      source_class = 'interactive';
    }

    var html = '<span data-file_id="' + i + '" title="' + name + '" class="wooccm-file-file">\n\
                <span class="wooccm-file-list-container">\n\
                <a title="' + name + '" class="wooccm-file-list-delete">×</a>\n\
                <span class="wooccm-file-list-image-container">\n\
                <img class="' + source_class + '" alt="' + name + '" src="' + source + '"/>\n\
                </span>\n\
                </span>\n\
                </span>';
    $field_list.append(html).fadeIn();
  };

  function field_is_required(field, is_required) {
    if (is_required) {
      field.find('label .optional').remove();
      field.addClass('validate-required');

      if (field.find('label .required').length === 0) {
        field.find('label').append('<abbr class="required" title="' + wc_address_i18n_params.i18n_required_text + '">*</abbr>');
      } //fix state hidden


      field.show();
      field.find('input[type=hidden]').prop('type', 'text');
    } else {
      field.find('label .required').remove();
      field.removeClass('validate-required woocommerce-invalid woocommerce-invalid-required-field');

      if (field.find('label .optional').length === 0) {
        field.find('label').append('<span class="optional">(' + wc_address_i18n_params.i18n_optional_text + ')</span>');
      }
    }
  }

  $(document).on('country_to_state_changing', function (event, country, wrapper) {
    var thisform = wrapper,
        thislocale;
    var locale_fields = $.parseJSON(wc_address_i18n_params.locale_fields);
    $.each(locale_fields, function (key, value) {
      var field = thisform.find(value),
          required = field.find('[data-required]').data('required') || field.find('.wooccm-required-field').length;
      field_is_required(field, required);
    });
  }); // Field
  // ---------------------------------------------------------------------------

  var fileList = {};
  $('.wooccm-type-file').each(function (i, field) {
    var $field = $(field),
        $button_file = $field.find('[type=file]'),
        $button_click = $field.find('.wooccm-file-button'),
        $field_list = $field.find('.wooccm-file-list');
    fileList[$field.attr('id')] = []; // Simulate click
    // -------------------------------------------------------------------------

    $button_click.on('click', function (e) {
      e.preventDefault();
      $button_file.trigger('click');
    }); // Delete images
    // ---------------------------------------------------------------------------

    $field_list.on('click', '.wooccm-file-list-delete', function (e) {
      var $file = $(this).closest('.wooccm-file-file'),
          file_id = $(this).closest('[data-file_id]').data('file_id');
      fileList[$field.attr('id')] = $.grep(fileList[$field.attr('id')], function (value, index) {
        return index != file_id;
      });
      $file.remove();
      $('#order_review').trigger('wooccm_upload');
    }); // Append images
    // -------------------------------------------------------------------------

    $button_file.on('change', function (e) {
      var files = $(this)[0].files;

      if (files.length) {
        if (window.FileReader) {
          $.each(files, function (i, file) {
            var count = $field_list.find('span[data-file_id]').length + i;

            if (count >= wooccm_upload.limit.max_files) {
              alert('Exeeds max files limit of ' + wooccm_upload.limit.max_files);
              return false;
            }

            if (file.size > wooccm_upload.limit.max_file_size) {
              alert('Exeeds max file size of ' + wooccm_upload.limit.max_file_size);
              return true;
            }

            var reader = new FileReader();

            reader.onload = function (theFile) {
              return function (e) {
                setTimeout(function () {
                  append_image($field_list, fileList[$field.attr('id')].push(file) - 1, e.target.result, theFile.name, theFile.type);
                  $('#order_review').trigger('wooccm_upload');
                }, 200);
              };
            }(file);

            reader.readAsDataURL(file);
          });
        }
      }
    });
  }); // Add class on place order reload if upload field exists
  // ---------------------------------------------------------------------------
  //  $(document).on('checkout_place_order_success', function (e) {
  //    alert('submit!');
  //  });
  //  $('form.checkout').on('checkout_place_order_success', function (e) {
  //    alert('submit!');
  //  });

  $('#order_review').on('ajaxSuccess wooccm_upload', function (e, xhr, settings) {
    //    console.log('e', e);
    //    console.log('xhr', xhr);
    //    console.log('settings', settings);
    var $order_review = $(e.target),
        $place_order = $order_review.find('#place_order'),
        $fields = $('.wooccm-type-file'),
        fields = $fields.length;

    if (fields) {
      $place_order.addClass('wooccm-upload-process');
    } else {
      $place_order.removeClass('wooccm-upload-process');
    }
  }); // Upload files
  // ---------------------------------------------------------------------------

  $(document).on('click', '#place_order.wooccm-upload-process', function (e) {
    e.preventDefault();
    var $form = $('form.checkout'),
        $place_order = $(this),
        $fields = $('.wooccm-type-file');

    if (!$fields.length) {
      return;
    }

    if (!window.FormData) {
      return;
    }

    if (!Object.keys(fileList).length) {
      return;
    }

    if (!is_blocked($form)) {
      $place_order.html(wooccm_upload.message.uploading);
      block($form);
    }

    $.each(fileList, function (field_id, files) {
      var $field = $('#' + field_id),
          $attachment_ids = $field.find('.wooccm-file-field'),
          data = new FormData();
      $.each(files, function (file_id, file) {
        if (file_id > wooccm_upload.limit.max_files) {
          console.log('Exeeds max files limit of ' + wooccm_upload.limit.max_files);
          return false;
        }

        if (file.size > wooccm_upload.limit.max_file_size) {
          console.log('Exeeds max file size of ' + wooccm_upload.limit.max_files);
          return true;
        }

        console.log('We\'re ready to upload ' + file.name);
        data.append('wooccm_checkout_attachment_upload[]', file);
      });
      data.append('action', 'wooccm_checkout_attachment_upload');
      data.append('nonce', wooccm_upload.nonce);
      $.ajax({
        async: false,
        url: wooccm_upload.ajax_url,
        type: 'POST',
        cache: false,
        data: data,
        processData: false,
        contentType: false,
        beforeSend: function beforeSend(response) {//$place_order.html(wooccm_upload.message.uploading);
        },
        success: function success(response) {
          if (response.success) {
            $attachment_ids.val(response.data);
          } else {
            $('body').trigger('update_checkout');
          }
        },
        complete: function complete(response) {}
      });
    });
    unblock($form);
    $place_order.removeClass('wooccm-upload-process').trigger('click');
  }); // Update checkout fees
  // ---------------------------------------------------------------------------

  $(document).on('change', '.wooccm-add-price', function (e) {
    $('body').trigger('update_checkout');
  }); // Conditional
  // ---------------------------------------------------------------------------

  $('.wooccm-field').each(function (i, field) {
    $(field).find('input,textarea,select').on('change keyup wooccm_change', function (e) {
      var name = $(e.target).attr('name').replace('[]', ''),
          type = $(e.target).prop('type'),
          value = $(e.target).val();

      if (type == 'checkbox') {
        // fix for multicheckbox
        if ($(e.target).attr('name').indexOf('[]') !== -1) {
          value = $(e.target).closest('.wooccm-field').find('input:checked').map(function (i, e) {
            return e.value;
          }).toArray();
        } else {
          value = $(e.target).is(':checked');
        }
      }

      $('*[data-conditional-parent=' + name + ']').closest('.wooccm-field').hide();
      $('*[data-conditional-parent=' + name + ']').each(function (i, child) {
        var $child = $(child),
            condition = $child && $child.data('conditional-parent-value');
        /*         console.log('name', name);
                console.log('value', value);
                console.log('condition', condition); */

        if (value == condition || $.isArray(value) && value.indexOf(condition) > -1) {
          $child.closest('.wooccm-field').fadeIn();
        }
      });
    });
  });
  $('.wooccm-conditional-child').each(function (i, field) {
    var $field = $(field),
        $parent = $('#' + $field.find('[data-conditional-parent]').data('conditional-parent') + '_field'); // dont use change event because trigger update_checkout event

    $parent.find('select:first').trigger('wooccm_change');
    $parent.find('textarea:first').trigger('wooccm_change');
    $parent.find('input[type=button]:first').trigger('wooccm_change');
    $parent.find('input[type=radio]:checked:first').trigger('wooccm_change');
    $parent.find('input[type=checkbox]:checked:first').trigger('wooccm_change');
    $parent.find('input[type=color]:first').trigger('wooccm_change');
    $parent.find('input[type=date]:first').trigger('wooccm_change');
    $parent.find('input[type=datetime-local]:first').trigger('wooccm_change');
    $parent.find('input[type=email]:first').trigger('wooccm_change');
    $parent.find('input[type=file]:first').trigger('wooccm_change');
    $parent.find('input[type=hidden]:first').trigger('wooccm_change');
    $parent.find('input[type=image]:first').trigger('wooccm_change');
    $parent.find('input[type=month]:first').trigger('wooccm_change');
    $parent.find('input[type=number]:first').trigger('wooccm_change');
    $parent.find('input[type=password]:first').trigger('wooccm_change');
    $parent.find('input[type=range]:first').trigger('wooccm_change');
    $parent.find('input[type=reset]:first').trigger('wooccm_change');
    $parent.find('input[type=search]:first').trigger('wooccm_change');
    $parent.find('input[type=submit]:first').trigger('wooccm_change');
    $parent.find('input[type=tel]:first').trigger('wooccm_change');
    $parent.find('input[type=text]:first').trigger('wooccm_change');
    $parent.find('input[type=time]:first').trigger('wooccm_change');
    $parent.find('input[type=url]:first').trigger('wooccm_change');
    $parent.find('input[type=week]:first').trigger('wooccm_change');
  });
  /*$('.wooccm-conditional-child-delete').each(function (i, field) {
  
    var $field = $(field),
      $parent = $('#' + $field.find('[data-conditional-parent]').data('conditional-parent') + '_field'),
      show_if_value = $field.find('[data-conditional-parent-value]').length && $field.find('[data-conditional-parent-value]').data('conditional-parent-value').toString();
  
    if ($parent.length) {
  
      console.log($parent.find('select:first').length)
  
      //console.log('#' + $field.find('[data-conditional-parent]').data('conditional-parent'));
  
      $parent.on('wooccm_change change keyup', function (e) {
  
        console.log('change', e.target)
  
        var $this = $(e.target),
          value = $this.val();
        // fix for select2 search
        if ($this.hasClass('select2-selection')) {
          return;
        }
  
        //make sure its a single checkbox otherwise return value
        if ($this.prop('type') == 'checkbox') {
          // fix for multicheckbox
          if ($this.attr('name').indexOf('[]') !== -1) {
            value = $parent.find('input:checked').map(function (i, e) {
              return e.value
            }).toArray();
          } else {
            value = $this.is(':checked');
          }
        }
  
        if (show_if_value == value || ($.isArray(value) && value.indexOf(show_if_value) > -1)) {
          $field.fadeIn();
        } else {
          $field.fadeOut();
        }
  
        $this.off('wooccm_change');
        $this.off('change');
        $this.off('keyup');
        $field.trigger('change');
      });
      // dont use change event because trigger update_checkout event
      $parent.find('select:first').trigger('wooccm_change');
      $parent.find('textarea:first').trigger('wooccm_change');
      $parent.find('input[type=button]:first').trigger('wooccm_change');
      $parent.find('input[type=radio]:checked:first').trigger('wooccm_change');
      $parent.find('input[type=checkbox]:checked:first').trigger('wooccm_change');
      $parent.find('input[type=color]:first').trigger('wooccm_change');
      $parent.find('input[type=date]:first').trigger('wooccm_change');
      $parent.find('input[type=datetime-local]:first').trigger('wooccm_change');
      $parent.find('input[type=email]:first').trigger('wooccm_change');
      $parent.find('input[type=file]:first').trigger('wooccm_change');
      $parent.find('input[type=hidden]:first').trigger('wooccm_change');
      $parent.find('input[type=image]:first').trigger('wooccm_change');
      $parent.find('input[type=month]:first').trigger('wooccm_change');
      $parent.find('input[type=number]:first').trigger('wooccm_change');
      $parent.find('input[type=password]:first').trigger('wooccm_change');
      $parent.find('input[type=range]:first').trigger('wooccm_change');
      $parent.find('input[type=reset]:first').trigger('wooccm_change');
      $parent.find('input[type=search]:first').trigger('wooccm_change');
      $parent.find('input[type=submit]:first').trigger('wooccm_change');
      $parent.find('input[type=tel]:first').trigger('wooccm_change');
      $parent.find('input[type=text]:first').trigger('wooccm_change');
      $parent.find('input[type=time]:first').trigger('wooccm_change');
      $parent.find('input[type=url]:first').trigger('wooccm_change');
      $parent.find('input[type=week]:first').trigger('wooccm_change');
    } else {
      $field.show();
    }
  
  });*/
  // Datepicker fields
  // ---------------------------------------------------------------------------

  $('.wooccm-enhanced-datepicker').each(function (i, field) {
    var $input = $(this),
        disable = $input.data('disable') || false;

    if ($.isFunction($.fn.datepicker)) {
      $input.datepicker({
        dateFormat: $input.data('formatdate') || 'dd-mm-yy',
        minDate: $input.data('mindate'),
        maxDate: $input.data('maxdate'),
        beforeShowDay: function beforeShowDay(date) {
          var day = date.getDay() != undefined && date.getDay().toString();

          if (disable) {
            return [$.inArray(day, disable) === -1];
          }

          return [true];
        }
      });
    }
  }); // Timepicker fields
  // ---------------------------------------------------------------------------

  $('.wooccm-enhanced-timepicker').each(function (i, field) {
    var $input = $(this);

    if ($.isFunction($.fn.timepicker)) {
      console.log($input.data('format-ampm'));
      $input.timepicker({
        showPeriodLabels: !!$input.data('format-ampm'),
        showPeriod: !!$input.data('format-ampm'),
        showLeadingZero: true,
        hours: $input.data('hours') || undefined,
        minutes: $input.data('minutes') || undefined
        /* hours: {
          starts: 9,                // First displayed hour
          ends: 21                  // Last displayed hour
        },/*
        minutes: {
          starts: 5,                // First displayed minute
          ends: 55,                 // Last displayed minute
          interval: 5,              // Interval of displayed minutes
          manual: []                // Optional extra entries for minutes
        }, */

      });
    }
  }); // Color fields
  // ---------------------------------------------------------------------------

  $('.wooccm-colorpicker-farbtastic').each(function (i, field) {
    var $field = $(field),
        $input = $field.find('input[type=text]'),
        $container = $field.find('.wooccmcolorpicker_container');
    $input.hide();

    if ($.isFunction($.fn.farbtastic)) {
      $container.farbtastic('#' + $input.attr('id'));
      $container.on('click', function (e) {
        $input.fadeIn();
      });
    }
  });
  $('.wooccm-colorpicker-iris').each(function (i, field) {
    var $field = $(field),
        $input = $field.find('input[type=text]');
    $input.css('background', $input.val());
    $input.on('click', function (e) {
      $field.toggleClass('active');
    });
    $input.iris({
      class: $input.attr('id'),
      palettes: true,
      color: '',
      hide: false,
      change: function change(event, ui) {
        $input.css('background', ui.color.toString()).fadeIn();
      }
    });
  });
  $(document).on('click', function (e) {
    if ($(e.target).closest('.iris-picker').length === 0) {
      $('.wooccm-colorpicker-iris').removeClass('active');
    }
  });

  if (typeof wc_country_select_params === 'undefined') {
    return false;
  }

  if ($().selectWoo) {
    var getEnhancedSelectFormatString = function getEnhancedSelectFormatString() {
      return {
        'language': {
          errorLoading: function errorLoading() {
            return wc_country_select_params.i18n_searching;
          },
          inputTooLong: function inputTooLong(args) {
            var overChars = args.input.length - args.maximum;

            if (1 === overChars) {
              return wc_country_select_params.i18n_input_too_long_1;
            }

            return wc_country_select_params.i18n_input_too_long_n.replace('%qty%', overChars);
          },
          inputTooShort: function inputTooShort(args) {
            var remainingChars = args.minimum - args.input.length;

            if (1 === remainingChars) {
              return wc_country_select_params.i18n_input_too_short_1;
            }

            return wc_country_select_params.i18n_input_too_short_n.replace('%qty%', remainingChars);
          },
          loadingMore: function loadingMore() {
            return wc_country_select_params.i18n_load_more;
          },
          maximumSelected: function maximumSelected(args) {
            if (args.maximum === 1) {
              return wc_country_select_params.i18n_selection_too_long_1;
            }

            return wc_country_select_params.i18n_selection_too_long_n.replace('%qty%', args.maximum);
          },
          noResults: function noResults() {
            return wc_country_select_params.i18n_no_matches;
          },
          searching: function searching() {
            return wc_country_select_params.i18n_searching;
          }
        }
      };
    };

    var wooccm_enhanced_select = function wooccm_enhanced_select() {
      $('select.wooccm-enhanced-select').each(function () {
        var select2_args = $.extend({
          width: '100%',
          placeholder: $(this).data('placeholder') || '',
          allowClear: $(this).data('allowclear') || false,
          selectOnClose: $(this).data('selectonclose') || false,
          closeOnSelect: $(this).data('closeonselect') || false,
          //forceAbove: $(this).data('forceabove') || false,
          minimumResultsForSearch: $(this).data('search') || -1
        }, getEnhancedSelectFormatString());
        $(this).on('select2:select', function () {
          $(this).focus();
        }).selectWoo(select2_args);
      });
    };

    wooccm_enhanced_select();
  }
})(jQuery);

/***/ }),

/***/ "./src/frontend/scss/style.scss":
/*!**************************************!*\
  !*** ./src/frontend/scss/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ }),

/***/ "selectWoo":
/*!************************************************!*\
  !*** external {"this":["window","selectWoo"]} ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["window"]["selectWoo"]; }());

/***/ })

/******/ });
//# sourceMappingURL=checkout.js.map