<script setup lang="ts">
import type { Review } from '~/models/Review';

const props = defineProps<{
    reviews: Review[];
}>();
</script>

<template>

<div class="reviews-container">
        <h2 class="text-lg">Reseñas ({{ reviews.length }})</h2>
        <div v-for="review in reviews" :key="review.id">
            <div :key="review.id" class="review-container">
                <h3 class="text-lg">{{ review.date }}</h3>
                <p>{{ review.author }} : {{ review.comment }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.reviews-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}

.review-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
}
.text-lg {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>