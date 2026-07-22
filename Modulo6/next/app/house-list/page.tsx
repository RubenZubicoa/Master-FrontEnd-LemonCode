"use client";
import { House } from "../models/House";
import "./styles.css";
import HouseCard from "./components/house-card";
import { useEffect, useState } from "react";

const apiUrl = 'http://localhost:3001/api/houses';

export default function HouseList() {
    const [houses, setHouses] = useState<House[]>([]);
    const [search, setSearch] = useState("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const [filteredHouses, setFilteredHouses] = useState<House[]>([]);

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            setHouses(data);
            setFilteredHouses(data);
        })
        .catch(error => console.error('Error fetching houses:', error));
    }, []);


    useEffect(() => {
      if (search) {
        setFilteredHouses(houses.filter((house: House) => house.name.toLowerCase().includes(search.toLowerCase())));
      } else {
        setFilteredHouses(houses);
      }
    }, [search]);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Casas Rurales</h1>
            <input type="text" placeholder="Buscar casa" className="search-input" value={search} onChange={handleSearch} />
            <div className="list-house">
                {filteredHouses.map(house => (
                    <HouseCard house={house} key={house.id} />
                ))}
            </div>
        </div>
    );
}