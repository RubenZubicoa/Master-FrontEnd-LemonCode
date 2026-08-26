import type { Plato } from '@/models/Plato'
import { computed, ref, type MaybeRefOrGetter, toValue } from 'vue'

export function usePlatoFilter(platos: MaybeRefOrGetter<Plato[]>) {
  const nombre = ref('')
  const dia = ref('')
  const tipo = ref('')

  const platosFiltrados = computed(() =>
    toValue(platos).filter((plato) => {
      const coincideNombre =
        nombre.value === '' ||
        plato.nombre.toLowerCase().includes(nombre.value.toLowerCase())

      const coincideDia = dia.value === '' || plato.dia === dia.value
      const coincideTipo = tipo.value === '' || plato.tipo === tipo.value

      return coincideNombre && coincideDia && coincideTipo
    }),
  )

  return { nombre, dia, tipo, platosFiltrados }
}
