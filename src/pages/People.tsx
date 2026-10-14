import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PeopleList from "../components/PeopleList";
import PersonDetails from "../components/PersonDetails";

import { loadCSV } from "../data/loaders";
import { buildActivityIndex } from "../data/indexes";

import type {
  ActivityIndex,
  ActivityRecord,
  PersonRecord,
} from "../data/types";

export default function People() {
  const [people, setPeople] = useState<PersonRecord[]>([]);
  const [activityIndex, setActivityIndex] = useState<ActivityIndex>({});
  const [selected, setSelected] = useState<PersonRecord | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPeople = people.filter((person) => {
    const first = person["First Name"] || "";
    const last = person["Last Name"] || "";
    const full = `${first} ${last}`.toLowerCase();

    return full.includes((searchTerm || "").toLowerCase());
  });

  useEffect(() => {
    async function loadData() {
      try {
        const peopleData = await loadCSV<PersonRecord>(
          `${import.meta.env.BASE_URL}data/people_table.csv`,
        );
        const activityData = await loadCSV<ActivityRecord>(
          `${import.meta.env.BASE_URL}data/activity_table.csv`,
        );

        setPeople(peopleData);
        setActivityIndex(buildActivityIndex(activityData));
      } catch (err) {
        console.error("Error loading data:", err);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <Navbar />

      <section className="database-section">
        <h3>People Records</h3>

        <input
          type="text"
          placeholder="Search the People..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.6rem",
            marginBottom: "1rem",
            background: "#111",
            color: "#eee",
            border: "1px solid #444",
            borderRadius: "4px",
          }}
        />

        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ width: "40%", maxHeight: "600px", overflowY: "auto" }}>
            <PeopleList people={filteredPeople} onSelect={setSelected} />
          </div>

          <div style={{ width: "60%" }}>
            <PersonDetails
              person={selected}
              activities={
                selected
                  ? activityIndex[String(parseInt(selected.Index))] || []
                  : []
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
