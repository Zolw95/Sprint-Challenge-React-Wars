import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  // Set list of characters into state
  //[character, setCharacter] = useState(charac)

  useEffect(() => {
    axios
    .get(`https://swapi.py4e.com/api/people/`)
    .then(response => {
      console.log(response.data.results);
      let characters = response.data.results.map(character => {
        return {
          name: character.name,
          gender: character.gender,
          birth_year: character.birth_year,
          height: character.height
        }
      });
      setData(characters);
    })
    .catch(error => {
      console.log("Characters were not returned", error);
    });
  }, []);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map((character, index) => {
        return <Character key={index} data={character}/>
      })}
    </div>
  );
}

export default App;
