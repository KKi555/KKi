window.onload = function () {
    var functionbox = document.querySelector("#function_box");
    var li = functionbox.querySelectorAll("li");
    for(var i = 0 ;i < li.length;i++){
        li[i].onclick = function () {
            window.open("products.html");
            var subnav = document.querySelector("#subnav").querySelectorAll("h3");
            var content = document.querySelector("#getcontent").querySelectorAll("div");
            for(var j = 0;j<subnav.length;j++){
                subnav[j].className = "";
                content[j].className = "";
            }
        }
    }
    // li[0].onclick = function () {
    //     var index = 1;
    //     subnav[index].className = "current";
    //     content[index].className = "show_content";
    // }
    // li[1].onclick = function () {
    //     var index = 2;
    //     subnav[index].className = "current";
    //     content[index].className = "show_content";
    // }
    // li[2].onclick = function () {
    //     var index = 3;
    //     subnav[index].className = "current";
    //     content[index].className = "show_content";
    // }
    // li[3].onclick = function () {
    //     var index = 0;
    //     subnav[index].className = "current";
    //     content[index].className = "show_content";
    // }
}
