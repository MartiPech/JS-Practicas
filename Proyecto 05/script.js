

document.getElementById("formulario").addEventListener('submit', (event)=>{
    event.preventDefault()
    //VALIDACION DEL NOMBRE
    const nombreForm = document.getElementById("name");
    const errorNombre = document.getElementById("nameError");
    if(nombreForm.value.trim() ==="" ){
        errorNombre.textContent = "Por favor introducí tu nombre";
        errorNombre.classList.add('error-message');
    }else{
        errorNombre.textContent = "";
        errorNombre.classList.remove('error-message');
    };

    //VALIDACION DEL EMAIL
    const emailForm = document.getElementById("email");
    const errorEmail = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!emailPattern.test(emailForm.value)){
        errorEmail.textContent = "Por favor introducí un email correcto ";
        errorEmail.classList.add('error-message');
    }else{
        errorEmail.textContent = "";
        errorEmail.classList.remove('error-message');
    };

    //VALIDACION DE LA CONTRASEÑA
    const contrasena = document.getElementById("password");
    const errorContrasena = document.getElementById("passwordError")
    const contrasenaPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    
    if(!contrasenaPattern.test(contrasena.value)){
        errorContrasena.textContent = "Por favor introducí una contraseña valida ";
        errorContrasena.classList.add('error-message');
        
    }else{
        errorContrasena.textContent = "";
        errorContrasena.classList.remove('error-message');
    }
    // SI TODOS LOS CAMPOS SON VALIDOS , ENVIAR FORMULARIO
    if(!errorNombre.textContent && !errorEmail.textContent && !errorContrasena.textContent){
        alert('Formulario se ha enviado con exito');
        document.getElementById("formulario").reset(); 
    };
});