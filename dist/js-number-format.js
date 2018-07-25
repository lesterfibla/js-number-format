'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.n = n;
exports.d = d;
exports.m = m;
// Esta función es de phpjs.org
function number_format(number, decimals, dec_point, thousands_sep) {
    var truncate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
        dec = typeof dec_point === 'undefined' ? '.' : dec_point,
        s = '',
        toFixedFix = function toFixedFix(n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
    };
    if (truncate) {
        s = (prec ? toFixedFix(n, prec) : '' + Math.floor(n)).split('.');
    } else {
        // round
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    }

    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function n(numero) {
    var truncate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return number_format(numero, 0, ',', '.', truncate);
}
function d(numero) {
    var truncate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return number_format(numero, 2, ',', '.', truncate);
}
function m(numero) {
    var truncate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return '$ ' + number_format(numero, 0, ',', '.', truncate);
}