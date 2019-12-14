var lis = [...document.querySelectorAll(".ul1 li")];

// for(var i=0;i<lis.length;i++){
// 	lis[i].onclick = function(){

// 		//将所有li的类名删除掉
// 		for(var j=0;j<lis.length;j++){
// 			lis[j].classList.remove("aaa")
// 		}

// 		this.classList.add("aaa");
// 	}
// }

/*
	类数组转数组  :	[...类数组]    类数组 === 伪数组
 */
lis.forEach(function(item){
	item.onclick = function(){
		lis.forEach(function(el){
			el.classList.remove("aaa")
		})
		item.classList.add("aaa")
	}
});