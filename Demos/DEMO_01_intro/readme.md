# Premier projet

### Initialisation d'un serveur web express

Commande : 
```javascript
    const express = require('express');
    const app = express();
    // Optionnel 
    const PORT = 3000
    
    app.listen(PORT, () => {
        // généralement un log pour signaler que le serveur est bien démarré
        ...
    })
```

### Initilisation du moteur de vue EJS
Installation : 
```javascript
    app.set('view engine', 'ejs') // (le deuxième paramètre dépend du moteur de vue que vous voulez utiliser : ejs, pug, nunjucks, handlebars, ...
    app.set('views', 'views')
```
