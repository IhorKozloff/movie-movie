export const API = {
    APIKEY: "8b9c2b35d1bc0d9e8879c4faa9dd8b75",

    searchAPIName (name) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b9c2b35d1bc0d9e8879c4faa9dd8b75&query=${name}`).then(response => response.json()).then(data => data.results) 
    },
    searchAPITop () {
       return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=8b9c2b35d1bc0d9e8879c4faa9dd8b75`).then(response => response.json()).then(data => data.results)
    },
    searchAPIbyID (movieID) {
       return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=8b9c2b35d1bc0d9e8879c4faa9dd8b75&language=en-US`).then(response => response.json()).then(data => data);
      
    },
};





