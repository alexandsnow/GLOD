$(function(){
	$(".begin-btn").click(function(){		
		runtime();
		$(".begin-btn").attr("disabled",true);
		$(".disabled-cover").fadeOut();
	});
});
pageJump("MyColor1");
pageJump("MyColor2");
pageJump("MyColor3");
pageJump("MyColor4");
pageJump("MyColor5");

function pageJump(index){
	$("."+index).click(
		function(){
		    $("#mymodal-data1").modal();
		    var IdName;
		    $(document).click(function (e) {
				IdName=($(e.target).attr('id'));  // 获取id
			})

		    $("#answerJump").click(
		    	function(){
		    		console.log("you have clicked "+IdName);
		    		switch(IdName){
		    			case "itme1":
		    			window.open("subAnswer.html");
		    			break;
		    			case "itme2":
		    			window.open("subAnswer1.html");
		    			break;
		    		}
		    	
		    	}
		    );
		}
	);
}

