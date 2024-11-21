import express from "express"; // Import d'Express
import { signup } from "../controllers/signUp.js"; // Import du contrôleur signup
import validateSignup from "../middlewares/validateSignUp.js"; // Import du middleware de validation

const router = express.Router();

// Définir la route d'inscription avec la validation des données avant d'appeler le contrôleur
router.post("/", validateSignup, signup);

export default router; // Export des routes
