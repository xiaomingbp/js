var del = document.querySelector(".del");
del.onclick = function(){
	this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
	//this.parentNode.parentNode.remove();
}

var addhang = document.querySelector(".addhang")
var table = document.querySelector("table")
addhang.onclick = function(){
	var tr = document.createElement("tr")
	tr.innerHTML = `<td><input type="checkbox"></td>
		<td>夏季服装</td>
		<td>100</td>
		<td><input type="button" value="-"><input type="text"><input type="button" value="+"></td>
		<td>0</td>
		<td><input class="del" type="button" value="删除"></td>`
	table.appendChild(tr);
}

var alldel = document.querySelector(".alldel")
alldel.onclick = function(){
	var trs = [...document.querySelectorAll("tr")];
	trs.forEach(function(item,index){
		if(index != 0){
			item.remove();
		}
	})
}
