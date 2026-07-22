import { House } from "@/app/models/House";
import "../styles.css";

export default function HouseInfo({ house }: { house: House }) {
    return (
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
    );
}