import React from 'react';
import '../assets/MovieStyles.css'

export default function MovieList(props) {
const {endpoint, onChangeHandler,submitHandler, container} = props;

  return (
    <div className='movie-app'>
      <form onSubmit={submitHandler} className='form-app'>
        <input 

            placeholder='Search for a Movie!'
            className='movie-search'
            value={endpoint}
            onChange={onChangeHandler}/>

        <button type="submit" className='movie-btn'>Search</button>
      </form>

      <div className='element'>
          {container.map(movies => {
        return (
          <div key={movies.id} className='movieCard'>
              <img src={movies.i.imageUrl}></img>
              <h2 className='h2text'>{movies.l}</h2>
          </div>
        )
      })}
    </div>
    </div>
  )
}
