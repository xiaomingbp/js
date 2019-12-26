function Page(obj){
    this.data = obj.data;
    this.tempData = this.data.slice();
    this.index = 1 || obj.index;
    this.size = 5 || obj.size;

    this.list = document.querySelector(obj.list);
    this.page = document.querySelector(obj.page);
    this.search = document.querySelector(obj.search);
    this.slt = document.querySelector(obj.slt);
    
    this.show(this.tempData);
    this.bindEvent();
}
//渲染内容
Page.prototype.renderCon = function(arr){
    this.list.innerHTML = arr.map(function(item){
        return `<tr>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.sex}</td>
            <td><input type="button" value="删除" class="del"></td>
        </tr>`
    }).join("");
}
//渲染页码
Page.prototype.renderPage = function(arr){
    var count = Math.ceil(this.tempData.length/this.size);
    this.page.innerHTML = `<span class="prev">上一页</span>`;
    for(var i=1;i<=count;i++){
        this.page.innerHTML += `<span class="item${this.index == i?" active":""}">${i}</span>`;
    }
    this.page.innerHTML += `<span class="next">下一页</span>`;
}
//显示对应页面的内容
Page.prototype.show = function(){
    var start = (this.index - 1) * this.size;
    var end = this.index * this.size;
    var data = this.tempData.slice(start,end);
    this.renderCon(data);
    this.renderPage(data);
}
//数据排序
Page.prototype.sort = function(arr,attr){
    return arr.sort(function(a,b){
        if(a[attr] < b[attr]){
            return -1;
        }
        if(a[attr] > b[attr]){
            return 1;
        }
        return 0;
    })
}
//绑定事件
Page.prototype.bindEvent = function(){
    var that = this;
    //点击页面事件
    this.page.addEventListener("click",function(e){        
        if(e.target.classList.contains("item")){
            that.index = e.target.innerHTML * 1;
        }
        if(e.target.classList.contains("prev")){
            that.index--;
            if(that.index < 1){                
                that.index = 1;
            }            
        }
        if(e.target.classList.contains("next")){
            that.index++;
            if(that.index > Math.ceil(that.tempData.length/that.size)){
                that.index = Math.ceil(that.tempData.length/that.size);
            }
        }        
        that.show(this.tempData);
    });
    //输入框输入事件
    this.search.addEventListener("input",function(){
        that.index = 1;  // 非常重要
        that.tempData = that.data.filter(function(item){
            return item.name.includes(that.search.value); // 等价于 item.name.indexOf(that.search.value) != -1;
        });
        that.show(this.tempData);
    });
    //下拉菜单事件
    this.slt.addEventListener("change",function(){
        that.index = 1;  // 非常重要
        that.tempData = that.sort(that.tempData,that.slt.value);
        that.show(this.tempData);
    })
}
new Page({
    data:data,
    list:".list",
    page:".page",
    search:".search",
    slt:".slt"
})