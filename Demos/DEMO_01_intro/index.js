// ? module
// import express from 'express';

// ? Commonjs
// Importation du moteur d'express
const express = require('express');

// Création du serveur web d'express
const app = express();

// Déclaration du port d'écoute du serveur
const PORT = 3000;

// ? Configuration du moteur de vue (ejs)
app.set('view engine', 'ejs');
// ? Configuration du chemin d'accès des vues
app.set('views', './views') // ! './views' est optionnel car c'est l'option par défaut

// ? Création d'une route
app.get('/', (req, res) => {
    const today = new Date().toLocaleDateString('fr-be', {
        dateStyle: 'full'
    });

    // Render prend 2 paramètres, le fichier à render et un objet de valeur à envoyer au template
    res.status(200).render('index', {
        today
    })
})

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port : http://localhost:${PORT}`)
});
