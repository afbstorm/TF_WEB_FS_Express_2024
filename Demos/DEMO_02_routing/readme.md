# Deuxième projet

### Initilisation du routing

```javascript
    const router = require('express').Router();

    // Ou en deux lignes
    const express = require('express');
    const router  = express.Router();
```

### Utilisation du middleware de parsing json
```javascript
    app.use(express.json());
```

### Utilisation du middleware de parsing d'url
```javascript
    app.use(express.urlencoded({extended: true}))
```

### Définition d'une route 
```javascript
// les méthodes de route d'express vont prendre
// 2 à 3 paramètres
// le premier sera toujours l'url de la route
// le deuxième, optionnel, est pour les possibles middlewares (plus d'un possible)
// le troisième est le callback permettant la manipulation des données transitants dans la route, par exemple.
// On peut remplacer le 3ème par une fonction venant d'un module externe (controller)
router.get('/', (req, res) => {
    ...
})
```
