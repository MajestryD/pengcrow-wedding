import './App.css';
import React from 'react';
import NavBar from './components/navbar/navBar';
import Home from './components/mainBody/home/home';
import Details from './components/mainBody/details/details';
import OurStory from './components/mainBody/ourstory/ourstory';
import WeddingParty from './components/mainBody/weddingparty/weddingparty';
import RSVP from './components/mainBody/rsvp/rsvp';
import QA from './components/mainBody/QA/QA';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Details />
      <OurStory />
      <WeddingParty />
      <RSVP />
      <QA />
      <footer></footer>
    </div>
  );
}

export default App;
