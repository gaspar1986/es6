class Animal{
	constructor(name,age){
		this.name = name;
		this.age = age;
		this.sayHello = function(){
			console.log('Hello' + this.name);
		}
	}
	getMessage(){
		console.log(this.name + ' is ' + this.age + ' years old');
	}
	static showInfo(){
		console.log('show Info');
	}
}
class Cat extends Animal{
	constructor(name,age,color){
		super(name,age);
		this.color = color;
	}
	getColor(){
		console.log(this.name + ' is ' + this.color + ' cat');
	}
}
let cat = new Cat('Tom','18','blue');
cat.getMessage();
cat.getColor();