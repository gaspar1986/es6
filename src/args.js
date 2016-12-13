/*默认情况下的参数*/
function add(a=1,b=1){
	return a + b;
}
var result = add();
console.log(result);

/*rest的任意参数*/
function argv(obj,...rest){
	console.log(rest);
}
var data = {title:'es6',content:'daydayup'}
argv(data,'tyg')

/**

*/
