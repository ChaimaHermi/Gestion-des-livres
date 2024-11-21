import Joi from "joi";

// Schéma de validation de l'événement
const eventValidationSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(), // Le nom de l'événement doit être une chaîne de caractères
  startDate: Joi.date().required(), // La date de début est obligatoire et doit être une date valide
  endDate: Joi.date().required().greater(Joi.ref("startDate")).messages({
    "date.greater": "La date de fin doit être après la date de début", // Validation que endDate est après startDate
  }),
});

const validateEvent = (req, res, next) => {
  const { error } = eventValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default validateEvent;
