const express = require('express');
const Joi = require('joi');
const rateLimit = require("express-rate-limit");
const fetch = require('node-fetch');
const app = express()
const port = 3000

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 2 // limit each IP to 2 requests per windowMs
});

app.use(limiter);

const monthSchema = Joi.object({
    month: Joi.number().min(1).max(12).required()
})

app.get('/', (req, res) => {
    res.send("Hello world")
});

app.get('/crimes', async (req, res) => {
    const response = await fetch("https://data.boston.gov/api/3/action/datastore_search?resource_id=be047094-85fe-4104-a480-4fa3d03f9623")
    const json = await response.json()

    const offense_code = req.query.offense_code
    if(offense_code != undefined)
    {
        const filtered = json.result.records.filter(json => json.OFFENSE_CODE === offense_code)
        return res.send(filtered)
    }
    return res.send(json.result.records)
});


app.get('/crimes/:month', async (req, res) => {

    try {
        const value = await monthSchema.validateAsync(req.params)
        const response = await fetch("https://data.boston.gov/api/3/action/datastore_search?resource_id=be047094-85fe-4104-a480-4fa3d03f9623")
        const json = await response.json()
    
        const queryparam = req.params.month
    
        const filtered = json.result.records.filter(json => json.MONTH === queryparam)
        return res.send(filtered)
    } catch (e) {
        res.status(500).send({message: e.message, stack: e.stack})
    }

});

app.get('/shooting', async (req, res) => {
    const response = await fetch("https://data.boston.gov/api/3/action/datastore_search?resource_id=be047094-85fe-4104-a480-4fa3d03f9623")
    const json = await response.json()

    const filtered = json.result.records.filter(json => json.SHOOTING === '0')
    return res.send(filtered) 
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});