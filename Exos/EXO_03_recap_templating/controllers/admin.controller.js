const adminService = require("../services/admin.service");

const AdminController = {
  getAdmin: (req, res) => {
    res.render("dashboard/admin");
  },
  addDish: async (req, res) => {
    try {
      // ? Récupérer les datas du formulaire depuis req.body
      const {
        category,
        name,
        price,
        description,
        image,
        ingredients,
        allergens,
      } = req.body;

      // ? Ajout d'une validation supplémentaire sur les inputs category, name, price
      if (!category || !name || !price) {
        return res.status(400).json({
          message: "Les champs requis doivent être rempli",
        });
      }

      // ? Si tout est correct, crée un objet que l'on envoi au service
      const datas = {
        category,
        name,
        price,
        description: description || null,
        image: image || null,
        ingredients: ingredients || [],
        allergens: allergens || [],
      };

      await adminService.addDish(datas);

      // ? Une fois le plat correctement enregistré en DB, on redirige vers le menu
      res.redirect("/menus");
    } catch (error) {
      console.error(error);
      res.status(500).render("dashboard/admin", {
        error: "Une erreur est survenue lors de l'ajout du plat",
      });
    }
  },
};

module.exports = AdminController;
