import { House } from "../models/House";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function HouseList({ houses }: { houses: House[] }) {
    const router = useRouter();
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Casas Rurales</h1>
            <div className="list-house">
                {houses.map(house => (
                    <div className="house-item" key={house.id} onClick={() => router.push(`/details/${house.id}`)}>
                        {house.name}
                        <img src={house.image} alt={house.name} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}