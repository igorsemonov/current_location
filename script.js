
navigator.geolocation.getCurrentPosition(
    function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        document.body.innerHTML = `<a href=https://www.google.com/maps?&q=${latitude},${longitude} target="_blank">CURRENT_LOCATION</a>`;
    }
);