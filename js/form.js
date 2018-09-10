function enviar() {

    var name, email, phone;

    name = document.getElementById('name');
    message = document.getElementById('message');
    phone = document.getElementById('phone');
    email = document.getElementById('email');
   
    if (name.value == "") {
        alert("Por favor, digite um nome válido");
    }
    if(phone.value.length > 11 || phone.value.length < 10){
        alert("Por favor, digite um telefone válido");
    }
    if (message.value == "") {
        alert("Por favor, digite uma mensagem válida");
    } 
    if (email.value == "") {
        alert("Por favor, digite um e-mail válido");
    } 
}

