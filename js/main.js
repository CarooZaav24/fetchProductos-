const main = document.getElementsByTagName("main").item(0);
const modalContainer = document.getElementById("modales-container");
const URLMain = "https://fakestoreapi.com/products/";

// function getData(){
//     fetch(URLMain)
//     .then((response) => {
//         console.log(response);
//         response.json().then((res) => {
//             console.log(res.length);
//             console.log(res[0].title);
//         });
//     })

//     .catch((err) => {
//         main.insertAdjacentHTML("beforeend",
//                `<div class="alert alert-danger" role="alert">
//         ${err.message}
//         </div>` );
//     });
// } //getData
////////////////////////////////////////////////////////////////////////////////////

function getData() {
  fetch(URLMain)
    .then((response) => response.json())
    .then((res) => {
      res.forEach((producto) => {
//Aquí está la card del producto
        main.insertAdjacentHTML("beforeend", `
          <div class="card m-2" style="width: 18rem;">
            <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
            <div class="card-body">
              <h5 class="card-title">${producto.title}</h5>
              <p class="card-text">$${producto.price}</p>
              <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${producto.id}">
                Ver más
              </a>
            </div>
          </div>`
        );

// Aquí está el modal del producto
        modalContainer.insertAdjacentHTML("beforeend", `
          <div class="modal fade" id="modal-${producto.id}" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">${producto.title}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body">
                  <p>${producto.description}</p>
                  <p><strong>Precio:</strong> $${producto.price}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        `);
      });
    })
    .catch((err) => {
      main.insertAdjacentHTML("beforeend", `
        <div class="alert alert-danger" role="alert">
          ${err.message}
        </div>
      `);
    });
}

getData();

