<template>
    <form @submit.prevent="submit"> 
    <my-input 
    name="Username"
    v-bind:rules="{ required: true, min: 5 }"
    :value="username.value"
    :error="username.error"
    @update="update"
    />

    <my-input 
    name="Password"
    v-bind:rules="{ required: true, min: 10 }"
    :value="password.value"
    :error="password.error"
    type="password"
    @update="update"
    />

    <my-button
    background="darkslateblue"
    color="white"
    :disabled="!valid"
    />
    </form>
</template>

<script>
import MyButton from "./myButton.vue"
import MyInput from "./myInput.vue"
export default {
    components: {
        MyButton,
        MyInput
    },

    data() {
        return {
            valid: true,
            username: {
                value: "user",
                error: ''
            },
            password: {
                value: "pass",
                error: ''
            }
        }
    },

    computed: {
        valid() {
            return (
                !this.username.error && !this.password.error
            )
        }
    },

    methods: {
        submit() {
            console.log("Event")
        },
        update({ name, value, error }) {
            this[name].value = value
            this[name].error = error
        }
    }
}
</script>

<style scoped>
</style>