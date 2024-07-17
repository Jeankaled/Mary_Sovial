const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};

//form 
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const age = document.getElementById('age');

  if (fullName.value.length < 3) {
    alert('Full name must be at least 3 characters long.');
    return;
  }

  if (!/^[a-zA-Z\s]+$/.test(fullName.value)) {
    alert('Full name can only contain letters and spaces.');
    return;
  }

  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!/^\d{10}$/.test(phone.value)) {
    alert('Phone number must be 10 digits long.');
    return;
  }

  if (age.value < 18 || age.value > 100) {
    alert('Age must be between 18 and 100.');
    return;
  }

  alert('Form submitted successfully!');
});

const contraseña = document.getElementById("contraseña"),
	  icon = document.querySelector(".bx");

icon.addEventListener("click", e => {
	if(contraseña.type =="contraseña"){
		contraseña.type = "text";
	}else{
		contraseña-type =="contraseña"
	}
})
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.classList.toggle('bx-show');
    this.classList.toggle('bx-hide');
});
// Obtener referencias a las imágenes y botones del carrusel
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

// Evento para cambiar la imagen hacia la izquierda
prevButton.addEventListener('click', function() {
  // Obtener la imagen actualmente activa
  const activeImage = document.querySelector('.carousel-item.active img');
  
  // Determinar qué imagen se muestra actualmente y cambiarla
  if (activeImage === image1) {
    image3.classList.add('active');
    image1.classList.remove('active');
  } else if (activeImage === image2) {
    image1.classList.add('active');
    image2.classList.remove('active');
  } else if (activeImage === image3) {
    image2.classList.add('active');
    image3.classList.remove('active');
  }
});

// Evento para cambiar la imagen hacia la derecha
nextButton.addEventListener('click', function() {
  // Obtener la imagen actualmente activa
  const activeImage = document.querySelector('.carousel-item.active img');
  
  // Determinar qué imagen se muestra actualmente y cambiarla
  if (activeImage === image1) {
    image2.classList.add('active');
    image1.classList.remove('active');
  } else if (activeImage === image2) {
    image3.classList.add('active');
    image2.classList.remove('active');
  } else if (activeImage === image3) {
    image1.classList.add('active');
    image3.classList.remove('active');
  }
});
