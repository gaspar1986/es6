var obj={
	a:"1",
	fn:function(){
		console.log(this);
	},
	bcc:[1,2,3]
};
var {a,fn,bcc:[b,c,d]} = obj;
console.log(fn);
fn();


/*var ary=['cat','dog','fox'];
var [cat,dog,fox] = ary;
console.log(cat);
console.log(dog);
console.log(fox);
console.log(a)
console.log(c)*/