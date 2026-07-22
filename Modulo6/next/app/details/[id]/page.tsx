"use client";
import { House } from "@/app/models/House";
import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import { Review } from "@/app/models/Review";
import { useRouter } from "next/navigation";

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
                    <div className="details-container">
                        <img src={house.image} alt={house.name} className="house-image" />
                        <div className="element-container">
                            <h2 className="text-lg font-bold mb-2">Descripción</h2>
                            <p>{house.description}</p>

                            <h2 className="text-lg font-bold mb-2">Dirección</h2>
                            <p>{house.address}</p>

                            <h2 className="text-lg font-bold mb-2">Habitaciones: {house.bedrooms}</h2>
                            <h2 className="text-lg font-bold mb-2">Camas: {house.beds}</h2>
                            <h2 className="text-lg font-bold mb-2">Baños: {house.bathrooms}</h2>
                            
                        </div>
                    </div>
                    <div className="reviews-container">
                        <h2 className="text-lg font-bold mb-2">Reseñas ({house.reviews.length})</h2>
                        {house.reviews.map((review: Review) => (
                            <div key={review.id} className="review-container">
                                <h3 className="text-lg font-bold mb-2">{review.date}</h3>
                                <p>{review.author} : {review.comment}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <h1 className="text-2xl font-bold text-center mb-4">Cargando...</h1>
            )}
        </div>
    );
}