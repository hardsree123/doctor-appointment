// src/App.js
import React, { useState } from 'react';
import './App.css';
import DoctorCard from './DoctorCard';
import Sidebar from './Sidebar';
const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    visitationHours: 'Mon-Fri 9am-5pm',
    rating: 4.5,
    image:
      'https://static.vecteezy.com/system/resources/previews/027/298/490/non_2x/doctor-posing-portrait-free-photo.jpg',
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    visitationHours: 'Tue-Thu 10am-4pm',
    rating: 4.7,
    image: 'https://via.placeholder.com/150',
  },
  // Add more doctors as needed
];
function App() {
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSpecializationSelect = (specialization) => {
    setSelectedSpecialization(specialization);
    setIsSidebarVisible(false); // Hide sidebar after selection
  };

  const handleResetSelection = () => {
    setSelectedSpecialization('');
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const filteredDoctors = selectedSpecialization
    ? doctors.filter(
        (doctor) => doctor.specialization === selectedSpecialization
      )
    : doctors;

  return (
    <div className="App">
      <button onClick={toggleSidebar} className="toggle-sidebar-button">
        {isSidebarVisible ? 'Hide Specializations' : 'Show Specializations'}
      </button>
      <div className={`sidebar-container ${isSidebarVisible ? 'visible' : ''}`}>
        <Sidebar onSpecializationSelect={handleSpecializationSelect} />
      </div>
      <div className="content">
        <h1>Doctors List</h1>
        {selectedSpecialization && (
          <h2 className="selected-specialization">
            Specialization: {selectedSpecialization}
          </h2>
        )}
        <button onClick={handleResetSelection} className="reset-button">
          Show All Doctors
        </button>
        <div className="grid-container">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
