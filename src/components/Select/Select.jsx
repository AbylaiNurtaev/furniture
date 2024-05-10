import React, { useState } from 'react';
import s from './Select.module.sass';

function Select({ mainText, options }) {

  return (
    <div className={s.container}>
      <div className={s.select}>
        <div className={s.text}>
          {mainText}
        </div>
        <img src="/icons/ArrowDown.png" alt="" />
      </div>

        <div className={s.options}>
        {options ? options.map((option, index) => (
            <p key={index}>{option}</p>
        )): null}
      </div>
    
    </div>
  );
}

export default Select;
