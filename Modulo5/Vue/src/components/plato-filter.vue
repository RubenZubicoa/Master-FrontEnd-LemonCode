<script setup lang="ts">
const nombre = defineModel<string>('nombre', { default: '' })
const dia = defineModel<string>('dia', { default: '' })
const tipo = defineModel<string>('tipo', { default: '' })
</script>

<template>
  <div class="filters">
    <label>
      Buscar por nombre
      <input v-model="nombre" type="text" placeholder="Nombre del plato" />
    </label>

    <label>
      Filtrar por día
      <select v-model="dia">
        <option value="">Todos</option>
        <option value="lunes">Lunes</option>
        <option value="martes">Martes</option>
        <option value="miercoles">Miércoles</option>
        <option value="jueves">Jueves</option>
        <option value="viernes">Viernes</option>
        <option value="sabado">Sábado</option>
        <option value="domingo">Domingo</option>
      </select>
    </label>

    <label>
      Filtrar por tipo
      <select v-model="tipo">
        <option value="">Todos</option>
        <option value="desayuno">Desayuno</option>
        <option value="comida">Comida</option>
        <option value="cena">Cena</option>
      </select>
    </label>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9rem;
}

input,
select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
