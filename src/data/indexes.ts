// These two functions group activities by placeID + personSubjID
// Should definitely be consolidated into a singular function at some point
import type { ActivityIndex, ActivityRecord } from "./types";

export function buildActivityIndex(
  activities: ActivityRecord[],
): ActivityIndex {
  const map: ActivityIndex = {};

  activities.forEach((act) => {
    if (!act.personSubjID) return;

    const id = String(parseInt(act.personSubjID, 10));

    if (!map[id]) {
      map[id] = [];
    }

    map[id].push(act);
  });

  return map;
}

export function buildPlaceIndex(activities: ActivityRecord[]): ActivityIndex {
  const map: ActivityIndex = {};

  activities.forEach((act) => {
    if (!act.placeID) return;

    const id = String(parseInt(act.placeID, 10));

    if (!map[id]) {
      map[id] = [];
    }

    map[id].push(act);
  });

  return map;
}

