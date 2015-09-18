Athlete ID: 3888371
Access Token: 491eafe37f405331ffc91eef2d04209cbd74f9f5

curl -G https://www.strava.com/api/v3/athlete -d access_token=491eafe37f405331ffc91eef2d04209cbd74f9f5

curl -G https://www.strava.com/api/v3/activities/3888371/streams/latlng -H "Authorization: Bearer 491eafe37f405331ffc91eef2d04209cbd74f9f5" -d resolution=low

$ curl -X POST https://www.strava.com/oauth/token \
    -F client_id=8126 \
    -F client_secret=491eafe37f405331ffc91eef2d04209cbd74f9f5 \
    -F code=75e251e3ff8fff


    curl -G https://www.strava.com/api/v3/segments/3888371 \
    -H "Authorization: Bearer 491eafe37f405331ffc91eef2d04209cbd74f9f5"

    // Gets all activities
    curl -G https://www.strava.com/api/v3/athlete/activities \
    -H "Authorization: Bearer 491eafe37f405331ffc91eef2d04209cbd74f9f5"
   