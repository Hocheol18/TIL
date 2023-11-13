<template>
    <div>
        {{ store.todos }}
        <TodoListitem 
            v-for="todo in store.todos"
            :key="todo.id"
            :todo-data="todo"
        />
    </div>
</template>

<script setup>
import TodoListitem from '@/components/TodoListitem.vue'
import { useCounterStore } from '@/stores/counter'
import { sayT1, sayDongHyeon } from '@/utils/dongHyeon.js'

const store = useCounterStore()

sayT1()


</script>

<style scoped>

</style>