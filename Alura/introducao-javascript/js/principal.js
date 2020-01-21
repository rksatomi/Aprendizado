var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = validaPeso(paciente.peso);
var alturaEhValida = validaAltura(paciente.altura);
var nomeEhValida = validaNome(paciente.nome);

/*if (!pesoEhValido) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (!alturaEhValida) {
    console.log("Altura inválida!");
    alturaEhValida = ;
    tdImc.textContent = "Altura inválida";
}*/

if (pesoEhValido && alturaEhValida && nomeEhValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
}

function validaPeso(peso){
	if (peso >0 && peso<1000){
    	return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if (altura > 0 && altura < 3.00) {
		return true;
	}else{
		return false;
	}
}

function validaNome(nome){
	if (nome != "") {
		return true;
	}else{
		return false;
	}
}

function validaGordura(gordura){
	if (gordura > 0) {
		return true;
	}else{
		return false;
	}
}



function calculaImc(peso, altura){
	var imc=0;
	imc=peso/(altura*altura);
	return imc;

}





