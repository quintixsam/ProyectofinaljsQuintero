let products = [];

fetch("./js/products.json")
    .then(response => response.json())
    .then(data => {
        products = data;
        cargarProductos(products)
    });



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

botonesCategorias.forEach(boton =>{

    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
    
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "inicio"){
            const productoCategoria = products.find(producto => producto.categoria.id === e.currentTarget.id);
            
            principal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = products.filter(producto => producto.categoria.id === e.currentTarget.id);
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

    Toastify({
        text: "Añadido Al carrito",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true, 
        style: {
        background: "linear-gradient(to right, #10192e, #202f52)",
        borderRadius: "2rem",
        textTransform: "uppercase",
        fontSize: ".75rem"
        },
        offset: {
            x: "1.5rem", 
            y: "1.5rem" 
        },
        onClick: function(){} // Callback after click
    }).showToast();

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
