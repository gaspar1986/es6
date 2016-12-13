var obj = {
	name:'yongfeng',
	courses:['react','nodejs','mongodb'],
	getMessage:function(){
		this.courses.forEach(function(item){
			console.log(this.name + ' teach us ' + item);
		},this)
	}
}
obj.getMessage();