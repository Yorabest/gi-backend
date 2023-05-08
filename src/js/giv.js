const BASE_URL = 'http://localhost:3000/'   
   

function getMovies() {
        fetch(`${BASE_URL}movies`)
            .then(response => response.json())
        .then(response => console.log(response))
    }

    function getMoviebyId(movieId) {
          fetch(`${BASE_URL}movies/${movieId}`)
            .then(response => response.json())
        .then(response => console.log(response))
    }

    getMoviebyId(1)