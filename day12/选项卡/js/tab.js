var btns = [...document.querySelectorAll(".btns>div")];
var cons = [...document.querySelectorAll(".cons>div")];

btns.forEach(function(item,index){
	item.addEventListener("click",function(){

		btns.forEach(function(el,i){
			btns[i].classList.remove("active")
			cons[i].classList.remove("active")
		})		

		btns[index].classList.add("active")
		cons[index].classList.add("active")
	})
})