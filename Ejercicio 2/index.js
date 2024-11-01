function calcularNota() {
      
          const nota1 = parseFloat(document.getElementById('nota1').value);
          const nota2 = parseFloat(document.getElementById('nota2').value);
          const nota3 = parseFloat(document.getElementById('nota3').value);
          const mensaje = document.getElementById('mensaje');
      
      
          if (nota1 < 0 || nota1 > 30 || nota2 < 0 || nota2 > 30 || nota3 < 0 || nota3 > 40) {
              alert('Por favor, ingrese valores válidos para las notas parciales.');
              return;
          }
      
          // Calcular la nota final como un porcentaje
          const notaFinal = nota1 + nota2 + nota3;
          let resultado;
      
      
          if (notaFinal < 60) {
              resultado = 'Reprobado';
          } else if (notaFinal < 80) {
              resultado = 'Bueno';
          } else if (notaFinal < 90) {
              resultado = 'Muy Bueno';
          } else {
              resultado = 'Sobresaliente';
          }
      
       
          mensaje.value = resultado;
      }
      
   
      function limpiarCampos() {
          document.getElementById('notasForm').reset();
      }
      