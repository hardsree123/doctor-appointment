import React, { useState } from 'react';
import './AppointmentModal.css';

function AppointmentModal({ doctor, onClose, onSave }) {
  const [fullName, setFullName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentType, setAppointmentType] = useState('NEW');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSave = () => {
    const appointmentData = {
      fullName,
      sex,
      age,
      phoneNumber,
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
        <div className="form-row">
          <label>
            Full Name:
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </label>
        </div>
        <div className="form-row">
          <label className="inline-label">
            Sex:
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="male"
                  checked={sex === 'male'}
                  onChange={() => setSex('male')}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={sex === 'female'}
                  onChange={() => setSex('female')}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  value="other"
                  checked={sex === 'other'}
                  onChange={() => setSex('other')}
                />
                Other
              </label>
            </div>
          </label>
        </div>
        <div className="form-row">
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
        </div>
        <div className="form-row">
          <label>
            Phone Number:
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
        </div>
        <div className="form-row">
          <label className="inline-label">
            Appointment Type:
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="NEW"
                  checked={appointmentType === 'NEW'}
                  onChange={() => setAppointmentType('NEW')}
                />
                New Consultation
              </label>
              <label>
                <input
                  type="radio"
                  value="FOLLOWUP"
                  checked={appointmentType === 'FOLLOWUP'}
                  onChange={() => setAppointmentType('FOLLOWUP')}
                />
                Follow-Up
              </label>
            </div>
          </label>
        </div>
        <div className="form-row">
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
        </div>
        <div className="form-row">
          <button onClick={handleSave}>Book</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;
