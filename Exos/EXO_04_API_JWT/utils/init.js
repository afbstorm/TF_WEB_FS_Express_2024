const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.user;
const Vehicule = db.vehicule;
const Client = db.client;
const TypeIntervention = db.typeIntervention;
const Intervention = db.intervention;

module.exports = async function initData() {
  try {
    console.log("Initialisation des données factices dans la DB ⏳");

    const hashedPassword = await bcrypt.hash("admin1234", 10);
    await User.create({
      username: "admin",
      password: hashedPassword,
      email: "admin@garage.be",
      role: "admin",
    });

    await User.create({
      username: "nono",
      password: hashedPassword,
      email: "nono@fandadri.be",
      role: "user",
    });

    const vidange = await TypeIntervention.create({
      nom: "Vidange",
      prix_base: 89.99,
    });

    const freinage = await TypeIntervention.create({
      nom: "Remplacement des plaquettes de freins",
      prix_base: 149.99,
    });

    const client1 = await Client.create({
      nom: "Rodrigo",
      prenom: "Fausto",
      telephone: "071994263",
      email: "fausto@plage.ma",
    });

    const client2 = await Client.create({
      nom: "Meunier",
      prenom: "Sandy",
      telephone: "063821753",
      email: "sandy@ssms.be",
    });

    const vehicule1 = await Vehicule.create({
      clientId: client1.id,
      immatriculation: "2-DDD-222",
      marque: "Volvo",
      modele: "S60",
      annee: 2010,
      type: "Berline",
    });

    const vehicule2 = await Vehicule.create({
      clientId: client2.id,
      immatriculation: "1-TTT-420",
      marque: "Alfa Roméo",
      modele: "Stelvio",
      annee: 2024,
      type: "SUV",
    });

    await Intervention.create({
      vehiculeId: vehicule2.id,
      typeId: freinage.id,
      date_intervention: new Date(2025, 2, 2),
      statut: "En cours",
      prix: freinage.prix_base,
      description: "Remplacement des plaquettes de la Stelvio RS Rouge",
    });

    await Intervention.create({
      vehiculeId: vehicule2.id,
      typeId: vidange.id,
      date_intervention: new Date(2024, 11, 2),
      statut: "Terminée",
      prix: vidange.prix_base,
      description: "Vidange de la Stelvio RS Rouge",
    });

    await Intervention.create({
      vehiculeId: vehicule1.id,
      typeId: vidange.id,
      date_intervention: new Date(2019, 10, 10),
      statut: "Terminée",
      prix: vidange.prix_base,
      description: "Vidange de la Volvo",
    });

    console.log("Initialisation des données factices dans la DB terminée 💫🟢");
  } catch (error) {
    console.error(`Erreur lors de l'initialisation des données 💣, ${error}`);
  }
};
