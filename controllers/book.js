import Book from "../models/Book.js";
import Author from "../models/Author.js"; // Importation correcte du modèle Author
import Category from "../models/Category.js"; // Importation correcte du modèle Author

export const fetchBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).json({ model: books, message: "success" });
};
export const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id)
      .populate("author", "firstName LastName Nationality")
      .populate("categories", "title");

    if (!book) {
      return res.status(404).json({ error: "Book not found." });
    }

    res.status(200).json(book); // Retourne le livre avec toutes ses informations
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const addBook = async (req, res) => {
//   const book = new Book(req.body);

//   try {
//     await book.save();
//     res.status(201).json({ message: "Book created!", book });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

export const addBook2 = async (req, res) => {
  const book = new Book(req.body); // Création d'un livre à partir des données reçues

  try {
    // Vérifie si l'auteur a écrit d'autres livres
    const existingBooks = await Book.find({ author: book.author });

    if (existingBooks.length === 0) {
      // Si aucun livre précédent n'est trouvé, renvoyer une erreur
      return res.status(400).json({
        message: "author must have book before add.",
      });
    }

    // Si l'auteur a déjà des livres, on sauvegarde le nouveau
    await book.save();
    res.status(201).json({ message: "Book created with validation!", book });
  } catch (error) {
    // Gestion des erreurs éventuelles
    res.status(500).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  const book = await Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.status(201).json({ model: book, message: "Object patched!!" });
};

export const deleteBook = async (req, res) => {
  console.log(req.params.id);
  await Book.deleteOne({ _id: req.params.id });
  res.status(201).json({ message: "Object deleted!!" });
};
