import { useState } from 'react';

const SearchParams = () => {

  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const [location, setLocation] = useState("Tulsa, OK");
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const BREEDS =[];
  
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
    </div>
  );
};

export default SearchParams;