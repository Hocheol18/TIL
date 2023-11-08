<template>
    <div>
        <p>{{ myMsg }}</p>
        <p>{{ dynamicProps }}</p>
        <!-- 동적 Props :: 바인딩을 통해서 위에 들어온 데이터를 넘겨야 한다. -->
        <ParentGrandChild  
            :my-msg="myMsg"
            @update-name="upEmit"
        />
        <!-- JS에서 모든 코드 작성 끝내고 넘어오는게 편하다. -->
        <button @click="$emit('someEvent')">클릭</button>
        <button @click="buttonClick">클릭</button>
        <button @click="emitArgs">추가 인자 전달</button>
        
    </div>
</template>

<script setup>
import ParentGrandChild from '@/components/ParentGrandChild.vue';


// 1. 문자열 선언 방식
// defineProps(['myMsg'])

// 2. 객체 선언 방식
// defineProps({
//     myMsg : String,
//     dynamicProps : String
    
//     // 이 방식은 유효성 검사에 사용
//     // myMsg : {
//     //     type : String,
//     //     required : true,
//     // }
// })

// props 데이터를 script에서 사용하려면
// const props = defineProps({
//     myMsg : String,
//     dynamicProps : String
// })
// console.log(props.dynamicProps)

// 3. 다양한 객체 선언 방식

defineProps({
    myMsg: {
        type: String,
        required: true,
        // validator(value) {
        //     return ['success', 'warning', 'danger'].includes(value)
        // }
        validator(value) {
            const validValues = ['success', 'warning', 'danger']
            if (!validValues.includes(value)) {
                console.log('error')
                return false
            }
        }
    },
    dynamicProps : String,
})

// emit 선언 방식
const emit = defineEmits(['someEvent', 'emitArgs', 'upEmit'])

const buttonClick = function() {
    emit('someEvent')
}

const emitArgs = function() {
    emit('emitArgs', 1,2,3)
}

const upEmit = function() {
    emit('upEmit')
}

</script>

<style scoped>

</style>