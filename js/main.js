const products = [
    // Selecciones
    {
        id: "camiseta-alemania",
        titulo: "Camiseta Alemania",
        imagen: "./assets/selecciones/alemania.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 50
    },
    {
        id: "camiseta-españa",
        titulo: "Camiseta España",
        imagen: "./assets/selecciones/españa.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 50
    },
    {
        id: "camiseta-italia",
        titulo: "Camiseta Italia",
        imagen: "./assets/selecciones/italia.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 50
    },
    {
        id: "camiseta-francia",
        titulo: "Camiseta Francia",
        imagen: "./assets/selecciones/francia.png",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 50
    },
    {
        id: "camiseta-inglaterra",
        titulo: "Camiseta Inglaterra",
        imagen: "./assets/selecciones/inglaterra.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 50
    },
    {
        id: "camiseta-argentina",
        titulo: "Camiseta Argentina",
        imagen: "./assets/selecciones/argentinacamiseta.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 50
    },
    {
        id: "camiseta-colombia",
        titulo: "Camiseta Colombia",
        imagen: "./assets/selecciones/colombiasele.png",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 50
    },
    {
        id: "camiseta-brasil",
        titulo: "Camiseta Brasil",
        imagen: "./assets/selecciones/brasilsele.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 50
    },
    {
        id: "camiseta-uruguay",
        titulo: "Camiseta Uruguay",
        imagen: "./assets/selecciones/uruguay.png",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 50
    },
    {
        id: "camiseta-chile",
        titulo: "Camiseta Chile",
        imagen: "./assets/selecciones/chile.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 50
    },
    // Clubes
    {
        id: "camiseta-realmadrid",
        titulo: "Camiseta Real Madrid",
        imagen: "./assets/clubes/realmadrid.jpg",
        categoria: {
            nombre: "Clubes",
            id: "clubes"
        },
        precio: 50
    },
    {
        id: "camiseta-barcelona",
        titulo: "Camiseta Barcelona",
        imagen: "./assets/clubes/barcelona.jpg",
        categoria: {
            nombre: "Clubes",
            id: "clubes"
        },
        precio: 50
    },
    {
        id: "camiseta-city",
        titulo: "Camiseta Manchester City",
        imagen: "./assets/clubes/city.jpg",
        categoria: {
            nombre: "Clubes",
            id: "clubes"
        },
        precio: 50
    },
    {
        id: "camiseta-liverpool",
        titulo: "Camiseta Liverpool",
        imagen: "./assets/clubes/liverpool.jpg",
        categoria: {
            nombre: "Clubes",
            id: "clubes"
        },
        precio: 50
    },
    {
        id: "camiseta-chelsea",
        titulo: "Camiseta Chelsea",
        imagen: "./assets/clubes/chelsea.jpg",
        categoria: {
            nombre: "Clubes",
            id: "clubes"
        },
        precio: 50
    },
    {
        id: "camiseta-juventus",
        titulo: "Camiseta Juventus",
        imagen: "./assets/clubes/juventus.jpg",
        categoria: {
            nombre: "Clubes",
            id: "clubes"
        },
        precio: 50
    },
    {
        id: "camiseta-bayern",
        titulo: "Camiseta Bayern",
        imagen: "./assets/clubes/bayern.jpg",
        categoria: {
            nombre: "Clubes",
            id: "clubes"
        },
        precio: 50
    },
    {
        id: "camiseta-psg",
        titulo: "Camiseta PSG",
        imagen: "./assets/clubes/psg.jpg",
        categoria: {
            nombre: "Clubes",
            id: "clubes"
        },
        precio: 50
    },
    // Retro
    {
        id: "camiseta-retro-realmadrid",
        titulo: "Camiseta Real Madrid Retro",
        imagen: "./assets/retro/retrorealmadrid.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 80
    },
    {
        id: "camiseta-retro-barcelona",
        titulo: "Camiseta Barcelona Retro",
        imagen: "./assets/retro/retrobarcelona.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 80
    },
    {
        id: "camiseta-retro-colombia",
        titulo: "Camiseta Colombia Retro",
        imagen: "./assets/retro/retrocolombia.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 80
    },
    {
        id: "camiseta-retro-argentina",
        titulo: "Camiseta Argentina Retro",
        imagen: "./assets/retro/retroargentina.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 80
    },
    {
        id: "camiseta-retro-brasil",
        titulo: "Camiseta Brasil Retro",
        imagen: "./assets/retro/retrobrasil.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 80
    },
    {
        id: "camiseta-retro-alemania",
        titulo: "Camiseta Alemania Retro",
        imagen: "./assets/retro/retroalemania.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 80
    },
    {
        id: "camiseta-retro-espana",
        titulo: "Camiseta España Retro",
        imagen: "./assets/retro/retroespaña.jpeg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 80
    },
    {
        id: "camiseta-retro-francia",
        titulo: "Camiseta Francia Retro",
        imagen: "./assets/retro/retrofrancia.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 80
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const principal = document.querySelector("#principal");
let botonesAñadir = document.querySelectorAll(".producto-añadir");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="productoimagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="productotitulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-añadir" id="${producto.id}">Añadir</button>
            </div>
        `;
        contenedorProductos.append(div);
    });

    actualizarBotonesAñadir();
}

cargarProductos(products);

botonesCategorias.forEach(boton =>{

    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
    
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "inicio"){
            const productoCategoria = products.find(producto => producto.categoria.id === e.currentTarget.id);
            principal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            principal.innerText = "Todos los productos";
            cargarProductos(products);
        }
        
    });
});

function actualizarBotonesAñadir() {
    botonesAñadir = document.querySelectorAll(".producto-añadir"); 

    botonesAñadir.forEach(boton =>{
        boton.addEventListener("click", añadirAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function añadirAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAñadido = products.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAñadido.cantidad = 1;
        productosEnCarrito.push(productoAñadido);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
