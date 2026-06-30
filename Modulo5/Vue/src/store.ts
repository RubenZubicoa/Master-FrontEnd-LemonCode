import { defineStore } from "pinia"
import type { Plato } from "./models/Plato"

export const usePlatosStore = defineStore('platos', {
    state: () => ({ platos: [] as Plato[] }),
    actions: {
        addPlato(plato: Plato) {
            this.platos.push(plato)
        },
        removePlato(id: number) {
            const index = this.platos.findIndex((plato) => plato.id === id)
            if (index !== -1) {
                this.platos.splice(index, 1)
            }
        },
        clearPlatos() {
            const confirm = window.confirm('¿Estás seguro de querer limpiar el plan de comidas de la semana?')
            if (confirm) {
                this.platos.splice(0, this.platos.length)
            }
        },
    },
})

export const useFavoritosStore = defineStore('favoritos', {
    state: () => ({ favoritos: [] as Plato[] }),
    actions: {
        addFavorito(plato: Plato) {
            this.favoritos.push(plato)
        },
        removeFavorito(id: number) {
            this.favoritos = this.favoritos.filter((favorito) => favorito.id !== id)
        },
        clearFavoritos() {
            const confirm = window.confirm('¿Estás seguro de querer limpiar los favoritos?')
            if (confirm) {
                this.favoritos.splice(0, this.favoritos.length)
            }
        },
    },
})