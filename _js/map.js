// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 6.8448775, lng: 79.9382373 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15.5,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }