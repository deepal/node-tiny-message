'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function () {
    function Message() {
        _classCallCheck(this, Message);
    }

    _createClass(Message, null, [{
        key: 'success',
        value: function success(message, data, code) {
            var options = {
                code: code !== null && code !== undefined ? code : 0,
                message: message || '',
                data: data || {}
            };

            return {
                success: true,
                message: options.message,
                data: options.data
            };
        }
    }, {
        key: 'error',
        value: function error(message, data, code) {
            var options = {
                code: code !== null && code !== undefined ? code : -1,
                message: message || '',
                data: data || new Error('generic error')
            };

            return {
                success: false,
                code: options.code,
                message: options.message,
                data: options.data
            };
        }
    }]);

    return Message;
}();

module.exports = Message;
//# sourceMappingURL=index.js.map