// Uses papaparse to load CSV into usable data
import Papa from "papaparse";
import type { CsvRecord } from "./types";

export async function loadCSV<T extends CsvRecord = CsvRecord>(
  url: string,
): Promise<T[]> {
  const res = await fetch(url);
  const text = await res.text();

  return new Promise((resolve, reject) => {
    Papa.parse<T>(text, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data),
      error: reject,
    });
  });
}
