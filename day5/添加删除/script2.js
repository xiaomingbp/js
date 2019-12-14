var content = document.querySelector(".content");
var count = document.querySelector(".count");
content.oninput = function(){ // 文本输入事件
	count.innerHTML = 140 - content.value.length
}

var fabu = document.querySelector(".fabu")
var list = document.querySelector(".list")
fabu.onclick = function(){

	//创建div
	var div = document.createElement("div")
	div.innerHTML = content.value;

	//创建删除按钮
	var delbtn = document.createElement("input")
	delbtn.type = "button"
	delbtn.value = "删除"
	delbtn.onclick = function(){
		this.parentNode.remove();
	}
	
	div.appendChild(delbtn)

	list.insertBefore(div,list.firstChild)

}