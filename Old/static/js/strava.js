/* STRAVA */


const auth_link = "https://www.strava.com/oauth/token"

function getActivities(res) {
    const activites_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`

    fetch(activites_link)
        .then((res) => res.json())
        .then(function (data) {
            var map = L.map('map').setView([52.38199, -1.561976], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            for (var x=0; x<data.length; x++) {
                console.log(data[x].map.summary_polyline)
                var coordinates = L.Polyline.fromEncoded(data[x].map.summary_polyline).getLatLngs()
                console.log(coordinates)

                L.polyline(

                    coordinates,
                    {
                        color:"green",
                        weight:5,
                        opacity:.7,
                        lineJoin:'round'
                    }

                ).addTo(map)
            }
        })

}


function reAuthorise() {
    fetch(auth_link, {
        method: "post",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            client_id: "88503",
            client_secret: "fcbcf53e9cd8bb3d0387e04b93b6a784923b901e",
            refresh_token: "e239e8706ab7995e2048a877cf10909214db6d78",
            grant_type: "refresh_token"
        })
    }).then(res => res.json())
        .then(res => getActivities(res))


}

reAuthorise();