import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/Places/PlacesList";
import { useEffect, useState } from "react";

function AllPlace({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlace;
