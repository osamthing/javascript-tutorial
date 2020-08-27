/*
名前付きの引数が使えるのはわかるが、
順番逆にしたり入れ替えたりする必要なくない？
*/

function showInfo(args){
	var name = args.name;
	var age = args.age;
	console.log(name+''+age);
}
showInfo({name:'iga',age:35});  //iga35
showInfo({age:37,name:'tara'});  //tara37

