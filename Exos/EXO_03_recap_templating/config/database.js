// ? Import de mssql, cette variable contiendra tout le nécessaire pour communiquer en la DB (en sql)
const sql = require("mssql");

// ? Destructuring des variables d'environnements pour les récupérer en une fois (et éviter la répétition)
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// ? Configuration de la connexion à la base de données SQL Server
const db = {
  // Compte utilisateur (de préférence avec droit d'écriture et de lecture sur SSMS)
  // sa (serveradmin)
  user: DB_USER,
  // Mot de passe du compte utilisateur
  // tftic@2012
  password: DB_PASSWORD,
  // Le nom de la base de données avec laquelle vous allez communiquer. Il faut la créer en amont
  database: DB_NAME,
  // Le serveur sur lequel vous exécuter votre serveur web et qui communiquer avec la DB
  server: "localhost",
  options: {
    // Autorise SSMS à accepter la connexion effectuée avec n'importe quel (ou sans) certificat
    trustServerCertificate: true,
  },
};

// ? Fonction qui va se connecter à la DB, créer ici pour éviter de devoir répeter la logique partout ou on en aura besoin
const connectDb = async () => {
  await sql.connect(db);
  console.log("Connexion à la DB effectuée avec succès ⭐");
};

// ? Export des éléments dont nous allons nous servir plus tard
module.exports = { sql, connectDb };
