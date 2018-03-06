//首页banner轮播
//获取元素
var w_slider = document.getElementById("w_slider");
var slider_main = document.getElementById("slider_main");
var imgs = slider_main.children[0].children;
var slider_ctrl = document.getElementById("slider_ctrl");
var slider_ctrl_fixed = document.getElementById("slider_ctrl_fixed");
var arrows = slider_ctrl_fixed.children;
//动态生成小圆点
for (var i = 0 ;i < imgs.length; i++){
    var span = document.createElement("span");
    span.classList.add("slider-ctrl-con");
    span.innerHTML = i + 1;
    slider_ctrl.appendChild(span);
}
var spans = slider_ctrl.children;
spans[0].classList.add("slider-ctrl-con-current");
//图片右移
var scrollwidth = w_slider.offsetWidth;
for (var i = 1;i<imgs.length;i++){
    imgs[i].style.left = scrollwidth + "px";
}
//控制按钮
var iNow = 0;//控制当前图片的张数
for (var k in arrows){
    arrows[k].onclick = function () {
        if (this.className == "slider-ctrl-prev"){
            animate(imgs[iNow],{left: scrollwidth});
            --iNow < 0 ? iNow = imgs.length - 1 : iNow;
            imgs[iNow].style.left = -scrollwidth + "px";
            animate(imgs[iNow],{left: 0});
        }else {
            animate(imgs[iNow],{left: -scrollwidth});
            ++iNow > imgs.length - 1 ? iNow = 0 : iNow;
            imgs[iNow].style.left = scrollwidth + "px";
            animate(imgs[iNow],{left: 0});
        }
        setCurrent();
    }
}
for (var i = 0;i < spans.length;i++){
    spans[i].onmouseover = function () {
        var that = this.innerHTML - 1;
        if (that > iNow){
            animate(imgs[iNow],{left: -scrollwidth});
            imgs[that].style.left = scrollwidth + "px";
            animate(imgs[that],{left: 0});
        }else if (that < iNow){
            animate(imgs[iNow],{left: scrollwidth});
            imgs[that].style.left = -scrollwidth + "px";
            animate(imgs[that],{left: 0});
        }
        iNow = that;
        setCurrent();
    }
}
//设置小圆点状态
function setCurrent() {
    for (var i = 0;i<spans.length;i++){
        spans[i].classList.remove("slider-ctrl-con-current");
    }
    spans[iNow].classList.add("slider-ctrl-con-current");
}
//开启定时器
var timer = null;
timer = setInterval(autoPlay,3000);
function autoPlay() {
    animate(imgs[iNow],{left: -scrollwidth});
    ++iNow > imgs.length - 1 ? iNow = 0 : iNow;
    imgs[iNow].style.left = scrollwidth + "px";
    animate(imgs[iNow],{left: 0});
    setCurrent();
}
w_slider.onmouseover = function () {
    clearInterval(timer);
    animate(slider_ctrl_fixed,{opacity: 80});
}
w_slider.onmouseout = function () {
    clearInterval(timer);
    timer = setInterval(autoPlay,3000);
    animate(slider_ctrl_fixed,{opacity: 0});
}
