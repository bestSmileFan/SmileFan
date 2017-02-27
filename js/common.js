/*** Created by Administrator on 2016/12/22.*/
/**
 * 封装窗口大小改变兼容函数
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0

    }
};
/**
 * 封装 获取计算后样式属性的 兼容函数 能够获取任意对象的任意属性
 *
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
/**
 * 封装获取页面滚动坐标的兼容函数
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll(){
    return {
        top:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left:window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
};
/**
 * 替换类名
 * @param element
 * @param oldStr
 * @param newStr
 */
function replaceClassName(element, oldStr, newStr) {
    var arr = element.className.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldStr) {
            arr[i] = newStr;
        }
    }
    element.className = arr.join(" ");
}

/**
 * 终极封装
 * @param A
 * @param B
 * @param C（true或false）
 */
function move(A,B,C){
    var options = A.children;
    for (var i = 0; i < options.length; i++) {
        if(C||options[i].selected===true){
            B.appendChild(options[i]);
            i--;
        }
    }
}
/**
 * 部分移动
 * @param A
 * @param B
 */
function move(sour,dest){
    var options = A.children;
    for (var i = 0; i < options.length; i++) {
        if(options[i].selected===true){
            B.appendChild(options[i]);
            i--;
        }
    }
}
/**
 * 全部移动
 * @param A
 * @param B
 */
function moveq(sour,dest){
    var options = A.children;
    for (var i = 0; i < options.length; i++) {
        B.appendChild(options[i]);
        i--;
    }
}
/**
 * 获取对象兼容函数
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}
/**
 * 封装获取最后一个子元素的兼容函数
 * @param element
 * @returns {*}
 */
function getLastElement(element){
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var node=element.lastChild;
        while(node&&node.nodeType!==1){
            node=node.previousSibling;
        }
        return node;
    }
}
/**
 * 封装获取第一个子元素的兼容函数
 * @param element
 * @returns {*}
 */
function getFirstElement(element){
    if(element.firstElementChild){
        return element.firstElementChild;
    }else{
        var node=element.firstChild;
        while(node&&node.nodeType!==1){
            node=node.nextSibling;
        }
        return node;
    }
}
/**
 * 封装获取内部文本内容的函数
 * @param element
 */
function getInnerText(element){
    if(element.innerText===undefined){
        return element.textContent;
    }else{
      return element.innerText;
    }
}
/**
 * 封装设置(替换)内部文本内容的函数
 * @param element
 * @param content
 */
function setInnerText(element,content){
    if(element.innerText===undefined){
        element.textContent=content;
    }else{
        element.innerText=content;
    }
}
/**
 * 获取上一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getPrevElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var prev = element.previousSibling;
        while (prev && 1 !== prev.nodeType) {
            prev = prev.previousSibling;
        }
        return prev;
    }
}
/**
 * 封装 获取下一个兄弟元素的兼容函数
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && next.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    }
}