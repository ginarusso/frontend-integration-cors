import React from 'react'
import DeleteButton from './DeleteButton'


const People = ({people, deletePeople}) => {
  return (
    <>
    {people.map(person => {
        const {id, owner_name, location, age} = person
        return (
            <div key={id}>
                <h4>Name: {owner_name}</h4>
                <h5>Location: {location}</h5>
                <p>The person's age is {age} and their ID is {id}, and their pet's ID is {person.pet_id}</p>
                <DeleteButton id={person.id} deletePeople={deletePeople}/>
           
            <hr />
            </div>
        )
    })}
    </>
  )
}

export default People