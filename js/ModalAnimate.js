$(function(){
	$(".begin-btn").click(function(){		
		CalcLeftTime();
		$(".begin-btn").attr("disabled",true);
		$(".disabled-cover").fadeOut();
	});
});

Jump2AnswerPage("MyColor1");
Jump2AnswerPage("MyColor2");
Jump2AnswerPage("MyColor3");
Jump2AnswerPage("MyColor4");
Jump2AnswerPage("MyColor5");

function Jump2AnswerPage(index){
	$("."+index).click(
		function(){
		    $("#mymodal-data").modal();
		    var IdName;
		    $(document).click(function (e) {
				IdName=($(e.target).attr('id'));  // 获取id
			})

		    $("#answerJump").click(
		    	function(){
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

