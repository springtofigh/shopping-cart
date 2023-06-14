import React from 'react';

// GIF
import spinner from '../../gif/Spinner.gif'

const Loader = () => {
  return (
    <div style={{widtht: "100%" , textAlign:"center"}}>
        <img src={spinner} alt='is loading'/>
        <h2>Loading...</h2>
    </div>
  )
}

export default Loader