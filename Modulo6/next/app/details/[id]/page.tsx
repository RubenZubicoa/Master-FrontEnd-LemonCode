"use client";
import { House } from "@/app/models/House";
import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import { Review } from "@/app/models/Review";
import { useRouter } from "next/navigation";
import Reviews from "./components/reviews";
import HouseInfo from "./components/house-info";

const apiUrl = 'http://localhost:3001/api/houses';

interface PageProps {
    params: Promise<{ id: string }>; // El nombre de la propiedad coincide con el nombre de la carpeta [id]
}

export default function Details({ params }: PageProps) {
    const { id } = React.use(params) as { id: string };
    const [house, setHouse] = useState<House | null>(null);
    const router = useRouter();

    useEffect(() => {
        fetch(`${apiUrl}/${id}`)
            .then(response => response.json())
            .then(data => setHouse(data))
    }, [id]);
    const goToList = () => {
        router.push('/');
    }
    return (
        <div className="container mx-auto p-4">
            {house && house.image ? (
                <>
                    <button className="btn-back" onClick={goToList}>Lista de casas</button>
                    <div className="header-container">
                        <h1 className="text-2xl font-bold text-center mb-4">{house?.name}</h1>
                        <h1 className="text-2xl font-bold text-center mb-4">{house?.price} € / noche</h1>
                    </div>
                    <HouseInfo house={house} />
                    <Reviews reviews={house.reviews} />
                </>
            ) : (
                <h1 className="text-2xl font-bold text-center mb-4">Cargando...</h1>
            )}
        </div>
    );
}