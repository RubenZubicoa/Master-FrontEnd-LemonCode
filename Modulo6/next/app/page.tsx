"use client";

import { useEffect, useState } from "react";
import { House } from "./models/House";
import HouseList from "./house-list/page";

const apiUrl = 'http://localhost:3001/api/houses';

export default function Home() {
  const [houses, setHouses] = useState<House[]>([]);
  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setHouses(data))
      .catch(error => console.error('Error fetching houses:', error));
  }, []);
  return (
    <HouseList houses={houses} />
  );
}
