<!-- Pinia 실습 -->

<!-- <template>
  <div>
    <p>{{ store.count }}</p>
    <p> {{newNumber}} </p>
    <p>{{ store.doubleCount }}</p>
    <button @click="store.increment()">액션 출력</button>
  </div>
</template>

<script setup>

// state
import { useCounterStore } from './stores/counter'

const store = useCounterStore()

console.log(store.count)

store.count = 5

console.log(store.count)

const newNumber = store.count + 1

// getters

console.log(store.doubleCount)


</script>

<style scoped>

</style> -->

<template>
  <div>
    <h1>Todo PJT</h1>
    <h2>완료된 Todo : {{ stores.doneTodosCount }}</h2>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';

import { useCounterStore } from './stores/counter'


const stores = useCounterStore()


</script>

<style scoped>

</style>