<script setup lang="ts">
import type { House } from "~/models/House";

const props = defineProps<{
    house: House;
}>();


const handleClick = () => {
    navigateTo(`/details/${props.house.id}`);
}
</script>


<template>
    <div class="house-item" :key="house.id" @click="handleClick">
        {{ house.name }}
        <NuxtImg :src="house.image" :alt="house.name" class="w-full h-full object-cover" />
    </div>
</template>

<style scoped>
.house-item {
    height: 350px;
    width: auto;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    }
}

.house-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
}
</style>