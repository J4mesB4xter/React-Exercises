import { useState, useEffect } from 'react';
import Pet from "./Pet";

const SearchParams = () => {

  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const [location, setLocation] = useState("Tulsa, OK");
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const [pets, setPets] = useState([]);
  const BREEDS =[];

  useEffect(() => {
    requestPets();
  }, [animal]);

  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/petsanimal=${animal}&location=${location}&breed=${breed}`);
    const json = await res.json();
    console.log(json);
    setPets(json.pets);
  }
  
  return (
    <div classname="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" onChange={e => setLocation(e.target.value)} value={location} placeholder="Location" />
        </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal" 
              value={animal}
              onChange={e => setAnimal(e.target.value)}
              onBlur={e => setAnimal(e.target.value)}
              >
                <option />
                {
                ANIMALS.map(animal => (
                  <option value = {animal} key={animal}> 
                    {animal}
                  </option>
                  ))
                }
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              id="breed" 
              value={breed}
              onChange={e => setBreed(e.target.value)}
              onBlur={e => setBreed(e.target.value)}
              >
                <option />
                {
                BREEDS.map(breed => (
                  <option value = {breed} key={breed}> 
                    {breed}
                  </option>
                  ))
                }
            </select>
          </label>
        <button>Submit</button>
      </form>
      {
        pets.map(pet =>(
          <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
        ))
      }
    </div>
  );
};

export default SearchParams;