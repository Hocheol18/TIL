const {createApp, ref, computed} = Vue
const app = createApp({
    setup() {
        
        // 사용자 입력을 받을 변수
        const inputText = ref('')
        
        // 새로운 할 일 목록
        const TextList = ref([])

        // 새로운 할 일을 추가하는 메서드
        const addTodo = () => {
            if (inputText.value !== '') {
                const temp = {
                    text : inputText.value,
                    done : false,
                }
                TextList.value.push(temp)
                
                inputText.value = ''
            }
        }

        const DeleteTodo = (index) => {
            TextList.value.splice(index, 1)
        }

        const deleteCompleteTodos = () => {
            // todo. completed가 true인 것만 삭제
            // == todo.completed가 false 인 것만 배열에 남기기
            TextList.value = TextList.value.filter((todo) => {
                return !todo.done
            })
            // TextList.value = TextList.value.filter((todo) => !todo.done)
        }

        // computed : 계산된 속성
        // 기존 변수를 수정하지 않고, 계산된 값만 가지고 새로운 변수를 만들고 싶을 때
        // computed 메서드 내에서 사용하는 변수가 변경이 생길 때마다 갱신
        const todoCount = computed(() => {
            return TextList.value.filter((todo) => todo.done).length > 0
        })

        return{
            inputText,
            TextList,
            addTodo,
            DeleteTodo,
            deleteCompleteTodos,
            todoCount
        }
    }
}).mount('#app')
