<template>
    <div>
        <ParentChild 
            my-msg="asdf" 
            :dynamic-props="name" 
            @some-event = "someCallback"
            @emit-args="getNumbers"
            @up-emit="updatename"
        />
    </div>
</template>

<script setup>
import ParentChild from '@/components/ParentChild.vue';
import { ref } from 'vue'

const name = ref('Alice')

const someCallback = function () {
    console.log(true)
}

const getNumbers = function (...args) {
    console.log(args)
}

const updatename = function () {
    name.value = 'Bella'
}

</script>

<style scoped>

</style>