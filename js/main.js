
/* script  para que funcione el archivo externo de json*/

// Selecciono el contenido en el que voy  a mostrar  los productos 
const mostPopProducts = document.querySelector(".most-popular-products")
// Defino  la ruta al archivo json que contiene la informacion del menu
const jsonFile = "../menu.json";
// Hago una peticion para obtener el archivo json 
fetch(jsonFile).then(respone=>{
    //convierto la respuesta aformato Json
    return respone.json();   
})
.then(data =>{
    // Recorro cada producto  en los datos obtenidos del Json
   data.map(product =>{
    // Destructuro las propiedades del producto para facilitar su uso
        const {id, name, price, image} = product;
    // Agrego el html correspondiente para cada producto en el contenedor    
        mostPopProducts.innerHTML += `
         <div class="product-card" data-product-id="${id}">
                        <div class="product-card_container">
                            <div class="produict-card_img">
                                <img src="${image[0].url}" alt="${name}"
                                     width="300" height="350"/>
                            </div>
                        </div>
                        <div class="product-card_description">
                            <div class="product-card_text">${name}</div>
                            <div class="product-card_price">${price}</div>
                        </div>
                    </div>
        `
   })
})
