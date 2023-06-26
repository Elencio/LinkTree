import { useState } from 'react';
import {FooterContainer} from './stylesFooter';
import { peopleData } from '../db/Database';
import ModalContent from './ModalContent';

type Person = {
  name: string;
  image: string;
  title: string;
  location: string;
  about: string;
};

export default function Footer() {
  const [activePerson, setActivePerson] = useState<Person | null>(null);

  const handlePersonClick = (person: Person) => {
    setActivePerson(person);
  };

  const closeModal = () => {
    setActivePerson(null);
  };

  return (
    <>
      <FooterContainer>
        <span>Coordenado por</span>
        <div>
          <ul>
            {peopleData.map((person) => (
              <li key={person.name} onClick={() => handlePersonClick(person)}>
                {person.name}
              </li>
            ))}
          </ul>
        </div>
      </FooterContainer>

      {activePerson && (
           <ModalContent activePerson={activePerson} closeModal={closeModal} />
      )}
    </>
  );
}
