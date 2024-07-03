import React from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Education} from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import {Profiles} from './components/Profiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Accomplishments } from './components/Accomplishments';
import {Responsibilities} from './components/Responsibilities';
import { LightDark } from './components/LightDark';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Education/>
      <Skills/>
      <Projects/>
      <Profiles/>
      <Accomplishments/>
      <Responsibilities/>
      <Contact/>
      <Footer/>
      {/* <LightDark/> */}
    </div>
  );
}

export default App;
