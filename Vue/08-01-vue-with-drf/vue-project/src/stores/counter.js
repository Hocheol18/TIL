import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const articles = ref([])
  const API_URL = 'http://127.0.0.1:8000'
  const token = ref(null)
  const isLogin = computed(() => {
    if(token.value === null) {
      return false
    } else {
      return true
    }
  })
  const router = useRouter()

  // DRF에 article 조회 요청을 보내는 action
  const getArticles = function() {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/articles`,
      headers: {
        Authorization: `Token ${token.value}`
      }
    }).then((res) => {
      articles.value = res.data
    }).catch((error) => {
      console.log(error)
    })
  }

  const signUp = function(payload) {
    axios({
      method : 'post',
      url: `${API_URL}/accounts/signup/`,
      data : {
        username: payload.username,
        password1: payload.password1,
        password2 : payload.password2
      }
    }).then((res) => {
      alert('회원 가입 성공')
      router.push({name : 'LogInView'})
    }).catch((err) => {
      console.log(err)
    })
  }

  const login = function (payload) {
    const {username, password} = payload
    axios({
      method : 'post',
      url: `${API_URL}/accounts/login/`,
      data : {
        username, password
      }
    }).then((res) => {
      token.value = res.data.key
      router.push({name : 'ArticleView'})
    }).catch((err) => {
      console.log(err)
    })
  }

  return { articles, API_URL, getArticles, signUp, login, token, isLogin }
}, { persist: true })
