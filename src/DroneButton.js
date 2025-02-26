import React from 'react';
import arrow from './img/arrow.webp'

function DroneButton({onButtonClick, text}) {
  return (
    <div className="button-container" onClick={onButtonClick} style={{cursor: 'pointer'}}>
      <div className='button-text'>{text}</div>
      <div className='button-icon'>
        <img className='button-img' alt="arrow" src={arrow}></img>
      </div>
    </div>
  );
}

export default DroneButton;
