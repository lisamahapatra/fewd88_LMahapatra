$(document).ready(function () {

$('#myForm').submit(function(event){

	var name = $('#name-input').val();
	$('#target').text(name);
	event.preventDefault();
	console.log(event.target.id);
	$('#name-input').val("");

});



})
