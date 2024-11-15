// Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obm1hc2F0YWthIiwiYSI6ImNseDl0ZnByMzJ1cnQyam9lbnB5ajQ3d3EifQ.vDNx6tuvH4CxRBRu-Tt0Tg';

const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v11', // style URL
    center: [-98.5795, 39.8283], // starting position [lng, lat]
    zoom: 3, // starting zoom
    maxBounds: [
        [-74.2591, 40.4774], // Southwest coordinates
        [-73.7002, 40.9176]  // Northeast coordinates
    ] // Boundary for New York
});

Papa.parse("/data/data.csv", {
    download: true,
    header: true,
    complete: function(results) {
        const SW = new mapboxgl.LngLat(-74.2591, 40.4774);
        const NE = new mapboxgl.LngLat(-73.7002, 40.9176);
        results.data.forEach(function(data) {
            if (data.coordinate) {
                const coordinates = data.coordinate.split(",");
                const lng = parseFloat(coordinates[0]);
                const lat = parseFloat(coordinates[1]);
                if (lng >= SW.lng && lng <= NE.lng && lat >= SW.lat && lat <= NE.lat) {
                    new mapboxgl.Marker()
                        .setLngLat([lng, lat])
                        .addTo(map);
                }
            }
        });
    }
});