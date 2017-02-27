/*** Created by Administrator on 2016/12/22.*/
/**
 * ��װ���ڴ�С�ı���ݺ���
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0

    }
};
/**
 * ��װ ��ȡ�������ʽ���Ե� ���ݺ��� �ܹ���ȡ����������������
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
 * ��װ��ȡҳ���������ļ��ݺ���
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll(){
    return {
        top:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left:window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
};
/**
 * �滻����
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
 * �ռ���װ
 * @param A
 * @param B
 * @param C��true��false��
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
 * �����ƶ�
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
 * ȫ���ƶ�
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
 * ��ȡ������ݺ���
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}
/**
 * ��װ��ȡ���һ����Ԫ�صļ��ݺ���
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
 * ��װ��ȡ��һ����Ԫ�صļ��ݺ���
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
 * ��װ��ȡ�ڲ��ı����ݵĺ���
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
 * ��װ����(�滻)�ڲ��ı����ݵĺ���
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
 * ��ȡ��һ���ֵ�Ԫ�صļ��ݺ���
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
 * ��װ ��ȡ��һ���ֵ�Ԫ�صļ��ݺ���
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