/**
 * Created by Administrator on 2016/7/8.
 */
/**TODO:bootlint��ʽ������Ҫɾ��*/
(function(){
  var s=document.createElement("script");
  s.onload=function(){
    bootlint.showLintReportForCurrentDocument([]);
  };
  s.src="./js/bootlint.js";
  document.body.appendChild(s);
})();
/*С��Ļ�£�sign up �Ƴ�.sginupbtn��ʽ*/
/*��Ҫˢ�²���ʵ��
var w=document.body.clientWidth;
console.log(w);
if(w<=767){
  $("#sign-up").removeClass();
}else{
  $("#sign-up").addClass("btn btn-warning signupbtn");
}*/

