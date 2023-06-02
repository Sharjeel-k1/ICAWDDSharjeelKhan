hamburger.onclick = function(){

    this.classList.toggle('open');
nav.classList.toggle('open');
logo.classList.toggle('open');
listenButton.classList.toggle('open');

};

mapboxgl.accessToken ='pk.eyJ1Ijoic2s5OTAwIiwiYSI6ImNrcXQ1NWUzbzFvYWUyeHFoNDl2bTRuZ2gifQ.8lEZdwd9z9x5zj88ffO3pA';
    
let loc =[14.433877113495793, 50.086968114953635]
let map = new mapboxgl.Map({
    container: 'map',
    center: loc,
    zoom:13, 
    style: 'mapbox://styles/mapbox/dark-v10'
});
map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

let marker = document.createElement('div');
marker.id = 'marker';

let popup = new mapboxgl.Popup().setText('Prague City University')

new mapboxgl.Marker(marker, {anchor: 'bottom'})
.setLngLat(loc)
.addTo(map)
.setPopup(popup);