import React, { useState } from 'react';
import s from './Select.module.sass';
import { useNavigate } from 'react-router-dom';

function Select({ mainText, options }) {

  const navigate = useNavigate()
  const navigateTo = () => {
    if(!options){
      navigate(`/optionitem/${mainText}`)
    }
  }


  return (
    <div className={s.container}>
      <div className={s.select} onClick={navigateTo}>
        <div className={s.text}>
          {mainText}
        </div>
        <img src="/icons/ArrowDown.png" alt="" />
      </div>

        <div className={s.options}>
        {options ? options.map((option, index) => (
            <p onClick={() => {navigate(`/optionItem/${option}`)}} key={index}>{option}</p>
        )): null}
      </div>
    
    </div>
  );
}

export default Select;
