# GNEU ?

# Requirements

- npm install node-fetch --save
- npm install joi --save

## TODO

[ ] init projet + serveur
[ ] ajouter la route /crimes
    [ ] call api https://data.boston.gov/api/3/action/datastore_search?resource_id=be047094-85fe-4104-a480-4fa3d03f9623&limit=5 + parsing datas
[ ] autres routes...

## Routes

[ ] GET /shooting => la liste des crimes impliquant une arme a feu
[ ] GET /crimes => tous les crimes
[ ] GET /crimes/:month => tous les crimes / mois
[ ] GET /crimes?offence_code=1234 => filtre par offence code