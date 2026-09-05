import { get, ref } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

export async function getTrips(db) {
  const snapshot = await get(ref(db, 'trips'));
  return snapshot.val() || {};
}

export async function getTrip(db, tripId) {
  if (!tripId) return null;
  const snapshot = await get(ref(db, `trips/${tripId}`));
  return snapshot.val() || null;
}
