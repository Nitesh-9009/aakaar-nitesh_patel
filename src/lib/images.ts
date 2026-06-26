// Curated, license-free imagery (Unsplash) — verified to resolve.
// Helper appends sensible default transforms for payload/perf.
const BASE = "https://images.unsplash.com/";
const PARAMS = "?auto=format&fit=crop&w=1400&q=70";

/** Build a transformed Unsplash URL from a photo id. */
export const img = (id: string) => `${BASE}${id}${PARAMS}`;

export const IMAGES = {
  archWhite: "photo-1487958449943-2429e8be8625",
  buildingLow: "photo-1486406146926-c627a92ad1ab",
  bridge: "photo-1449157291145-7efd050a4d0e",
  skyline: "photo-1503387762-592deb58ef4e",
  worker: "photo-1504307651254-35680f356dfd",
  engineer: "photo-1581094794329-c8112a89af12",
  bridge2: "photo-1431540015161-0bf868a2d407",
  building2: "photo-1541888946425-d81bb19240f5",
  office: "photo-1497366216548-37526070297c",
  arch2: "photo-1473625247510-8ceb1760943f",
  structure: "photo-1605152276897-4f618f831968",
} as const;
