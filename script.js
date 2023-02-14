//your code here
// var randomNum;
// var input;
// function randomNumGenerator(){
// 	randomNum =Math.floor(Math.random()*41) - 20;
// 	document.getElementById("num").innerHTML = randomNum;
// 	guessName();
// 	print();
// }
// function guessName(){
// 	input = parsInt(document.getElementById("guess").value);
// }
// function print(){
// 	if(Math.abs(randomNum-input) <= 5){
// 		document.getElementById("respond").innerHTML="Hot";
// 	}
// 	else{
// 		document.getElementById("respond").innerHTML="Cold";
// 	}
// }


var btn=document.getElementById('btn');
var p=document.getElementById('num');

var res=document.getElementById('respond');
var inp=document.getElementById('guess').value;

function f() {
	let no=Math.floor(Math.random()*20);
	p.textContent=no;
	var inp=document.getElementById('guess').value;
    if(Number(inp)-no<=5){
		res.textContent="Hot";
	}else{
		res.textContent="Cold";
	}
}
btn.addEventListener("click",f);