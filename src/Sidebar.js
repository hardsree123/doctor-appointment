// src/Sidebar.js
import React from 'react';
import './Sidebar.css';
import {
  FaHeartbeat,
  FaSkin,
  FaBrain,
  FaChild,
  FaBone,
  FaFemale,
  FaStethoscope,
  FaEye,
  FaTooth,
  FaEar,
  FaUserMd,
} from 'react-icons/fa';

const specializations = [
  { name: 'Cardiologist', icon: <FaHeartbeat /> },
  { name: 'Dermatologist', icon: <FaSkin /> },
  { name: 'Neurologist', icon: <FaBrain /> },
  { name: 'Pediatrician', icon: <FaChild /> },
  { name: 'Orthopedic', icon: <FaBone /> },
  { name: 'Gynecologist', icon: <FaFemale /> },
  { name: 'Oncologist', icon: <FaStethoscope /> },
  { name: 'Psychiatrist', icon: <FaUserMd /> },
  { name: 'Ophthalmologist', icon: <FaEye /> },
  { name: 'Dentist', icon: <FaTooth /> },
  { name: 'ENT Specialist', icon: <FaEar /> },
  { name: 'General Physician', icon: <FaUserMd /> },
  // Add more specializations as needed
];

function Sidebar({ onSpecializationSelect }) {
  return (
    <div className="sidebar">
      <h2>Specializations</h2>
      <ul>
        {specializations.map((specialization, index) => (
          <li
            key={index}
            onClick={() => onSpecializationSelect(specialization.name)}
          >
            {specialization.icon} {specialization.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
