// let color = ["Red","Blue","Green","Yellow","Aqua","Orange","Olive","Gray"];
let arr = ["Blood is Thicker then Water","Easy Come,Easy Go","Practice Makes Perfect","First Things First","Haste Makes Waste","Old is Gold","Look Before You Leap","Actions Speak Louder Than Words"];

let body = document.querySelector("body");
let button1 = document.querySelector("#btn");
let content = document.querySelector("#content")

button1.addEventListener("click",function(){
	// body.style.backgroundColor = color[parseInt(Math.random()*color.length)];
	content.innerHTML = arr[parseInt(Math.random()*arr.length)];	
})
