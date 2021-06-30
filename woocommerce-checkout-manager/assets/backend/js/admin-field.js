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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend/admin-field.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backend/admin-field.js":
/*!************************************!*\
  !*** ./src/backend/admin-field.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wp_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp-util */ "wp-util");
/* harmony import */ var wp_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wp_util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! backbone */ "backbone");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_ui_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-ui-datepicker */ "jquery-ui-datepicker");
/* harmony import */ var jquery_ui_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_datepicker__WEBPACK_IMPORTED_MODULE_3__);





(function ($) {
  "use strict";

  var count = 0,
      timer;

  var is_blocked = function is_blocked($node) {
    return $node.is('.processing') || $node.parents('.processing').length;
  };

  var block = function block() {
    $('#wooccm_modal').addClass('processing');
  };

  var unblock = function unblock() {
    $('#wooccm_modal').removeClass('processing');
  };

  _.mixin({
    sortOptions: function sortOptions(object) {
      return _.sortBy(object, function (o) {
        return o.order;
      });
    },
    escapeHtml: function escapeHtml(attribute) {
      return attribute.replace('&amp;', /&/g).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
    },
    getFormData: function getFormData($form) {
      var form = $form.serializeJSON({
        checkboxUncheckedValue: 'false',
        parseBooleans: true,
        parseNulls: true
      });
      var defaults = Object.assign({}, wooccm_field.args);
      var merged = Object.assign(defaults, form);
      return merged;
    }
  });

  var FieldModel = Backbone.Model.extend({
    defaults: Object.create(wooccm_field.args)
  });
  var FieldModal = Backbone.View.extend({
    initialize: function initialize(e) {
      var $button = $(e.target),
          field_id = $button.closest('[data-field_id]').data('field_id');
      var model = new FieldModel();
      model.set({
        id: field_id
      });
      new FieldView({
        model: model
      }).render();
    }
  });
  var FieldView = Backbone.View.extend({
    events: {
      'change input': 'enableSave',
      'change textarea': 'enableSave',
      'change select': 'enableSave',
      'click .media-modal-backdrop': 'close',
      'click .media-modal-close': 'close',
      'click .media-modal-prev': 'edit',
      'click .media-modal-next': 'edit',
      'click .media-modal-tab': 'tab',
      'change .media-modal-parent': 'parent',
      'change .media-modal-render-tabs': 'renderTabs',
      'change .media-modal-render-panels': 'renderPanels',
      'change .media-modal-render-info': 'renderInfo',
      'submit .media-modal-form': 'submit'
    },
    templates: {},
    initialize: function initialize() {
      _.bindAll(this, 'open', 'tab', 'edit', 'load', 'render', 'close', 'submit', 'parent');

      this.init();
      this.open();
    },
    init: function init() {
      this.templates.window = wp.template('wooccm-modal-main');
    },
    assign: function assign(view, selector) {
      view.setElement(this.$(selector)).render();
    },
    updateModel: function updateModel(e) {
      e.preventDefault();
      var modal = this,
          $form = modal.$el.find('#wooccm_modal').find('form');

      var model = _.getFormData($form); //   console.log('getFormData', model);


      this.model.set(model);
    },
    reload: function reload(e) {
      if (this.$el.find('#wooccm_modal').hasClass('reload')) {
        location.reload();
        return;
      }

      this.remove();
      return;
    },
    close: function close(e) {
      e.preventDefault();
      this.undelegateEvents();
      $(document).off('focusin');
      $('body').removeClass('modal-open'); // if necesary reload... 

      this.$el.find('#wooccm_modal').addClass('reload');
      this.reload(e);
      return;
    },
    enableSave: function enableSave(e) {
      $('.media-modal-submit').prop('disabled', false);
      this.updateModel(e);
    },
    disableSave: function disableSave(e) {
      $('.media-modal-submit').prop('disabled', true);
    },
    tab: function tab(e) {
      e.preventDefault();
      var modal = this,
          $modal = modal.$el.find('#wooccm_modal'),
          $tab = $(e.currentTarget),
          $tabs = $modal.find('ul.wc-tabs'),
          panel = $tab.find('a').attr('href').replace('#', '');
      $tabs.find('.active').removeClass('active');
      $tab.addClass('active');
      this.model.attributes['panel'] = panel;
      this.model.changed['panel'] = panel;
      this.renderPanels(e);
    },
    renderTabs: function renderTabs(e) {
      this.renderPanels(e);
      this.tabs.render();
    },
    renderPanels: function renderPanels(e) {
      this.updateModel(e);
      this.panels.render();
    },
    render: function render() {
      var modal = this;
      modal.$el.html(modal.templates.window(modal.model.attributes));
      this.tabs = new FieldViewTabs({
        model: modal.model
      });
      this.panels = new FieldViewPanels({
        model: modal.model
      });
      this.info = new FieldViewInfo({
        model: modal.model
      });
      this.assign(this.tabs, '#wooccm-modal-tabs');
      this.assign(this.panels, '#wooccm-modal-panels');
      this.assign(this.info, '#wooccm-modal-info');
    },
    open: function open(e) {
      $('body').addClass('modal-open').append(this.$el);

      if (this.model.attributes.id == undefined) {
        _.delay(function () {
          unblock();
        }, 100);

        return;
      }

      this.load();
    },
    load: function load() {
      var modal = this;

      if (modal.model.attributes.id == undefined) {
        modal.render();
        return;
      }

      $.ajax({
        url: wooccm_field.ajax_url,
        data: {
          action: 'wooccm_load_field',
          nonce: wooccm_field.nonce,
          field_id: this.model.attributes.id
        },
        dataType: 'json',
        type: 'POST',
        // beforeSend: function () {
        // },
        complete: function complete() {
          unblock();
        },
        error: function error() {
          alert('Error!');
        },
        success: function success(response) {
          console.log('response', response);

          if (response.success) {
            modal.model.set(response.data);
            modal.render();
          } else {
            alert(response.data);
          }
        }
      });
    },
    edit: function edit(e) {
      e.preventDefault();
      var modal = this,
          $button = $(e.target),
          field_count = parseInt($('.wc_gateways tr[data-field_id]').length),
          order = parseInt(modal.model.get('order'));
      count++;

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(function () {
        if ($button.hasClass('media-modal-next')) {
          order = Math.min(order + count, field_count);
        } else {
          order = Math.max(order - count, 1);
        }

        modal.model.set({
          id: parseInt($('.wc_gateways tr[data-field_order=' + order + ']').data('field_id'))
        });
        count = 0;
        modal.load();
      }, 300);
    },
    submit: function submit(e) {
      e.preventDefault();
      var modal = this,
          $modal = modal.$el.find('#wooccm_modal'),
          $spinner = $modal.find('.settings-save-status .spinner'),
          $saved = $modal.find('.settings-save-status .saved'); //   console.log('modal.model.attributes', modal.model.attributes);

      $.ajax({
        url: wooccm_field.ajax_url,
        data: {
          action: 'wooccm_save_field',
          nonce: wooccm_field.nonce,
          field_data: JSON.stringify(modal.model.attributes)
        },
        dataType: 'json',
        type: 'POST',
        beforeSend: function beforeSend() {
          $('.media-modal-submit').prop('disabled', true);
          $spinner.addClass('is-active');
        },
        complete: function complete() {
          $saved.addClass('is-active');
          $spinner.removeClass('is-active');

          _.delay(function () {
            $saved.removeClass('is-active');
          }, 1000);
        },
        error: function error(response) {
          alert('Error!');
        },
        success: function success(response) {
          if (response.success) {
            if (modal.model.attributes.id == undefined) {
              $modal.addClass('reload');
              modal.reload(e);
              modal.close(e);
            }
          } else {
            alert(response.data);
          }
        }
      });
      return false;
    },
    renderInfo: function renderInfo() {
      this.info.render();
    },
    parent: function parent(e) {
      e.preventDefault();
      var modal = this,
          $modal = modal.$el.find('#wooccm_modal'),
          $details = $modal.find('.attachment-details');
      this.updateModel(e);
      $.ajax({
        url: wooccm_field.ajax_url,
        data: {
          action: 'wooccm_load_parent',
          nonce: wooccm_field.nonce,
          conditional_parent_key: modal.model.attributes.conditional_parent_key
        },
        dataType: 'json',
        type: 'POST',
        beforeSend: function beforeSend() {
          modal.disableSave();
          $details.addClass('save-waiting');
        },
        complete: function complete() {
          $details.addClass('save-complete');
          $details.removeClass('save-waiting');
          modal.enableSave();
        },
        error: function error() {
          alert('Error!');
        },
        success: function success(response) {
          if (response.success) {
            modal.model.attributes['parent'] = response.data;
            modal.model.changed['parent'] = response.data;
            modal.renderInfo();
          } else {
            alert(response.data);
          }
        }
      });
      return false;
    }
  }); // Parts
  // -------------------------------------------------------------

  var FieldViewTabs = Backbone.View.extend({
    templates: {},
    initialize: function initialize() {
      this.templates.window = wp.template('wooccm-modal-tabs');
    },
    render: function render() {
      this.model.attributes.panel = 'general';
      this.$el.html(this.templates.window(this.model.attributes)); //this.$el.trigger('wooccm-tab-panels');
    }
  });
  var FieldViewPanels = Backbone.View.extend({
    templates: {},
    initialize: function initialize() {
      this.templates.window = wp.template('wooccm-modal-panels');
    },
    render: function render() {
      this.$el.html(this.templates.window(this.model.attributes));
      this.$el.trigger('wooccm-enhanced-options');
      this.$el.trigger('wooccm-enhanced-select');
      this.$el.trigger('init_tooltips');
    }
  });
  var FieldViewInfo = Backbone.View.extend({
    templates: {},
    initialize: function initialize() {
      this.templates.window = wp.template('wooccm-modal-info');
    },
    render: function render() {
      this.$el.html(this.templates.window(this.model.attributes));
      this.$el.trigger('wooccm-enhanced-select');
      this.$el.trigger('init_tooltips');
    }
  });
  $('#wooccm_billing_settings_add, #wooccm_shipping_settings_add, #wooccm_additional_settings_add').on('click', function (e) {
    e.preventDefault();
    new FieldModal(e);
  });
  $('#wooccm_billing_settings_reset, #wooccm_shipping_settings_reset, #wooccm_additional_settings_reset').on('click', function (e) {
    e.preventDefault();
    var $button = $(e.target);
    var c = confirm(wooccm_field.message.reset);

    if (!c) {
      return false;
    }

    $.ajax({
      url: wooccm_field.ajax_url,
      data: {
        action: 'wooccm_reset_fields',
        nonce: wooccm_field.nonce
      },
      dataType: 'json',
      type: 'POST',
      beforeSend: function beforeSend() {},
      complete: function complete() {},
      error: function error() {
        alert('Error!');
      },
      success: function success(response) {
        if (response.success) {
          location.reload();
        } else {
          alert(response.data);
        }
      }
    });
    return false;
  });
  $('.wooccm_billing_settings_edit, .wooccm_shipping_settings_edit, .wooccm_additional_settings_edit').on('click', function (e) {
    e.preventDefault();
    new FieldModal(e);
  });
  $('.wooccm_billing_settings_delete, .wooccm_shipping_settings_delete, .wooccm_additional_settings_delete').on('click', function (e) {
    e.preventDefault();
    var $button = $(e.target),
        $field = $button.closest('[data-field_id]'),
        field_id = $field.data('field_id');
    var c = confirm(wooccm_field.message.remove);

    if (!c) {
      return false;
    }

    $.ajax({
      url: wooccm_field.ajax_url,
      data: {
        action: 'wooccm_delete_field',
        nonce: wooccm_field.nonce,
        field_id: field_id
      },
      dataType: 'json',
      type: 'POST',
      beforeSend: function beforeSend() {},
      complete: function complete() {},
      error: function error() {
        alert('Error!');
      },
      success: function success(response) {
        if (response.success) {
          $field.remove();
        } else {
          alert(response.data);
        }
      }
    });
    return false;
  });
  $(document).on('click', '.wooccm-field-toggle-attribute', function (e) {
    e.preventDefault();
    var $link = $(this),
        $tr = $link.closest('tr'),
        $toggle = $link.find('.woocommerce-input-toggle');
    $.ajax({
      url: wooccm_field.ajax_url,
      data: {
        action: 'wooccm_toggle_field_attribute',
        nonce: wooccm_field.nonce,
        field_attr: $(this).data('field_attr'),
        field_id: $tr.data('field_id')
      },
      dataType: 'json',
      type: 'POST',
      beforeSend: function beforeSend(response) {
        $toggle.addClass('woocommerce-input-toggle--loading');
      },
      success: function success(response) {
        if (true === response.data) {
          $toggle.removeClass('woocommerce-input-toggle--enabled, woocommerce-input-toggle--disabled');
          $toggle.addClass('woocommerce-input-toggle--enabled');
          $toggle.removeClass('woocommerce-input-toggle--loading');
        } else if (true !== response.data) {
          $toggle.removeClass('woocommerce-input-toggle--enabled, woocommerce-input-toggle--disabled');
          $toggle.addClass('woocommerce-input-toggle--disabled');
          $toggle.removeClass('woocommerce-input-toggle--loading');
        } //else if ('needs_setup' === response.data) {
        //window.location.href = $link.attr('href');
        //}

      }
    });
    return false;
  });
  $(document).on('change', '.wooccm-field-change-attribute', function (e) {
    e.preventDefault();
    var $change = $(this),
        $tr = $change.closest('tr');
    $.ajax({
      url: wooccm_field.ajax_url,
      data: {
        action: 'wooccm_change_field_attribute',
        nonce: wooccm_field.nonce,
        field_attr: $change.data('field_attr'),
        field_value: $change.val(),
        field_id: $tr.data('field_id')
      },
      dataType: 'json',
      type: 'POST',
      beforeSend: function beforeSend(response) {
        $change.prop('disabled', true);
      },
      success: function success(response) {
        console.log(response.data);
      },
      complete: function complete(response) {
        $change.prop('disabled', false);
      }
    });
    return false;
  });
})(jQuery);

/***/ }),

/***/ "backbone":
/*!***********************************************!*\
  !*** external {"this":["window","Backbone"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["window"]["Backbone"]; }());

/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ }),

/***/ "jquery-ui-datepicker":
/*!***************************************************!*\
  !*** external {"this":["window","uiDatepicker"]} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["window"]["uiDatepicker"]; }());

/***/ }),

/***/ "wp-util":
/*!***************************************!*\
  !*** external {"this":["wp","util"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["util"]; }());

/***/ })

/******/ });
//# sourceMappingURL=admin-field.js.map