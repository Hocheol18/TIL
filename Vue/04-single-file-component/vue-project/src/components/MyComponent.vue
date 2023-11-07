<template>
    <!-- 통상적으로 하나의 div로 이루어짐 -->
    <div>
        <h2>MyComponent</h2>
        <MyComponentItem />
        <MyComponentItem />
        <MyComponentItem />
    </div>
</template>

<script setup>
import MyComponentItem from '@/components/MyComponentItem.vue';
</script>

<style scoped>

</style>