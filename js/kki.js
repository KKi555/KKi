
 function $(id) {
     return document.getElementById(id);
 }
 function show(obj) {
     obj.style.display = "block";
 }
 function hide(obj) {
     obj.style.display = "none";
 }
 //封装scroll函数
 function scroll() {
     if(window.pageYOffset != null){//ie9 和其他浏览器   //这里不能写成 if(window.pageYOffset),因为当页面加载完成的时候，pageYOffset值为0，相当于if（0），则大括号里的语句永远不会执行
         return{
             left: window.pageXOffset,
             top: window.pageYOffset//Json 格式中不能有分号
         }
     }else if(document.compatMode == "CSS1Compat"){//声明了DTD，不是怪异模式
         //检测是不是怪异模式的浏览器 -- 就是没有声明<!DOCTYPE html>
         return{
             left: document.documentElement.scrollLeft,
             top: document.documentElement.scrollTop
         }
     }return{//剩下的肯定是怪异模式
         left: document.body.scrollLeft,
         top: document.body.scrollTop
     }
 }
 //让页面快速回到顶部
 function scrollToTop(iconId) {
     var obj = $(iconId);
     window.addEventListener("scroll",function () {
         scroll().top > 0 ? show(obj) : hide(obj);
         start = scroll().top;
     })//addEventListener可以向指定元素添加多个事件，事件不会被覆盖
     // window.onscroll = function () {
     //     // if(scroll().top > 0){
     //     //     goToUp.style.display = "block";
     //     // }else {
     //     //     goToUp.style.display = "none";
     //     // }
     //     scroll().top > 0 ? show(obj) : hide(obj); // 将上面的语句简化
     //     start = scroll().top;
     // }
     var start = 0 ,target = 0 ,timer = null;
     obj.onclick = function () {
         target = 0;//点击完毕之后奔向0去的
         timer = setInterval(function () {
             start = start + (target - start)/10;
             window.scrollTo(0,start) ;
             if(start == target){
                 clearInterval(timer);
             }
         },20)
     }
 }
//让页面元素固定
function objFixed(id) {
    var obj = $(id);
    var height =$("nav_box").offsetHeight +  $("topImg").offsetHeight;
    window.addEventListener("scroll",function () {
        if (scroll().top >= height){
            obj.classList.add("fixed");
        }else {
            obj.classList.remove("fixed");
        }
    })
    // window.onscroll = function () {
    //     if (scroll().top >= height){
    //         obj.classList.add("fixed");
    //     }else {
    //         obj.classList.remove("fixed");
    //     }
    // }
}
 //让导航栏固定
 function navFixed(id) {
     var obj = $(id);
     var height =$("navbar_box").offsetHeight
     window.addEventListener("scroll",function () {
         if (scroll().top >= height){
             obj.classList.add("navFixed");
         }else {
             obj.classList.remove("navFixed");
         }
     })
     // window.onscroll = function () {
     //     if (scroll().top >= height){
     //         obj.classList.add("fixed");
     //     }else {
     //         obj.classList.remove("fixed");
     //     }
     // }
 }
//展开全部内容
 function showAllContent() {
     var items = document.querySelectorAll(".positionItem");
     var icons = document.querySelectorAll(".scrollIcon");
     for(var i = 0;i<icons.length;i++){
         icons[i].index = i;
         icons[i].onclick = function () {
             this.classList.toggle("upDown");
             items[this.index].classList.toggle("changeHeight");
         }
     }
 }
 //侧边导航切换内容
 function changeContent() {
     var subnav = document.getElementById("subnav");
     var subnav_item = subnav.getElementsByTagName("h3");
     var content = document.getElementById("getcontent").getElementsByTagName("div");
     for(var i = 0;i < subnav_item.length;i++){
         subnav_item[i].index = i;//难点+重点
         subnav_item[i].onclick = function () {
             for(var j = 0;j < subnav_item.length;j++){
                 subnav_item[j].className = "";
                 content[j].className = "";
             }
             this.className = "current";
             content[this.index].className = "show_content"
         }
     }
 }
//文章二维码的隐藏
 function hideCode(id) {
     var obj = $(id);
     var width =$("articleContent_box").offsetWidth
     window.addEventListener("onreset",function () {
         if (onreset().top >= height){
             obj.classList.add("navFixed");
         }else {
             obj.classList.remove("navFixed");
         }
     })
     // window.onscroll = function () {
     //     if (scroll().top >= height){
     //         obj.classList.add("fixed");
     //     }else {
     //         obj.classList.remove("fixed");
     //     }
     // }
 }