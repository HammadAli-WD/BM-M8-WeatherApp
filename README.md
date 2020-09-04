# BM-M8-WeatherApp
/*
​
    Module 8 - Day 10
​
    Should I carry the Umbrella with me?
​
    You are in charge of building the Backend of our Weather app!
​
    We need backend for several reasons:
    - We want to hide the API key, so that noone can flood our APIs
    - The user should be able to register and login
    - A registered user will be able to save some cities and will see the meteo report of those city when he logs in
​
    On your backend you'll have these endpoints:
​
    POST /users/register --> creates a new user
    POST /users/login --> logins with username and password and return a valid token
​
    GET /weather/:city --> get weather info for the given :city
    
    POST /list --> add a city to the user's list
    DELETE /list/:id --> removes the city from the list
    GET /list --> returns the user's list
    
    Once a registered user log into the app, it should see on the front page the weather in all the cities he/she added to it's own list
​
​
    From M7:
​
    You can use Open Weather APIs to build your own Weather website
​
    https://rapidapi.com/community/api/open-weather-map
​
    Study the APIs, build your TS interfaces and start building the best weather app out there!
​
    
*/
