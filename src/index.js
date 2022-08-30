import * as Vue from "vue/dist/vue.esm-bundler.js"  // build script 

// v-model - performs two way binding automatically -> instead of:
// v-bind:value = "value"
// v-on:input = "input" (a fn which sets this.value = e.target.value from the event object)

// instead use -> v-model="value" and the input fn is not needed
// <input
// v-model="value"
// />

const Num = {  // use a prop to pass down the greeting by using an attr in the template -> <hello greeting="Hello!"/>
    props: ['number'],  // props are accessible through 'this' -> can also be defined in an object
    template: `
    <button
    v-bind:class="getClass(number)"
    v-on:click="click"
    >
        {{ number }}
    </button>
    `,

    methods: {
        click() {
            this.$emit('chosen', this.number)  // pass an event called 'chosen' to the parent component, as well as this.number (or any other) value
        },
        getClass(number) {
            return this.isEven(number) ? 'blue' : 'red'
        },
        isEven(number) {
            return number % 2 === 0
        },
    }
}

const app = Vue.createApp({
    components: {  // register components to make them accessible in the template, ref them in ALL LOWER CASE
        Num
    },

    template: `
    <num
        v-for="number in numbers"
        v-bind:number="number"
        v-on:chosen="addNumber"
    />

    <hr/>
    
    <num
    v-for="number in numberHistory"
    v-bind:number="number"
/>
    `,

    data() {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            numberHistory: []
        }
    },

    computed: {  // computed properties are functions which take no arguments, computing values from existing data properties
        evenList() {  // in this case it keeps the template clean by tackling the filtering in the script
            return this.numbers.filter(num => this.isEven(num))
        },
        error() {
            if (this.value.length < 5) {
                return 'Must be greater than 5'

            }
        }
    },

    methods: {
        addNumber(number) {
            console.log('number', number)
            this.numberHistory.push(number)
        },
        input(e) {
            this.value = e.target.value
        },
        increment() {
            this.count += 1
        },
    },
})

app.mount("#app")

// v-if, v-else examples:
// <div>
// {{ number }}
// <span v-if="isEven(number)">
//  Even
// </span>
// <span v-else>
//  Odd
// </span>
// </div>

// v-on, v-model examples
// <button v-on:click="increment">Increment</button>
//  <p>{{ count }}</p>

//    <input
//     type="radio"
//     v-model="value"
//    value="a"
//    />

//    <input
//    type="radio"
//    v-model="value"
//    value="b"
//   />
    
//   {{ value }}

//    <div class="red">
//        {{ error }}
//    </div>
 