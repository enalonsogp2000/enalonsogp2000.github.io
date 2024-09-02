$(document).ready(function() {
    // Array con los datos de las imágenes
    const galleryItems = [
        {
            title: 'Tequeño',
            image: '../assets/images/entrantes/Tequeño.jpg',
            price: '10 €',
            width: 1248,
            height: 770
        },
        {
            title: 'Nuggest de pollo',
            image: '../assets/images/entrantes/nugest-de-pollo.jpeg',
            price: '7 €',
            width: 300,
            height: 168
        },
        {
            title: 'Patatas con Bacon',
            image: '../assets/images/entrantes/bacon-sobre-las-patatas-fritas.jpg',
            price: '6.50 €',
            width: 1200,
            height: 797
        },
        {
            title: 'Croquetas de Jamon Serrano',
            image: '../assets/images/entrantes/croquetas-de-jamon-serrano.jpg',
            price: '8 €',
            width: 1440,
            height: 960
        },
        {
            title: 'Hamburguesa Completa',
            image: '../assets/images/hamburguesas-galeria/hamburguesa-completas.jpg',
            price: '10 €',
            width: 2122,
            height: 1415
        },
        {
            title: 'Hamburguesa Smash',
            image: '../assets/images/hamburguesas-galeria/Hamburguesas-smash.jpg',
            price: '12 €',
            width: 1200,
            height: 977
        },
        {
            title: 'Hamburguesa Vegana',
            image: '../assets/images/hamburguesas-galeria/hamburguesas-veganas-.jpg',
            price: ' 11.5o€',
            width: 1400,
            height: 1400
        },
        {
            title: 'Hamburguesa de pollo',
            image: '../assets/images/hamburguesas-galeria/Hamburguesa-de-pollo-picante.jpg',
            price: '13 €',
            width: 1200,
            height: 800
        },
        {
            title: 'Churros con Chocolate',
            image: '../assets/images/postres/churros-con-chocolate.jpg',
            price: '11 €',
            width: 750,
            height: 910
        },
        {
            title: 'Tarta Casera',
            image: '../assets/images/postres/tarta-casera.jpg',
            price: '12 €',
            width: 745,
            height: 479
        },
        {
            title: 'Brownie de chocolate',
            image: '../assets/images/postres/BROWNIE-HELADO-VAINILLA.jpg',
            price: '10 €',
            width: 2880,
            height: 2160
        },
        {
            title: 'Tarta de Manzana',
            image: '../assets/images/postres/tarta-manzana.jpg',
            price: '12 €',
            width: 1198,
            height: 800
        }
    ];

  
    // Función para crear y añadir tarjetas dinámicamente
    galleryItems.forEach(item => {
        $('#galleryBox').append(`
            <div class="menu_card">
                <div class="menu_image">
                    <img src="${item.image}" alt="${item.title}" title="${item.title}" width="${item.width}" height="${item.height}">
                </div>
                <div class="small_card">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <div class="menu_info">
                    <h2>${item.title}</h2>
                    <h3>${item.price}</h3>
                    <a href="#" class="menu_btn">Ordenar ahora</a>
                </div>
            </div>
        `);
    });
     // Efecto dinámico: Rotación 360 grados al hacer clic
     $('.menu_card .menu_image img').on('click', function() {
        $(this).css({
            transition: 'transform 1s',  // Duración de la transición
            transform: 'rotate(360deg)'  // Aplicar la rotación de 360 grados
        });

        // Después de la rotación, restablecer la imagen a su estado original
        setTimeout(() => {
            $(this).css('transform', 'rotate(0deg)');
        }, 1000); // Espera 1 segundo para restablecer la imagen
    });


    // Variables del enfoque
    var focusedImage = $('<img class="focused-image">');
    var closeFocused = $('<span class="close-focused">&times;</span>');
    
    // Añadir el botón de cierre y la imagen enfocada al cuerpo
    $('body').append(focusedImage).append(closeFocused);

    // Abrir el enfoque al hacer clic en una imagen
    $('.menu_card .menu_image img').on('click', function() {
        $('body').addClass('blur-background'); // Desenfocar el fondo
        focusedImage.attr('src', $(this).attr('src')).fadeIn(); // Mostrar la imagen enfocada
    });

    // Cerrar el enfoque al hacer clic en el botón de cierre
    closeFocused.on('click', function() {
        $('body').removeClass('blur-background'); // Quitar el desenfoque del fondo
        focusedImage.fadeOut(); // Ocultar la imagen enfocada
    });

    // Cerrar el enfoque al hacer clic fuera de la imagen enfocada
    $(window).on('click', function(event) {
        if ($(event.target).is('.focused-image')) {
            $('body').removeClass('blur-background');
            focusedImage.fadeOut();
        }
    });
});




   