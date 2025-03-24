function calcular(){
    let modo;
    let virtual=''
    let presencial=''
    let nombre=document.getElementById('nombre').value;
    if(!nombre){
        mensaje("nombre")
    }
    let materia=document.getElementById('materia').value;
    if(!materia){
        mensaje("materia")
    }
     virtual=document.querySelector('#virtual').checked;
     if(!nombre){
        mensaje("virtual")
    }
     presencial=document.querySelector('#presencial').checked;
    if(virtual && !presencial){
        mensaje("modalidad educativa")
    modo="virtual"
    
    }
    if (presencial){
        modo="presencial";
    }
    let nota1=document.getElementById('nota1').value
    if(!nota1){
        mensaje("nota1")
    }
    let nota2=document.getElementById('nota2').value
    if(!nota2){
        mensaje("nota2")
    }
    let nota3=document.getElementById('nota3').value
    if(!nota3){
        mensaje("nota3")
    }
    let nota4=document.getElementById('nota4').value
    if(!nota4){
        mensaje("nota4")
    }
    document.getElementById('promedio').value=(parseInt(nota1)+parseInt (nota2)+parseInt(nota3)+parseInt(nota4))/4
    let mensaje
    if (promedio<=40){
       Resultado="Reprobado"

   }else if(promedio<70){
       Resultado="Debe mejorar"
 
   } else {
       Resultado="Aprobado"

   }
   document.getElementById('promedio').value=promedio + "  "+ resultado
   
    console.log(modo)

   }
    function mensaje(campo){
    Swal.fire({
        icon: "error",
        title: "Campos obligatorios",
        text: "el campo "+campo+"esta vacio",
   
      });
    }