import Joi from "joi"; // Utilisation de 'import' pour Joi

// Définition du schéma de validation
const signupValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(), // Le champ 'name' doit être une chaîne de caractères entre 3 et 30 caractères
  email: Joi.string().email().required(), // Le champ 'email' doit être une adresse email valide
  password: Joi.string().min(8).required(), // Le champ 'password' doit être une chaîne d'au moins 8 caractères
});

// Middleware de validation
const validateSignup = (req, res, next) => {
  // Validation des données dans le corps de la requête (req.body)
  const { error } = signupValidationSchema.validate(req.body);

  if (error) {
    // Si une erreur est trouvée, répondre avec un statut 400 et le message d'erreur
    return res.status(400).json({ message: error.details[0].message });
  }

  next(); // Si la validation passe, on appelle 'next()' pour passer au contrôleur suivant
};

export default validateSignup; // Export du middleware pour pouvoir l'utiliser dans d'autres fichiers
