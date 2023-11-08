<template>
    <div class="header">
        <h3>랜덤한 강아지</h3>
        <button class="butt" @click="getDogData" >새로운 강아지 가져오기</button>
    </div>
    <div v-for="dog in dogs" class="dog-box">
        <img :src="dog.url" alt="dogs" class="image">
        <div v-if="dog.detail">
            <p>{{ dog.detail.name }}</p>
            <p>{{ dog.detail.life_span }}</p>
            <p>{{ dog.detail.weight.imperial }}</p>
            <p>{{ dog.detail.height.imperial }}</p>
        </div>
        
    </div>
</template>

<script setup>
const emit = defineEmits(['getDogData'])

const getDogData = () => {
    emit('getDogData')
}

defineProps({
    dogs : Array
})

</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
}
.butt {
    width:100px;
    height:50px;
    background-color: bisque;
    color: black;
    border: 1px solid black;
}

.dog-box{
    display:flex;
    border: 1px solid black;
}

.image {
    width:200px;
    height:200px;
    margin-right: 10px;
}
</style>