// Get the data from the database
const Pets = require("../models/petModel")

async function getAllPets(req, res){
    try{
        const results = await Pets.findAll()
        res.status(200).json(results)
    } catch (error){
        res.status(500).json({message:error})
    }
}

async function addPet(req, res){
    try{
        const pet = req.body
  
        if (pet.pet_name === null || pet.type === null){
            res.status(400).json({message:"The pet is missing some properties"})
        } else{
            const newPet = await Pets.create(pet)
            res.status(201).json(newPet)
        }
    } catch (error){
        res.status(500).json({message:error})
    }
}

function deletePet(req, res){
    const petId = req.params.id
    Pets.destroy({where: {id: petId} })
    .then(response =>{
        if(response === 0){
            res.status(404).json({message:"There was no pet with that id."})
        } else{
            res.status(200).json({message:"The pet has been deleted."})
        }
    })
    .catch(error =>{
        res.status(500).json({message: error})
    } )
}

function editPet(req, res){
    const {id, pet_name, type} = req.body
    if (id === null || pet_name === null || type === null){
        res.status(400).json({message:"The pet you are trying to add is missing some properties."})
    } else{
        Pets.update({pet_name, type}, {where: {id: req.params.id} })
        .then(response =>{
            if (response[0] === 0 ){
                res.status(404).json({message:"The id you have inputted is not in the database."})
            } else{
                // console.log(response)
                res.status(200).json({message:"The edit worked"})
                // res.status(200).redirect('/pet')
            }
        })
        .catch( error =>{
            res.status(500).json({message:error})
        })
    }
}

module.exports = {getAllPets, addPet, deletePet, editPet}