<script setup lang="ts">
import { useFavoritosStore } from '../store'


const removeFavorito = (id: number) => {
  useFavoritosStore().removeFavorito(id)
}

const clearFavoritos = () => {
  useFavoritosStore().clearFavoritos()
}
</script>

<template>
    <section class="list">
        <h2>Lista de Favoritos</h2>
        <table>
        <thead>
            <tr>
                <th>Día</th>
                <th>Plato</th>
                <th>Tipo</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="favorito in useFavoritosStore().favoritos" :key="favorito.id">
                <td>{{ favorito.dia }}</td>
                <td>{{ favorito.nombre }}</td>
                <td>{{ favorito.tipo }}</td>
                <td><button type="button" class="btn btn-delete" @click="removeFavorito(favorito.id)">Eliminar</button></td>
            </tr>
        </tbody>
    </table>
        <button type="button" class="btn btn-clear" @click="clearFavoritos()">Limpiar favoritos</button>
    </section>
</template>