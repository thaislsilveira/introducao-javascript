var pacientes = document.querySelectorAll(".paciente");


var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
	//event.target.remove(); // remove apenas o filho que foi clicado no caso td

	/*var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode; // parentNode remove o pai que foi clicado no caso tr
	*/

	
	

	event.target.parentNode.classList.add("fadeOut"); // ele faz com que a linha clicada suma devagar

	//executar algo precisa de uma função para segurar
		setTimeout(function(){
		event.target.parentNode.remove(); // resumindo tudo em uma linha 
	},500);
	

});

//função que remove o paciente
/*pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
}); */