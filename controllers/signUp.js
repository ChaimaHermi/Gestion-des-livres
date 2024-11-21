import User from "../models/User.js"; // Importer le modèle User

export const signup = async (req, res) => {
  const { name, email, password } = req.body; // Extraire les informations envoyées dans la requête

  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Créer un nouvel utilisateur
    const newUser = new User({ name, email, password });
    await newUser.save(); // Sauvegarder l'utilisateur dans la base de données

    // Répondre avec un message de succès
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    // En cas d'erreur, retourner une erreur
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
