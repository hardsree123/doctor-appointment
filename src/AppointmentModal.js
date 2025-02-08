import React, { useState } from 'react';
import './AppointmentModal.css';

function AppointmentModal({ doctor, onClose, onSave }) {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [followUp, setFollowUp] = useState(false);
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSave = () => {
    const appointmentData = {
      name,
      sex,
      age,
      phoneNumber,
      followUp,
      appointmentType,
      appointmentTime,
      doctor,
    };
    onSave(appointmentData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Book Appointment with {doctor.name}</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Sex:
          <select value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <label>
          Is this a follow-up appointment?
          <input type="checkbox" checked={followUp} onChange={(e) => setFollowUp(e.target.checked)} />
        </label>
        {followUp && (
          <label>
            Previous appointment or new consultation:
            <input type="text" value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)} />
          </label>
        )}
        <label>
          Preferred appointment time:
          <select value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)}>
            <option value="">Select</option>
            <option value="morning">Morning (8 am - 10 am)</option>
            <option value="late_morning">Late Morning (10 am - 12 pm)</option>
            <option value="afternoon">Afternoon (12 pm - 3 pm)</option>
            <option value="late_afternoon">Late Afternoon (3 pm - 5 pm)</option>
          </select>
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AppointmentModal;
