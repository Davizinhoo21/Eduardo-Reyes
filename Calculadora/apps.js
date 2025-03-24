let valor1
let operacion
function uno(){
valor=document.getElementById('pantalla').value
if (valor===""){
    valor=0
}
document.getElementById('pantalla').value=10*(parseInt(valor))+1

}

function dos(){
    valor=document.getElementById('pantalla').value
    if (valor===""){
        valor=0
    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+2
    
    }
    function tres(){
        valor=document.getElementById('pantalla').value
        if (valor===""){
            valor=0
        }
        document.getElementById('pantalla').value=10*(parseInt(valor))+3
        
        }
        function cuatro(){
            valor=document.getElementById('pantalla').value
            if (valor===""){
                valor=0
            }
            document.getElementById('pantalla').value=10*(parseInt(valor))+4
            
            }
            function cinco(){
                valor=document.getElementById('pantalla').value
                if (valor===""){
                    valor=0
                }
                document.getElementById('pantalla').value=10*(parseInt(valor))+5
                
                }
                function seis(){
                    valor=document.getElementById('pantalla').value
                    if (valor===""){
                        valor=0
                    }
                    document.getElementById('pantalla').value=10*(parseInt(valor))+6
                    
                    }
                    function siete(){
                        valor=document.getElementById('pantalla').value
                        if (valor===""){
                            valor=0
                        }
                        document.getElementById('pantalla').value=10*(parseInt(valor))+7
                        
                        }
                        function ocho(){
                            valor=document.getElementById('pantalla').value
                            if (valor===""){
                                valor=0
                            }
                            document.getElementById('pantalla').value=10*(parseInt(valor))+8
                            
                            }
                            function nueve(){
                                valor=document.getElementById('pantalla').value
                                if (valor===""){
                                    valor=0
                                }
                                document.getElementById('pantalla').value=10*(parseInt(valor))+9
                                
                                }
                                function cero(){
                                    valor=document.getElementById('pantalla').value
                                    if (valor===""){
                                        valor=0
                                    }
                                    document.getElementById('pantalla').value=10*(parseInt(valor))+0
                                    
                                    }
                                    function suma(){
valor1=document.getElementById('pantalla').value
operacion="suma"
document.getElementById('pantalla').value=0

                                    }
                                    function resta(){
                                        valor1=document.getElementById('pantalla').value
                                        operacion="resta"
                                      document.getElementById('pantalla').value=0
                                   }    
                                   function multiplicacion(){
                                    valor1=document.getElementById('pantalla').value
                                    operacion="multiplicacion"
                                    document.getElementById('pantalla').value=0
                                   }
                                   function division(){
                                    valor1=document.getElementById('pantalla').value
                                    operacion="division"
                                    document.getElementById('pantalla').value=0
                                   }
     function igual(){
if (operacion==='suma'){
    valor2=document.getElementById('pantalla').value
    let total=parseInt(valor1)+parseInt(valor2)
    document.getElementById('pantalla').value=total
    valor1=document.getElementById('pantalla').value
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Desea Hacer otra suma?",
        text: "Usted trabajo en la Suma!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sii!",
        cancelButtonText: "No!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
}
 if (operacion === 'resta') {
    valor2 = document.getElementById('pantalla').value;
    let total = parseInt(valor1) - parseInt(valor2);
    document.getElementById('pantalla').value = total;
    valor1 = document.getElementById('pantalla').value;
    Swal.fire({
        title: "Bien hecho!",
        text: "Usted trabajo con la resta",
        imageUrl: "https://i.ytimg.com/vi/mRbfMJxratU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFlwaSr3uHwL1J5OBwKSeoI_CiCQ",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
}

if (operacion=== 'multiplicacion'){
    valor2=document.getElementById('pantalla').value;
    let total= parseInt(valor1) * parseInt(valor2);
    document.getElementById('pantalla').value= total;
    valor1=document.getElementById('pantalla').value;
    Swal.fire({
        title: "Su mulplicicación ha sido realizada exitosamente!",
        icon: "success",
        draggable: true
      });
}
if (operacion=== 'division'){
    valor2=document.getElementById('pantalla').value;
    let total= parseInt(valor1) / parseInt(valor2);
    document.getElementById('pantalla').value= total;
    valor1=document.getElementById('pantalla').value
    Swal.fire({
        title: "La division se cierra !",
        html: "en <b></b> milisegundos.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent =`${Swal.getTimerLeft()}`;
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
}





     }