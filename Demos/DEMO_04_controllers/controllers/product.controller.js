const products = require("../datas/products.json");

const productController = {
  getAll: (req, res) => {
    res.render("products", {
      products,
    });
  },
  getDetails: (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find((p) => p.id === id);

    if (!product) {
      return res
        .status(404)
        .json({ error: "Le produit recherché n'existe pas" });
    }

    res.render("details", {
      product,
    });
  },
};

module.exports = productController;
