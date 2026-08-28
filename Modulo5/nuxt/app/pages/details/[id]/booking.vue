<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { House } from '~/models/House';

const router = useRouter();
const houseId = useRoute().params.id;
const house = ref<House | null>(null);
onMounted(async () => {
    const response = await fetch(`http://localhost:3001/api/houses/${houseId}`);
    house.value = await response.json();
});

const goToList = () => {
    router.push('/');
}
const handleSubmit = (e: Event) => {
    e.preventDefault();
    goToList();
}
</script>

<template>

    <div class="container mx-auto p-4">
        <h1 class="title">Reserva de la casa {{ house?.name }}</h1>
        <form @submit="handleSubmit" class="form-container">
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
            <button type="button" @click="goToList">Cancelar</button>
        </form>
    </div>
</template>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.form-container label {
    font-weight: bold;
}

.form-container input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.form-container button {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
</style>