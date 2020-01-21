var pacientes = document.querySelectorAll(".paciente");
var tabela =document.querySelector("#tabela-pacientes");

// tabela.addEventListener("click",function(){
// 	event.target.parentNode.classList.add("fadeOut");
// 	setTimeout(function(){
// 		event.target.parentNode.remove();
// 	},500);
// });

tabela.addEventListener("click", function(event) {
    event.target.parentNode.classList.add("fadeOut");

      setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

 //   event.target.parentNode.remove();
});


// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("click", function() {
//     	this.remove();
//     });
// });