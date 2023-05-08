const BASE_URL = 'http://localhost:3000/';

function updateById(update, movieId) {
const options = {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(update)
}

return fetch(`${BASE_URL}movies/${movieId}`, options)
    .then(response => response.json())
.then(res => console.log(res)) 
}