/*import React, { useState } from 'react';
import db from '../db';

function SqlQuery() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const executeQuery = async () => {
    try {
      const result = await db.query(query);
      setResults(result.rows);
    } catch (err) {
      alert('Invalid query!');
    }
  };

  return (
    <div>
      <h2>Run SQL Query</h2>
      <textarea
        rows="3"
        cols="50"
        placeholder="SELECT * FROM patients;"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <button onClick={executeQuery}>Execute</button>

      <table border="1" style={{ marginTop: '20px' }}>
        <thead>
          {results.length > 0 && (
            <tr>
              {Object.keys(results[0]).map((col, i) => <th key={i}>{col}</th>)}
            </tr>
          )}
        </thead>
        <tbody>
          {results.map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((val, i) => <td key={i}>{val}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SqlQuery;*/

import React, { useState } from 'react';
import db from '../db';
import './SqlQuery.css';
import { motion } from 'framer-motion';

function SqlQuery() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('');

  const executeQuery = async () => {
    try {
      const result = await db.query(query);
      setResults(result.rows);
      setStatus('✅ Query executed successfully!');
      setTimeout(() => setStatus(''), 3000);
    } catch (err) {
      setStatus('❌ Invalid query!');
      setResults([]);
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <motion.div
      className="sql-wrapper"
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
      <motion.button
        onClick={executeQuery}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Execute
      </motion.button>
      {status && <motion.div className="query-status" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{status}</motion.div>}

      {results.length > 0 && (
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                {Object.keys(results[0]).map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, idx) => (
                <tr key={idx}>
                  {Object.values(row).map((val, i) => (
                    <td key={i}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}

export default SqlQuery;
