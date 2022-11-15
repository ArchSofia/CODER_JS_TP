// HOLA TUTOR! MI PROYECTO ES UN E-COMMERCE QUE VENDE ALMOHADONES. POR ESTO, EMPIEZO CREANDO UNA CLASE ALMOHADON:
class Almohadon {
	constructor(nombre, imagen, precio, descripcion) {
		this.nombre = nombre;
		this.imagen = imagen;
		this.precio = precio;
		this.descripcion = descripcion;
	}
}

// LUEGO, CREO UN ARRAY "DEPÓSITO" DONDE VOY A GUARDANDO LOS ALMOHADONES QUE INSTANCIA EL VENDEDOR POR MEDIO DEL PROMPT:
const deposito = [];

// ACÁ INSTANCIE PRODUCTOS PARA AGREGAR AL ARRAY DEPÓSITO
let almohadon1 = new Almohadon(
	"Almohadon Pestana",
	"1",
	3700,
	"Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | "
);
let almohadon2 = new Almohadon(
	"Almohadon Lisboa",
	"2",
	3700,
	"Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | "
);
let almohadon3 = new Almohadon(
	"Almohadon Algarve",
	"3",
	3500,
	"Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | "
);
let almohadon4 = new Almohadon(
	"Almohadon Sintra",
	"4",
	3800,
	"Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | "
);
let almohadon5 = new Almohadon(
	"Almohadon Alcantra",
	"5",
	3900,
	"Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | "
);
let almohadon6 = new Almohadon(
	"Almohadon Dublin",
	"6",
	4000,
	"Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | "
);

// Y CREE UNA FUNCIÓN PARA AGREGARLOS AL ARRAY:
function cargarProductosInstanciados() {
	deposito.push(
		almohadon1,
		almohadon2,
		almohadon3,
		almohadon4,
		almohadon5,
		almohadon6
	);
	console.table(deposito);
}

cargarProductosInstanciados();
Swal.fire({
	title: "¿Desea cargar nuevos artículos a la página?",
	showDenyButton: true,
	showCancelButton: true,
	confirmButtonText: "Sí",
	denyButtonText: `No`,
}).then((result) => {
	/* Read more about isConfirmed, isDenied below */
	if (result.isConfirmed) {
		agregarAlmohadon();
	} else if (result.isDenied) {
		Swal.fire("Ira a la pagina principal", "", "info");
	}
});

// POR MEDIO DE LA FUNCIÓN agregarAlmohadón(), CAPTURO LAS ENTRADAS DEL VENDEDOR QUE INSTANCIA ALMOHADONES:
async function agregarAlmohadon() {
	const inputValue = "nombre del almohadon";

	const { value: nombreAlmohadon } = await Swal.fire({
		title: "Ingrese el nombre del almohadón nuevo",
		input: "text",
		inputLabel: "Nombre",
		inputValue: inputValue,
		showCancelButton: true,
		inputValidator: (value) => {
			if (!value) {
				return "Por favor escriba el nombre del almohadon";
			}
		},
	});

	const inputValue2 = "nombre de imagen almohadon";

	const { value: imgAlmohadon } = await Swal.fire({
		title: "Ingrese nombre de la imagen del almohadón nuevo",
		input: "text",
		inputLabel: "Nombre de imagen",
		inputValue: inputValue,
		showCancelButton: true,
		inputValidator: (value) => {
			if (!value) {
				return "Por favor escriba el nombre";
			}
		},
	});

	const inputValue3 = "Precio";

	const { value: Precio } = await Swal.fire({
		title: "Ingrese precio del almohadón nuevo",
		input: "text",
		inputLabel: "precio",
		inputValue: inputValue,
		showCancelButton: true,
		inputValidator: (value) => {
			if (!value) {
				return "Por favor escriba el precio";
			}
		},
	});

	const inputValue4 = "descripcion";

	const { value: descripcion } = await Swal.fire({
		title: "Ingrese descripcion del almohadón nuevo",
		input: "text",
		inputLabel: "descripcion almohadon",
		inputValue: inputValue,
		showCancelButton: true,
		inputValidator: (value) => {
			if (!value) {
				return "Por favor escriba descripcion";
			}
		},
	});

	let almohadonNuevo = new Almohadon(
		nombreAlmohadon,
		imgAlmohadon,
		Precio,
		descripcion
	);

	console.log(almohadonNuevo);
	deposito.push(almohadonNuevo);
	console.table(deposito);

	if (imgAlmohadon && nombreAlmohadon && Precio && descripcion) {
		Swal.fire(`¡Genial! has ingresado un nuevo producto a tu página: 
		\n Nombre del almohadon: ${nombreAlmohadon}
		\n Nombre de imagen: ${imgAlmohadon}
		\n Precio: ${Precio}
		\n descripcion: ${descripcion}`);
	}

	Swal.fire({
		title: "¿Desea cargar otro artículo a la página?",
		showDenyButton: true,
		showCancelButton: true,
		confirmButtonText: "Sí",
		denyButtonText: `No`,
	}).then((result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {
			agregarAlmohadon();
		} else if (result.isDenied) {
			Swal.fire("Ira a la pagina principal", "", "info");
		}
	});
}
