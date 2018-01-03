var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function(event){

		event.preventDefault() // previne um comportamento padrão do Brouser


		var form = document.querySelector("#form-adiciona"); //ele pega o form do formulário para ser manipulado
		//Extraindo informações do paciente do form

		var paciente = obtemPacienteDoFormulario(form);

		 //Extraindo informações do paciente do form
		//var nome = form.nome.value;
		//var peso = form.peso.value;
		//var altura =  parseFloat(form.altura.value);
		//var gordura = parseFloat(form.gordura.value);

		var pacienteTr = montaTr(paciente);

		var erros = validaPaciente(paciente);

		
		if(erros.length > 0 ){
			exibeMensagensDeErro(erros); // validando os pacientes que são cadastrados, e mostra mensagem de erro usando span no html
			return;
		}


		//Adiciona o paciente na tabela
		var tabela = document.querySelector("#tabela-pacientes"); //vai pegar a tabela de pacientes no html

		tabela.appendChild(pacienteTr);// vai colocar dentro da tabela no html o conteudo que a gente fez no javascript

		form.reset();
		var mensagensErro = document.querySelector("#mensagens-erro"); //limpando as uls
		mensagensErro.innerHTML= ""; // innerHTML é uma propriedade e não uma função
	});
	function exibeMensagensDeErro(erros) {
		var ul = document.querySelector("#mensagens-erro"); //usando array para exibir varias mensagens de erro
			ul.innerHTML = "";//apagar a ul depois que ela foi exibida na tela e a pessoa tecla em adicionar outro paciente.

		erros.forEach(function(erro) {
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});	// você não precisa dizer para o for onde ele começa ou termina
	}


	function obtemPacienteDoFormulario(form){
		var paciente = {
			nome: form.nome.value,
			peso: form.peso.value,
			altura: form.altura.value,
			gordura: form.gordura.value,
			imc: calculaImc(form.peso.value, form.altura.value)
		}

		return paciente;
	}

	function montaTr(paciente){
		//cria um elemento no html no caso td e tr	
		var pacienteTr = document.createElement("tr");
		pacienteTr.classList.add("paciente");


		//esse código está comentado pois ele foi reduzido para outra função, deixei ele aqui como uma sugestão

		//cria um elemento no html no caso td e tr		
		//var nomeTd = document.createElement("td");
		//nomeTd.classList.add("info-nome");
		//nomeTd.textContent = paciente.nome;


		//var nomeTd = montaTd(paciente.nome , "info-nome");
		//var pesoTd = montaTd(paciente.peso, "info-peso");
		//var alturaTd = montaTd(paciente.altura, "info-altura");
		//var gorduraTd = montaTd(paciente.gordura, "info-gordura");
		//var imcTd = montaTd(paciente.imc, "info-imc");


		//nomeTd.textContent = paciente.nome;
		//pesoTd.textContent = paciente.peso;
		//alturaTd.textContent = paciente.altura;
		//gorduraTd.textContent = paciente.gordura;
		//imcTd.textContent = paciente.imc;


		pacienteTr.appendChild(montaTd(paciente.nome , "info-nome"));//coloque como filho, adicionar o tr como pai e as td como filho
		pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
		pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
		pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
		pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
		//Adicionando paciente na tabela
		
		return pacienteTr;
	}

	function montaTd(dado,classe){
		var td = document.createElement("td");
		td.textContent = dado;
		td.classList.add(classe);

		return td;
	}

//função que valida o paciente, peso, altura, a ausencia de caracteres.	
function validaPaciente(paciente) {

    var erros = [];

    if ( paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if ( paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if ( paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if ( paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}