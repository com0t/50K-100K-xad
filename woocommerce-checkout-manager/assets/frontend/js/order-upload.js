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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend/order-upload.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend/order-upload.js":
/*!**************************************!*\
  !*** ./src/frontend/order-upload.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


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

  $(document).ready(function ($) {
    // Delete
    // -------------------------------------------------------------------------
    $(document).on('click', '.wooccm_delete_attachment', function (e) {
      var $tr = $(this).closest('tr'),
          attachment_id = $(this).data('attachment_id');
      $tr.hide();
      $('#wooccm_order_attachment_update').prop('disabled', false);
      $('#delete_attachments_ids').val($('#delete_attachments_ids').val().replace(attachment_id, ''));
    });
    $(document).on('click', '#wooccm_order_attachment_update', function (e) {
      $.ajax({
        url: wooccm_upload.ajax_url,
        type: 'POST',
        cache: false,
        data: {
          action: 'wooccm_order_attachment_update',
          nonce: wooccm_upload.nonce,
          delete_attachments_ids: $('#delete_attachments_ids').val(),
          all_attachments_ids: $('#all_attachments_ids').val()
        },
        beforeSend: function beforeSend(response) {
          $('.wooccm_upload_results').html(wooccm_upload.message.saving);
        },
        success: function success(response) {
          if (response.success) {
            $('.wooccm_upload_results').html(wooccm_upload.message.deleted);
            $('#wooccm_order_attachment_update').prop('disabled', true);
          } else {
            $('.wooccm_upload_results').html(response.data);
          }
        }
      });
    }); // Upload
    // -------------------------------------------------------------------------

    $(document).on('change', '#wooccm_order_attachment_upload', function (e) {
      var data = false,
          order_id = $(this).data('order_id');

      if (window.FormData) {
        data = new FormData();
      }

      var i = 0,
          len = this.files.length,
          file;

      for (; i < len; i++) {
        file = this.files[i];

        if (data) {
          data.append('wooccm_order_attachment_upload[]', file);
        }
      }
      /*
       * filter file types
       * var file_array = ' . wooccm_js_array($file_types) . ';
       var wooempt = "' . implode(',', $file_types) . '";
       
       for ( i = 0; i < length; i++ ) {
       file = this.files[i];
       for(x=0; x < ' . $number_of_types . '; x++){
       if( !wooempt || file.type.match(file_array[x])  ) {
       if (formdata) {
       formdata.append("files_wooccm[]",file); 
       }
       }
       }
       }
       */


      if (data) {
        data.append('action', 'wooccm_order_attachment_upload');
        data.append('nonce', wooccm_upload.nonce);
        data.append('order_id', order_id);
        $.ajax({
          url: wooccm_upload.ajax_url,
          type: 'POST',
          cache: false,
          data: data,
          processData: false,
          contentType: false,
          beforeSend: function beforeSend(response) {
            $('.wooccm_upload_results').html(wooccm_upload.message.uploading);
            block($('.wooccm_order_attachments_wrapper'));
          },
          success: function success(response) {
            if (response.success) {
              $('.wooccm_order_attachments_wrapper').fadeOut();
              $('.wooccm_order_attachments_wrapper').replaceWith($(response.data).fadeIn());
              $('.wooccm_upload_results').html(wooccm_upload.message.success);
            } else {
              $('.wooccm_upload_results').html(response.data);
            }

            unblock($('.wooccm_order_attachments_wrapper'));
          }
        });
      }
    });
  });
})(jQuery);

/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ })

/******/ });
//# sourceMappingURL=order-upload.js.map