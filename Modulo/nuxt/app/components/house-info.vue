<script setup lang="ts">
import type { House } from '~/models/House';
import { useRouter } from 'vue-router';

const props = defineProps<{
    house: House;
}>();

const router = useRouter();
const goToBooking = () => {
    router.push(`/details/${props.house.id}/booking`);
}

</script>


<template>

<div className="details-container">
        <NuxtImg :src="house.image" :alt="house.name" class="house-image" />
        <div class="element-container">
            <span class="text-lg">Descripción</span>
            <p>{{ house.description }}</p>

            <span class="text-lg">Dirección</span>
            <p>{{ house.address }}</p>

            <span class="text-lg">Habitaciones: {{ house.bedrooms }}</span>
            <span class="text-lg">Camas: {{ house.beds }}</span>
            <span class="text-lg">Baños: {{ house.bathrooms }}</span>
            
            <button class="btn-booking" @click="goToBooking">Reservar</button>
        </div>
    </div>
</template>

<style scoped>
.details-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.house-image {
    width: 50%;
    height: 50%;
    object-fit: cover;
}

.element-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.text-lg {
    font-size: 1.5rem;
    font-weight: bold;
}
.btn-booking {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

</style>