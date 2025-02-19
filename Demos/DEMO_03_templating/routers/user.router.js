const router = require("express").Router();

const users = [
  {
    id: 1,
    name: "Sarah Connor",
    email: "sarah@resistance.us",
    bio: "La mère du sauveur de l'humanité",
    avatar: "sarah.webp",
  },
  {
    id: 2,
    name: "Paul Atreides",
    email: "paul@atreides.dune",
    bio: "Le sauveur de la planète",
    avatar: "paul.webp",
  },
];

router.get("/", (req, res) => {
  res.status(200).render("user/index", {
    title: "Liste d'utilisateurs",
    users,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: "L'utilisateur n'existe pas" });
  }

  res.status(200).render("user/details", {
    title: "Profile",
    user,
  });
});

module.exports = router;
