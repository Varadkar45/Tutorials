const getLocation = document.getElementById("get-location-button")

async function getData(lat,long) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=ce5a6490618649f68d4112038242105&q=${lat},${long}&aqi=yes`
    );
    return await promise.json();
}

async function gotLocation(position) {
    const result = await getData(
        position.coords.latitude,
        position.coords.longitude,
    )
    console.log(result)
}

function failedToGet() {
    console.log('There was some issue')
}

getLocation.addEventListener('click', async ()=> {
    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
})