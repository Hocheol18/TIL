// 기본 문법 요소

// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   // 상태
//   const count = ref(0) // 반응형 상태 (state)

//   // getters
//   const doubleCount = computed(() => count.value * 2) // 계산된 값 

//   // 기능
//   function increment() {
//     count.value++ // actions (메서드)
//   }

//   return { count, doubleCount, increment }
// })

// // Pinia 구성 요소 >> 'plugin' 5번째 요소


import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  let id = 0
  const todos = ref([
    {id : id++, text: 'toto 1', isDone: false},
    {id : id++, text: 'toto 2', isDone: false}
  ])

  const addTodo = function(todoText) {
    todos.value.push({
      id: id++,
      text : todoText,
      isDone: false
    })
  }

  const deleteTodo = function (todoId) {
    // todos 배열에서 몇 번쨰 인덱스가 삭제되었는지 검색
    const index = todos.value.findIndex((todo) => todo.id===todoId)
    // 찾은 인덱스 값을 통해 배열에서 요소를 제거 후 원본 배열 업데이트.
    todos.value.splice(index, 1)
  }

  const updateTodo = function (todoId) {
    todos.value = todos.value.map((todo) => {
      if (todo.id === todoId) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
  }

  const doneTodosCount = computed(() => {
    return todos.value.filter((todo) => todo.isDone).length
  })

  // 다른 곳에서 사용할 때 return 에 넣어주어야 한다.
  return { todos, addTodo, deleteTodo , updateTodo, doneTodosCount }
}, { persist : true })