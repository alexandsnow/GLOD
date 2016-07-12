var leftTime=599;

function runtime(){
	window.setInterval(function(){
		var day=0,hour=0,minute=0,second=0;//时间默认值
		if(leftTime > 0){
	    	day = Math.floor(leftTime / (60 * 60 * 24));
	    	hour = Math.floor(leftTime / (60 * 60)) - (day * 24);
	    	minute = Math.floor(leftTime / 60) - (day * 24 * 60) - (hour * 60);
	    	second = Math.floor(leftTime) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    	} 
    	if (minute <= 9) minute = '0' + minute;
    	if (second <= 9) second = '0' + second; 
    	$("#days").text(day+"天");
		$("#hours").text(hour+"时");
		$("#minutes").text(minute+"分");
		$("#seconds").text(second+"秒");
		leftTime--;
		if (leftTime==0) {
			$("#LeftTime").show();
			$(".tic-toc").hide();
		}
	},1000);
}

