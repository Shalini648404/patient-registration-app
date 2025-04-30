import React, { useState } from 'react';
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
    await db.run(
      'INSERT INTO patients (name, age, gender, contact) VALUES (?, ?, ?, ?)',
      [form.name, parseInt(form.age), form.gender, form.contact]
    );
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

export default PatientForm;
