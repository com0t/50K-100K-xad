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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backend/admin.js":
/*!******************************!*\
  !*** ./src/backend/admin.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/editor.scss */ "./src/backend/scss/editor.scss");
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-serializejson */ "jquery-serializejson");
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_serializejson__WEBPACK_IMPORTED_MODULE_2__);



/* (function ($) {*/

"use strict";

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wooccm-premium-field').closest('tr').addClass('wooccm-premium');

function date_picker_select(datepicker) {
  var option = jquery__WEBPACK_IMPORTED_MODULE_0___default()(datepicker).next().is('.hasDatepicker') ? 'minDate' : 'maxDate',
      otherDateField = 'minDate' === option ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(datepicker).next() : jquery__WEBPACK_IMPORTED_MODULE_0___default()(datepicker).prev(),
      date = jquery__WEBPACK_IMPORTED_MODULE_0___default()(datepicker).datepicker('getDate');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(otherDateField).datepicker('option', option, date);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(datepicker).change();
}

function getEnhancedSelectFormatString() {
  return {
    'language': {
      errorLoading: function errorLoading() {
        // Workaround for https://github.com/select2/select2/issues/4355 instead of i18n_ajax_error.
        return wc_enhanced_select_params.i18n_searching;
      },
      inputTooLong: function inputTooLong(args) {
        var overChars = args.input.length - args.maximum;

        if (1 === overChars) {
          return wc_enhanced_select_params.i18n_input_too_long_1;
        }

        return wc_enhanced_select_params.i18n_input_too_long_n.replace('%qty%', overChars);
      },
      inputTooShort: function inputTooShort(args) {
        var remainingChars = args.minimum - args.input.length;

        if (1 === remainingChars) {
          return wc_enhanced_select_params.i18n_input_too_short_1;
        }

        return wc_enhanced_select_params.i18n_input_too_short_n.replace('%qty%', remainingChars);
      },
      loadingMore: function loadingMore() {
        return wc_enhanced_select_params.i18n_load_more;
      },
      maximumSelected: function maximumSelected(args) {
        if (args.maximum === 1) {
          return wc_enhanced_select_params.i18n_selection_too_long_1;
        }

        return wc_enhanced_select_params.i18n_selection_too_long_n.replace('%qty%', args.maximum);
      },
      noResults: function noResults() {
        return wc_enhanced_select_params.i18n_no_matches;
      },
      searching: function searching() {
        return wc_enhanced_select_params.i18n_searching;
      }
    }
  };
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('wooccm-enhanced-between-dates', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wooccm-enhanced-between-dates').filter(':not(.enhanced)').each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input').datepicker({
      defaultDate: '',
      dateFormat: 'yy-mm-dd',
      numberOfMonths: 1,
      showButtonPanel: true,
      onSelect: function onSelect() {
        date_picker_select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input').each(function () {
      date_picker_select(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    });
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('wooccm-enhanced-options', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('table.wc_gateways tbody').sortable({
    items: 'tr',
    cursor: 'move',
    axis: 'y',
    handle: 'td.sort',
    scrollSensitivity: 40,
    helper: function helper(event, ui) {
      ui.children().each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).width(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).width());
      });
      ui.css('left', '0');
      return ui;
    },
    start: function start(event, ui) {
      ui.item.css('background-color', '#f6f6f6');
    },
    stop: function stop(event, ui) {
      ui.item.removeAttr('style');
      ui.item.trigger('updateMoveButtons');
    },
    update: function update(event, ui) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('tr').each(function (i, tr) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(tr).find('input.add-order').val(i).trigger('change');
      });
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wooccm-enhanced-options').each(function () {
    var $table = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        $add = $table.find('.add-option'),
        $remove = $table.find('.remove-options');
    $add.on('click', function (e) {
      var $tr = $table.find('tbody > tr'),
          id = $tr.length,
          tr = $tr.first().clone().html().replace(/options\[([0-9]+)\]/g, 'options[' + id + ']').replace('disabled="disabled"', '').replace('checked="checked"', '').replace('<input value="0"', '<input value="' + id + '"').replace('<input value="0"', '<input value="' + id + '"');
      $tr.last().after(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<tr>' + tr + '</tr>')).find('input').trigger('change');
      $remove.removeProp('disabled');
    });
    $remove.on('click', function (e) {
      $table.find('tr > td.check-column input:checked').closest('tr').remove();
      var $tr = $table.find('tbody > tr');
      $tr.first().find('input').trigger('change');

      if ($tr.length < 2) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('disabled', true);
      }
    });
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('wooccm-enhanced-select', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wooccm-enhanced-select').filter(':not(.enhanced)').each(function () {
    var select2_args = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
      minimumResultsForSearch: 10,
      allowClear: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('allow_clear') ? true : false,
      placeholder: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('placeholder')
    }, getEnhancedSelectFormatString());
    var name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name'); // fix serializeJSON empty select and multiselect
    //if (name.indexOf('[]') >= 0) {
    //  $(this).prepend('<input type="hidden" name="' + name + '" value="[]" />');
    //}

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).selectWoo(select2_args).addClass('enhanced');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wooccm-product-search').filter(':not(.enhanced)').each(function () {
    var select2_args = {
      allowClear: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('allow_clear') ? true : false,
      placeholder: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('placeholder'),
      minimumInputLength: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('minimum_input_length') ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('minimum_input_length') : '3',
      escapeMarkup: function escapeMarkup(m) {
        return m;
      },
      ajax: {
        url: wc_enhanced_select_params.ajax_url,
        dataType: 'json',
        delay: 250,
        data: function data(params) {
          return {
            term: params.term,
            action: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('action') || 'wooccm_select_search_products',
            //nonce: wooccm_admin.nonce,              
            security: wc_enhanced_select_params.search_products_nonce,
            selected: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).select2('val') || 0,
            exclude: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('exclude'),
            include: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('include'),
            limit: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('limit'),
            display_stock: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('display_stock')
          };
        },
        processResults: function processResults(data) {
          var terms = [];

          if (data) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(data, function (id, text) {
              terms.push({
                id: id,
                text: text
              });
            });
          }

          return {
            results: terms
          };
        },
        cache: true
      }
    };
    select2_args = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(select2_args, getEnhancedSelectFormatString());
    var name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name'); // fix serializeJSON empty select and multiselect
    //if (name.indexOf('[]') >= 0) {
    //  $(this).prepend('<input type="hidden" name="' + name + '" value="[]" />');
    //}

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).selectWoo(select2_args).addClass('enhanced');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('sortable')) {
      var $select = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var $list = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next('.select2-container').find('ul.select2-selection__rendered');
      $list.sortable({
        placeholder: 'ui-state-highlight select2-selection__choice',
        forcePlaceholderSize: true,
        items: 'li:not(.select2-search__field)',
        tolerance: 'pointer',
        stop: function stop() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()($list.find('.select2-selection__choice').get().reverse()).each(function () {
            var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('data').id;
            var option = $select.find('option[value="' + id + '"]')[0];
            $select.prepend(option);
          });
        }
      }); // Keep multiselects ordered alphabetically if they are not sortable.
    } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('multiple')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).on('change', function () {
        var $children = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children(); //filter option fix appended input hidden

        $children.filter('option').sort(function (a, b) {
          var atext = a.text.toLowerCase();
          var btext = b.text.toLowerCase();

          if (atext > btext) {
            return 1;
          }

          if (atext < btext) {
            return -1;
          }

          return 0;
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html($children);
      });
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wooccm-enhanced-search').filter(':not(.enhanced)').each(function () {
  var select2_args = {
    allowClear: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('allow_clear') ? true : false,
    placeholder: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('placeholder'),
    minimumInputLength: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('minimum_input_length') || '3',
    escapeMarkup: function escapeMarkup(m) {
      return m;
    },
    ajax: {
      url: wooccm_admin.ajax_url,
      dataType: 'json',
      cache: true,
      delay: 250,
      data: function data(params) {
        return {
          term: params.term,
          key: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('key'),
          action: 'wooccm_search_field',
          nonce: wooccm_admin.nonce
        };
      },
      processResults: function processResults(data, params) {
        var terms = [];

        if (data) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(data, function (id, text) {
            terms.push({
              id: id,
              text: text
            });
          });
        }

        return {
          results: terms
        };
      }
    }
  };
  select2_args = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(select2_args, getEnhancedSelectFormatString());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).select2(select2_args).addClass('enhanced');
});
/* })(jQuery); */

/***/ }),

/***/ "./src/backend/scss/editor.scss":
/*!**************************************!*\
  !*** ./src/backend/scss/editor.scss ***!
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

/***/ "jquery-serializejson":
/*!****************************************************!*\
  !*** external {"this":["window","serializeJSON"]} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["window"]["serializeJSON"]; }());

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map