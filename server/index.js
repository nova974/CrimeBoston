const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');

app.get('/', (req, res) => {
    res.send("Hello world")
});

app.get('/crimes', async (req, res) => {
    const response = await fetch("https://data.boston.gov/api/3/action/datastore_search?resource_id=be047094-85fe-4104-a480-4fa3d03f9623")
    const json = await response.json()

    const offense_code = req.query.offense_code
    if(offense_code != undefined)
    {
        const filtered = json.result.records.filter(json => json.OFFENSE_CODE == offense_code)
        return res.send(filtered)
    }
    return res.send(json.result.records)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});