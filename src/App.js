import React, { useState } from "react";
import logo from "./logo.svg";
import { useSelector } from "react-redux";
import {
  getDevelopers,
  getDeveloperFavorites,
} from "./store/developers/selectors";
import { getResources } from "./store/resources/selectors";
import "./App.css";

function App() {
  const developers = useSelector(getDevelopers);
  const resources = useSelector(getResources);
  const [selectedDev, setSelectedDev] = useState(developers[0].id);

  const favorites = useSelector(getDeveloperFavorites(selectedDev));
  console.log(favorites);

  const renderSelect = () => {
    return (
      <select
        onChange={e => setSelectedDev(e.target.value)}
        value={selectedDev}
      >
        {developers.map(dev => (
          <option value={dev.id} key={dev.id}>
            {dev.name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Web development resources</h1>
        <p>Resources: {developers.length}</p>
        <p>Developers: {resources.length}</p>
        <h3>What are {renderSelect()} favorites?</h3>
        <ul>
          {favorites.map(f => (
            <li key={f.id}>{f.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
