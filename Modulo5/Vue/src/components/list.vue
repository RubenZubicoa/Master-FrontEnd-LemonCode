<script setup lang="ts">
import type { Plato } from '@/models/Plato'
import { useFavoritosStore, usePlatosStore } from '../store'

const platos = usePlatosStore().platos

const deletePlato = (id: number) => {
  usePlatosStore().removePlato(id)
}

const clearPlatos = () => {
  usePlatosStore().clearPlatos()
}

const addFavorito = (plato: Plato) => {
  useFavoritosStore().addFavorito(plato)
}
</script>

<template>
  <section class="list">
    <h2>Lista de platos de la semana</h2>
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
        <tr v-for="plato in platos" :key="plato.id">
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
