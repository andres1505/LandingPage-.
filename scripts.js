// funcion que captura datos del usuario
function captura(){
    var nombreusuario = document.getElementById("nombreapellido").value;    
    var correousuario = document.getElementById("correoelectronico").value;
    var telusuario = document.getElementById("telefono").value;
    console.log("El nombre del usuario es: "+nombreusuario+ ", su correo es: "+correousuario+" y su telefono: "+telusuario)
}