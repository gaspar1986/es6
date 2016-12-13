'use strict';

var obj = {
    name: 'yongfeng',
    courses: ['react', 'nodejs', 'mongodb'],
    getMessage: function() {
        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function(fun) {
                var len = this.length;
                if (typeof fun != "function")
                    throw new TypeError();
                var thisp = arguments[1];
                for (var i = 0; i < len; i++) {
                    if (i in this)
                        fun.call(thisp, this[i], i, this);
                }
            };
        }else{

        	this.courses.forEach(function(item) {
        	    console.log(this.name + ' teach us ' + item);
        	}, this);
        }
    }
};
obj.getMessage();



