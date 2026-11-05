// Function that creates the individual records for each place in the place_table.csv

import type { PlaceRecord } from "../data/types";

type PlaceListProps = {
  places: PlaceRecord[];
  onSelect: (place: PlaceRecord) => void;
};

export default function PlaceList({ places, onSelect }: PlaceListProps) {
  return (
    <div>
      {places.map((place, index) => (
        <div key={index} className="record" onClick={() => onSelect(place)}>
          <div className="record-title">{place.Name}</div>
        </div>
      ))}
    </div>
  );
}

