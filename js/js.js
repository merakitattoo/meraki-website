window.addEventListener('DOMContentLoaded',

    function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(pos) {
                var gmap = new google.maps.Map(
                    document.querySelector('#gmap'),
                    {
                        zoom: 14,
                        center: 
                        new google.maps.LatLng(
                            pos.coords.latitude, pos.coords.longitude
                        ),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }
                );
            },
            function(err) {
                var msgs = [
                    err.message,
                    'Permission denied.',
                    'Position unavailable.',
                    'Timeout.'
                ];
                alert(msgs[err.code]);
            },
            {
                timeout : 10000,
                maximumAge : 0,
                enableHighAccuracy: true
            }

        );

    } else {

        alert("Your browser doesn't support the Geolocation API.");

    }

}, false

                       );
