import { House } from "@/app/models/House";
import { useRouter } from "next/navigation";

export default function HouseCard({ house }: { house: House }) {
    const router = useRouter();
    return (
        <div className="house-item" key={house.id} onClick={() => router.push(`/details/${house.id}`)}>
        {house.name}
        <img src={house.image} alt={house.name} className="w-full h-full object-cover" />
    </div>
    );
}