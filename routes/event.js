import express from "express";
import { createEvent } from "../controllers/event.js"; // Import du contrôleur
import validateEvent from "../middlewares/validateEvent.js"; // Import du middleware

const router = express.Router();

// Route pour créer un événement avec la validation des données
router.post("/", validateEvent, createEvent);

export default router;
