'use strict';

/*默认情况下的参数*/
function add() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	return a + b;
}
var result = add();
console.log(result);

/*rest的任意参数*/
function argv(obj) {
	for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		rest[_key - 1] = arguments[_key];
	}

	console.log(rest);
}
var data = { title: 'es6', content: 'daydayup' };
argv(data, 'tyg');

(function (f) {
	console.log(f + 11);
});
/**

*/