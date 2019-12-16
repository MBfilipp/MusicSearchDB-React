import React, { useState } from 'react';
import './App.css';
import LiMusic from './components/LiMusic';
import TitleBar from './components/TitleBar';

function App() {
  const [tracks, setTracks] = useState([]);
  const handleChange = async (event) => {
    let response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${event.target.value}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "93e08c48damshd4f9f756737ac3fp157a43jsn59014a1c5cdf"
      }
    })
    let data = await response.json();
    console.log(data.data)
    setTracks(data.data);
  }
  return (
    <>
      <TitleBar title="Music Search"/>
      <input type="text" placeholder="Input artist" onChange={handleChange} className="SearchTrack"/>
      <ul className="UlMusic">
        {(tracks === undefined || !tracks.length) 
          ? <div className="DivInput">
              <h1 className="H1Input">Input Track...</h1>
            </div> 
          : tracks.map((item) => {
              return (
                  <LiMusic key={item.id} item={item} />
              )
        })}
      </ul>
    </>
    
  );
}

export default App;
