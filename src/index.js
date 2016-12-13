'use strict';

var obj = {
    name: 'yongfeng',
    courses: ['react', 'nodejs', 'mongodb'],
    getMessage: function() {
        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function (fn,that) {
            	//that代表obj对象
                var lenth = this.length;//this表示this.courses
                if (typeof fn != "function") {
                	throw new TypeError();
                }
                for (var i = 0; i < lenth; i++) {
                   fn.call(that, this[i]);
                }
            };
        }
        this.courses.forEach(function (item) {
            console.log(this.name + ' teach us ' + item);
        }, this);
    }
};
obj.getMessage();