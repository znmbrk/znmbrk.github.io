/* STRAVA */


const auth_link = "https://www.strava.com/oauth/token"

function getActivities(res) {
    const activites_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`

    fetch(activites_link)
        .then((res) => console.log(res.json()))

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