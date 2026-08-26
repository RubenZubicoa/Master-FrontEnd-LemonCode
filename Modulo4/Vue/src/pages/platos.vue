<script setup lang="ts">
import { useRouter } from 'vue-router'
import PlatoForm from '../components/plato-form.vue'
import PlatosList from '../components/platos-list.vue'
</script>

<template>
    <h2>Plan de comidas de la semana</h2>
    <p>Añade los platos que quieres comer en la semana</p>
    <PlatoForm />
    <PlatosList />
</template>