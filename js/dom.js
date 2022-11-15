// Para ver el paso a paso ir a readMe.md adjunto

const carrito = [];

const contenedor = document.querySelector("div.contenedor");

const activarBotonesAdd = () => {
	const botonesAdd = document.querySelectorAll(
		".button.button-outline.button-add"
	);
	botonesAdd.forEach((btn) => {
		btn.addEventListener("click", () => {
			agregarAlCarrito(btn.id);
		});
	});
};

const activarBotonesRemove = () => {
	const botonesRemove = document.querySelectorAll(
		".button.button-outline.button-remove"
	);
	botonesRemove.forEach((btn) => {
		btn.addEventListener("click", () => {
			restarCarrito(btn.id);
		});
	});
};

const cargarLosProductos = () => {
	almohadones.forEach((almohadon) => {
		//console.table(producto)
		contenedor.innerHTML += retornoCard(almohadon);
	});
	activarBotonesAdd();
	activarBotonesRemove();
};

cargarLosProductos();

const precioTotal = () => {
	let precioTotalCarrito = 0;
	carrito.forEach((almohadon) => {
		precioTotalCarrito += almohadon.precio;
	});
	console.log(`El precio total del carrito es de ${precioTotalCarrito}`);
};

const agregarAlCarrito = (almohadon) => {
	let resultado = almohadones.find((prod) => prod.nombre === almohadon);
	if (resultado !== undefined) {
		carrito.push(resultado);
		precioTotal();
		guardarCarrito();
		/* console.clear()*/
		console.table(carrito);
	}
};

const restarCarrito = (e) => {
	// debugger
	for (let i = 0; i < carrito.length; i++) {
		if (carrito[i].nombre == e) {
			carrito.splice(i, 1);
			console.table(carrito);
			precioTotal();
			guardarCarrito();
			break;
		}
	}
};

const guardarCarrito = () =>
	carrito.length > 0 &&
	localStorage.setItem("carrito", JSON.stringify(carrito));

const recuperarCarrito = () => {
	if (localStorage.getItem("carrito")) {
		let carritoDeLocalS = JSON.parse(localStorage.getItem("carrito"));
		carritoDeLocalS.forEach((producto) => carrito.push(producto));
	} else {
		console.warn("No se encontró un carrito previamente guardado.");
	}
};

recuperarCarrito();
