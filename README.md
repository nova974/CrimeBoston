# Coding dojo Node.js

### Etape 0 : Installation de Node.js !

- https://nodejs.org/en/download/

Pour valider votre installation, vous pouvez lancer les commandes suivantes :

```
node --version
npm --version
```

Nous réutiliserons les commandes node, npm dans les étapes suivantes.

### Etape 1 : Hello world !

En utilisant votre éditeur préféré, créez un fichier hello.js qui affiche "hello world" dans la console puis exécutez ce fichier avec la commande node.

Félicitations, vous venez d'exécuter du code Node.js ;-)

### Etape 2 : Votre premier projet !

Lancez la commande "npm init" et suivez les différentes étapes de création du projet.

Vous venez de créer votre premier projet Node.js. Jetez un coup d'oeil au fichier package.json qui vient d'être généré. Ce fichier permet de décrire votre projet et ses différentes dépendances.

### Etape 3 : Votre premier serveur HTTP !

[Express](https://github.com/strongloop/express) est un module qui permet de créer un serveur web en Node.js. C'est une surcouche au module http qui est compris de base dans Node.js.

En une seule commande npm, installez ce module dans votre projet et faites en sorte que le module soit automatiquement référencé dans le fichier package.json.
Jetez à présent un coup d'oeil au contenu de votre projet, un nouveau répertoire vient d'être créé. Jetez y un coup d'oeil.

Créez un fichier server.js à la racine de votre projet et utilisez le module Express. Votre objectif : faire en sorte que votre serveur renvoie une liste d'animaux sur l'url /pets :

```
$ curl http://localhost:3000/pets
[{"name":"Heidi","kind":"Dog","age":3},{"name":"Pluto","kind":"Dog","age":14},{"name":"Heidi","kind":"Dog","age":4}]
```

Pour tester votre serveur, vous pouvez aussi utiliser un client graphique, par exemple le plugin Postman pour Chrome / Firefox.

### Etape 4 : Un peu d'outillage !

Fatigué de redémarrer votre serveur à chaque modification du code ? Installez `nodemon` de façon à ce que ce module soit référencé dans les dependances de dev.

Ajoutez une nouvelle ligne de script dans votre `package.json` avec comme clé `dev` et comme valeur `nodemon server.js`

Lancez la commande `npm run dev`

### Etape 5 : Requête HTTP Post !

Pour l'instant, on a géré une requête de type GET dans Express. Désormais vous allez gérer un POST. 

Faites en sorte de pouvoir ajouter un animal de la manière suivante :

```
$ curl -H "Content-Type: application/json" -X POST http://localhost:3000/pet -d '{"name": "Rockie", "age": "4"}'
```

Pour l'instant on se contentera d'afficher le contenu de la requête dans la console du serveur. La difficulté ici est de parser le body de la requête. Pour faire cela, express vous founit un middleware a utiliser et va ainsi vous authoriser a utiliser le format json.

### Etape 6 : Un peu d'HTML !

A présent, créer un fichier index.html dans un répertoire publics et affichez y un hello world. Puis faites en sorte que l'url / affiche votre fichier index.html.

Enfin, récupérez la liste des animaux, affichez les noms des animaux dans la page index.html.

### Etape 7 : Express generator !

Express generator est un outil permettant la creation rapide d'un squelete pour votre application

[https://expressjs.com/en/starter/generator.html](https://expressjs.com/en/starter/generator.html)

### Etape 8 : Refactoring !

Dans le projet créé en Etape 2, vous avez peut-être écrit tout le code directement dans server.js. Inspirez vous de la structure du projet generator pour créer un découpage propre entre chacune des couches du projet : route / controller / service.

### Etape 9 : Les promesses !

La gestion de l'ansynchrone en Node.js n'est pas habituelle pour un développeur qui fait peu de Javascript. Les promesses permettent de faciliter cette gestion.
