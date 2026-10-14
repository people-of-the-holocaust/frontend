export type CsvRecord = Record<string, string>;

export type PersonRecord = CsvRecord & {
  Index: string;
  "First Name": string;
  "Last Name": string;
  Place?: string;
};

export type PlaceRecord = CsvRecord & {
  LID: string;
  Name: string;
  Type?: string;
  Subtype?: string;
  "Current Country": string;
};

export type ActivityRecord = CsvRecord & {
  personSubjID?: string;
  placeID?: string;
  action?: string;
  details?: string;
};

export type ActivityIndex = Record<string, ActivityRecord[]>;

export type MapRecord = {
  Name?: string;
  Latitude?: string;
  Longitude?: string;
  Type?: string;
  Subtype?: string;
  "Current Country"?: string;
};

export type MapDataResponse = {
  "Map Data": MapRecord[];
};
