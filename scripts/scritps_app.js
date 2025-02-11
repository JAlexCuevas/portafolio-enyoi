const products = [
    {
        idProducts: 1,
        imgProducts: '.\images\sgym.png',
        titleProducts: 'SGym - Software par Control de Gimnasios',
        descriptionProducts: 'Es un Software diseñado para manejar la parte administrativa de un Gimnasio, controlando ingresos a caja, Control de acceso, Variedad de Reportes y Utilidades propias para este tipo de negocios',
        linkProducts: 'sgym.html'
    },
    {
        idProducts: 2,
        imgProducts: '.\images\ekardex.png',
        titleProducts: 'eKardes - Software par Control de Inventarios y Facturacioón',
        descriptionProducts: 'Es un Software diseñado para controlar el inventario y la facturacion.',
        linkProducts: 'ekardex.html'
    },
]

const services = [
    {
        idServices: 1,
        service1: "Mantenimiento preventivo y/o correctivo de Equipos de Computo",
        service2: "Instalacion de Software y/o Aplicativos",
        service3: "Instalación de Redes Alambradas e inalambricas"
    },
    {
        idServices: 2,
        service1: "Asesoria de Sistemas",
        service2: "Capacitaciones",
        service3: "Desarrollo de Software a Medida"
    },
]

document.querySelectorAll('a[href^="#"]').forEach( anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


loadProducts()

function loadProducts() {
    products.forEach(products => createCardsProducts(products))
}

function createCardsProducts(products) {
    const cardProducts = document.createElement('div')
    cardProducts.classList.add('cards-products')

    const imgProducts = document.createElement('div')
    containerImg.classList.add('container-img-card')

    const imgCard = document.createElement('img')
    imgCard.src = products.imgProducts
    imgCard.alt = products.titleProducts

    const containerDescription = document.createElement('div')
    containerDescription.classList.add('container-description-card')

    const titleCard = document.createElement('h3')
    titleCard.textContent = products.titleProducts

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = products.descriptionProducts

    const goToProducts = document.createElement('a')
    goToProducts.href = products.linkProducts
    goToProducts.setAttribute('target', '_blank')
    goToProducts.textContent = 'ir a Productos'

    cardProducts.appendChild(containerImg)
    cardProducts.appendChild(containerDescription)

    containerImg.appendChild(imgCard)
    containerDescription.appendChild(titleCard)
    containerDescription.appendChild(descriptionCard)
    containerDescription.appendChild(goToProducts)

    document.querySelector('.container-cards').appendChild(cardProducts)
        
}