<template>
    <div>
        <h1>UserView</h1>
        <h2>{{ route.params.id }}</h2>
        <h2>{{ userID }}유저의 페이지</h2>
        <button @click="goHome">홈으로!</button>
        <button @click="goAnotherUser">100번 유저 페이지로!</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

const route = useRoute()
const userID = ref(route.params.id)

// 프로그래밍 방식 네비게이션
const router = useRouter()

// In-Component Gaurd // 
// 1.
onBeforeRouteLeave((to, from) => {
    const answer = window.confirm('정말 떠나실 건가요?')
    if (answer === false) {
        return false
    }
})

// 2. onBeforeRouteUpdate
const goAnotherUser = function() {
    router.push({name: 'user', params: {id:100}})
}

// 이렇게 까지 해주어야 value 값이 변경됨.
onBeforeRouteUpdate((to, from) => {
    userID.value = to.params.id
})

const goHome = () => {
    // 이전의 route를 history 스택에 푸시함 >> 뒤로가기 가능
    router.push({name : 'home'})

    // 이전의 route를 history 스택에 푸시하지 않음. >> 뒤로가기 불가
    // 현재 위치만 바꾼다.
    router.replace({name:'home'})
}


</script>

<style scoped>

</style>