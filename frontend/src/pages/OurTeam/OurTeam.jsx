import React from 'react';
import Header from '../../components/Header';
import DoctorCard from '../../organisms/DoctorCard/DoctorCard';
import Footer from '../../components/Footer';

import doctors from '../../assets/databases/doctors';

import './index.scss';

export default function OurTeam() {
  return (
    <main className="section__our-team">
      <Header />
      <div className="container">
        <h1 className="doctors__header">Наша команда</h1>
        <div className="doctors__list">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctors.id}
              imgSrc={doctor.img}
              imgAlt={doctor.alt}
              title={doctor.name}
              subtitle={doctor.title}
              link={doctor.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
