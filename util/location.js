const GOOGLE_API_KEY = "YOUR_API_KEY_HERE";

export function getMapPreview({ lat, lng }) {
  const imagePreviewUrl = `https://maps.googleapis.com/map/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:A%7C${lat},${lng}
    &key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const url = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Could not fetch location!");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
