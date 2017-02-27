/**
 * Created by Administrator on 2017/1/5.
 */

//头部动态白云
(function () {
    var sky = document.getElementById("sky");
    var one = sky.children[0];
    var two = sky.children[1];

    var leader1 = 0;
    var leader2 = 0;
    var step = 1;
    setInterval(function () {
        leader1 = leader1 + step;
        one.style.backgroundPositionX = -leader1 + "px";
    }, 30)
    setInterval(function () {
        leader2 = leader2 + step;
        two.style.backgroundPositionX = -leader2 + "px";
    }, 20)

})();
//导航滑动
(function () {
    var nav = document.getElementById("nav");
    var navSpan = document.getElementById("navSpan");
    var curr = nav.children[1];
    var li = nav.getElementsByTagName("li");
    var lis = []

    for (var i = 0; i < li.length; i++) {
        lis.push(li[i].children[0]);
    }
    for (var i = 0; i < lis.length; i++) {
        lis[i].indd = i;
        lis[i].style.backgroundPositionX = -168 * i + "px";
        lis[i].onmouseenter = function () {
            animateNav(this, {"backgroundPositionY": -51});
            animateNav(curr, {"left": this.indd * 168});
            next = this.nextElementSibling;
            if (next !== null) {
                var num = next.children.length;
                var as = next.children;
                animateNav(next, {"height": 31 * num});
                as[num - 1].style.borderBottom = "none";
                next.style.overflow = "visible";
            }
        }
        lis[i].parentElement.onmouseleave = function () {
            animateNav(curr, {"left": 0});
            animateNav(this.children[0], {"backgroundPositionY": 0});
            if (this.children[1]) {
                animateNav(this.children[1], {"height": 0})
                this.children[1].style.overflow = "hidden";
            }
        }
    }
    //navSpan.onmouseout = function(){
    //    animateNav(this, {"height": 0})
    //}
    //阻止事件冒泡
    //var aList = document.getElementById('navSpan').getElementsByTagName('a');
    //var ul = document.getElementById("nva_ul");
    //
    //
    //for (var i = 0; i < aList.length; i++) {
    //    aList[i].onmouseout = function (event) {
    //        event.stopPropagation();
    //    };
    //}

})();
//轮播图
(function () {
    var slider_bd = document.getElementById("slider_bd");
    var sprev = document.getElementById("sprev");
    var snext = document.getElementById("snext");
    var arrow = document.getElementById("arrow");
    var lis = slider_bd.children[0].getElementsByTagName("li");
    var linkA = slider_bd.children[2].getElementsByTagName("li");
    var timer = null;
    var num = 0;
    slider_bd.onmouseover = function () {
        animateNav(arrow, {"opacity": 0.8})
        clearInterval(timer);
    }
    slider_bd.onmouseout = function () {
        animateNav(arrow, {"opacity": 0});

        timer = setInterval(function () {
            snext.onclick();
        }, 2000)
    }
    sprev.onclick = function () {
        num--;
        if (num < 0) {
            num = 3;
        }
        for (var i = 0; i < lis.length; i++) {
            animateNav(lis[i], {"opacity": 0})
            if (num === i) {
                animateNav(lis[i], {"opacity": 1})
            }
        }
    }
    snext.onclick = function () {
        num++;
        if (num > 3) {
            num = 0;
        }
        for (var i = 0; i < lis.length; i++) {
            animateNav(lis[i], {"opacity": 0})
            if (num === i) {
                animateNav(lis[i], {"opacity": 1})
            }
        }
    }
    timer = setInterval(function () {
        snext.onclick();
    }, 1500)

    for (var i = 0; i < linkA.length; i++) {
        linkA[i].ind = i;
        if (i < linkA.length - 1) {
            linkA[i].onmouseover = function () {
                animateNav(this.children[0].children[0], {"top": 0, "opacity": 1, "left": 0})
            }
            linkA[i].onmouseout = function () {
                animateNav(this.children[0].children[0], {"top": -50, "opacity": 0, "left": -50})
            }
        } else {
            linkA[i].children[0].onmouseover = function () {
                this.children[0].style.display = "block";
                animateNav(this.children[0], {"opacity": 1})
            }
            linkA[i].children[0].onmouseout = function () {
                var that = this.children[0];
                animateNav(that, {"opacity": 0}, function () {
                    that.style.display = "none";
                })
            }
        }
    }

})();
//主题轮播图
(function () {
    var theme_bd = document.getElementById("theme_bd");
    var theme_hd = document.getElementById("theme_hd");
    var hoverBg = document.getElementById("hoverBg");
    var bd_lis = theme_bd.getElementsByTagName("li");
    var hd_lis = theme_hd.getElementsByTagName("li");
    var num = 0;
    var timer = null;
    timer = setInterval(function () {
        start();
    }, 2000)

    for (var i = 0; i < hd_lis.length; i++) {
        hd_lis[i].ind = i;
        hd_lis[i].onmouseover = function () {
            clearInterval(timer);
            num = this.ind;
            animate(hoverBg, {"left": 236 * num});
            for (var j = 0; j < bd_lis.length; j++) {
                animate(bd_lis[j], {"opacity": 0})
            }

            animate(bd_lis[num], {"opacity": 1})
        }
        hd_lis[i].onmouseout = function () {
            timer = setInterval(function () {
                start();
            }, 1500)
        }
        bd_lis[i].onmouseover = function () {
            clearInterval(timer);
        }
        bd_lis[i].onmouseout = function () {
            timer = setInterval(function () {
                start();
            }, 1500)
        }
    }

    function start() {
        for (var j = 0; j < bd_lis.length; j++) {
            animate(bd_lis[j], {"opacity": 0})
        }
        if (num > 4) {
            num = 0;
        }
        move(hoverBg, {"left": 236 * num});
        animate(bd_lis[num], {"opacity": 1})
        num++;
    }

    function move(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 5;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader !== target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 5);
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
})();
//旋转木马
(function () {
    var horse = document.getElementById("horse");
    var slide = document.getElementById("horse_slide");
    var imgs = slide.getElementsByTagName("img");
    var ass = slide.getElementsByTagName("a");
    var arrow = document.getElementById("arrow_house");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var lis = slide.getElementsByTagName("li");
    var flag = true;
    var config = [
        {
            "width": 210,
            "top": 0,
            "left": 380,
            "opacity": 0.2,
            "zIndex": 2
        },
        {
            "width": 260,
            "top": 40,
            "left": 200,
            "opacity": 0.4,
            "zIndex": 3
        },
        {
            "width": 280,
            "top": 80,
            "left": 70,
            "opacity": 0.7,
            "zIndex": 4
        },
        {
            "width": 310,
            "top": 20,
            "left": 270,
            "opacity": 1,
            "zIndex": 5
        },
        {
            "width": 310,
            "top": 20,
            "left": 600,
            "opacity": 1,
            "zIndex": 5
        },
        {
            "width": 280,
            "top": 80,
            "left": 830,
            "opacity": 0.7,
            "zIndex": 4
        },
        {
            "width": 260,
            "top": 40,
            "left": 720,
            "opacity": 0.4,
            "zIndex": 3
        },
        {
            "width": 210,
            "top": 0,
            "left": 594,
            "opacity": 0.2,
            "zIndex": 2
        },
    ]//位置坐标

    for (var i = 0; i < config.length; i++) {
        animateNav(lis[i], config[i])
    }
    arrRight.onclick = function () {
        if (flag) {
            flag = false;
            config.push(config.shift())
            for (var i = 0; i < config.length; i++) {
                animateNav(lis[i], config[i], function () {
                    flag = true
                });
            }
        }
    }
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            for (var i = 0; i < config.length; i++) {
                animateNav(lis[i], config[i], function () {
                    flag = true;
                });
            }
        }
    }

    for (var i = 0; i < ass.length; i++) {
        ass[i].ind = i;
        ass[i].onmouseenter = function () {
            animate(imgs[this.ind], {height: 500, width: 310, left: 0, top: 0})
        }

        ass[i].onmouseleave = function () {
            animate(imgs[this.ind], {height: 520, width: 330, left: -10, top: -10})
        }
    }
    //for(var i = 0;i<lis.length;i++){

    //lis[i].children[0].onmouseover = function(){
    //    animateNav(this.children[0],{"height":480,"width":290})
    //}
    //lis[i].children[0].onmouseout = function(){
    //    animateNav(this.children[0],{"height":500,"width":310})
    //}
    //}
})()


function animateNav(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

//桃花瓣特效start
$(function(){
    $(document).snowfall('clear');
    $(document).snowfall({
        image: "images/flower.png",
        flakeCount:80,
        minSize: 5,
        maxSize: 30
    });
})
//桃花瓣特效end