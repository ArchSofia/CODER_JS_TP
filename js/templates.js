//TEMPLATES PARA ARMAR ESTRUCTURAS HTML CON JAVASCRIPT

const retornoCard = ({ imagen, nombre, precio }) => {
	return ` <div class="card">
                  <div class="card-image"> <img src="images/${imagen}.jpeg" alt=""></div>
                  <div class="card-name">${nombre}</div>
                  <div class="card-price">$${precio}</div>
                  <div class="card-button">
                      <button class="button button-outline button-add" id="${nombre}" title="Pulsa para agregar al carrito">+</button>
                      <button class="button button-outline button-remove" id="${nombre}" title="Pulsa para quitar del carrito">-</button>
                  </div>
              </div> `;
};
