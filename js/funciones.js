
$(function(){
    $("#miformulario").validate({
        rules:{
            nom:{
                required:true,
            },
            a_paterno:{
                required:true, 
            },
            a_materno:{
                required:true, 
            },
            correo:{
                    required:true,
                    email:true,
                },
            
            fono:{
                required:true,
                number:true,
                minlength:9,
                maxlength:10,
            },
            
        },//Cierra el area de rules
        messages:{
            nom:{
                required:"Ingrese nombre del usuario:",
                minlength:"Caracteres insuficientes (3)",
            },
            a_paterno:{
                required:"Ingrese el apellido",
                minlength:"Caracteres insuficientes (3)",
            },
            a_materno:{
                required:"Ingrese el apellido",
                minlength:"Caracteres insuficientes (3)",
            },
            correo:{
                required:"Ingrese su correo electronico",
                email:"Formato de correo no valido",
            },
            
            fono:{
                required:"Ingrese numeros",
                minlength:"Cantidad de digitos insuficientes",
            }
        }
    })
    $(document).ready(function(){
        $("#enviar").click(function(){
            var n = document.getElementById("nom").value;
            var ap = document.getElementById("a_paterno").value;
            var am = document.getElementById("a_materno").value;
            var em=document.getElementById("correo").value;
            var fo=document.getElementById("fono").value;
            if(n == ""|| ap == ""|| am ==""||em ==""||fo == ""){
                alert("Debe completar todos los campos antes de enviar.")
            }
            else{
                alert(n+", Su formulario fue enviado correctamente.")
            }
        })
    })
    
    
})
