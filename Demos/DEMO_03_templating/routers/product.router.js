const router = require("express").Router();

const products = [
  {
    id: 1,
    name: "Chaise de bureau",
    description:
      "Pour travailler correctement, il faut un siège digne de ce nom",
    price: 100,
    image: "chaise.jpg",
    available: true,
  },
  {
    id: 2,
    name: "Lampadaire",
    description: "S'illumine quand il fait noir",
    price: 80,
    image: "lampadaire.jpg",
    available: true,
  },
  {
    id: 3,
    name: "Écran de PC",
    description: "Pour voir ce qu'on écrit dans VS Code",
    price: 159,
    image: "ecran.jpg",
    available: false,
  },
  {
    id: 4,
    name: "Paire de lunettes",
    description: "Pour mieux voir ce que l'on a à l'écran",
    price: 300,
    image: "lunettes.jpg",
    available: true,
  },
  {
    id: 5,
    name: "Tasse M&M's jaune",
    description: "Parce que le café le matin est un indispensable",
    price: 8,
    image: "tasse.jpg",
    available: false,
  },
];

router.get("/", (req, res) => {
  res.status(200).render("product/index", {
    title: "Liste des produits",
    products,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({ error: "Le produit n'existe pas" });
  }

  res.status(200).render("product/details", {
    title: "Détails du produit",
    product,
  });
});

module.exports = router;
