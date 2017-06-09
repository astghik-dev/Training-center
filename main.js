

function Peaple (passport, name, surename, age, edu) {
	this.passport = passport;
	this.name = name;
	this.surename = surename;
	this.age = age;
}

Peaple.prototype.creatNewInstance = function () {
	var sPassport = document.getElementById("pass").value;
	var sName = document.getElementById("nm").value;
	var sSurename = document.getElementById("snm").value;
	var sAge = document.getElementById("ag").value;
	var sEdu = document.getElementById("edu").value;

	var newInstance = new Peaple(sPassport, sName, sSurename, sAge, sEdu);
}

var button = document.getElementById("btn");
button.onclick = creatNewInstance();

