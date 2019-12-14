//debugger;
//右移动按钮
var right_btn = document.querySelector(".right-btn");
//右边的盒子
var right_box = document.querySelector(".box-right");

//点击右移动安妮
right_btn.onclick = function(){
	//获取所有选中的复选框
	var checkall = [...document.querySelectorAll("input[type='checkbox']:checked")];
	
	//遍历选中的复选框
	checkall.forEach(function(item){ // item 是每一个复选框
		item.checked = false; // 取消选中

		//将复选框的父亲添加到右面的盒子里
		right_box.appendChild(item.parentNode)
	})
}
