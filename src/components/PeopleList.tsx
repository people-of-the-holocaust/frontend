// Function that creates the individual records for each person on the people_table.csv

import type { PersonRecord } from "../data/types";

type PeopleListProps = {
  people: PersonRecord[];
  onSelect: (person: PersonRecord) => void;
};

export default function PeopleList({ people, onSelect }: PeopleListProps) {
  return (
    <div>
      {people.map((person, index) => (
        <div key={index} className="record" onClick={() => onSelect(person)}>
          <div className="record-title">
            {person["First Name"]} {person["Last Name"]}
          </div>
        </div>
      ))}
    </div>
  );
}

