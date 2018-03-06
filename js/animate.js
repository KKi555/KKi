function animate(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
//            var step = (target - obj.offsetLeft)/10;
//            console.log(step);
//            获得当前的样式
        //遍历json
        var flag = true;
        for (var attr in json) {
            var current = 0;
            if (attr == "opacity"){
                current = Math.round(parseInt(getStyle(obj,attr)*100))||0;
            }else {
                current = parseInt(getStyle(obj, attr));//得到当前的样式，别忘记去掉 px
            }
            //步长 = （target - current）/10 target 是 属性值 ，即json[attr]
            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);//取整
            //判断透明度
            if (attr == "opacity"){//判断用户有没有输入 opacity
                if ("opacity" in obj.style){//判断浏览器是否支持 opacity
//                        obj.style.opacity = json[attr];
                    obj.style.opacity = (current + step)/100;
                }else {
//                        obj.style.filter = "alpha(opacity = "+json[attr]+")";//ie678
                    obj.style.filter = "alpha(opacity = "+(current + step)*10+")";
                }
            }else if (attr == "zIndex"){
                obj.style.zIndex = json[attr];
            }else {
                obj.style[attr] = current + step + "px";
            }
            if (current != json[attr]){
                flag = false;
            }
        }
        //判断循环结束条件
        if (flag){
            clearInterval(obj.timer);
            if (fn){
                fn();
            }
        }
//            console.log(1)
    },10)
}
function getStyle(obj,attr) {
    if (obj.currentStyle){  // ie
        return obj.currentStyle[attr];//返回传递过来的某个睡醒
    }else {
        return window.getComputedStyle(obj,null)[attr]; // w3c浏览器
    }
}

