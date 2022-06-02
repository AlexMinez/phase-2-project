
import React , {useState, useEffect} from 'react'
import MovieList from '../components/MovieList';


export default function MovieAPI() {

    const [endpoint , setEndpoint] = useState('')
//endpoint is the value we use for our input and setendpoint we are using as an onchange for the input onchange
    const [container, setContainer] = useState([])
//using an empty array container to store our data in an array from fetching the data
    const [finalpoint , setFinalpoint] = useState('')
//using finalpoint to avoid re-rendering of the page every time we type in the input

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'b0e3fc5405mshb3dd21298f323d2p1ce587jsn0da8097e7281'
        }
    };

useEffect(() => {
    fetchMovies()
},[finalpoint])
//setting 2nd params to finalpoint in order to stop the page from re rendering every letter the input value has changed

const fetchMovies = () => {
        return fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endpoint}`, options)
        .then(response => response.json())
        .then(data => {
            setContainer(data.d)
            setEndpoint('')
        })
        .catch(err => console.error(err));
    }
//setting the setfinalpoint  = to endpoint so our input is only executed once the submit button has been pressed
const submitHandler = (e) => {
    e.preventDefault();
    setFinalpoint(endpoint)
}
//Changehandler targetting each letter we type in the input box 
const onChangeHandler = (e) => {
    setEndpoint(e.target.value)
}





  return (
    <div>
        <MovieList
        endpoint={endpoint} 
        setEndpoint={setEndpoint}
        fetchMovies={fetchMovies}
        onChangeHandler={onChangeHandler}
        submitHandler={submitHandler}
        // sending container as a prop so we can map over the array of information we have
        container={container}/>
    </div>
  )
}
