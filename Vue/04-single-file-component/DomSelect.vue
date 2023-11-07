<template>
    <div>
        <input type="text" ref="ssafy">
    </div>
</template>

<script setup>
import { ref } from "vue";

// 위 ref와 이름이 정확하게 같아야 한다.
const ssafy = ref(0)

console.log(ssafy.value)

</script>

<style scoped>

</style>