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
/*
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

export default PatientForm;*/

import React, { useState } from 'react';
import db from '../db';
import './PatientForm.css';
import { motion } from 'framer-motion';

function PatientForm() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    countryCode: '+91',  // Default to India country code
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

    // Validate that the contact number is exactly 10 digits
    if (form.contact.length !== 10 || isNaN(form.contact)) {
      setSuccessMsg('❌ Contact number must be 10 digits.');
      setTimeout(() => setSuccessMsg(''), 3000);
      return;
    }

    await db.exec(`
      INSERT INTO patients (name, age, gender, contact)
      VALUES ('${form.name}', ${form.age}, '${form.gender}', '${form.countryCode}${form.contact}')
    `);

    setForm({ name: '', age: '', gender: '', countryCode: '+1', contact: '' });
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
        

        {/* Gender Dropdown */}
        <div className="custom-select-wrapper">
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
        <span className="custom-arrow">&#9662;</span> {/* Downward arrow ▼ */}
      </div>

    

<div className="phone-group">
  <select
    name="countryCode"
    value={form.countryCode}
    onChange={handleChange}
    required
  >
    <option value="" disabled hidden>Code</option>
    <option value="+1">+1 (US)</option>
    <option value="+91">+91 (India)</option>
    <option value="+44">+44 (UK)</option>
    <option value="+61">+61 (Australia)</option>
  <option value="+81">+81 (Japan)</option>
  <option value="+49">+49 (Germany)</option>
  <option value="+33">+33 (France)</option>
  <option value="+86">+86 (China)</option>
  <option value="+55">+55 (Brazil)</option>
  <option value="+34">+34 (Spain)</option>
  <option value="+7">+7 (Russia)</option>
  <option value="+27">+27 (South Africa)</option>
  <option value="+82">+82 (South Korea)</option>
  <option value="+39">+39 (Italy)</option>
  <option value="+974">+974 (Qatar)</option>
  </select>
    <input
    name="contact"
    type="tel"
    placeholder="Phone Number"
    pattern="[0-9]{10}"
    value={form.contact}
    onChange={(e) => {
        const onlyNums = e.target.value.replace(/\D/g, ''); // remove non-digits
        setForm((prev) => ({ ...prev, contact: onlyNums }));
    }}
    onInvalid={(e) => {
        e.target.setCustomValidity("Please enter a valid 10-digit phone number.");
    }}
    onInput={(e) => {
        e.target.setCustomValidity(""); // Clear again on new input
    }}
    required
    />

    </div>
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

