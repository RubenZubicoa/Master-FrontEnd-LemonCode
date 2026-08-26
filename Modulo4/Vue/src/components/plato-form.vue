<script setup lang="ts">
import { ref } from 'vue'
import { usePlatosStore } from '../store'

const plato = ref('')
const dia = ref('')
const tipo = ref('comida')

const addPlato = (event: SubmitEvent) => {
  event.preventDefault()
  usePlatosStore().addPlato({
    id: Date.now(),
    nombre: plato.value,
    dia: dia.value,
    tipo: tipo.value,
  })

  plato.value = ''
  dia.value = ''
  tipo.value = 'comida'
}
</script>

<template>
  <form class="form" @submit.prevent="addPlato">
    <label>
      Plato
      <input v-model="plato" type="text" placeholder="Plato" />
    </label>

    <label>
      Día de la semana
      <select v-model="dia">
        <option disabled value="">Selecciona un día</option>
        <option value="lunes">Lunes</option>
        <option value="martes">Martes</option>
        <option value="miercoles">Miércoles</option>
        <option value="jueves">Jueves</option>
        <option value="viernes">Viernes</option>
        <option value="sabado">Sábado</option>
        <option value="domingo">Domingo</option>
      </select>
    </label>

    <fieldset>
      <legend>Tipo de comida</legend>
      <label>
        <input type="radio" v-model="tipo" value="desayuno" />
        Desayuno
      </label>
      <label>
        <input type="radio" v-model="tipo" value="comida" />
        Comida
      </label>
      <label>
        <input type="radio" v-model="tipo" value="cena" />
        Cena
      </label>
    </fieldset>

    <button type="submit">Agregar</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 320px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

input,
select,
button {
  padding: 0.5rem;
  font-size: 1rem;
}

fieldset {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.75rem;
}

fieldset label {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

button {
  cursor: pointer;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background: #35a074;
}
</style>
