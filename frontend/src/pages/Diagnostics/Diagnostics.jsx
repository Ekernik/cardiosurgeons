import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import illnesses from "../../assets/databases/illnesses";
import "./index.scss";

export default function Diagnostics() {
  return (
    <main className="page__diagnostics">
      <Header />
      <section className="container  section__diagnostics">
        <h1 className="section__header">
          Мы производим диагностику по следующим направлениям
        </h1>
        <ul className="list-container__list">
          {illnesses.map((object) => (
            <div
              className="illness-subsection"
              key={`is${illnesses.indexOf(object)}`}
            >
              <h3 className="illness-list__header">{object.categoryName}</h3>
              {object.illnesses.map((illness) => {
                return object.illnesses[object.illnesses.length - 1] ===
                  illness ? (
                  <div
                    key={`i_${object.categoryName}_${object.illnesses.indexOf(
                      illness
                    )}`}
                  >
                    <li className="illness-list__item">{illness}</li>
                  </div>
                ) : (
                  <div
                    key={`i_${object.categoryName}_${object.illnesses.indexOf(
                      illness
                    )}
                    )}`}
                  >
                    <li className="illness-list__item">{illness}</li>
                    <hr />
                  </div>
                );
              })}
            </div>
          ))}
        </ul>
      </section>
      <Contacts />
      <Footer />
    </main>
  );
}
