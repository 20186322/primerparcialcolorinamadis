window.onload = crearTabla();

  function color(event) {
   if (event.value.toLowerCase() == "red") {
      event.classList.add("red");
      fun("red");
    }else if (event.value.toLowerCase() == "green") {
      event.classList.add("green");
      fun("green");
    } else if (event.value.toLowerCase() == "blue") {
      event.classList.add("blue");
      fun("blue");
    } else {
  if(event.className.toLowerCase() == "red"){
        event.classList.remove('red');
         fun('red');
      }
      if(event.className.toLowerCase() == "green"){   
        event.classList.remove('green');
        fun('green');
      }
      if(event.className.toLowerCase() == "blue"){  
        event.classList.remove('blue');
        fun('blue');
      }}}
  
  function crearTabla() {
  
    var body = document.getElementsByTagName("body")[0];
    var Contadored = document.createElement("div");
    Contadored.setAttribute("id", "cantidad-red");
    var Contadogreen = document.createElement("div");
    Contadogreen.setAttribute("id", "cantidad-green");
    var Contadoblue = document.createElement("div");
    Contadoblue.setAttribute("id", "cantidad-blue");
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    for (var i=0; i<5; i++) {
       var hilera = document.createElement("tr");
        for (var j=0; j<3; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createElement("input");
            textoCelda.setAttribute("type", "text");
            textoCelda.setAttribute("name", "colors1");
            textoCelda.setAttribute("id", "colors1");
            textoCelda.addEventListener("keyup",  function(){
              color (this);
              guardardatos();
              graficar();
            });
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);}
  
    tabla.appendChild(Contadoblue);
    tabla.appendChild(Contadogreen);
    tabla.appendChild(Contadored);
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "1");
}

function fun(color) {
    var divs = document.getElementsByClassName(color);
    var numDivs = divs.length;
    var contadorNaranja = 0;
    for (var i = 0; i < numDivs; i++) {
      if (divs[i].className == color) contadorNaranja++;
    }
    var puntos1 = contadorNaranja;
    document.getElementById("cantidad" + "-" + color).innerHTML = puntos1;
  }

  red1= document.getElementsById('cantidad-red').textContent;
 green1= document.getElementsById('cantidad-green').textContent;
  blue1= document.getElementsById('cantidad-blue').textContent;
  var canvas = document.getElementById('myChart');

  const dataGeneral= {
      labels: ['blue1', 'red1', 'green1'],
      datasets: [{
          label: 'Colores',
          data: [blue1, red1, green1],
          backgroungColor:[
            'rgba(13, 110, 253)',
            'rgba(220, 53, 69)',
              'rgba(25, 135, 84)'  
          ]}]};

          const config = {
              type: 'doughnut',
              data: dataGeneral
          };

          const myChart = new Chart(
              document.getElementById('myChart'),
              config
          );

          function graficar(){
              red= document.getElementById('cantidad-red').textContent;
              blue=document.getElementById('cantidad-blue').textContent;
              green=document.getElementById('cantidad-green').textContent;
              dataset= [blue, red, green];
              myChart.data.datasets[0].data=dataset;
              myChart.update();
          }

          function guardardatos(){
              inputs=document.getElementsByName('colors1');
              var data= [];
            for(x= 0; x< inputs.length; x++){
                obj= {};
                obj.input= inputs[x].value;
                data.push(obj);
            }
            p= JSON.stringify(data);
            localStorage.setItem('parcial', p);
          }