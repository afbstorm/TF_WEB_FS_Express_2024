# Initialisation d'un projet Nodejs

### Commande :

- npm init
  - Npm init va initialiser un projet nodejs, plus précisément le fichier de configuration du projet.
  - Npm init va vous poser des questions pour créer une identification et une configuration basique de votre projet.
    Ce fichier est le package.json qui comprend plusieurs éléments de configuration de base [Lien vers configuration package.json](https://github.com/npm/cli/blob/latest/docs/lib/content/configuring-npm/package-json.md#files)
- npm init -y
  - npm init -y va créer une configuration de base en bypassant les questions de création

### package.json 

- Scripts: 
  ```javascript
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.ejs",
    "dev": "node --watch index.ejs"
    }, 
  ```
  - node --watch index.ejs permet de remplacer la dépendance nodemon en ajoutant nativement un hot-reload à notre application

### Installation des dépendances

- Dépendances de développement
  - Pour enregistrer une dépendance uniquement nécessaire en développement on va utiliser la commande : npm install --save-dev "nom de la dépendance" (par exemple : npm i --save-dev nodemon)

- Dépendances de production
  - Pour enregistrer une dépendance nécessaire pour toute la durée de vie du projet on va utiliser la commande : npm install 'nom de la dépendance' (par exemple : npm i express)
