/*** Created by Administrator on 2017/1/5.*/
    //十大经典
    (function () {
        var slider = document.getElementById("slider");
        var divs = slider.getElementsByTagName("div");
        var loc = document.getElementById("loc");
        for (var i = 0; i < divs.length; i++) {
            divs[i].onmouseover = function () {
                for (var i = 0; i < divs.length; i++) {
                    slowAnimateD(divs[i], {"width": 62})
                }
                slowAnimateD(this, {"width": 620})
            }
        }
        slider.onmouseout = function () {
            for (var i = 0; i < divs.length; i++) {
                slowAnimateD(divs[i], {"width": 118});
            }
        };
        loc.onmouseover = function () {
            this.style.opacity = "0.8";
        }
        loc.onmouseout = function () {
            this.style.opacity = "1";
        }
    })();
    //客片欣赏

(function(){
    var fr=document.getElementById("fr");
    var lis=fr.children;
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            var a=this.children[0];
            slowAnimateDd(a, {"borderRadius": 50})
            this.style.background="blue";
        }
        lis[i].onmouseout=function(){
            var a=this.children[0];
            slowAnimateD(a, {"borderRadius": 0})
            this.style.background="white";
        }
    }
    function slowAnimateDd(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    //opacity 是小数
                    var leader = getStyle(obj, k) * 100;//opacity不需要也不能给默认值
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;//opacity没有单位
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];//如果是层级就直接设置到目标值
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
        }, 30);
    }
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
})();


    (function () {

        var Innovation = document.getElementById("0852691");
        var imgs = Innovation.getElementsByTagName("img");
        setInterval(function(){
            for (var i = 0; i < imgs.length; i++) {
                var lf = parseInt(Math.random() * 10);
                slowMove(imgs[i], {"top": -lf * 954 - 75})
            }
        },3000)
        function slowMove(obj, json, fn) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var flag = true;
                for (var k in json) {
                    if (k === "opacity") {
                        //opacity 是小数
                        var leader = getStyle(obj, k) * 100;//opacity不需要也不能给默认值
                        var target = json[k] * 100;
                        var step = (target - leader) / 10;
                        step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        leader = leader + step;
                        obj.style[k] = leader / 100;//opacity没有单位
                    } else if (k === "zIndex") {
                        obj.style.zIndex = json[k];//如果是层级就直接设置到目标值
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
            }, 30);
        }
        function getStyle(obj, attr) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(obj)[attr];
            } else {
                return obj.currentStyle[attr];
            }
        }

    })();
    (function () {
        var index_guest = document.getElementById("index_guest");
        var as = index_guest.getElementsByTagName("a");
        var dts = index_guest.getElementsByTagName("dt");
        //var aud=document.getElementById("aud");
        for (var i = 0; i < as.length; i++) {
            as[i].index = i;
            as[i].onmouseover = function () {
                slowAnimateD(dts[this.index], {"top": 0});
                //aud.autoplay="autoplay";
            }
        }
        for (var i = 0; i < as.length; i++) {
            as[i].index = i;
            as[i].onmouseout = function () {
                slowAnimateD(dts[this.index], {"top": -362});
            }
        }
    })();
    (function () {
        var s2 = document.getElementById("s2");
        var sc2 = document.getElementById("sc2");
        var lis = sc2.getElementsByTagName("li");
        var h3 = sc2.getElementsByTagName("h3");
        s2.onmouseover = function () {
            this.style.opacity = 0.5;
        };
        s2.onmouseout = function () {
            this.style.opacity = 1;
        };
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].onmouseover = function () {
                this.style.opacity = 0.5;
                h3[this.index].style.color = "lightblue";

            }
        }
        ;
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].onmouseout = function () {
                this.style.opacity = 1;
                h3[this.index].style.color = "#222";
            }
        }
        ;
    })();
    (function () {
        var db = document.getElementById("db");
        var ulD = db.children[0];
        var lisD = ulD.children;
        var hb = document.getElementById("hb");
        var ulH = hb.children[0];
        var lisH = ulH.children;
        var h = 0;
        var timer = null;
        lisH[0].className = "current";
        for (var i = 0; i < lisH.length; i++) {
            lisH[i].index = i;
            lisH[i].onmouseover = function () {
                clearInterval(timer);
                for (var i = 0; i < lisH.length; i++) {
                    lisH[i].className = "";
                }
                ;
                h = this.index;
                lisH[this.index].className = "current";
                for (var j = 0; j < lisD.length; j++) {
                    lisD[j].style.opacity = "0";
                }
                ;
                slowAnimateD(lisD[this.index], {"opacity": 1})
            };
            lisH[i].onmouseout = function () {
                for (var i = 0; i < lisH.length; i++) {
                    lisH[i].className = "";
                }
                ;
                lisH[0].className = "current";
                for (var j = 0; j < lisD.length; j++) {
                    lisD[j].style.opacity = "0";
                }
                ;
                slowAnimateD(lisD[0], {"opacity": 1})
                timer = setInterval(function () {
                    vv();
                }, 1000)
            }
        }
        timer = setInterval(function () {
            vv();
        }, 1000)
        function vv() {
            if (h > 1) {
                h = 0;
            }
            for (var i = 0; i < lisH.length; i++) {
                lisH[i].className = "";
            }
            ;
            lisH[h].className = "current";
            for (var j = 0; j < lisD.length; j++) {
                lisD[j].style.opacity = "0";
            }
            ;
            slowAnimateD(lisD[h], {"opacity": 1})
            h++;
        }
    })();
    (function () {
        var fl = document.getElementById("fl");
        var lisL = fl.children;
        var fr = document.getElementById("fr");
        var lisR = fr.children;
        //var bgc = "rgb(" + 0 + "," + 255 + "," + 0 + ")";
        for (var i = 0; i < lisL.length; i++) {
            lisL[i].index = i;
            lisL[i].onmouseover = function () {
                slowAnimateD(this.children[0], {"fontSize": 18});
            }
            lisL[i].onmouseout = function () {
                slowAnimateD(this.children[0], {"fontSize": 12});
            }
        }
    })();
    //尾部
    (function () {
        var last=235;
        var cloud = document.getElementById("cloud");
        var ul = document.getElementById("navBar");
        var lis = ul.getElementsByTagName("li");
        for (var i = 0; i < lis.length; i++) {
            lis[i],index=i;
            lis[i].onmouseover = function () {
                var target = this.offsetLeft + 240;
                slowAnimateD(cloud, {"left": target})
                cloud.style.display="block";
                ul.onmouseout = function () {
                    slowAnimateD(cloud, {"left": target})
                    cloud.style.display = "none";

                }
            };
        }
    })();
    (function(){
        var wx=document.getElementById("wx");
        var span=wx.children[1];
        wx.onmouseover=function(){
            slowAnimateD(span, {"height":122});
        };
        wx.onmouseout=function(){
            slowAnimateD(span, {"height":0});
        };
    })();


(function(){
    var fr=document.getElementById("fr");
    var lis=fr.children;
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            var a=this.children[0];
            slowAnimateDd(a, {"borderRadius": 50})
            this.style.background="red";
        }
        lis[i].onmouseout=function(){
            var a=this.children[0];
            slowAnimateD(a, {"borderRadius": 0})
            this.style.background="white";
        }
    }
    function slowAnimateDd(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    //opacity 是小数
                    var leader = getStyle(obj, k) * 100;//opacity不需要也不能给默认值
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;//opacity没有单位
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];//如果是层级就直接设置到目标值
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
        }, 30);
    }
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
})();


