console.log("欢迎登陆到上海教育超市问答系统");
var myApp=angular.module("ShES_login",[]);
myApp.controller("LoginController",function($scope){
	$scope.userData={};
	$scope.Login=function(){
		console.log($scope.userData);
		var result=checkLogin($scope.userData.userName,$scope.userData.password);
		if(!result){
			$scope.userData.password="";
		}
	}
})

//网络验证
function checkLogin(userName,password){
	
	if(userName==password){
		self.location="index.html";
		return true;
	}
	else{
		alert("用户名和密码错误");
		return false;
	}
}