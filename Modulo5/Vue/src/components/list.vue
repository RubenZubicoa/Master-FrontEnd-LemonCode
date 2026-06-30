<script setup lang="ts">
import { ref } from 'vue'

interface Plato {
  id: number
  nombre: string
  dia: string
  tipo: string
}

const platos = ref<Plato[]>([
  { id: 1, nombre: 'Ensalada César', dia: 'Lunes', tipo: 'Comida' },
  { id: 2, nombre: 'Pizza Margherita', dia: 'Martes', tipo: 'Comida' },
  { id: 3, nombre: 'Hamburguesa', dia: 'Miércoles', tipo: 'Comida' },
  { id: 4, nombre: 'Pasta Carbonara', dia: 'Jueves', tipo: 'Comida' },
  { id: 5, nombre: 'Ensalada César', dia: 'Viernes', tipo: 'Comida' },
  { id: 6, nombre: 'Pizza Margherita', dia: 'Sábado', tipo: 'Cena' },
  { id: 7, nombre: 'Hamburguesa', dia: 'Domingo', tipo: 'Cena' },
])
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
            <button type="button" class="btn btn-delete">Eliminar</button>
            <button type="button" class="btn btn-favorite">Favorito</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-clear">Limpiar plan de comidas de la semana</button>
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

h2 {
  margin: 0 0 1rem;
  font-size: 1.1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background: #f5f5f5;
  font-weight: 600;
}

tbody tr:last-child td {
  border-bottom: none;
}

tbody tr:hover {
  background: #fafafa;
}

.actions {
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.35rem 0.6rem;
  font-size: 0.85rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background: white;
}

.btn:hover {
  filter: brightness(0.95);
}

.btn-edit {
  color: #2c7a5e;
  border-color: #42b883;
}

.btn-delete {
  color: #c0392b;
  border-color: #e74c3c;
}

.btn-favorite {
  color: #d4a017;
  border-color: #f1c40f;
}

.btn-clear {
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  background: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.btn-clear:hover {
  background: #eee;
}
</style>
