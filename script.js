function pokazOkno()
{
	var obrazek = document.getElementById("obrazek");
	obrazek.onclick = function()
	{
		alert("Kurs programowania w PHP5");
	}
}
function obrazekDuzy()
{
	document.getElementById("obrazek").src = "kurs_php_duzy.jpg";
}
function obrazekMaly()
{
	document.getElementById("obrazek").src = "kurs_php_maly.jpg";
}
function pokazOkno()
{
	var obrazek = document.getElementById("obrazek");
	obrazek.onclick = function()
	{
		alert("Kurs programowania w PHP5");
	}
}
window.onload = function()
{
	pokazOkno();
	/*let x = 10;
	let y = 30;
	alert(x+y);*/
	let x = prompt("Podaj hasło 1:");
	let y = prompt("Podaj hasło 2:");
	prompt(x +" " + y + "?");
	alert("Jebać PiS");
	let a = prompt("Podaj *****:");
	let b = prompt("Podaj ***:");
	a = parseInt(a);
	b = parseInt(b);
	prompt(a + b);
	alert("Jebać PiS");
}