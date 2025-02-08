import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentModal from './AppointmentModal';

function DoctorCard({ doctor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookAppointment = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveAppointment = (appointmentData) => {
    console.log('Appointment saved:', appointmentData);
  };

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
        <button className="appointment-button" onClick={handleBookAppointment}>
          Book Appointment
        </button>
        {isModalOpen && (
          <AppointmentModal
            doctor={doctor}
            onClose={handleCloseModal}
            onSave={handleSaveAppointment}
          />
        )}
      </div>
    </div>
  );
}

export default DoctorCard;
