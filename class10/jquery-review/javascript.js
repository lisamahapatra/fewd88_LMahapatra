$("p").css("background-color", "blue");

$("p").html("hello world");

$("p").click(function () {
	$(this).css("height", "+=100px");
	$(this).css("width", "+=100px");
});
