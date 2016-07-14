// 定义剩余时间 表示总秒数// todo 这个值应当从数据库读取
var leftTime=10*60-1;
// 定时器ID
var Time_ID;

function CalcLeftTime(){
	Time_ID=window.setInterval("UpdateTime()",1000);
}
function UpdateTime(){

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
	
	if(leftTime==0) {
		$("#LeftTime").show();
		$(".tic-toc").hide();
		$(".disabled-cover").fadeIn();
		window.clearInterval(Time_ID);
	}
}

