<template>
    <div>
        <form @submit.prevent="craeteTodo()">
            <input type="text" v-model="todoText">
            <input type="submit">
        </form>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'

const todoText = ref('')
const store = useCounterStore()

const craeteTodo = function () {
    store.addTodo(todoText.value)
    todoText.value = ''
}

</script>

<style scoped>

</style>