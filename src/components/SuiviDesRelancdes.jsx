const { MongoClient } = require("mongodb");
MONGO_URI="mongodb://localhost:27017/mydb"; 
const dbName = "suiviCandidatures"; 

async function seConnecter() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connecté à MongoDB");

    const db = client.db(dbName); 
    const collection = db.collection("candidatures"); 

    return collection;
  } catch (error) {
    console.error("Erreur de connexion à MongoDB", error);
  }
}

// ajouter une candidature avec une date de relance
async function ajouterCandidature(nom, email, dateRelance) {
  const collection = await seConnecter();

  const candidature = {
    nom: nom,
    email: email,
    date_de_creation: new Date(),
    date_dernier_update: new Date(),
    date_relance: new Date(dateRelance),
  };

  try {
    const result = await collection.insertOne(candidature);
    console.log("Candidature ajoutée !", result);
  } catch (error) {
    console.error("Erreur sur l'ajout de la candidature", error);
  }
}

//  Pour afficher les candidatures à relancer
async function obtenirCandidaturesARelancer() {
  const collection = await seConnecter();

  // Pour récupérer les candidatures où la date de relance 
  const dateLimite = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); 
  const candidatures = await collection.find({
    $or: [
      { date_dernier_update: { $lt: dateLimite } }, // La mise à jour a été dépassée
      { date_relance: { $lte: new Date() } }, // La date de relance a été dépassée
    ],
  }).toArray();

  console.log("Voici les candidatures à relancer :", candidatures);
}

// L'utilisation de nos fonctions
async function main() {
  // Pour Ajouter une candidature
  await ajouterCandidature("Nae John", "naejohn@example.com", "2025-07-01");
n
  await obtenirCandidaturesARelancer();
}

main();
