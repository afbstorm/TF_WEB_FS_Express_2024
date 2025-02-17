// ? Version longue de l'import du système de routing
// const express = require('express');
// const router = express().Router();

// ? Version courte
const router = require("express").Router();

let tasks = [];

// Route index, elle va servir a récupérer toutes les tâches
router.get('/', (req, res) => {
    res.status(200).json(tasks);
});

// Route de création, elle va servir a enregistrer une nouvelle tâche
router.post('/', (req, res) => {
    const { title } = req.body;

    const task = {
        id: tasks.length + 1,
        title, // ➡️ title: title
        completed: false
    }

    tasks.push(task);

    // 201 : Created
    res.status(201).json(tasks);
})

module.exports = router;
