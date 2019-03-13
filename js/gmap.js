var mapLocation = new google.maps.LatLng(-45.200, -71.4310); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 8, // Change zoom here
        center: mapLocation,
        scrollwheel: false,
        styles: [
            {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},
            {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
            {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
            {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"water","elementType":"all","stylers":[{"color":"#dbdbdb"},{"visibility":"on"}]}]
    };
    
    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
    
    



    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Virgo.', //change title here
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    



}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

