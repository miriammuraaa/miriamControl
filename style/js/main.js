function iniciarMap() {
    var coordenada = { lat: 41.6660842, lng: 1.8591122 };
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 10,
        center: coordenada
    });
    var marker = new google.maps.Marker({
        position: coordenada,
        map: mapa
    });

    var PuntInicial = { lat: 41.6660842, lng: 1.8591122 };
    var PuntB = { lat: 41.7285828, lng: 1.8099998 };
    var PuntC = { lat: 41.7507518, lng: 1.8601883 };

    
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap(mapa);

    var request = {
        origin: PuntInicial,
        destination: PuntC,
        waypoints: [
            { location: PuntB, stopover: true }
        ],
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.gestorRoute(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(response);
        } else {
            console.error('Error al calcular la ruta:', status);
        }
    });
}