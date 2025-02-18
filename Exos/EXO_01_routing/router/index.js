const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");

let utilisateurs = [];

// "/users" --> http://localhost:3000/users
// "/users/42"
// "/users/42/details"
// "/products"
// "/" --> http://localhost:3000/

router.get("/", (req, res) => {
  // 200 : OK
  res.status(200).json(utilisateurs);
});

router.get("/:id", (req, res) => {
  const { id, name, email, password, toto } = req.params;
  const userId = req.params.id;
  console.log(id, userId);

  // Le cast avec Number fonctionne si l'id comparé est un number, ce qui n'est plus le cas
  // avec la génération de UUID dans la création de l'utilisateur
  // const user = utilisateurs.find(user => user.id === Number(req.params.id))
  const user = utilisateurs.find((user) => user.id === req.params.id);

  if (!user) {
    res.status(404).json({
      error: `Utilisateur avec l'id : ${req.params.id} n'existe pas.`,
    });
  }

  res.status(200).json(user);
});

router.post("/", (req, res) => {
  const { name } = req.body;

  // Simple vérification
  if (!name) {
    // 403 : Unauthorized va permettre de spécifier une erreur côté client
    // On y attache un message détaillant l'erreur
    res.status(403).json({ error: "Name is required" });
  }

  const user = {
    id: uuidv4(),
    name,
  };

  utilisateurs.push(user);
  res.status(201).json(utilisateurs);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const user = utilisateurs.find((user) => user.id === id);

  if (!user) {
    res.status(404).json({
      error: `Utilisateur avec l'id : ${id} n'existe pas.`,
    });
  }

  utilisateurs = utilisateurs.filter((user) => user.id !== id);

  // 204 : Ok requête effectuée avec succès mais pas de contenu a renvoyer
  res.status(204).send();
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = utilisateurs.find((user) => user.id === id);

  if (!user) {
    res.status(404).json({
      error: `Utilisateur avec l'id : ${id} n'existe pas.`,
    });
  }

  user.name = name;
  res.status(200).json(utilisateurs);
});

module.exports = router;
