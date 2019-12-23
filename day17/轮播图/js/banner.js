function Banner(obj){
	this.data = obj.data;
	this.banner = document.querySelector(obj.banner);
	this.imgs = document.querySelector(obj.imgs);
	this.focus = document.querySelector(obj.focus);
	this.prevbtn = document.querySelector(obj.prevbtn);
	this.nextbtn = document.querySelector(obj.nextbtn);

	this.index = 2;  // 默认显示图片的下标
	this.t = null;
	this.timer = obj.timer || 1000;
	this.render();// 初始化图片
	this.show(); // 默认显示
	this.run();
	this.bindEvent();
}
Banner.prototype.render = function(){
	this.imgs.innerHTML = this.data.map(function(item){
		return `<img src="${item}">`
	}).join("")

	this.focus.innerHTML = this.data.map(function(){
		return `<span></span>`
	}).join("")
}
Banner.prototype.show = function(){
	var that = this;
	var imgs_child = [...this.imgs.children]
	imgs_child.forEach(function(el,i){
		that.imgs.children[i].classList.remove("active")
		that.focus.children[i].classList.remove("active")
	})
	this.imgs.children[this.index].classList.add("active")
	this.focus.children[this.index].classList.add("active")
}

Banner.prototype.run = function(){
	var that =this;
	this.t = setInterval(function(){
		that.index++;
		if(that.index == that.imgs.children.length){
			that.index = 0;
		}
		that.show();
	},this.timer)
}

Banner.prototype.bindEvent = function(){
	var that = this;
	this.prevbtn.addEventListener("click",function(){
		that.index--;
		if(that.index < 0){
			that.index = that.imgs.children.length - 1;
		}
		that.show();
	});
	
	this.nextbtn.addEventListener("click",function(){
		that.index++;
		if(that.index == that.imgs.children.length){
			that.index = 0;
		}
		that.show();
	});

	this.banner.addEventListener("mouseover",function(){
		clearInterval(that.t);
	})
	this.banner.addEventListener("mouseout",function(){
		that.run();
	})
}

new Banner({
	data:arr,
	banner:".banner",
	imgs:".imgs",
	focus:".focus",
	nextbtn:".nextbtn",
	prevbtn:".prevbtn",
	timer:1000
})