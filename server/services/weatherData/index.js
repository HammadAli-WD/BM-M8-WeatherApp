const router = require("express").Router();
const fetch = require("node-fetch")


router.post('/weather', (req, res, next) => {
try {
    let url    = 'http://api.openweathermap.org/data/2.5/weather?q='
    let appId  = 'appid=18736655fd2b041bd52b9620fb92a408';
    let units  = '&units=metric'; 

    let city = req.body.city
    const apiUrl  = url + city + '&' + appId + units
    
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        res.send({ data })
    })
    .catch(err =>{
        console.log(err)
    })
} catch (error) {
    next(error)
}
    
})

module.exports = router;

/* let zipcode
router.post('/locationSearch', (req, res, next) => {
    try {
        zipcode = req.body.zipcode
        if( !zipcode || zipcode.length < 5 || zipcode.length > 5) {
            res.send('Error')
        } else {
            res.redirect('/current-weather')
        }
    } catch (error) {
        next(error)
    }

}) */