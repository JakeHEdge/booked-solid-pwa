let map, directionsService, directionsRenderer;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.4808, lng: -2.2426 }, // Manny
    zoom: 12,
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  document.getElementById("routeBtn").addEventListener("click", getDirections);
}

function getDirections() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition((pos) => {
    const userLocation = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    };

    directionsService.route(
      {
        origin: userLocation,
        destination: "Albert Square, Widnes, WA8, UK",
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(result);
        } else {
          alert("Directions failed: " + status);
        }
      }
    );
  });
}