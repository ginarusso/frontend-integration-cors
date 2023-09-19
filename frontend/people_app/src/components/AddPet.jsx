import React, {useState} from 'react'

const AddPet = ({addPet}) => {

    const [pet, setPet] = useState({
        pet_name: "",
        type: ""
    })

function handleName(e) {
    setPet (previousPet => {
        return {...previousPet, pet_name: e.target.value}
    })
}

function handleOnSubmit(e) {
    e.preventDefault()
    // console.log(person)
    addPet(pet)
    setPet({
        pet_name: "",
        type: ""
    })
}

  return (
    <>
    <hr />
<h2>Component to add a pet</h2>

    <form onSubmit={handleOnSubmit}> 
    <input type="text"
    placeholder="Pet Name"
    value={pet.pet_name}
    onChange={handleName}
    />
    <input type="text"
    placeholder="Pet type"
    value={pet.type}
    onChange={e => {
        setPet (previousPet => {
            return {...previousPet, type: e.target.value}
        })
    }}
    />

<button>Add Pet</button>
    </form>
    <hr />
    </>
  )
}

export default AddPet