const axios = require('axios');
const APIKEY = "8b9c2b35d1bc0d9e8879c4faa9dd8b75";


export default class Api  {
    constructor () {
       
        this.indexOfPage = 1;
    }
    
    setIndexOfPage (newValue) {
        this.indexOfPage = newValue;
        console.log(this.indexOfPage);
    }
    async searchAPIName (name) {
        this.setIndexOfPage(1);
        
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${name}&page=${this.indexOfPage}`);
            
            return response.data;
          } catch (error) {
            console.error('Упс, ошибочка вышла');
        }
        
    }
    async searchAPINameOnNextPage (name) {
        this.setIndexOfPage(this.indexOfPage + 1);
        
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${name}&page=${this.indexOfPage}`);
            
            return response.data;
          } catch (error) {
            console.error('Упс, ошибочка вышла');
        }
        
    }

    async searchAPITop () {
        this.setIndexOfPage(1);
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}&page=${this.indexOfPage}`);
            return response.data;
        } catch (error) {
            console.error('Упс, ошибочка вышла');
        }
    }
    async searchAPITopOnNextPage () {
        this.setIndexOfPage(this.indexOfPage + 1);
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}&page=${this.indexOfPage}`);
            return response.data;
        } catch (error) {
            console.error('Упс, ошибочка вышла');
        }
    }
   
    async searchAPIbyID (movieID) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${APIKEY}&language=en-US`);
            return response.data;
        } catch (error) {
            console.error('Упс, ошибочка вышла');
        }

    }


    async searchAPIVideos (movieID) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${APIKEY}&language=en-US`);
            
            return response.data.results;
        } catch (error) {
            console.log('Упс, ошибочка вышла');
            console.error(error);
        }
    }
    
};





