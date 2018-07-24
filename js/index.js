
//tab
$(".main-tab li").click(function (e) {
  e = e || window.event;
  e.preventDefault();
  $(this).addClass('active').siblings("li").removeClass('active');
})
//点击列表显示
var flag = 1;
$(".icon-category").click(function (e) {
  e = e || window.event;
  e.preventDefault();
  if (flag == 1) {
    $(".list").animate({ height: 159 }).show();
    flag = 0;
  } else {
    $(".list").animate({ height: 0 }, function () {
      $(".list").hide();
    });
    flag = 1;
  }
})
//点击连载动画显示
$(".lzdh").click(function (e) {
  e = e || window.event;
  e.preventDefault();
  window.sessionStorage.setItem("url", window.location.href);
  window.location.href = "lzdm.html";
})
//点击专题列表显示
$(".ztlb").click(function (e) {
  e = e || window.event;
  e.preventDefault();
  window.sessionStorage.setItem("url", window.location.href);
  window.location.href = "ztlb.html";
})
// 固定导航栏
window.onload = function () {
  // 1.获得要操作的对象
  var top = document.getElementById("top");
  var main = document.getElementById("main");
  var pic = document.getElementById("pic");
  // 2.给事件源注册事件
  window.onscroll = function () {
    // 当页面被滚动的时候，才会触发
    var scrollTop = scroll().scrollTop  // 获取页面被卷去的高度
    if (scrollTop > top.offsetHeight) {
      // 让top固定起来
      top.setAttribute('class', 'top fixedhead')   // 给main设置一个固定的类
      pic.style.paddingTop = '41px'  // 给main加上一个内上填充
    } else {
      top.setAttribute('class', 'top')  // 给main设置一个固定的类
      pic.style.paddingTop = '0px'    // 把之前添加的内填充给去掉
    }
    if (scrollTop > (top.offsetHeight + main.offsetHeight)) {
      // 让main固定起来
      main.setAttribute('class', 'main fixed')   // 给main设置一个固定的类
    } else {
      main.setAttribute('class', 'main')  // 将fix类清除掉
    }
  }
  function scroll() {
    return {
      scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
      scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
  }
}