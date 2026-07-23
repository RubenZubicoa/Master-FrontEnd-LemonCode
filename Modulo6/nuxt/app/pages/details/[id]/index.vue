<script setup lang="ts">
import type { House } from '~/models/House';
import { useRouter } from 'vue-router';

const houseId = useRoute().params.id;
const router = useRouter();

const house = ref<House | null>(null);

onMounted(async () => {
    const response = await fetch(`http://localhost:3001/api/houses/${houseId}`);
    house.value = await response.json();
});

const goToList = () => {
    router.push('/');
}
</script>

<template>
    <div class="container">
        <div v-if="house && house.image">
            <button class="btn-back" @click="goToList">Lista de casas</button>
            <div className="header-container">
                <h1 class="title">{{ house?.name }}</h1>
                <h1 class="title">{{ house?.price }} € / noche</h1>
            </div>
            <HouseInfo :house="house" />
            <Reviews :reviews="house.reviews" />
        </div>
        <div v-else>
            <h1 class="title">Cargando...</h1>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
.btn-back {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
.header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>