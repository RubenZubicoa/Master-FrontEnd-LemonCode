<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <h1>Meal Planner App</h1>
    <nav class="nav">
      <RouterLink to="/platos">Plan Semanal</RouterLink>
      <RouterLink to="/favoritos">Favoritos</RouterLink>
    </nav>
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  max-width: 560px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}

h1 {
  margin: 0 0 1rem;
  font-size: 1.5rem;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.nav a {
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  color: #333;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
}

.nav a:hover {
  background: #f5f5f5;
}

.nav a.router-link-active {
  color: white;
  background: #42b883;
  border-color: #42b883;
}

.main {
  padding: 0 1rem 2rem;
}
</style>
