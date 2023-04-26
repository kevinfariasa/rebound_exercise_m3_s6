// Obtiene todos los checkbox
const checkboxes = document.querySelectorAll("input[type=checkbox]");

// Obtiene el elemento donde se mostrará el total
const totalElement = document.getElementById("total");

// Inicializa el total en cero, crea un array vacío para agregarle objetos y un expresion regular
let total = 0;
let items = [];
const reg = /[$,.]/g;

// Agrega el evento click a cada checkbox
document.querySelectorAll("li.list-group-item").forEach((li) => {
  const checkbox = li.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("click", function () {
    // Si el checkbox está seleccionado, suma el valor al total; de lo contrario, se le resta
    if (checkbox.checked) {
      const product = li.querySelector("label").textContent;
      const price = li.querySelector("p").textContent;
      const item = { product, price };
      items.push(item); // Se van agregando tanto precio como producto al array      
      total = total + parseInt(price.replace(reg, ""));
    } else {
      for (let i = 0; i < items.length; i++) {
        if (items[i].product == li.querySelector("label").textContent) {
          items.splice(i, 1);
          total = total - parseInt(li.querySelector("p").textContent.replace(reg, ""));
        }
      }
    }
    const ul = document.getElementById("details"); // Se define la etiqueta para la lista
    if (ul.hasChildNodes()) { // Si la etiqueta tiene objetos seleccionados se eliminan todos para evitar duplicidad de elementos
      ul.innerHTML = "" 
    }     
    items.forEach( x => { // x representa la posición del objeto del array
      const li = document.createElement ("li")
      li.innerHTML = x.product + " " + x.price
      ul.appendChild(li) // a cada ul le agrego un li     
    }); 
  
  totalElement.innerText = "Total: $" + total; // Actualiza el contenido del elemento donde se muestra el total
  });
});
