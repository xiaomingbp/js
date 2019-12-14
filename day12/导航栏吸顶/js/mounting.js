var nav = document.querySelector(".nav");

var move_top = nav.offsetTop;

document.addEventListener("scroll",function(){

	var scroll_top = document.body.scrollTop + document.documentElement.scrollTop;
	
	if(move_top <= scroll_top){
		nav.classList.add("active")
	}else{
		nav.classList.remove("active")
	}


});