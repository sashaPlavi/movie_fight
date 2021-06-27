 const fectData = async() =>{
const response =await axios.get('http://www.omdbapi.com/', {
    params:{
        apikey:'701cf1b9',
        s:'avengers'
    }
})
console.log(response.data);
 }

 fectData()