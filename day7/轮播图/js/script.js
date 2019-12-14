//获取要操心的标签
var imgs = document.querySelectorAll(".imgs img");
var focuss = document.querySelectorAll(".focuss span");
var btns = document.querySelectorAll(".btns span");

//定义下标
var index = 2;

//封装显示图片和高亮焦点的函数
function show(){
	focuss.forEach(function(el,i){
		imgs[i].classList.remove("active")
		focuss[i].classList.remove("active")
	})

	imgs[index].classList.add("active")
	focuss[index].classList.add("active")
}

show()

//封装显示下一个图片和高亮焦点的函数
//封装显示上一个图片和高亮焦点的函数
//给焦点元素绑定滑过事件

focuss.forEach(function(item,i){
	item.addEventListener("mouseover",function(){
		index = i;
		show()
	})
})


//给上一个按钮绑定点击事件
btns[0].addEventListener("click",function(){
	index--;
	if(index<0){
		index = 2;
	}
	show();
})
btns[1].addEventListener("click",function(){
	index++;
	if(index > 2){
		index = 0;
	}
	show();
})
//给下一个按钮绑定点击事件
//封装图片轮播函数
//给大盒子绑定鼠标滑过事件
//给大盒子绑定鼠标移出事件