/*import React from 'react';
import PatientForm from './components/PatientForm';
import SqlQuery from './components/SqlQuery';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Patient Registration App</h1>
      <PatientForm />
      <hr />
      <SqlQuery />
    </div>
  );
}

export default App;
*/
/* 
import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import SqlQuery from './components/SqlQuery';
import './App.css';
import { FaMoon, FaSun } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <header className="app-header">
        <h1 className="main-heading">Patient Registration App</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>
      <main>
        <PatientForm />
        <hr />
        <SqlQuery />
      </main>
    </div>
  );
}

export default App;*/


import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import SqlQuery from './components/SqlQuery';
import './App.css';
import { FaMoon, FaSun } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <header className="app-header">
        <h1 className="main-heading">Patient Registration App</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>
      <main>
        <PatientForm />
        <hr />
        <SqlQuery />
      </main>
    </div>
  );
}

export default App;
