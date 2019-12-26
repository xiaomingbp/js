function Banner(obj){
	this.data = obj.data;
	this.banner = document.querySelector(obj.banner);
	this.imgs = document.querySelector(obj.imgs);
	this.focus = document.querySelector(obj.focus);
	this.prevbtn = document.querySelector(obj.prevbtn);
	this.nextbtn = document.querySelector(obj.nextbtn);

	this.index = 0;  // 默认显示图片的下标
	this.t = null;
	this.timer = obj.timer || 1000;
	this.move();
	this.addTransition();
	this.run();

}
Banner.prototype.move = function(){
	this.addTransition();
	this.imgs.style.left = this.index * -1000 + "px";
}

Banner.prototype.addTransition = function(){
	this.imgs.style.transition = "left 2s";
}
Banner.prototype.removeTransition = function(){
	this.imgs.style.transition = "none";
}

Banner.prototype.run = function(){
	var that = this;
	this.t = setInterval(function(){
		that.index++;
		if(that.index == 4){
			that.index = 0;
			that.removeTransition();
			that.imgs.style.left = this.index * -1000 + "px";
		}
		that.move();	
	},this.timer);
}
new Banner({
	data:arr,
	banner:".banner",
	imgs:".move",
	focus:".focus",
	nextbtn:".nextbtn",
	prevbtn:".prevbtn",
	timer:3000
})