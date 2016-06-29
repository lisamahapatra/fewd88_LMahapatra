function doSomething(){
	alert('this is an alert')
}

document.getElementById('greeting').style.color = "red";

var myPara = document.getElementById('myPara');

myPara.style.color = "green";
myPara.onclick = doSomething;