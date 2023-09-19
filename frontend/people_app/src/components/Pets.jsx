import React from 'react'

const Pets = ({pets}) => {
  return (
    <>
    {pets.map(pet => {
     const {id, pet_name, type} = pet   
        return (
            <div key={id}>
                <h4>Pet Name: {pet_name}</h4>
                <h5>Pet Type: {type}</h5>
                <h5>Pet ID: {id}</h5>
                <hr />
            </div>
        )
    })}
    </>
  )
}

export default Pets