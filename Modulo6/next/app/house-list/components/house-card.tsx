import { House } from "@/app/models/House";
import { useRouter } from "next/navigation";
import Image from 'next/image'

export default function HouseCard({ house }: { house: House }) {
    const router = useRouter();
    return (
        <div className="house-item" key={house.id} onClick={() => router.push(`/details/${house.id}`)}>
        {house.name}
        <Image src={house.image} alt={house.name} className="w-full h-full object-cover" width={300} height={300} />
    </div>
    );
}