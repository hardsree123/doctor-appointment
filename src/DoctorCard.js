// src/DoctorCard.js
/**
 * Displays information about each doctor (name, specialization, visitation hours, rating, and image).
 * Includes a "Book Appointment" button.
 */
import React from 'react';
import './DoctorCard.css';

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <div className="doctor-info">
        <h2>{doctor.name}</h2>
        <p>
          <strong>Specialization:</strong> {doctor.specialization}
        </p>
        <p>
          <strong>Visitation Hours:</strong> {doctor.visitationHours}
        </p>
        <p>
          <strong>Rating:</strong> {doctor.rating} ⭐
        </p>
        <button className="appointment-button">Book Appointment</button>
      </div>
    </div>
  );
}

export default DoctorCard;
