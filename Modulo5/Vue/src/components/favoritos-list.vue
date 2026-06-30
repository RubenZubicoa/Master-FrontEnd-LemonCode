<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlatoFilter } from '@/composables/usePlatoFilter'
import PlatoFilter from './plato-filter.vue'
import { useFavoritosStore } from '../store.ts'

const favoritosStore = useFavoritosStore()
const { favoritos } = storeToRefs(favoritosStore)

const { nombre, dia, tipo, platosFiltrados } = usePlatoFilter(favoritos)

const removeFavorito = (id: number) => {
  favoritosStore.removeFavorito(id)
}

const clearFavoritos = () => {
  favoritosStore.clearFavoritos()
}
</script>

<template>
  <section class="list">
    <h2>Lista de Favoritos</h2>

    <PlatoFilter v-model:nombre="nombre" v-model:dia="dia" v-model:tipo="tipo" />

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
        <tr v-if="platosFiltrados.length === 0">
          <td colspan="4">No hay favoritos que coincidan con el filtro.</td>
        </tr>
        <tr v-for="favorito in platosFiltrados" :key="favorito.id">
          <td>{{ favorito.dia }}</td>
          <td>{{ favorito.nombre }}</td>
          <td>{{ favorito.tipo }}</td>
          <td>
            <button type="button" class="btn btn-delete" @click="removeFavorito(favorito.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-clear" @click="clearFavoritos()">Limpiar favoritos</button>
  </section>
</template>
