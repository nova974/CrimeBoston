const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');

app.get('/', (req, res) => {
    res.send("Hello world")
});

app.get('/crimes', (req, res) => {
    // https://data.boston.gov/api/3/action/datastore_search?resource_id=be047094-85fe-4104-a480-4fa3d03f9623&limit=5
    fetch("https://data.boston.gov/api/3/action/datastore_search?resource_id=be047094-85fe-4104-a480-4fa3d03f9623&limit=5")
    .then(response => response.json())
    .then(json => res.send(json.result.records))
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});