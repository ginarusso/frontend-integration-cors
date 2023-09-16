const express = require("express")
const router = express.Router()

const petsController = require("../controllers/petController")

router.get('/', petsController.getAllPets)
router.post('/', petsController.addPet)
router.delete('/:id', petsController.deletePet)
router.put('/:id', petsController.editPet)

module.exports = router