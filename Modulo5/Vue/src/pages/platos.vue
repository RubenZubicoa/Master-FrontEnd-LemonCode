<script setup lang="ts">
import { useRouter } from 'vue-router'
import Form from '../components/form.vue'
import List from '../components/list.vue'
</script>

<template>
    <h2>Plan de comidas de la semana</h2>
    <p>Añade los platos que quieres comer en la semana</p>
    <Form />
    <List />
</template>