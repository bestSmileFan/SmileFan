/**
 * Created by Administrator on 2016/12/30.
 */
/**
 * 颜色变化
 * @param obj
 * @param targetArr
 */
function animateT(obj, targetArr) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        var leaderStr = getStyle(obj, "backgroundColor");
        leaderStr = leaderStr.slice(4, -1);
        var leaderArr = leaderStr.split(",");
        var targetStr = "rgb(";//"rgb(255, 0, 0)"
        for (var i = 0; i < leaderArr.length; i++) {
            var leader = parseInt(leaderArr[i]);
            var target = targetArr[i];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            targetStr =targetStr+ leader + ",";
            if (leader != target) {
                flag = false;
            }
        }
        targetStr = targetStr.slice(0, -1);//"rgb(255,0,0,"
        targetStr += ")";//"rgb(255,0,0"
        obj.style.backgroundColor = targetStr;
        if (flag) {
            clearInterval(obj.timer);
        }
    }, 300);
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
/**
 * 能够让 任意对象 移动到 指定位置
 * @param obj
 * @param target
 */
function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader=obj.offsetLeft;
        //var target=400;
        var step = 10;
//                if(target>leader){
//                    step=step;
//                }else{
//                    step=-step;
//                }
        step = target > leader ? step : -step;
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }
    }, 15);
}
/**
 * 能够让 任意对象 缓动到 指定位置
 * @param obj
 * @param target
 */
function slowAnimate(obj,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        obj.style.left = leader + "px";
        if (leader === target) {
            clearInterval(obj.timer);
        }
    }, 15);
}
/**
 * 能够将 任意对象的 多个任意属性 改变到任意值
 * @param obj
 * @param json
 */
function slowAnimateD(obj, json, fn) {
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
    }, 15);
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
/**
 * 不选文字
 */
window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();