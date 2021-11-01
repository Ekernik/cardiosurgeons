import DoctorCard from "../components/DoctorCard";
import doctors from "../public/static/databases/doctors";

export default function OurTeam() {
  return (
    <main className="section__our-team">
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
    </main>
  );
}
