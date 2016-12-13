'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
	function Animal(name, age) {
		_classCallCheck(this, Animal);

		this.name = name;
		this.age = age;
		this.sayHello = function () {
			console.log('Hello' + this.name);
		};
	}

	_createClass(Animal, [{
		key: 'getMessage',
		value: function getMessage() {
			console.log(this.name + ' is ' + this.age + ' years old');
		}
	}], [{
		key: 'showInfo',
		value: function showInfo() {
			console.log('show Info');
		}
	}]);

	return Animal;
}();

var Cat = function (_Animal) {
	_inherits(Cat, _Animal);

	function Cat(name, age, color) {
		_classCallCheck(this, Cat);

		var _this = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, name, age));

		_this.color = color;
		return _this;
	}

	_createClass(Cat, [{
		key: 'getColor',
		value: function getColor() {
			console.log(this.name + ' is ' + this.color + ' cat');
		}
	}]);

	return Cat;
}(Animal);

var cat = new Cat('Tom', '18', 'blue');
cat.getMessage();
cat.getColor();