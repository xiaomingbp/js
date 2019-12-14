//获取span标签
var spans = [...document.querySelectorAll(".tit span")];
var divs = [...document.querySelectorAll(".con div")];

//给每一个span绑定点击事件
spans.forEach(function(item,index){

	item.onclick = function(){
		//排他
		spans.forEach(function(el,i){
			el.classList.remove("active");
			divs[i].classList.remove("active")
		})
		//高亮
		item.classList.add("active")
		divs[index].classList.add("active")
	}
})