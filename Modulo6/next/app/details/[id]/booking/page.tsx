"use client";
import { useRouter } from "next/navigation";
import "./styles.css";


export default function Booking() {
    const router = useRouter();
    const goToList = () => {
        router.push('/');
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target);
        goToList();
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Reserva de la casa</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" name="phone" />
                <label htmlFor="checkin">Fecha de entrada</label>
                <input type="date" id="checkin" name="checkin" />
                <label htmlFor="checkout">Fecha de salida</label>
                <input type="date" id="checkout" name="checkout" />
                <button type="submit">Reservar</button>
                <button type="button" onClick={goToList}>Cancelar</button>
            </form>
        </div>
    );
}