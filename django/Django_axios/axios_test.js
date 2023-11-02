backendURL = "http://127.0.0.1:8000/api/v1/articles/"
const getData = function() {
    
    axios({
        method: 'GET',
        url: backendURL,
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

const PostData = function() {
    axios({
        method : 'POST',
        url : backendURL,
        data : {
            'title' : 'test',
            'content' : 'test'
        }})
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
}