//Implement the red light using jQuery. 
// Don't forget to add the script tags.

$("stopButton").click(function(){
	$("#stopLight").css("color", "red");
	$("#slowLight").css("color", "gray")
	$("#goLight").css("color", "gray")
});

$("slowButton").click(function(){
	$("#stopLight").css("color", "gray");
	$("#slowLight").css("color", "yellow")
	$("#goLight").css("color", "gray")
});

$("goButton").click(function(){
	$("#stopLight").css("color", "gray");
	$("#slowLight").css("color", "gray");
	$("#goLight").css("color", "green")
});