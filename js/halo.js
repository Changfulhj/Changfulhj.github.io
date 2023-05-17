
// 底部颜色
var footerDom = document.querySelector('#footer-wrap')
footerDom.style.backgroundColor = "#002e46"

// 取消首页遮罩
window.onload = ()=> {
    document.querySelector("#page-header.full_page").style.backgroundColor = "transparent";
}