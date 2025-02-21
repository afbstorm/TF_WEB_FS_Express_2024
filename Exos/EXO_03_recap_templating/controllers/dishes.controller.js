const dishesService = require("../services/dishes.service");

const DishesController = {
  getMenu: async (req, res) => {
    try {
      // ? On utilise la méthode .all de Promise pour effectuer toutes les requêtes asynchrones ensemble et récupérer leur résultat dans un tableau
      // ? On destructure ensuite ce résultat pour récupérer les éléments dans leur variables respectives
      // ! ⚠️ Attention a bien respecter l'ordre des éléments du tableau lors d'un destructuring de tableau
      const [entries, mainDishes, desserts, wines] = await Promise.all([
        dishesService.getEntries(),
        dishesService.getMainDishes(),
        dishesService.getDesserts(),
        dishesService.getWines(),
      ]);
      res.render("menus/menus", {
        entries,
        mainDishes,
        desserts,
        wines,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur serveur est survenue",
        error,
      });
    }
  },
  getDishDetails: async (req, res) => {
    try {
      // Récupération des différents params via destructuring
      const { id, type } = req.params;

      const types = ["entrees", "plats", "desserts"];

      // ? Vérification de l'existence du type reçu en paramètre dans les différents types existants en DB
      if (!types.includes(type)) {
        return res.status(400).json({
          error: "Type de plat invalide",
        });
      }

      const dish = await dishesService.getDishById(parseInt(id), type);

      if (!dish) {
        return res.status(404).json({
          error: "Le plat n'existe pas",
        });
      }

      res.render("menus/details", {
        dish,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur serveur est survenue",
        error,
      });
    }
  },
};

module.exports = DishesController;
