const router = require("express").Router();
const booksController = require("../controllers/booksController");

router.get("/books", booksController.findAll)

router.post("/books", booksController.create)

router.delete("/books/:id", booksController.remove)

module.exports = router;