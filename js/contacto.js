// script mapa 
let options={
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge:0
}

if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(
    success,
    error,
    options
)
}else{
    alert("Los servicios de geolocalizacion no estan disponibles");
}


function success(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map', {
        center: [latitude, longitude],
        zoom: 14
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Mi Fast Food'}).addTo(map)

    let control = L.Routing.control({
        waypoints :[
            L.latLng(latitude, longitude),
            L.latLng(40.414464,  -3.697093 )
        ],

        language: 'es',
    }).addTo(map);
}

function error(){

}


