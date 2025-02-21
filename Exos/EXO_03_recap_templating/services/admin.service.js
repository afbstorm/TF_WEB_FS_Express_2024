const { sql } = require("../config/database");
const dishesService = require("./dishes.service");

const AdminService = {
  addDish: async (datas) => {
    try {
      // ? Récupération de la catégorie (l'id)
      const categoryId = await dishesService.getCategoryId(datas.category);
      // ? Insertion du plat dans la base de données
      const platRequest = new sql.Request();
      const platResult = await platRequest
        .input("nom", sql.VarChar, datas.name)
        .input("prix", sql.Decimal, datas.price)
        .input("description", sql.Text, datas.description || null)
        .input("image_url", sql.VarChar, datas.image || null)
        .input("categorie_id", sql.Int, categoryId).query(`
        INSERT INTO plats (nom, prix, description, image_url, categorie_id)
        OUTPUT INSERTED.id
        VALUES (@nom, @prix, @description, @image_url, @categorie_id)
        `);

      // ? Gestion et insertion des ingrédients si ce n'est pas du vin
      if (datas.category !== "vins" && datas.ingredients) {
        for (const ingredient of datas.ingredients) {
          if (ingredient) {
            const ingredientId =
              await dishesService.createIngredientIfNotExists(ingredient);
            const ingrRequest = new sql.Request();
            await ingrRequest
              .input("plat_id", sql.Int, platResult.recordset[0].id)
              .input("ingredient_id", sql.Int, ingredientId)
              .query(`INSERT INTO plats_ingredients (plat_id, ingredient_id) 
                        VALUES (@plat_id, @ingredient_id)`);
          }
        }
      }

      // ? Gestion et insertion des allergènes si ce n'est pas du vin
      if (datas.category !== "vins" && datas.allergens) {
        const allergenIds = await dishesService.getAllergensIds(
          datas.allergens,
        );
        for (const allergenId of allergenIds) {
          const allergenRequest = new sql.Request();
          await allergenRequest
            .input("plat_id", sql.Int, platResult.recordset[0].id)
            .input("allergene_id", sql.Int, allergenId)
            .query(`INSERT INTO plats_allergenes (plat_id, allergene_id)
                        VALUES (@plat_id, @allergene_id)`);
        }
      }
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};

module.exports = AdminService;
