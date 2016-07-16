var registerApp=angular.module("ShES_register",[]);
registerApp.controller("register_Controller",function($scope){
	$scope.Register=function(){
		alert("恭喜注册成功");
		self.location="login.html";
	}
});