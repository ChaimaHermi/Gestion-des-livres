import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  const { name, startDate, endDate } = req.body;

  try {
    // Créer un nouvel événement
    const newEvent = new Event({
      name,
      startDate,
      endDate,
    });

    // Sauvegarder l'événement dans la base de données
    await newEvent.save();

    // Répondre avec un message de succès
    res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (err) {
    // En cas d'erreur, retourner une erreur
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
