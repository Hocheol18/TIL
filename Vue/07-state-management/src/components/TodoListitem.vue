<template>
    <div>
        <span @click="stores.updateTodo(todoData.id)"
        :class="{'is-done' : todoData.isDone}"
        >
            {{ todoData.text }}
        </span>
        <button @click="stores.deleteTodo(todoData.id)">X</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const stores = useCounterStore()

defineProps({
    todoData: Object
})


</script>

<style scoped>
.is-done {
    text-decoration: line-through;
}

</style>