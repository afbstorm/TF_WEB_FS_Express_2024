const { sql } = require("../config/database");

const DishesService = {
  getDayDish: async () => {
    try {
      // ? sql.query nous permet de préparer en envoyer une requête écrite en SQL, avec possiblement des éléments dynamiques (JS) directement à la DB
      const result = await sql.query(
        `SELECT mj.plat_id, p.nom, p.prix, p.description, p.image_url, c.nom as cat_nom
           FROM menu_jour mj JOIN plats p ON mj.plat_id = p.id 
           JOIN categories c ON p.categorie_id = c.id`,
      );

      // ? Une query mssql nous retourne un objet avec 4 clés, recordset et celle qui contient nos résultats
      // ? Dans notre cas, étant donné qu'il nous faut les allergènes, nous devons itérer dans ce recordset pour, pour chaque plat, récupérer
      // ? les allergènes. Une fois qu'une requête est terminée, on rajoute son résultat dans le plat concerné
      for (const dish of result.recordset) {
        const allergenes = await sql.query(`
          SELECT a.nom as allergene 
          FROM plats_allergenes pa JOIN allergenes a ON pa.allergene_id = a.id 
          WHERE pa.plat_id = ${dish.plat_id}`);

        dish.allergenes = allergenes.recordset.map((a) => a.allergene);
      }

      if (!result) {
        return {
          message: "Pas de résultat trouvé",
        };
      }

      return result.recordset;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  getEntries: async () => {
    try {
      // ? Récupération des plats par catégorie pour ne ressortir que les plats ou la catégorie est égale a " entrees "
      const result = await sql.query(`
      SELECT p.id, p.nom, p.prix, p.description, p.image_url
      FROM plats p JOIN categories c ON p.categorie_id = c.id
      WHERE c.nom = 'entrees'`);

      for (const dish of result.recordset) {
        const allergenes = await sql.query(`
          SELECT a.nom as allergene
          FROM plats_allergenes pa JOIN allergenes a ON pa.allergene_id = a.id
          WHERE pa.plat_id = ${dish.id}`);

        dish.allergenes = allergenes.recordset.map((a) => a.allergene);
      }

      return result.recordset;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  getMainDishes: async () => {
    try {
      // ? Récupération des plats par catégorie pour ne ressortir que les plats ou la catégorie est égale a " plats "
      const result = await sql.query(`
      SELECT p.id, p.nom, p.prix, p.description, p.image_url
      FROM plats p JOIN categories c ON p.categorie_id = c.id
      WHERE c.nom = 'plats'`);

      for (const dish of result.recordset) {
        const allergenes = await sql.query(`
          SELECT a.nom as allergene
          FROM plats_allergenes pa JOIN allergenes a ON pa.allergene_id = a.id
          WHERE pa.plat_id = ${dish.id}`);

        dish.allergenes = allergenes.recordset.map((a) => a.allergene);
      }

      return result.recordset;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  getDesserts: async () => {
    try {
      // ? Récupération des plats par catégorie pour ne ressortir que les plats ou la catégorie est égale a " desserts "
      const result = await sql.query(`
      SELECT p.id, p.nom, p.prix, p.description, p.image_url
      FROM plats p JOIN categories c ON p.categorie_id = c.id
      WHERE c.nom = 'desserts'`);

      for (const dish of result.recordset) {
        const allergenes = await sql.query(`
          SELECT a.nom as allergene
          FROM plats_allergenes pa JOIN allergenes a ON pa.allergene_id = a.id
          WHERE pa.plat_id = ${dish.id}`);

        dish.allergenes = allergenes.recordset.map((a) => a.allergene);
      }

      return result.recordset;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  getWines: async () => {
    try {
      const result = await sql.query(`SELECT * FROM vins`);
      return result.recordset;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  getDishById: async (dishId, categoryName) => {
    try {
      // ? Récupération du plat par rapport a son id et sa catégorie que l'on reçoit en paramètre
      // ? p.id = ${dishId} ne prend pas de single quote ('') autour de ${dishId} car c'est un nombre
      // ? c.nom = '${categoryName}' prend des single quote autour de ${categoryName} car c'est un string
      const result = await sql.query(`
      SELECT p.id, p.nom, p.prix, p.description, p.image_url
      FROM plats p JOIN categories c ON p.categorie_id = c.id
      WHERE p.id = ${dishId} AND c.nom = '${categoryName}'`);

      if (result.recordset.length > 0) {
        const allergenes = await sql.query(`
        SELECT a.nom as allergene
        FROM plats_allergenes pa JOIN allergenes a ON pa.allergene_id = a.id
        WHERE pa.plat_id = ${dishId}`);

        result.recordset[0].allergenes = allergenes.recordset.map(
          (a) => a.allergene,
        );
      }

      return result.recordset[0];
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  createIngredientIfNotExists: async (ingredientName) => {
    try {
      const request = new sql.Request();
      const result = await request.input("nom", sql.VarChar, ingredientName)
        .query(`
          IF NOT EXISTS (SELECT * FROM ingredients WHERE nom = @nom)
          INSERT INTO ingredients (nom) VALUES (@nom);
          SELECT id FROM ingredients WHERE nom = @nom`);

      return result.recordset[0].id;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  getAllergensIds: async (allergenNames = []) => {
    try {
      const result = await sql.query(
        ` SELECT id 
            FROM allergenes 
            WHERE nom IN (${allergenNames.map((allergen) => `'${allergen}'`).join(",")})`,
      );

      return result.recordset.map((row) => row.id);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
  getCategoryId: async (categoryName) => {
    try {
      const request = new sql.Request();
      const result = await request
        .input("nom", sql.VarChar, categoryName)
        .query(`SELECT id FROM categories WHERE nom = @nom`);

      return result.recordset[0].id;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  },
};

module.exports = DishesService;
