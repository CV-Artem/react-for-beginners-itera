import React from 'react';
import './App.css';
import { Footer } from './Footer';

const user = {firstName: "Artem",bio:"Passionate junior front-end developer with a desire to learn and grow in a collaborative team environment. Skilled in HTML, CSS, and JavaScript. Excels at creating pixel-perfect designs and working with cross-browser compatibility issues.",contact:"@7_art"}

const App = () => (
    <div className="App">
      <header className="App-header">
       My Page
      </header>
      <main>
        <section>
        <ul>
          <li><h2>{user.firstName}</h2></li>
          <li>{user.bio}</li>
          <li>{user.contact}</li>
        </ul>        
        </section>
      </main>
      <Footer copyright='©'/>
    </div>
  );


export default App;
