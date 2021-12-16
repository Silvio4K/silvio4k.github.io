function alertaEnviar() {
    var x;
    var r = confirm("Enviado");
    if (r == true) {
        x = "você já Enviou!";
    }

    document.getElementById("mostre-envio").innerHTML = x;
}

function alertaCencelar() {
    var x;
    var r = confirm("Solicitação de Envio Cancelado");

    document.getElementById("mostre-cancelado").innerHTML = x;
}