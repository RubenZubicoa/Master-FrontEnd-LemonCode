<script setup lang="ts">
import HouseCard from '~/components/house-card.vue';
import type { House } from '~/models/House';

const apiUrl = 'http://localhost:3001/api/houses';
const houses = ref<House[]>([]);
const search = ref('');
onMounted(async () => {
  const response = await fetch(apiUrl);
  houses.value = await response.json();
});

const filteredHouses = computed(() => {
  return houses.value.filter((house: House) => house.name.toLowerCase().includes(search.value.toLowerCase()));
});
</script>

<template>
  <div class="container">
    <h1 class="title">Casas Rurales</h1>
    <input type="text" placeholder="Buscar casa" class="search-input" v-model="search" />
    <div class="list-house">
      <HouseCard v-for="house in filteredHouses" :key="house.id" :house="house" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

}
.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}
.list-house {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    gap: 24px;
}
</style>

