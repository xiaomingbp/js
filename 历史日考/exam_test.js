window.onload = function(){
	var trueorfalse_arr = {"A":"对","B":"错"};
	//将提示删除
	document.querySelectorAll(".answer-desc-detail").forEach(function(item){
		item.remove();
	})
	document.querySelector("#bk-conent-exampaper").innerHTML += `
		<div class="question-body"><input type="button" class="submit" value="提交" style="width:80px;height:40px;"></div>
	`
	document.querySelectorAll(".question").forEach(function(item,index){
		//将答案绑定在li的answer属性上
		item.setAttribute("answer",item.querySelector(".answer_value").innerText.replace(/^\s+|\s+$/,""))
		//将分数绑定在num属性上
		item.setAttribute("fenshu",item.querySelector(".question-point").innerText.replace(/^\s+|\s+$/,""))
		//将答案隐藏起来
		item.querySelector(".answer-desc-summary").style.visibility = "hidden";
		item.querySelector(".answer-desc-summary").nextElementSibling&&(item.querySelector(".answer-desc-summary").nextElementSibling.style.visibility = "hidden");

		//判断题的选项
		if(item.classList.contains("qt-trueorfalse")){
			item.children[1].innerHTML += `
				<ul class="question-opt-list">
					<li class="question-list-item">			
						<span class="question-li-text">A:对</span>
					</li>	
					<li class="question-list-item">			
						<span class="question-li-text">B:错</span>
					</li>
				</ul>
			`
		}
		//填空题的输入框
		if(item.classList.contains("qt-fillblank")){
			item.children[1].innerHTML += `
				<input type="text" style="width:500px;height:32px;">
			`
		}
		
	})
	var username = "";
	var start_time = "";
	setTimeout(function(){
		do{
			username = prompt("请输入学生姓名:");
		}while(!username)
		start_time = formDate();
	},300);


	document.onclick = function(event){
		var count = 0;
		//单选
		var li =event.target.parentNode.parentNode.parentNode.parentNode;
		if(li.classList.contains("qt-singlechoice")){
			[...event.target.parentNode.parentNode.children].forEach(function(item){
				item.classList.remove("active")
			})
			li.setAttribute("myanswer",event.target.innerText.charAt(0))
			event.target.parentNode.classList.add("active")
		}
		//多选题
		if(li.classList.contains("qt-multiplechoice")){
			var attrvalue = li.getAttribute("myanswer")||"";
			if(event.target.parentNode.classList.contains("active")){
				attrvalue = attrvalue.replace(event.target.innerText.charAt(0),"");
			}else{				
				attrvalue += event.target.innerText.charAt(0);
			}
			li.setAttribute("myanswer",attrvalue.split("").sort().join(""));					
			event.target.parentNode.classList.toggle("active");
		}
		//判断题
		if(li.classList.contains("qt-trueorfalse")){
			[...event.target.parentNode.parentNode.children].forEach(function(item){
				item.classList.remove("active")
			})
			li.myanswer = trueorfalse_arr[event.target.innerText.charAt(0)]
			li.setAttribute("myanswer",trueorfalse_arr[event.target.innerText.charAt(0)])
			event.target.parentNode.classList.add("active")
		}
		//提交
		if(event.target.classList.contains("submit")){
			document.querySelectorAll(".question").forEach(function(item,index){
				if(item.getAttribute("myanswer") == item.getAttribute("answer")){
					count += item.getAttribute("fenshu")*1;
				}else{
					item.querySelector(".answer-desc-summary").style.cssText = "visibility:visible;background-color:red;color:#fff;font-size:20px;";
				}
			})
			var end_time = formDate();
			
			alert(`考试学生名称：${username}\r\n考试开始时间：${start_time}\r\n考试结束时间：${end_time}\r\n考试最终分数：${count}`);
		}
	}
	document.querySelectorAll(".question-body input").forEach(function(item){
		item.onblur = function(){
			this.parentNode.parentNode.myanswer = this.value;
			this.parentNode.parentNode.setAttribute("myanswer",this.value)
		}
	})

	
}
function formDate(){
	var t = new Date();
	return `${t.getFullYear()}年${t.getMonth()+1}月${t.getDate()}日${t.getHours()}时${t.getMinutes()}分${t.getSeconds()}秒`
}
