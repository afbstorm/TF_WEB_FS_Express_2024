// ? Import du service
const dishService = require("../services/dishes.service");

const HomeController = {
  getHome: async (req, res) => {
    try {
      const dishes = await dishService.getDayDish();
      res.render("home/home", {
        message: "Bom dia",
        dishes,
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};

module.exports = HomeController;
