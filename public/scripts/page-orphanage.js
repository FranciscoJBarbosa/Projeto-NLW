const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false
}

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span{data-lng]').dataset.lng

//create map
const map = L.map('mapid', options).setView([lat, lng], 15)

//create and add titlelayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAncor: [170,2]
})

//create and add mark

L
.marker([lat, lng], { icon })
.addTo(map)



/*imgaes gallery*/

function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)
    
    //remover todoas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {        
    }

    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //e preciso atualizar o container de images
    imageContainer.src = image.src

    //adicionar de volta a classe .active para este botao clicado

    button.classLost.add('active')
}