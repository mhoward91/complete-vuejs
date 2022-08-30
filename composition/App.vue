<!-- in the composition API, everything is contained inside the setup method -->
<!-- all variables required on the template need to be returned within setup -->
<!-- setup function called once at start of component's lifecycle -->

<template>
<button @click="increment"> {{ count }}</button> 
<button @click="a++"> {{ a }}</button> 
<button @click="b++"> {{ b }}</button> 
<p>{{ total }}</p>
<div
  v-for="number in history"
  :key="number"
  >
  {{ number }}
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue' // opt into reactivity system with ref - wrap variables you want to be reactive
import { useNumbers } from "./useNumbers"

export default {
    setup() {
        const count = ref(0) // make a new reactive object with ref() -> can be used with primitive data
        const increment = () => {
            count.value ++  // composition api uses objects for reactivity - value attribute required to access in script (but not template)
        }

        const { a, b, total, history } = useNumbers()

        // const numbers = reactive({ // make a reactive object only with reactive() -> don't need to access with value attribute later
        //     a: 1,
        //     b: 2,
        // }) 

        // watch(count, (newVal, oldVal) => {  // param 1: what you want to watch (ref only if reactive), param 2: callback with the arg as the new value
        //     console.log(newVal, oldVal)
        // }, {
        //     immediate: true  // in order to apply to initial render
        // })

        // watchEffect(() => {  // only pass in a callback fn
        //     console.log(a.value)
        // })

        return {
            a,
            b,
            count,
            increment,
            total,
            history,
        }
    }
}
</script>

<style scoped>
p {
    font-size: 40px;
}
button {
    height: 100px;
    width: 100px;
    font-size: 40px;
}
</style>