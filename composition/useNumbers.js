// a vue composable -> import to main app 
// wrap all code in a function -> remember to return relevant values
// all logic is here bruv

import { ref, reactive, computed, watch, watchEffect } from 'vue'

export function useNumbers() {
    const a = ref(0)
    const b = ref(0) 
    const history = ref([])

    watch([a, b], ([newA, newB], [oldA, oldB]) => {  // if watching multiple, use arrays 
        if (newA !== oldA) {
            history.value.push(`A: ${oldA} -> ${newA}`)
        }

        if (newB !== oldB) {
            history.value.push(`B: ${oldB} -> ${newB}`)
        }
    })

    const total = computed(() => {  // computed accepts a fn which should return a computed property
        return a.value + b.value
    })

    return {
        a, b, history, total
    }
}