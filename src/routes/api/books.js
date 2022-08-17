const { Router } = require("express");

const { getAllBooks, getOneBook} = require("../../controllers/api/books")

const router = Router();

router.use("/", getAllBooks);
router.use("/:id", getOneBook);

module.exports = router;