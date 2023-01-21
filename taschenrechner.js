var zahlA = 0;
var zahlB = 0;
let addition = false;
let subtraktion = false;
let multiplikation = false;
let division = false;

function senden1()
{
	ziffer1 = document.getElementById("idEins").value;
	append(ziffer1);
	   
}

function senden2()
{
	ziffer2 = document.getElementById("idZwei").value;
	append(ziffer2);
	   
}

function senden3()
{
	ziffer3 = document.getElementById("idDrei").value;
	append(ziffer3);
	   
}

function senden4()
{
	ziffer4 = document.getElementById("idVier").value;
	append(ziffer4);
	   
}

function senden5()
{
	ziffer5 = document.getElementById("idFuenf").value;
	append(ziffer5);
	   
}

function senden6()
{
	ziffer6 = document.getElementById("idSechs").value;
	append(ziffer6);
	   
}

function senden7()
{
	ziffer7 = document.getElementById("idSieben").value;
	append(ziffer7);
	   
}

function senden8()
{
	ziffer8 = document.getElementById("idAcht").value;
	append(ziffer8);
	   
}

function senden9()
{
	ziffer9 = document.getElementById("idNeun").value;
	append(ziffer9);
	   
}

function senden0()
{
	ziffer0 = document.getElementById("idNull").value;
	append(ziffer0);
	   
}

function sendenPunkt()
{
	ziffer0 = document.getElementById("idPunkt").value;
	append(ziffer0);
	   
}

function append(ziffer)
{
	document.getElementById("idAusgabe").value += ziffer;
}


document.getElementById("idAddition").addEventListener
	("click", addieren);
	
function addieren()
{
	console.log("zahlA = " + zahlA);
	console.log("zahlB = " + zahlB);
	if(addition == true){
		zahlA = parseFloat(zahlA) + parseFloat(document.getElementById("idAusgabe").value);
	}else if(subtraktion == true){
		zahlA = parseFloat(zahlA) - parseFloat(document.getElementById("idAusgabe").value);
	}else if(multiplikation == true){
		zahlA = parseFloat(zahlA) * parseFloat(document.getElementById("idAusgabe").value);
	}else if(division == true){
		zahlA = parseFloat(zahlA) / parseFloat(document.getElementById("idAusgabe").value);
	}else{
		zahlA = document.getElementById("idAusgabe").value;
	}
	document.getElementById("idAusgabe").value = "";
	addition = true;
	subtraktion = false;
	multiplikation = false;
	division = false;
	console.log("zahlA = " + zahlA);
	console.log("zahlB = " + zahlB);
}

document.getElementById("idSubtraktion").addEventListener
	("click", subtrahieren);
	
function subtrahieren()
{
	console.log("zahlA = " + zahlA);
	console.log("zahlB = " + zahlB);
	if(subtraktion == true){
		zahlA = parseFloat(zahlA) - parseFloat(document.getElementById("idAusgabe").value);
	}else if(addition == true){
		zahlA = parseFloat(zahlA) + parseFloat(document.getElementById("idAusgabe").value);
	}else if(multiplikation == true){
		zahlA = parseFloat(zahlA) * parseFloat(document.getElementById("idAusgabe").value);
	}else if(division == true){
		zahlA = parseFloat(zahlA) / parseFloat(document.getElementById("idAusgabe").value);
	}else{
		zahlA = document.getElementById("idAusgabe").value;
	}
	document.getElementById("idAusgabe").value = "";
	subtraktion = true;
	addition = false;
	multiplikation = false;
	division = false;
	console.log("zahlA = " + zahlA);
	console.log("zahlB = " + zahlB);
}

document.getElementById("idMultiplikation").addEventListener
	("click", multiplizieren);
	
function multiplizieren()
{
	if(multiplikation == true){
		zahlA = parseFloat(zahlA) * parseFloat(document.getElementById("idAusgabe").value);
	}else if(addition == true){
		zahlA = parseFloat(zahlA) + parseFloat(document.getElementById("idAusgabe").value);
	}else if(subtraktion == true){
		zahlA = parseFloat(zahlA) - parseFloat(document.getElementById("idAusgabe").value);
	}else if(division == true){
		zahlA = parseFloat(zahlA) / parseFloat(document.getElementById("idAusgabe").value);
	}else {
		zahlA = document.getElementById("idAusgabe").value;
	}	document.getElementById("idAusgabe").value = "";
	multiplikation = true;
	addition = false;
	subtraktion = false;
	division = false;
}

document.getElementById("idDivision").addEventListener
	("click", dividieren);
	
function dividieren()
{
	if(division == true){
		zahlA = parseFloat(zahlA) / parseFloat(document.getElementById("idAusgabe").value);
	}else if(addition == true){
		zahlA = parseFloat(zahlA) + parseFloat(document.getElementById("idAusgabe").value);
	}else if(subtraktion == true){
		zahlA = parseFloat(zahlA) - parseFloat(document.getElementById("idAusgabe").value);
	}else if(multiplikation == true){
		zahlA = parseFloat(zahlA) * parseFloat(document.getElementById("idAusgabe").value);
	}else{
		zahlA = document.getElementById("idAusgabe").value;
	}	document.getElementById("idAusgabe").value = "";
	division = true;
	addition = false;
	subtraktion = false;
	multiplikation = false;
}

document.getElementById("idWurzel").addEventListener
	("click", wurzel);
	
function wurzel()
{
	zahlA = document.getElementById("idAusgabe").value;
	zahlA = Math.sqrt(zahlA);
	document.getElementById("idAusgabe").value = zahlA;
}
	

document.getElementById("idGleich").addEventListener
	("click", ergebnis);
	
function ergebnis()
{	
	console.log("zahlA = " + zahlA);
	console.log("zahlB = " + zahlB);
	let erg = "";
	zahlB = parseFloat(document.getElementById("idAusgabe").value);
	document.getElementById("idAusgabe").value = "";
	if(addition == true){
		erg = parseFloat(zahlA) + parseFloat(zahlB);
	}else if(subtraktion == true){
		erg = parseFloat(zahlA) - parseFloat(zahlB);
	}else if(multiplikation == true){
		erg = parseFloat(zahlA) * parseFloat(zahlB);
	}else if(division == true){
		erg = parseFloat(zahlA) / parseFloat(zahlB);
	}
	document.getElementById("idAusgabe").value = erg;
	addition = false;
	subtraktion = false;
	multiplikation = false;
	division = false;
	zahlA = 0;
	zahlB = 0;
	console.log("zahlA = " + zahlA);
	console.log("zahlB = " + zahlB);
}

document.getElementById("idClear").addEventListener
	("click", clear);
	
function clear()
{
	addition = false;
	subtraktion = false;
	multiplikation = false;
	division = false;
	document.getElementById("idAusgabe").value = "";
	zahlA = 0;
	zahlB = 0;
	console.log("zahlA = " + zahlA);
	console.log("zahlB = " + zahlB);
}

document.getElementById("idDelete").addEventListener
	("click", loeschen);
	
function loeschen()
{
	let ziffern = document.getElementById("idAusgabe").value;
	let ziffer_ = ziffern.substring(0, ziffern.length - 1);
	document.getElementById("idAusgabe").value = ziffer_;
}

	