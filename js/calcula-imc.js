var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //querySelectorAll seleciona todos as classes com paciente

for (var i = 0; i < pacientes.length; i++) { // length retorna o tamanho do array

    var paciente = pacientes[i]; // o i vai mostrar a quantidade de pacientes do for

    var tdPeso = paciente.querySelector(".info-peso"); //querySelector seleciona o elemento sento classe ou id
    var peso = tdPeso.textContent; // textContent troca o conteudo da celula

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso); // true ou false
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) { // ! operador de negação // if de valor invalido
        console.log("Peso inválido!"); // aparece no console do navegador
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido"); // troca o estilo da classe no css
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido"); // não colocamos o . na classe aqui, no caso ele só quer o nome
        //paciente.style.backgroundColor = "lightcoral";  - modifica o estilo direto na pagina html
    }

  if ( alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}


 function calculaImc(peso, altura){
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2); // toFixed mostra a quantidade de casas decimais
    }

function validaPeso(peso){
		if(peso > 0  && peso <= 1000){
			return true;
		}else{
			return false;
		}

	}
    
function validaAltura(altura){
		if(altura > 0 && altura <=3.0){
			return true;	
		}else{
			return false;
		}
}    

//console.log(pacientes);


//titulo.addEventListener("click", function (){

//	console.log("olha só posso chamar uma função anonima");
//});// adiciona um escutador de evento




//function mostraMensagem(){ //função

	//console.log("Olá eu fui clicado!");
//}