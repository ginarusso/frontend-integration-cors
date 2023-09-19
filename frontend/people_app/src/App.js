import React, {useState, useEffect} from 'react'
import People from './components/People'
import apiConn from './api/connect'
import AddPerson from './components/AddPerson'
import EditPerson from './components/EditPerson'
import Pets from './components/Pets'
import AddPet from './components/AddPet'

const App = () => {

  // const people = [
  //   {
  //     owner_name: "Alice",
  //     age: 28,
  //     location: "New York",
  //     pet_id: 5
  //   },
  //   {
  //     owner_name: "Bob",
  //     age: 34,
  //     location: "San Francisco",
  //     pet_id: 3
  //   },
  //   {
  //     owner_name: "Charlie",
  //     age: 45,
  //     location: "Los Angeles",
  //     pet_id: 1
  //   },
  //   {
  //     owner_name: "David",
  //     age: 29,
  //     location: "Chicago",
  //     pet_id: 2
  //   },
  //   {
  //     owner_name: "Eva",
  //     age: 50,
  //     location: "Miami",
  //     pet_id: 4
  //   }
  // ];
  // const pets = [
  //   {
  //     pet_name: "Whiskers",
  //     type: "Cat"
  //   },
  //   {
  //     pet_name: "Buddy",
  //     type: "Dog"
  //   },
  //   {
  //     pet_name: "Goldie",
  //     type: "Fish"
  //   },
  //   {
  //     pet_name: "Chirpy",
  //     type: "Bird"
  //   },
  //   {
  //     pet_name: "Spike",
  //     type: "Lizard"
  //   }
  // ];

  const [people, setPeople] = useState([])
  const [pets, setPets] = useState([])

  useEffect(() => {
    getPeople(); // Fetch data when the component mounts
    getPets();
  }, []);

  function getPeople() {
    apiConn.get('/people')
    .then(response => {
      // console.log(response.data)
      setPeople(response.data);
    })
    .catch(error => {
      // console.log(error)
    })
  }

  function getPets() {
    apiConn.get('/pets')
    .then(response => {
      // console.log(response.data)
      setPets(response.data);
    })
    .catch(error => {
      // console.log(error)
    })
  }

  function addPeople(info) {
    apiConn.post("/people", info)
    .then(response => {
      // console.log("added a person")
      getPeople()
    })
    .catch (error => {
      console.log(error)
    })
  }

  function addPet(info) {
    apiConn.post("/pets", info)
    .then(response => {
      // console.log("added a pet")
      getPets()
    })
    .catch (error => {
      console.log(error)
    })
  }

  function deletePeople(id) {
    apiConn.delete(`people/${id}`)
    .then(response => {
      console.log(response)
      getPeople()
    })
  }

  function editPeople(id, info) {
    apiConn.put(`/people/${id}`, info)
    .then(response => {
      getPeople()
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <>
<h1>Welcome to my People App</h1>

<AddPerson addPeople={addPeople}/>
<EditPerson editPeople={editPeople}/>
<People people={people} deletePeople={deletePeople}/>

<h1>Welcome to my Pet App</h1>
<AddPet addPet={addPet}/>
<Pets pets={pets} />
    </>
  )
}

export default App