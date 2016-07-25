var age;
var max_age;
var num_per_day;
var item;

document.getElementById('click_me').onclick = calculate;

function calculate() {
	age = parseInt(document.getElementById('age').value);
	max_age = parseInt(document.getElementById('max_age').value);
	num_per_day = parseInt(document.getElementById('num_per_day').value);
	item = document.getElementById('item').value;
	
	var total_drink = (max_age - age) * 365 * num_per_day;
	
	document.getElementById('solution').innerHTML = total_drink;
	document.getElementById('drink').innerHTML = item;
}