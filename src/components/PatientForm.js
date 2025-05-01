/*import React, { useState } from 'react';
import db from '../db';

function PatientForm() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.exec(`
        INSERT INTO patients (name, age, gender, contact)
        VALUES ('${form.name}', ${form.age}, '${form.gender}', '${form.contact}')
      `);
      
    
    alert('Patient registered!');
    setForm({ name: '', age: '', gender: '', contact: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Patient</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
      <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} required />
      <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default PatientForm;*/

/*import React, { useState } from 'react';
import db from '../db';

function PatientForm() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.exec(`
        INSERT INTO patients (name, age, gender, contact)
        VALUES ('${form.name}', ${form.age}, '${form.gender}', '${form.contact}')
      `);
      alert('✅ Patient registered!');
      setForm({ name: '', age: '', gender: '', contact: '' });
    } catch (err) {
      alert('❌ Failed to register patient.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.card}>
      <h2 style={styles.title}>Register Patient</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required style={styles.input} />
      <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required style={styles.input} />
      <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} required style={styles.input} />
      <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} required style={styles.input} />
      <button type="submit" style={styles.button}>Register</button>
    </form>
  );
}

const styles = {
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: '30px',
  },
  title: {
    marginBottom: '15px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default PatientForm;

*/
/*
import React, { useState } from 'react';
import db from '../db';
import { motion, AnimatePresence } from 'framer-motion';
import './SqlQuery.css';

function SqlQuery() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const executeQuery = async () => {
    setMessage('');
    setError('');
    try {
      const result = await db.query(query);
      const lowered = query.trim().toLowerCase();

      if (lowered.startsWith('insert') || lowered.startsWith('update') || lowered.startsWith('delete')) {
        setMessage('✅ Query executed successfully!');
        setResults([]);
      } else {
        setResults(result.rows);
        if (result.rows.length === 0) {
          setMessage('No results found.');
        }
      }
    } catch (err) {
      setError('❌ Invalid SQL query!');
    }
  };

  return (
    <motion.div
      className="sql-query"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Run SQL Query</h2>
      <textarea
        rows="3"
        placeholder="SELECT * FROM patients;"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={executeQuery}>Execute</button>

      <AnimatePresence>
        {message && (
          <motion.div className="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {message}
          </motion.div>
        )}
        {error && (
          <motion.div className="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="table-wrapper">
        {results.length > 0 && (
          <table className="result-table">
            <thead>
              <tr>
                {Object.keys(results[0]).map((col, i) => <th key={i}>{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {results.map((row, idx) => (
                <tr key={idx}>
                  {Object.values(row).map((val, i) => <td key={i}>{val}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </motion.div>
  );
}

export default SqlQuery;
*/

import React, { useState } from 'react';
import db from '../db';
import './PatientForm.css';
import { motion } from 'framer-motion';

function PatientForm() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
  });
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.exec(`
      INSERT INTO patients (name, age, gender, contact)
      VALUES ('${form.name}', ${form.age}, '${form.gender}', '${form.contact}')
    `);

    setForm({ name: '', age: '', gender: '', contact: '' });
    setSuccessMsg('✅ Patient registered successfully!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <motion.div
      className="form-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Register Patient</h2>
      <form onSubmit={handleSubmit} className="patient-form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
        <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} required />
        <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} required />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="submit-btn"
        >
          Register
        </motion.button>
      </form>
      {successMsg && <motion.div className="success-msg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{successMsg}</motion.div>}
    </motion.div>
  );
}

export default PatientForm;
