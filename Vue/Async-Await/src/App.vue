<template>
  <div class="container">
    <h1>2023-11-08 실습</h1>
    <p><DogList 
      @get-dog-data="callback"
      :dogs="dogs"
      /></p>
  </div>
</template>

<script setup>
import DogList from '@/components/DogList.vue';
import axios from 'axios'
import { ref } from 'vue'

const dogs = ref([])
// const callback = () => {
//   const url = "https://api.thedogapi.com/v1/images/search?limit=10"
//   axios.get(url)
//     .then((res) => {
//       const dogData = res.data
//       dogData.forEach((dog) => {
//         const pic_url = `https://api.thedogapi.com/v1/images/${dog.id}`
//         axios.get(pic_url)
//         .then((res) => {
//           dogs.value.push(res.data)
//           dog.detail = response.data
//         }).catch((error) => {
//           console.log(error)
//         })
//       })
//     }).catch((error) => {
//       console.log(error)
//     })
// }

// 비동기 버그 해결 코드
// await : 이 함수가 비동기 함수다 알려주는 키워드
// await : 비동기 함수의 종료를 기다려주는 키워드
// try-catch 구문과 함께 자주 쓰임.
const callback = async () => {
  const url = "https://api.thedogapi.com/v1/images/search?limit=10"

  // 비동기 버그 해결 코드
  try {

    const res = await axios.get(url)
    const dogData = res.data


    // 암기 1. 비동기 쓸 때 forEach 쓰면 X
    // 암기 2. map 안에 async 쓰면 자동으로 Promise 객체 반환.
    const details = dogData.map(async (dog) => {
      const detailURL = `https://api.thedogapi.com/v1/images/${dog.id}`
      const detailres = await axios.get(detailURL)
      dog.detail = detailres.data.breeds ? detailres.data.breeds[0] : null
    })

    // Promise 객체 10개가 출력됨
    // Promise 객체 순서 보장 X

    // Promise.all : Promise 배열의 계산이 모두 끝날 때 까지 기다려줌
    await Promise.all(details)

    dogs.value = dogData

  } catch (error) {
    console.error('강아지 데이터 못 불러옴', error)
  }
}




</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
</style>