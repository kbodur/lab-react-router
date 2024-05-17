import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, kind }) => {
  const filteredPets = pets.filter(pet => pet.kind.toLowerCase() === kind);

  return (
    <section className="pets-wrapper">
      <PetsListNav />
      <section className="pets-list">
        {filteredPets.map(pet => (
          <Pet key={pet.id} kind={kind} pet={pet} />
        ))}
      </section>
    </section>
  );
};

export default PetsList;
