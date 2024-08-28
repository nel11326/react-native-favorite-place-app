const GOOGLE_API_KEY = "YOUR_API_KEY_HERE";

export function getMapPreview({ lat, lng }) {
  const imagePreviewUrl = `https://maps.googleapis.com/map/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:A%7C${lat},${lng}
    &key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
}
