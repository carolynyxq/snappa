/**
 * Created by Administrator on 2016/7/8.
 */
/**TODO:bootlint正式上线需要删除*/
(function(){
  var s=document.createElement("script");
  s.onload=function(){
    bootlint.showLintReportForCurrentDocument([]);
  };
  s.src="./js/bootlint.js";
  document.body.appendChild(s);
})();
/*小屏幕下，sign up 移除.sginupbtn样式*/
/*需要刷新才能实现
var w=document.body.clientWidth;
console.log(w);
if(w<=767){
  $("#sign-up").removeClass();
}else{
  $("#sign-up").addClass("btn btn-warning signupbtn");
}*/

