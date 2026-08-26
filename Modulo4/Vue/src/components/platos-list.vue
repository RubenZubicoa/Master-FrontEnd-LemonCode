<script setup lang="ts">
import type { Plato } from '@/models/Plato'
import { storeToRefs } from 'pinia'
import { usePlatoFilter } from '@/composables/usePlatoFilter'
import PlatoFilter from './plato-filter.vue'
import { useFavoritosStore, usePlatosStore } from '../store.ts'

const platosStore = usePlatosStore()
const { platos } = storeToRefs(platosStore)

const { nombre, dia, tipo, platosFiltrados } = usePlatoFilter(platos)

const deletePlato = (id: number) => {
  platosStore.removePlato(id)
}

const clearPlatos = () => {
  platosStore.clearPlatos()
}

const addFavorito = (plato: Plato) => {
  useFavoritosStore().addFavorito(plato)
}
</script>

<template>
  <section class="list">
    <h2>Lista de platos de la semana</h2>

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
          <td colspan="4">No hay platos que coincidan con el filtro.</td>
        </tr>
        <tr v-for="plato in platosFiltrados" :key="plato.id">
          <td>{{ plato.dia }}</td>
          <td>{{ plato.nombre }}</td>
          <td>{{ plato.tipo }}</td>
          <td class="actions">
            <button type="button" class="btn btn-edit">Editar</button>
            <button type="button" class="btn btn-delete" @click="deletePlato(plato.id)">Eliminar</button>
            <button type="button" class="btn btn-favorite" @click="addFavorito(plato)">Favorito</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-clear" @click="clearPlatos()">Limpiar plan de comidas de la semana</button>
  </section>
</template>

<style scoped>
.list {
  max-width: 560px;
  margin: 2rem auto 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
